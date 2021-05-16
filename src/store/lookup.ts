import {Browser, Page, Response, Route} from 'playwright';
import {Link, Store, getStores} from './model';
import {Print, logger} from '../logger';
import {Selector, getPrice, pageIncludesLabels} from './includes-labels';
import {
  closePage,
  delay,
  getRandomUserAgent,
  getSleepTime,
  isStatusCodeInRange,
} from '../util';
import {enableBlockerInPage, disableBlockerInPage} from '../adblocker';
import {config} from '../config';
import {fetchLinks} from './fetch-links';
import {filterStoreLink} from './filter';
import open from 'open';
import {processBackoffDelay} from './model/helpers/backoff';
import {sendNotification, getCaptchaInputAsync} from '../messaging';

interface PlaywrightFulfillOptions {
  headers?: {[key: string]: string};
  status?: number;
  contentType?: string;
  body?: string | Buffer;
  path?: string;
}

const inStock: Record<string, boolean> = {};
const linkBuilderLastRunTimes: Record<string, number> = {};
const lowBandwidthMemo: {[key: string]: boolean} = {};

function nextProxy(store: Store) {
  if (!store.proxyList) {
    return;
  }

  if (store.currentProxyIndex === undefined) {
    store.currentProxyIndex = 0;
  } else {
    store.currentProxyIndex++;
  }

  if (store.currentProxyIndex >= store.proxyList.length) {
    store.currentProxyIndex = 0;
  }

  logger.debug(
    `ℹ [${store.name}] Next proxy index: ${store.currentProxyIndex} / Count: ${
      store.proxyList.length
    } (${store.proxyList[store.currentProxyIndex]})`
  );

  return store.proxyList[store.currentProxyIndex];
}

async function handleLowBandwidth(route: Route) {
  if (!config.browser.lowBandwidth) {
    return;
  }

  const blockedTypes = ['font', 'image', 'media'];
  const isBlocked = (resourceType: string): boolean => {
    if (!(resourceType in lowBandwidthMemo))
      lowBandwidthMemo[resourceType] = blockedTypes.some(t =>
        resourceType.match(t)
      );
    return lowBandwidthMemo[resourceType];
  };

  if (isBlocked(route.request().resourceType())) {
    return await route.abort();
  }
}

/**
 * Responsible for looking up information about a each product within
 * a `Store`. It's important that we ignore `no-await-in-loop` here
 * because we don't want to get rate limited within the same store.
 *
 * @param browser Playwright browser.
 * @param store Vendor of items.
 */
async function lookup(browser: Browser, store: Store) {
  if (!getStores().has(store.name)) {
    return;
  }

  if (store.linksBuilder) {
    const lastRunTime = linkBuilderLastRunTimes[store.name] ?? -1;
    const ttl = store.linksBuilder.ttl ?? Number.MAX_SAFE_INTEGER;
    if (lastRunTime === -1 || Date.now() - lastRunTime > ttl) {
      logger.info(`[${store.name}] Running linksBuilder...`);
      try {
        await fetchLinks(store, browser);
        linkBuilderLastRunTimes[store.name] = Date.now();
      } catch (error: unknown) {
        logger.error(error);
      }
    }
  }

  for (const link of store.links) {
    if (!filterStoreLink(link)) {
      continue;
    }

    if (config.page.inStockWaitTime && inStock[link.url]) {
      logger.info(Print.inStockWaiting(link, store, true));
      continue;
    }

    const proxy = nextProxy(store);
    const userAgent =
      config.browser.userAgent ||
      (config.browser.randomUserAgent ? await getRandomUserAgent() : undefined);
    const proxyOptions = proxy
      ? {
          server: proxy,
        }
      : undefined;
    const context = await browser.newContext({
      proxy: proxyOptions,
      userAgent: userAgent,
    });
    const page = await context.newPage();
    const useAdBlock = !store.disableAdBlocker;
    let adBlockRequestHandler: Function | undefined = undefined;

    page.setDefaultNavigationTimeout(config.page.timeout);

    const pageProxy = new Proxy(page, {
      get(target, prop: keyof Page) {
        switch (prop) {
          case 'route':
            return async (_: string, handler: Function) => {
              adBlockRequestHandler = handler;
              return;
            };
          default:
            return target[prop];
        }
      },
    });

    if (useAdBlock) await enableBlockerInPage(pageProxy);

    await page.route('**/*', async route => {
      let abortCalled = false;
      const fulfillOpts: Array<PlaywrightFulfillOptions> = [];
      const noop = async () => void 0;
      const routeProxy = new Proxy(route, {
        get(target, prop: keyof Route) {
          switch (prop) {
            case 'fulfill':
              return async (opts: PlaywrightFulfillOptions) => {
                fulfillOpts.push(opts);
                return;
              };
            case 'abort':
              abortCalled = true;
              return noop;
            case 'continue':
              return noop;
            default:
              return target[prop];
          }
        },
      });

      await handleLowBandwidth(routeProxy);
      if (adBlockRequestHandler) await adBlockRequestHandler(routeProxy);

      if (abortCalled) await route.abort();
      else if (fulfillOpts.length) await route.fulfill(fulfillOpts[0]);
      else await route.continue();
    });

    if (store.captchaDeterrent) {
      await runCaptchaDeterrent(browser, store, page);
    }

    let statusCode = 0;

    try {
      statusCode = await lookupIem(browser, store, page, link);
    } catch (error: unknown) {
      if (store.currentProxyIndex !== undefined && store.proxyList) {
        const proxy = `${store.currentProxyIndex + 1}/${
          store.proxyList.length
        }`;
        logger.error(
          `✖ [${proxy}] [${store.name}] ${link.brand} ${link.series} ${
            link.model
          } - ${(error as Error).message}`
        );
      } else {
        logger.error(
          `✖ [${store.name}] ${link.brand} ${link.series} ${link.model} - ${
            (error as Error).message
          }`
        );
      }

      await context.clearCookies();
    }

    if (useAdBlock) await disableBlockerInPage(page);

    // Must apply backoff before closing the page, e.g. if CloudFlare is
    // used to detect bot traffic, it introduces a 5 second page delay
    // before redirecting to the next page
    await processBackoffDelay(store, link, statusCode);
    await closePage(page);
    await context.close();
  }
}

async function lookupIem(
  browser: Browser,
  store: Store,
  page: Page,
  link: Link
): Promise<number> {
  const givenWaitFor = store.waitUntil ? store.waitUntil : 'networkidle';
  const response: Response | null = await page.goto(link.url, {
    waitUntil: givenWaitFor,
  });

  const successStatusCodes = store.successStatusCodes ?? [[0, 399]];
  const statusCode = await handleResponse(browser, store, page, link, response);

  if (!isStatusCodeInRange(statusCode, successStatusCodes)) {
    return statusCode;
  }

  if (await isItemInStock(store, page, link)) {
    const givenUrl =
      link.cartUrl && config.store.autoAddToCart ? link.cartUrl : link.url;
    logger.info(`${Print.inStock(link, store, true)}\n${givenUrl}`);

    if (config.browser.open) {
      await (link.openCartAction === undefined
        ? open(givenUrl)
        : link.openCartAction(browser));
    }

    sendNotification(link, store);

    if (config.page.inStockWaitTime) {
      inStock[link.url] = true;

      setTimeout(() => {
        inStock[link.url] = false;
      }, 1000 * config.page.inStockWaitTime);
    }

    if (config.page.screenshot) {
      logger.debug('ℹ saving screenshot');
      link.screenshot = `success-${Date.now()}.png`;
      await page.screenshot({path: link.screenshot, fullPage: false});
    }
  }

  return statusCode;
}

// eslint-disable-next-line max-params
async function handleResponse(
  browser: Browser,
  store: Store,
  page: Page,
  link: Link,
  response?: Response | null,
  recursionDepth = 0
) {
  if (!response) {
    logger.debug(Print.noResponse(link, store, true));
  }

  const successStatusCodes = store.successStatusCodes ?? [[0, 399]];
  let statusCode = response?.status() ?? 0;
  if (!isStatusCodeInRange(statusCode, successStatusCodes)) {
    if (statusCode === 429) {
      logger.warn(Print.rateLimit(link, store, true));
    } else if (statusCode === 503) {
      if (await checkIsCloudflare(store, page, link)) {
        if (recursionDepth > 4) {
          logger.warn(Print.recursionLimit(link, store, true));
        } else {
          const response: Response | null = await page.waitForNavigation({
            waitUntil: 'networkidle',
          });
          recursionDepth++;
          statusCode = await handleResponse(
            browser,
            store,
            page,
            link,
            response,
            recursionDepth
          );
        }
      } else {
        logger.warn(Print.badStatusCode(link, store, statusCode, true));
      }
    } else {
      logger.warn(Print.badStatusCode(link, store, statusCode, true));
    }
  }

  return statusCode;
}

async function checkIsCloudflare(store: Store, page: Page, link: Link) {
  const baseOptions: Selector = {
    requireVisible: true,
    selector: 'body',
    type: 'textContent',
  };

  const cloudflareLabel = {
    container: 'div[class="attribution"] a[rel="noopener noreferrer"]',
    text: ['Cloudflare'],
  };

  if (await pageIncludesLabels(page, cloudflareLabel, baseOptions)) {
    logger.warn(Print.cloudflare(link, store, true));
    return true;
  }

  return false;
}

async function isItemInStock(
  store: Store,
  page: Page,
  link: Link
): Promise<boolean> {
  const baseOptions: Selector = {
    requireVisible: false,
    selector: store.labels.container ?? 'body',
    type: 'textContent',
  };

  if (store.labels.captcha) {
    if (await pageIncludesLabels(page, store.labels.captcha, baseOptions)) {
      logger.warn(Print.captcha(link, store, true));
      if (config.captchaHandler.service && store.labels.captchaHandler) {
        if (!(await handleCaptchaAsync(page, store))) {
          logger.warn(`[${store.name}] captcha handler failed`);
          return false;
        } else {
          return await isItemInStock(store, page, link);
        }
      } else {
        await delay(getSleepTime(store));
        return false;
      }
    }
  }

  if (store.labels.bannedSeller) {
    if (
      await pageIncludesLabels(page, store.labels.bannedSeller, baseOptions)
    ) {
      logger.warn(Print.bannedSeller(link, store, true));
      return false;
    }
  }

  if (store.labels.outOfStock) {
    if (await pageIncludesLabels(page, store.labels.outOfStock, baseOptions)) {
      logger.info(Print.outOfStock(link, store, true));
      return false;
    }
  }

  if (link.labels?.inStock) {
    const options = {
      ...baseOptions,
      requireVisible: true,
      type: 'outerHTML' as const,
    };

    if (!(await pageIncludesLabels(page, link.labels.inStock, options))) {
      logger.info(Print.outOfStock(link, store, true));
      return false;
    }
  }

  if (store.labels.inStock) {
    const options = {
      ...baseOptions,
      requireVisible: true,
      type: 'outerHTML' as const,
    };

    if (!(await pageIncludesLabels(page, store.labels.inStock, options))) {
      logger.info(Print.outOfStock(link, store, true));
      return false;
    }
  }

  if (store.labels.maxPrice) {
    const maxPrice = config.store.maxPrice.series[link.series];

    link.price = await getPrice(page, store.labels.maxPrice, baseOptions);

    if (link.price && link.price > maxPrice && maxPrice > 0) {
      logger.info(Print.maxPrice(link, store, maxPrice, true));
      return false;
    }
  }

  return true;
}

async function runCaptchaDeterrent(browser: Browser, store: Store, page: Page) {
  const successStatusCodes = store.successStatusCodes ?? [[0, 399]];
  let statusCode = 0;
  let deterrentLinks: string[] = [];

  logger.debug(`[${store.name}] Navigating to random anti-captcha page...`);

  if (store.captchaDeterrent?.hardLinks?.length) {
    deterrentLinks = deterrentLinks.concat(store.captchaDeterrent.hardLinks);
  }

  if (store.captchaDeterrent?.searchUrl) {
    if (store.captchaDeterrent.searchTerms) {
      store.captchaDeterrent.searchTerms.forEach(element =>
        deterrentLinks.push(
          store.captchaDeterrent?.searchUrl
            ? store.captchaDeterrent.searchUrl.replace('%%s', element)
            : ''
        )
      );
    }
  }

  if (deterrentLinks.length > 0) {
    const link: Link = {
      brand: 'captcha-deterrent',
      model: 'captcha-deterrent',
      series: 'captcha-deterrent',
      url: deterrentLinks[Math.floor(Math.random() * deterrentLinks.length)],
    };
    logger.debug(`Selected captcha-deterrent link: ${link.url}`);

    try {
      const givenWaitFor = store.waitUntil ? store.waitUntil : 'networkidle';
      const response: Response | null = await page.goto(link.url, {
        waitUntil: givenWaitFor,
      });
      statusCode = await handleResponse(browser, store, page, link, response);
      setTimeout(() => {
        // Do nothing
      }, 3000);
    } catch (error: unknown) {
      logger.error(error);
    }

    if (!isStatusCodeInRange(statusCode, successStatusCodes)) {
      logger.warn(
        `✖ [${store.name}] - Failed to navigate to anti-captcha target: ${link.url}`
      );
    }
  }
}

async function handleCaptchaAsync(page: Page, store: Store) {
  // set up element queries
  const imageElementQuery = {
    requireVisible: true,
    selector: store.labels.captchaHandler?.image || 'img',
  };
  const inputElementQuery = {
    requireVisible: true,
    selector: store.labels.captchaHandler?.input || 'input',
  };
  const submitElementQuery = {
    requireVisible: true,
    selector: store.labels.captchaHandler?.submit || 'button[type="submit"]',
  };

  // get image src for captcha
  const imgElementSrc = await page.evaluate((selector: string) => {
    const element = document.querySelector<HTMLImageElement>(selector);
    return element?.src;
  }, imageElementQuery.selector);

  const response = await getCaptchaInputAsync(
    imgElementSrc ||
      `captcha detected on [${page.url()}] but unable to get captcha image url`
  );

  if (!response) return false;

  const result = await page.evaluate(
    ([inputSelector, submitSelector, response]) => {
      const inputElement = document.querySelector<HTMLInputElement>(
        inputSelector
      );
      if (!inputElement) return false;
      inputElement.value = response;

      const submitElement = document.querySelector<HTMLButtonElement>(
        submitSelector
      );
      if (!submitElement) return false;
      submitElement.click();

      return true;
    },
    [inputElementQuery.selector, submitElementQuery.selector, response]
  );

  if (result) await delay(3000);
  return result;
}

export async function tryLookupAndLoop(browser: Browser, store: Store) {
  if (!browser.isConnected()) {
    logger.debug(`[${store.name}] Ending this loop as browser is disposed...`);
    return;
  }

  logger.debug(`[${store.name}] Starting lookup...`);
  try {
    await lookup(browser, store);
  } catch (error: unknown) {
    logger.error(error);
  }

  const sleepTime = getSleepTime(store);
  logger.debug(`[${store.name}] Lookup done, next one in ${sleepTime} ms`);
  setTimeout(tryLookupAndLoop, sleepTime, browser, store);
}

import {Browser, Page, PageEventObj, Request, Response} from 'puppeteer';
import {Link, Store, getStores} from './model';
import {Print, logger} from '../logger';
import {Selector, getPrice, pageIncludesLabels} from './includes-labels';
import {
	closePage,
	delay,
	getRandomUserAgent,
	getSleepTime,
	isStatusCodeInRange
} from '../util';
import {disableBlockerInPage, enableBlockerInPage} from '../adblocker';
import {config} from '../config';
import {fetchLinks} from './fetch-links';
import {filterStoreLink} from './filter';
import open from 'open';
import {processBackoffDelay} from './model/helpers/backoff';
import {sendNotification} from '../notification';
import useProxy from 'puppeteer-page-proxy';

const inStock: Record<string, boolean> = {};

const linkBuilderLastRunTimes: Record<string, number> = {};

function nextProxy(store: Store) {
	if (!store.proxyList) {
		return;
	}

	if (store.currentProxyIndex === undefined) {
		store.currentProxyIndex = 0;
	}

	store.currentProxyIndex++;
	if (store.currentProxyIndex >= store.proxyList.length) {
		store.currentProxyIndex = 0;
	}

	logger.info(
		`ℹ [${store.name}] Next proxy index: ${store.currentProxyIndex} / Count: ${store.proxyList.length}`
	);

	return store.proxyList[store.currentProxyIndex];
}

async function handleLowBandwidth(request: Request) {
	if (!config.browser.lowBandwidth) {
		return false;
	}

	const typ = request.resourceType();
	if (typ === 'font' || typ === 'image') {
		try {
			await request.abort();
		} catch {}

		return true;
	}

	return false;
}

async function handleProxy(request: Request, proxy?: string) {
	if (!proxy) {
		return false;
	}

	try {
		await useProxy(request, proxy);
	} catch (error: unknown) {
		logger.error(error);
		try {
			await request.abort();
		} catch {}
	}

	return true;
}

async function handleAdBlock(request: Request, adBlockRequestHandler: any) {
	if (!adBlockRequestHandler) {
		return false;
	}

	return new Promise((resolve) => {
		const continueFunc = async () => {
			resolve(false);
		};

		const abortFunc = async () => {
			try {
				await request.abort();
			} catch {}

			resolve(true);
		};

		const requestProxy = new Proxy(request, {
			get(target, prop, receiver) {
				if (prop === 'continue') {
					return continueFunc;
				}

				if (prop === 'abort') {
					return abortFunc;
				}

				return Reflect.get(target, prop, receiver);
			}
		});
		adBlockRequestHandler(requestProxy);
	});
}

/**
 * Responsible for looking up information about a each product within
 * a `Store`. It's important that we ignore `no-await-in-loop` here
 * because we don't want to get rate limited within the same store.
 *
 * @param browser Puppeteer browser.
 * @param store Vendor of graphics cards.
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

	/* eslint-disable no-await-in-loop */
	for (const link of store.links) {
		if (!filterStoreLink(link)) {
			continue;
		}

		if (config.page.inStockWaitTime && inStock[link.url]) {
			logger.info(Print.inStockWaiting(link, store, true));
			continue;
		}

		const proxy = nextProxy(store);

		const useAdBlock =
			!config.browser.lowBandwidth && !store.disableAdBlocker;
		const customContext = config.browser.isIncognito;

		const context = customContext
			? await browser.createIncognitoBrowserContext()
			: browser.defaultBrowserContext();
		const page = await context.newPage();
		await page.setRequestInterception(true);

		page.setDefaultNavigationTimeout(config.page.timeout);
		await page.setUserAgent(await getRandomUserAgent());

		let adBlockRequestHandler: any;
		let pageProxy;
		if (useAdBlock) {
			const onProxyFunc = (event: keyof PageEventObj, handler: any) => {
				if (event !== 'request') {
					page.on(event, handler);
					return;
				}

				adBlockRequestHandler = handler;
			};

			pageProxy = new Proxy(page, {
				get(target, prop, receiver) {
					if (prop === 'on') {
						return onProxyFunc;
					}

					return Reflect.get(target, prop, receiver);
				}
			});
			await enableBlockerInPage(pageProxy);
		}

		await page.setRequestInterception(true);
		page.on('request', async (request) => {
			if (await handleLowBandwidth(request)) {
				return;
			}

			if (await handleAdBlock(request, adBlockRequestHandler)) {
				return;
			}

			if (await handleProxy(request, proxy)) {
				return;
			}

			try {
				await request.continue();
			} catch {}
		});

		let statusCode = 0;

		try {
			statusCode = await lookupCard(browser, store, page, link);
		} catch (error: unknown) {
			logger.error(
				`✖ [${store.name}] ${link.brand} ${link.series} ${
					link.model
				} - ${(error as Error).message}`
			);
			const client = await page.target().createCDPSession();
			await client.send('Network.clearBrowserCookies');
			// Await client.send('Network.clearBrowserCache');
		}

		if (pageProxy) {
			await disableBlockerInPage(pageProxy);
		}

		// Must apply backoff before closing the page, e.g. if CloudFlare is
		// used to detect bot traffic, it introduces a 5 second page delay
		// before redirecting to the next page
		await processBackoffDelay(store, link, statusCode);
		await closePage(page);
		if (customContext) {
			await context.close();
		}
	}
	/* eslint-enable no-await-in-loop */
}

async function lookupCard(
	browser: Browser,
	store: Store,
	page: Page,
	link: Link
): Promise<number> {
	const givenWaitFor = store.waitUntil ? store.waitUntil : 'networkidle0';
	const response: Response | null = await page.goto(link.url, {
		waitUntil: givenWaitFor
	});

	if (!response) {
		logger.debug(Print.noResponse(link, store, true));
	}

	const successStatusCodes = store.successStatusCodes ?? [[0, 399]];
	const statusCode = response?.status() ?? 0;
	if (!isStatusCodeInRange(statusCode, successStatusCodes)) {
		if (statusCode === 429) {
			logger.warn(Print.rateLimit(link, store, true));
		} else {
			logger.warn(Print.badStatusCode(link, store, statusCode, true));
		}

		return statusCode;
	}

	if (await lookupCardInStock(store, page, link)) {
		const givenUrl =
			link.cartUrl && config.store.autoAddToCart
				? link.cartUrl
				: link.url;
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
			await page.screenshot({path: link.screenshot});
		}
	}

	return statusCode;
}

async function lookupCardInStock(store: Store, page: Page, link: Link) {
	const baseOptions: Selector = {
		requireVisible: false,
		selector: store.labels.container ?? 'body',
		type: 'textContent'
	};

	if (store.labels.captcha) {
		if (await pageIncludesLabels(page, store.labels.captcha, baseOptions)) {
			logger.warn(Print.captcha(link, store, true));
			await delay(getSleepTime(store));
			return false;
		}
	}

	if (store.labels.bannedSeller) {
		if (
			await pageIncludesLabels(
				page,
				store.labels.bannedSeller,
				baseOptions
			)
		) {
			logger.warn(Print.bannedSeller(link, store, true));
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

	// Fixme: currently causing issues
	// Do API inventory validation in realtime (no cache) if available
	// if (
	// 	store.realTimeInventoryLookup !== undefined &&
	// 	link.itemNumber !== undefined
	// ) {
	// 	return store.realTimeInventoryLookup(link.itemNumber);
	// }

	if (store.labels.outOfStock) {
		if (
			await pageIncludesLabels(page, store.labels.outOfStock, baseOptions)
		) {
			logger.info(Print.outOfStock(link, store, true));
			return false;
		}
	}

	if (store.labels.inStock) {
		const options = {
			...baseOptions,
			requireVisible: true,
			type: 'outerHTML' as const
		};

		if (!(await pageIncludesLabels(page, store.labels.inStock, options))) {
			logger.info(Print.outOfStock(link, store, true));
			return false;
		}
	}

	if (link.labels?.inStock) {
		const options = {
			...baseOptions,
			requireVisible: true,
			type: 'outerHTML' as const
		};

		if (!(await pageIncludesLabels(page, link.labels.inStock, options))) {
			logger.info(Print.outOfStock(link, store, true));
			return false;
		}
	}

	return true;
}

export async function tryLookupAndLoop(browser: Browser, store: Store) {
	if (!browser.isConnected()) {
		logger.debug(
			`[${store.name}] Ending this loop as browser is disposed...`
		);
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

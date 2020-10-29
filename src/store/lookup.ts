import {Browser, Page, Response} from 'puppeteer';
import {Link, Store} from './model';
import {Print, logger} from '../logger';
import {Selector, cardPrice, pageIncludesLabels} from './includes-labels';
import {closePage, delay, getRandomUserAgent, getSleepTime, isStatusCodeInRange} from '../util';
import {config} from '../config';
import {disableBlockerInPage} from '../adblocker';
import {fetchLinks} from './fetch-links';
import {filterStoreLink} from './filter';
import open from 'open';
import {processBackoffDelay} from './model/helpers/backoff';
import {sendNotification} from '../notification';

const inStock: Record<string, boolean> = {};

const linkBuilderLastRunTimes: Record<string, number> = {};

/**
 * Responsible for looking up information about a each product within
 * a `Store`. It's important that we ignore `no-await-in-loop` here
 * because we don't want to get rate limited within the same store.
 *
 * @param browser Puppeteer browser.
 * @param store Vendor of graphics cards.
 */
async function lookup(browser: Browser, store: Store) {
	if (config.store.stores.length > 0 && !config.store.stores.find(foundStore => foundStore.name === store.name)) {
		return;
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

		const context = (config.browser.isIncognito ? await browser.createIncognitoBrowserContext() : browser.defaultBrowserContext());
		const page = (config.browser.isIncognito ? await context.newPage() : await browser.newPage());
		page.setDefaultNavigationTimeout(config.page.timeout);
		await page.setUserAgent(getRandomUserAgent());

		if (store.disableAdBlocker) {
			try {
				await disableBlockerInPage(page);
			} catch (error) {
				logger.error(error);
			}
		}

		let statusCode = 0;

		try {
			statusCode = await lookupCard(browser, store, page, link);
		} catch (error) {
			logger.error(`✖ [${store.name}] ${link.brand} ${link.series} ${link.model} - ${error.message as string}`);
			const client = await page.target().createCDPSession();
			await client.send('Network.clearBrowserCookies');
			await client.send('Network.clearBrowserCache');
		}

		// Must apply backoff before closing the page, e.g. if CloudFlare is
		// used to detect bot traffic, it introduces a 5 second page delay
		// before redirecting to the next page
		await processBackoffDelay(store, link, statusCode);
		await closePage(page);
		if (config.browser.isIncognito) {
			await context.close();
		}
	}
	/* eslint-enable no-await-in-loop */
}

async function lookupCard(browser: Browser, store: Store, page: Page, link: Link): Promise<number> {
	const givenWaitFor = store.waitUntil ? store.waitUntil : 'networkidle0';
	const response: Response | null = await page.goto(link.url, {waitUntil: givenWaitFor});

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
		const givenUrl = link.cartUrl ? link.cartUrl : link.url;
		logger.info(`${Print.inStock(link, store, true)}\n${givenUrl}`);

		if (config.browser.open) {
			if (link.openCartAction === undefined) {
				await open(givenUrl);
			} else {
				await link.openCartAction(browser);
			}
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

	if (store.labels.inStock) {
		const options = {...baseOptions, requireVisible: true, type: 'outerHTML' as const};

		if (!await pageIncludesLabels(page, store.labels.inStock, options)) {
			logger.info(Print.outOfStock(link, store, true));
			return false;
		}
	}

	if (store.labels.outOfStock) {
		if (await pageIncludesLabels(page, store.labels.outOfStock, baseOptions)) {
			logger.info(Print.outOfStock(link, store, true));
			return false;
		}
	}

	if (store.labels.bannedSeller) {
		if (await pageIncludesLabels(page, store.labels.bannedSeller, baseOptions)) {
			logger.warn(Print.bannedSeller(link, store, true));
			return false;
		}
	}

	if (store.labels.maxPrice) {
		let price;
		let maxPrice = 0;
		switch (link.series) {
			case '3070':
				price = await cardPrice(page, store.labels.maxPrice, config.store.maxPrice.series['3070'], baseOptions);
				maxPrice = config.store.maxPrice.series['3070'];
				break;
			case '3080':
				price = await cardPrice(page, store.labels.maxPrice, config.store.maxPrice.series['3080'], baseOptions);
				maxPrice = config.store.maxPrice.series['3080'];
				break;
			case '3090':
				price = await cardPrice(page, store.labels.maxPrice, config.store.maxPrice.series['3090'], baseOptions);
				maxPrice = config.store.maxPrice.series['3090'];
				break;
			default:
				break;
		}

		if (price) {
			logger.info(Print.maxPrice(link, store,	price, maxPrice, true));
			return false;
		}
	}

	if (store.labels.captcha) {
		if (await pageIncludesLabels(page, store.labels.captcha, baseOptions)) {
			logger.warn(Print.captcha(link, store, true));
			await delay(getSleepTime(store));
			return false;
		}
	}

	return true;
}

export async function tryLookupAndLoop(browser: Browser, store: Store) {
	if (!browser.isConnected()) {
		logger.debug(`[${store.name}] Ending this loop as browser is disposed...`);
		return;
	}

	if (store.linksBuilder) {
		const lastRunTime = linkBuilderLastRunTimes[store.name] ?? -1;
		const ttl = store.linksBuilder.ttl ?? Number.MAX_SAFE_INTEGER;
		if (lastRunTime === -1 || (Date.now() - lastRunTime) > ttl) {
			try {
				await fetchLinks(store, browser);
				linkBuilderLastRunTimes[store.name] = Date.now();
			} catch (error) {
				logger.error(error.message);
			}
		}
	}

	logger.debug(`[${store.name}] Starting lookup...`);
	try {
		await lookup(browser, store);
	} catch (error) {
		logger.error(error);
	}

	const sleepTime = getSleepTime(store);
	logger.debug(`[${store.name}] Lookup done, next one in ${sleepTime} ms`);
	setTimeout(tryLookupAndLoop, sleepTime, browser, store);
}

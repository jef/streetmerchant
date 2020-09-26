import {Browser, Page, Response} from 'puppeteer';
import {Link, Store} from './model';
import {Logger, Print} from '../logger';
import {Selector, pageIncludesLabels} from './includes-labels';
import {closePage, delay, getSleepTime} from '../util';
import {Config} from '../config';
import {disableBlockerInPage} from '../adblocker';
import {filterStoreLink} from './filter';
import open from 'open';
import {sendNotification} from '../notification';

type Backoff = {
	count: number;
	time: number;
};

const inStock: Record<string, boolean> = {};

const storeBackoff: Record<string, Backoff> = {};

/**
 * Responsible for looking up information about a each product within
 * a `Store`. It's important that we ignore `no-await-in-loop` here
 * because we don't want to get rate limited within the same store.
 *
 * @param browser Puppeteer browser.
 * @param store Vendor of graphics cards.
 */
async function lookup(browser: Browser, store: Store) {
	/* eslint-disable no-await-in-loop */
	for (const link of store.links) {
		if (!filterStoreLink(link)) {
			continue;
		}

		if (Config.page.inStockWaitTime && inStock[link.url]) {
			Logger.info(Print.inStockWaiting(link, store, true));
			continue;
		}

		const page = await browser.newPage();
		page.setDefaultNavigationTimeout(Config.page.navigationTimeout);
		await page.setUserAgent(Config.page.userAgent);

		if (store.disableAdBlocker) {
			try {
				await disableBlockerInPage(page);
			} catch (error) {
				Logger.error(error);
			}
		}

		try {
			await lookupCard(browser, store, page, link);
		} catch (error) {
			Logger.error(`✖ [${store.name}] ${link.brand} ${link.model} - ${error.message as string}`);
		}

		await closePage(page);
	}
	/* eslint-enable no-await-in-loop */
}

async function lookupCard(browser: Browser, store: Store, page: Page, link: Link) {
	const givenWaitFor = store.waitUntil ? store.waitUntil : 'networkidle0';
	const response: Response | null = await page.goto(link.url, {waitUntil: givenWaitFor});

	if (!response) {
		Logger.debug(Print.noResponse(link, store, true));
	}

	let backoff = storeBackoff[store.name];

	if (!backoff) {
		backoff = {count: 0, time: Config.browser.minBackoff};
		storeBackoff[store.name] = backoff;
	}

	if (response?.status() === 403) {
		Logger.warn(Print.backoff(link, store, backoff.time, true));
		await delay(backoff.time);
		backoff.count++;
		backoff.time = Math.min(backoff.time * 2, Config.browser.maxBackoff);
		return;
	}

	if (response?.status() === 429) {
		Logger.warn(Print.rateLimit(link, store, true));
		return;
	}

	if ((response?.status() || 200) >= 400) {
		Logger.warn(Print.badStatusCode(link, store, response!.status(), true));
		return;
	}

	if (backoff.count > 0) {
		backoff.count--;
		backoff.time = Math.max(backoff.time / 2, Config.browser.minBackoff);
	}

	if (await lookupCardInStock(store, page, link)) {
		const givenUrl = link.cartUrl ? link.cartUrl : link.url;
		Logger.info(`${Print.inStock(link, store, true)}\n${givenUrl}`);

		if (Config.browser.open) {
			if (link.openCartAction === undefined) {
				await open(givenUrl);
			} else {
				await link.openCartAction(browser);
			}
		}

		sendNotification(link, store);

		if (Config.page.inStockWaitTime) {
			inStock[link.url] = true;

			setTimeout(() => {
				inStock[link.url] = false;
			}, 1000 * Config.page.inStockWaitTime);
		}

		if (Config.page.screenshot) {
			Logger.debug('ℹ saving screenshot');

			link.screenshot = `success-${Date.now()}.png`;
			await page.screenshot({path: link.screenshot});
		}
	}
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
			Logger.info(Print.outOfStock(link, store, true));
			return false;
		}
	}

	if (store.labels.outOfStock) {
		if (await pageIncludesLabels(page, store.labels.outOfStock, baseOptions)) {
			Logger.info(Print.outOfStock(link, store, true));
			return false;
		}
	}

	if (store.labels.bannedSeller) {
		if (await pageIncludesLabels(page, store.labels.bannedSeller, baseOptions)) {
			Logger.warn(Print.bannedSeller(link, store, true));
			return false;
		}
	}

	if (store.labels.captcha) {
		if (await pageIncludesLabels(page, store.labels.captcha, baseOptions)) {
			Logger.warn(Print.captcha(link, store, true));
			await delay(getSleepTime());
			return false;
		}
	}

	return true;
}

export async function tryLookupAndLoop(browser: Browser, store: Store) {
	Logger.debug(`[${store.name}] Starting lookup...`);
	try {
		await lookup(browser, store);
	} catch (error) {
		Logger.error(error);
	}

	const sleepTime = getSleepTime();
	Logger.debug(`[${store.name}] Lookup done, next one in ${sleepTime} ms`);
	setTimeout(tryLookupAndLoop, sleepTime, browser, store);
}

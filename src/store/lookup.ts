import {Browser, Page, Response} from 'puppeteer';
import {Link, Store} from './model';
import {Logger, Print} from '../logger';
import {closePage, delay, getSleepTime} from '../util';
import {Config} from '../config';
import {filterStoreLink} from './filter';
import {includesLabels} from './includes-labels';
import open from 'open';
import {sendNotification} from '../notification';

const inStock: Record<string, boolean> = {};

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

		const page = await browser.newPage();
		page.setDefaultNavigationTimeout(Config.page.navigationTimeout);
		await page.setUserAgent(Config.page.userAgent);

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

	if (await lookupCardInStock(store, page)) {
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
			inStock[store.name] = true;

			setTimeout(() => {
				inStock[store.name] = false;
			}, 1000 * Config.page.inStockWaitTime);
		}

		if (Config.page.screenshot) {
			Logger.debug('ℹ saving screenshot');

			link.screenshot = `success-${Date.now()}.png`;
			await page.screenshot({path: link.screenshot});
		}

		return;
	}

	if (await lookupPageHasCaptcha(store, page)) {
		Logger.warn(Print.captcha(link, store, true));
		await delay(getSleepTime());
		return;
	}

	if (response && response.status() === 429) {
		Logger.warn(Print.rateLimit(link, store, true));
		return;
	}

	Logger.info(Print.outOfStock(link, store, true));
}

async function lookupCardInStock(store: Store, page: Page) {
	const stockHandle = await page.$(store.labels.inStock.container);

	const visible = await page.evaluate(element => element && element.offsetWidth > 0 && element.offsetHeight > 0, stockHandle);
	if (!visible) {
		return false;
	}

	const stockContent = await page.evaluate(element => element.outerHTML, stockHandle);

	Logger.debug(stockContent);

	return includesLabels(stockContent, store.labels.inStock.text);
}

async function lookupPageHasCaptcha(store: Store, page: Page) {
	if (!store.labels.captcha) {
		return false;
	}

	const captchaHandle = await page.$(store.labels.captcha.container);
	const captchaContent = await page.evaluate(element => element.textContent, captchaHandle);

	return includesLabels(captchaContent, store.labels.captcha.text);
}

export async function tryLookupAndLoop(browser: Browser, store: Store) {
	Logger.debug(`[${store.name}] Starting lookup...`);
	try {
		if (Config.page.inStockWaitTime && inStock[store.name]) {
			Logger.info(`[${store.name}] Has stock, waiting before trying to lookup again...`);
		} else {
			await lookup(browser, store);
		}
	} catch (error) {
		Logger.error(error);
	}

	const sleepTime = getSleepTime();
	Logger.debug(`[${store.name}] Lookup done, next one in ${sleepTime} ms`);
	setTimeout(tryLookupAndLoop, sleepTime, browser, store);
}

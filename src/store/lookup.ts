import {Browser, Response} from 'puppeteer';
import {Config} from '../config';
import {Logger} from '../logger';
import open from 'open';
import {Store} from './model';
import {sendNotification} from '../notification';
import {includesLabels} from './includes-labels';
import {closePage, delay, getSleepTime} from '../util';

const inStock: Record<string, boolean> = {};

/**
 * Returns true if the brand should be checked for stock
 *
 * @param brand The brand of the GPU
 */
function filterBrand(brand: string) {
	if (Config.store.showOnlyBrands.length === 0) {
		return true;
	}

	return Config.store.showOnlyBrands.includes(brand);
}

/**
 * Returns true if the series should be checked for stock
 *
 * @param series The series of the GPU
 */
function filterSeries(series: string) {
	if (Config.store.showOnlySeries.length === 0) {
		return true;
	}

	return Config.store.showOnlySeries.includes(series);
}

/**
 * Responsible for looking up information about a each product within
 * a `Store`. It's important that we ignore `no-await-in-loop` here
 * because we don't want to get rate limited within the same store.
 * @param browser Puppeteer browser.
 * @param store Vendor of graphics cards.
 */
async function lookup(browser: Browser, store: Store) {
	/* eslint-disable no-await-in-loop */
	for (const link of store.links) {
		if (!filterSeries(link.series)) {
			continue;
		}

		if (!filterBrand(link.brand)) {
			continue;
		}

		const page = await browser.newPage();
		page.setDefaultNavigationTimeout(Config.page.navigationTimeout);
		await page.setUserAgent(Config.page.userAgent);

		const graphicsCard = `${link.brand} ${link.model} ${link.series}`;

		let response: Response | null;
		try {
			response = await page.goto(link.url, {waitUntil: 'networkidle0'});
		} catch {
			Logger.error(`✖ [${store.name}] ${graphicsCard} skipping; timed out`);
			await closePage(page);
			continue;
		}

		const bodyHandle = await page.$('body');
		const textContent = await page.evaluate(body => body.textContent, bodyHandle);

		Logger.debug(textContent);

		if (includesLabels(textContent, store.labels.outOfStock)) {
			Logger.info(`✖ [${store.name}] still out of stock: ${graphicsCard}`);
		} else if (store.labels.bannedSeller && includesLabels(textContent, store.labels.bannedSeller)) {
			Logger.warn(`✖ [${store.name}] banned seller detected: ${graphicsCard}. skipping...`);
		} else if (store.labels.captcha && includesLabels(textContent, store.labels.captcha)) {
			Logger.warn(`✖ [${store.name}] CAPTCHA from: ${graphicsCard}. Waiting for a bit with this store...`);
			await delay(getSleepTime());
		} else if (response && response.status() === 429) {
			Logger.warn(`✖ [${store.name}] Rate limit exceeded: ${graphicsCard}`);
		} else {
			Logger.info(`🚀🚀🚀 [${store.name}] ${graphicsCard} IN STOCK 🚀🚀🚀`);
			Logger.info(link.url);
			if (Config.page.inStockWaitTime) {
				inStock[store.name] = true;
				setTimeout(() => {
					inStock[store.name] = false;
				}, 1000 * Config.page.inStockWaitTime);
			}

			if (Config.page.capture) {
				Logger.debug('ℹ saving screenshot');
				link.screenshot = `success-${Date.now()}.png`;
				await page.screenshot({path: link.screenshot});
			}

			const givenUrl = link.cartUrl ? link.cartUrl : link.url;

			if (Config.browser.open) {
				if (link.openCartAction === undefined) {
					await open(givenUrl);
				} else {
					link.openCartAction(browser);
				}
			}

			sendNotification(givenUrl, link);
		}

		await closePage(page);
	}
	/* eslint-enable no-await-in-loop */
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

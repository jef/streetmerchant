import {Browser, Response} from 'puppeteer';
import {Config} from '../config';
import {Logger} from '../logger';
import open from 'open';
import {Store} from './model';
import {sendNotification} from '../notification';
import {includesLabels} from './includes-labels';
import {closePage, delay, getSleepTime} from '../util';

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

		const graphicsCard = `${link.brand} ${link.model}`;

		let response: Response | null;
		try {
			response = await page.goto(link.url, {waitUntil: 'networkidle0'});
		} catch {
			Logger.error(`✖ [${store.name}] ${graphicsCard} skipping; timed out`);
			await closePage(page);
			continue;
		}

		const stockHandle = await page.$(store.labels.inStock.container);
		const visible = await page.evaluate(element => element.offsetWidth > 0 && element.offsetHeight > 0, stockHandle);
		if (visible) {
			const stockContent = await page.evaluate(element => element.textContent, stockHandle);

			if (includesLabels(stockContent, store.labels.inStock.labels)) {
				Logger.info(`🚀🚀🚀 [${store.name}] ${graphicsCard} IN STOCK 🚀🚀🚀`);
				Logger.info(link.url);

				if (Config.page.capture) {
					Logger.debug('ℹ saving screenshot');
					await page.screenshot({path: `success-${Date.now()}.png`});
				}

				const givenUrl = link.cartUrl ? link.cartUrl : link.url;

				if (Config.browser.open) {
					await open(givenUrl);
				}

				sendNotification(givenUrl, link);

				await page.close();
				continue;
			}
		}

		if (store.labels.captcha) {
			const captchaHandle = await page.$(store.labels.captcha.container);
			const captchaContent = await page.evaluate(element => element.textContent, captchaHandle);

			if (includesLabels(captchaContent, store.labels.captcha.labels)) {
				Logger.warn(`✖ [${store.name}] CAPTCHA from: ${graphicsCard}. Waiting for a bit with this store...`);
				await delay(getSleepTime());
				await page.close();
				continue;
			}
		}

		if (response && response.status() === 429) {
			Logger.warn(`✖ [${store.name}] Rate limit exceeded: ${graphicsCard}`);
		} else {
			Logger.info(`✖ [${store.name}] still out of stock: ${graphicsCard}`);
		}

		await closePage(page);
	}
	/* eslint-enable no-await-in-loop */
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

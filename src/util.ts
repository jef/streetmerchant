import {Browser, Page, Response} from 'puppeteer';
import {StatusCodeRangeArray} from './store/model';
import {config} from './config';
import {disableBlockerInPage} from './adblocker';
import {logger} from './logger';

export function getSleepTime() {
	return config.browser.minSleep + (Math.random() * (config.browser.maxSleep - config.browser.minSleep));
}

export async function delay(ms: number) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}

export function isStatusCodeInRange(statusCode: number, range: StatusCodeRangeArray) {
	for (const value of range) {
		let min: number;
		let max: number;
		if (typeof value === 'number') {
			min = value;
			max = value;
		} else {
			[min, max] = value;
		}

		if (min <= statusCode && statusCode <= max) {
			return true;
		}
	}

	return false;
}

export async function usingResponse<T>(
	browser: Browser,
	url: string,
	cb: (response: (Response | null), page: Page, browser: Browser) => Promise<T>
): Promise<T> {
	return usingPage(browser, async (page, browser) => {
		const response = await page.goto(url, {waitUntil: 'domcontentloaded'});

		return cb(response, page, browser);
	});
}

export async function usingPage<T>(browser: Browser, cb: (page: Page, browser: Browser) => Promise<T>): Promise<T> {
	const page = await browser.newPage();
	page.setDefaultNavigationTimeout(config.page.timeout);
	await page.setUserAgent(config.page.userAgent);

	try {
		return await cb(page, browser);
	} finally {
		try {
			await closePage(page);
		} catch (error) {
			logger.error(error);
		}
	}
}

export async function closePage(page: Page) {
	if (!config.browser.lowBandwidth) {
		await disableBlockerInPage(page);
	}

	await page.close();
}

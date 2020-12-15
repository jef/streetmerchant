import {Browser, Page, Response} from 'puppeteer';
import {StatusCodeRangeArray, Store} from './store/model';
import {config} from './config';
import {disableBlockerInPage} from './adblocker';
import {getRandom} from 'random-useragent';
import {logger} from './logger';

export function getSleepTime(store: Store) {
	const minSleep = store.minPageSleep as number;
	return (
		minSleep + Math.random() * ((store.maxPageSleep as number) - minSleep)
	);
}

export async function delay(ms: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

export function isStatusCodeInRange(
	statusCode: number,
	range: StatusCodeRangeArray
) {
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
	cb: (response: Response | null, page: Page, browser: Browser) => Promise<T>
): Promise<T> {
	return usingPage(browser, async (page, browser) => {
		const response = await page.goto(url, {waitUntil: 'domcontentloaded'});

		return cb(response, page, browser);
	});
}

export async function usingPage<T>(
	browser: Browser,
	cb: (page: Page, browser: Browser) => Promise<T>
): Promise<T> {
	const page = await browser.newPage();
	page.setDefaultNavigationTimeout(config.page.timeout);
	await page.setUserAgent(await getRandomUserAgent());

	try {
		return await cb(page, browser);
	} finally {
		try {
			await closePage(page);
		} catch (error: unknown) {
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

export async function getRandomUserAgent(): Promise<string> {
	const deprecatedUserAgent = (process.env.USER_AGENT
		? process.env.USER_AGENT.includes('\n')
			? process.env.USER_AGENT.split('\n')
			: process.env.USER_AGENT.split(',')
		: []
	).map((s) => s.trim());

	if (deprecatedUserAgent.length > 0) {
		return deprecatedUserAgent[
			Math.floor(Math.random() * deprecatedUserAgent.length)
		];
	}

	const userAgent =
		getRandom((ua) => {
			return ua.browserName === 'Chrome' && ua.browserVersion > '20';
		}) ?? config.browser.userAgent;

	logger.debug('user agent', userAgent);

	return userAgent;
}

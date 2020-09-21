import {Page} from 'puppeteer';
import {Config} from './config';
import {disableBlockerInPage} from './adblocker';

export function getSleepTime() {
	return Config.browser.minSleep + (Math.random() * (Config.browser.maxSleep - Config.browser.minSleep));
}

export async function delay(ms: number) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}

export async function closePage(page: Page) {
	await disableBlockerInPage(page);
	await page.close();
}

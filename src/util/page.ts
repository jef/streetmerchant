import {Page} from 'puppeteer';
import {PuppeteerExtraPluginAdblocker} from 'puppeteer-extra-plugin-adblocker';
import {Config} from '../config';

export const adBlocker = new PuppeteerExtraPluginAdblocker({
	blockTrackers: true
});

export async function disableBlockerInPage(page: Page) {
	const blockerObject = await adBlocker.getBlocker();
	await blockerObject.disableBlockingInPage(page);
}

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

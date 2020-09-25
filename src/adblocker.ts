import {Page} from 'puppeteer';
import {PuppeteerExtraPluginAdblocker} from 'puppeteer-extra-plugin-adblocker';

export const adBlocker = new PuppeteerExtraPluginAdblocker({
	blockTrackers: true
});

export async function disableBlockerInPage(page: Page) {
	const blockerObject = await adBlocker.getBlocker();
	if (blockerObject.isBlockingEnabled(page)) {
		await blockerObject.disableBlockingInPage(page);
	}
}

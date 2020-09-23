import {Config} from './config';
import {Logger} from './logger';
import {Stores} from './store/model';
import {adBlocker} from './adblocker';
import {getSleepTime} from './util';
import puppeteer from 'puppeteer-extra';
import stealthPlugin from 'puppeteer-extra-plugin-stealth';
import {tryLookupAndLoop} from './store';

puppeteer.use(stealthPlugin());
puppeteer.use(adBlocker);

/**
 * Starts the bot.
 */
async function main() {
	const browser = await puppeteer.launch({
		defaultViewport: {
			height: Config.page.height,
			width: Config.page.width
		},
		headless: Config.browser.isHeadless
	});

	for (const store of Stores) {
		Logger.debug(store.links);
		if (store.setupAction !== undefined) {
			store.setupAction(browser);
		}

		setTimeout(tryLookupAndLoop, getSleepTime(), browser, store);
	}
}

/**
 * Will continually run until user interferes.
 */
try {
	void main();
} catch (error) {
	// Ignoring errors; more than likely due to rate limits
	Logger.error(error);
	void main();
}

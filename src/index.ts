import puppeteer from 'puppeteer-extra';
import stealthPlugin from 'puppeteer-extra-plugin-stealth';
import adblockerPlugin from 'puppeteer-extra-plugin-adblocker';
import {Config} from './config';
import {Stores} from './store/model';
import {Logger} from './logger';
import {getSleepTime, tryLookupAndLoop} from './store';

puppeteer.use(stealthPlugin());
puppeteer.use(adblockerPlugin({blockTrackers: true}));

/**
 * Starts the bot.
 */
async function main() {
	const browser = await puppeteer.launch({
		headless: Config.browser.isHeadless,
		defaultViewport: {
			height: Config.page.height,
			width: Config.page.width
		}
	});

	for (const store of Stores) {
		Logger.debug(store.links);
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

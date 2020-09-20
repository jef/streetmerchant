import puppeteer from 'puppeteer-extra';
import stealthPlugin from 'puppeteer-extra-plugin-stealth';
import adblockerPlugin from 'puppeteer-extra-plugin-adblocker';
import {Config} from './config';
import {Store, Stores} from './store/model';
import {Logger} from './logger';
import {lookup} from './store';
import {Browser} from 'puppeteer';

puppeteer.use(stealthPlugin());
puppeteer.use(adblockerPlugin({blockTrackers: true}));

function getSleepTime() {
	return Config.browser.minSleep + (Math.random() * (Config.browser.maxSleep - Config.browser.minSleep));
}

async function tryLookupAndLoop(browser: Browser, store: Store) {
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

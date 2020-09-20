import puppeteer from 'puppeteer-extra';
import stealthPlugin from 'puppeteer-extra-plugin-stealth';
import adblockerPlugin from 'puppeteer-extra-plugin-adblocker';
import {Config} from './config';
import {Store, Stores} from './store/model';
import {Logger} from './logger';
import {sendNotification} from './notification';
import {lookup} from './store';
import async from 'async';

puppeteer.use(stealthPlugin());
puppeteer.use(adblockerPlugin({blockTrackers: true}));

/**
 * Starts the bot.
 */
async function main() {
	const browser = await puppeteer.launch({
		headless: Config.isHeadless,
		defaultViewport: {
			height: Config.page.height,
			width: Config.page.width
		}
	});

	const q = async.queue<Store>(async (store: Store, cb) => {
		setTimeout(async () => {
			try {
				Logger.debug(`↗ Scraping Initialized - ${store.name}`);
				await lookup(browser, store);
			} catch (error) {
				// Ignoring errors; more than likely due to rate limits
				Logger.error(error);
			} finally {
				cb();
				q.push(store);
			}
		}, Config.rateLimitTimeout);
	}, Stores.length);

	for (const store of Stores) {
		Logger.debug(store.links);
		q.push(store);
	}

	await q.drain();

	await browser.close();
}

/**
 * Send test email.
 */
if (Config.notifications.test) {
	sendNotification('test');
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

import puppeteer from 'puppeteer';
import {Config} from './config';
import {Stores} from './store/model';
import {Logger} from './logger';
import {sendNotification} from './notification';
import {lookup} from './store';

/**
 * Starts the bot.
 */
async function main() {
	const results = [];

	const browser = await puppeteer.launch({
		headless: Config.isHeadless,
		defaultViewport: {
			height: Config.page.height,
			width: Config.page.width
		}
	});

	for (const store of Stores) {
		Logger.debug(store.links);
		results.push(lookup(browser, store));
	}

	await Promise.all(results);
	await browser.close();

	Logger.info('↗ trying stores again');
	setTimeout(main, Config.rateLimitTimeout);
}

/**
 * Send test email.
 */
if (Config.notifications.test === 'true') {
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

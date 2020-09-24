import {Config} from './config';
import {Logger} from './logger';
import {Stores} from './store/model';
import {adBlocker} from './adblocker';
import {fetchLinks} from './store/fetch-links';
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
	if (Stores.length === 0) {
		Logger.error('✖ no stores selected', Stores);
		return;
	}

	const args: string[] = [];

	// Skip Chromium Linux Sandbox
	// https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#setting-up-chrome-linux-sandbox
	if (Config.browser.isTrusted) {
		args.push('--no-sandbox');
		args.push('--disable-setuid-sandbox');
	}

	const browser = await puppeteer.launch({
		args,
		defaultViewport: {
			height: Config.page.height,
			width: Config.page.width
		},
		headless: Config.browser.isHeadless
	});

	/* eslint-disable no-await-in-loop */
	for (const store of Stores) {
		Logger.debug(store.links);
		if (store.setupAction !== undefined) {
			store.setupAction(browser);
		}

		if (store.linksBuilder) {
			await fetchLinks(store, browser);
		}

		setTimeout(tryLookupAndLoop, getSleepTime(), browser, store);
	}
	/* eslint-enable no-await-in-loop */
}

/**
 * Will continually run until user interferes.
 */
try {
	void main();
} catch (error) {
	Logger.error('✖ something bad happened, resetting nvidia-snatcher', error);
	void main();
}

import {Config} from './config';
import {Logger} from './logger';
import {Stores} from './store/model';
import {adBlocker} from './adblocker';
import {fetchLinks} from './store/fetch-links';
import {getSleepTime} from './util';
import puppeteer from 'puppeteer-extra';
import resourceBlock from 'puppeteer-extra-plugin-block-resources';
import stealthPlugin from 'puppeteer-extra-plugin-stealth';
import {tryLookupAndLoop} from './store';

puppeteer.use(stealthPlugin());
if (Config.browser.lowBandwidth) {
	puppeteer.use(resourceBlock({
		blockedTypes: new Set(['image', 'font'])
	}));
} else {
	puppeteer.use(adBlocker);
}

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

	// Add the address of the proxy server if defined
	if (Config.proxy.address) {
		args.push(`--proxy-server=http://${Config.proxy.address}:${Config.proxy.port}`);
	}

	const browser = await puppeteer.launch({
		args,
		defaultViewport: {
			height: Config.page.height,
			width: Config.page.width
		},
		headless: Config.browser.isHeadless
	});

	const promises = [];
	for (const store of Stores) {
		Logger.debug(store.links);
		if (store.setupAction !== undefined) {
			store.setupAction(browser);
		}

		if (store.linksBuilder) {
			promises.push(fetchLinks(store, browser));
		}

		setTimeout(tryLookupAndLoop, getSleepTime(), browser, store);
	}

	await Promise.all(promises);
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

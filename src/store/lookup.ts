import puppeteer from 'puppeteer';
import {Config} from '../config';
import {Logger} from '../logger';
import open from 'open';
import {Store} from './model';
import {sendNotification} from '../notification';
import {isOutOfStock} from './out-of-stock';

/**
 * Responsible for looking up information about a each product within
 * a `Store`. It's important that we ignore `no-await-in-loop` here
 * because we don't want to get rate limited within the same store.
 *
 * @param store Vendor of graphics cards.
 */
export async function lookup(store: Store) {
/* eslint-disable no-await-in-loop */
	for (const link of store.links) {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		page.setDefaultNavigationTimeout(Config.page.navigationTimeout);
		await page.setUserAgent(Config.page.userAgent);
		await page.setViewport({
			height: Config.page.height,
			width: Config.page.width
		});

		const graphicsCard = `${link.brand} ${link.model}`;

		try {
			await page.goto(link.url, {waitUntil: 'networkidle0'});
		} catch {
			Logger.error(`✖ [${store.name}] ${graphicsCard} skipping; timed out`);
			await browser.close();
			return;
		}

		const bodyHandle = await page.$('body');
		const textContent = await page.evaluate(body => body.textContent, bodyHandle);

		Logger.debug(textContent);

		if (isOutOfStock(textContent, link.oosLabels)) {
			Logger.info(`✖ [${store.name}] ${graphicsCard} is still out of stock`);
		} else {
			Logger.info(`🚀🚀🚀 [${store.name}] ${graphicsCard} IN STOCK 🚀🚀🚀`);
			Logger.info(link.url);

			if (Config.page.capture === 'true') {
				Logger.debug('ℹ saving screenshot');
				await page.screenshot({path: `success-${Date.now()}.png`});
			}

			const givenUrl = store.cartUrl ? store.cartUrl : link.url;

			if (Config.openBrowser === 'true') {
				await open(givenUrl);
			}

			sendNotification(givenUrl);
		}

		await browser.close();
	}
/* eslint-enable no-await-in-loop */
}

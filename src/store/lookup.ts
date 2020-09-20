import puppeteer from 'puppeteer';
import {Config} from '../config';
import {Logger} from '../logger';
import open from 'open';
import {Store} from './model';
import {sendNotification} from '../notification';
import {includesLabels} from './includes-labels';

/**
 * Returns true if the brand should be checked for stock
 *
 * @param brand The brand of the GPU
 */
function filterBrand(brand: string) {
	if (Config.showOnlyBrands.length === 0) {
		return true;
	}

	return Config.showOnlyBrands.includes(brand);
}

/**
 * Responsible for looking up information about a each product within
 * a `Store`. It's important that we ignore `no-await-in-loop` here
 * because we don't want to get rate limited within the same store.
 *
 * @param browser Current browser in use.
 * @param store Vendor of graphics cards.
 */
export async function lookup(browser: puppeteer.Browser, store: Store) {
	/* eslint-disable no-await-in-loop */
	for (const link of store.links) {
		if (!filterBrand(link.brand)) {
			continue;
		}

		const page = await browser.newPage();
		page.setDefaultNavigationTimeout(Config.page.navigationTimeout);
		await page.setUserAgent(Config.page.userAgent);
		await page.setViewport({
			height: Config.page.height,
			width: Config.page.width
		});

		const graphicsCard = `${link.brand} ${link.model}`;

		let response: puppeteer.Response | null;
		try {
			response = await page.goto(link.url, {waitUntil: 'networkidle0'});
		} catch {
			Logger.error(`✖ [${store.name}] ${graphicsCard} skipping; timed out`);
			await page.close();
			continue;
		}

		const bodyHandle = await page.$('body');
		const textContent = await page.evaluate(body => body.textContent, bodyHandle);

		Logger.debug(textContent);

		if (includesLabels(textContent, store.labels.oosList)) {
			Logger.info(`✖ [${store.name}] still out of stock: ${graphicsCard}`);
		} else if (store.labels.captchaList && includesLabels(textContent, store.labels.captchaList)) {
			Logger.warn(`✖ [${store.name}] CAPTCHA from: ${graphicsCard}`);
		} else if (response && response.status() === 429) {
			Logger.warn(`✖ [${store.name}] Rate limit exceeded: ${graphicsCard}`);
		} else {
			Logger.info(`🚀🚀🚀 [${store.name}] ${graphicsCard} IN STOCK 🚀🚀🚀`);
			Logger.info(link.url);

			const givenUrl = link.url;

			if (Config.openBrowser === 'true') {
				await open(link.url);
			}

			sendNotification(link.url);

			if (store.elements && store.elements.addToCart) {
				
				const navigationPromise = page.waitForNavigation();

				await page.waitForSelector(store.elements.addToCart, {visible: true});

				const element = await page.$(store.elements.addToCart);
				if (element) {
					element.click();
					Logger.info(`✖ [${store.name}] 'addToCart' element clicked`);
				}

				await navigationPromise;
			}

			if (store.cartUrl) {
				await page.goto(store.cartUrl);
			}

			if (Config.page.capture === 'true') {
				Logger.debug('ℹ saving screenshot');
				await page.screenshot({path: `success-${Date.now()}.png`});
			}
		}

		await page.close();
	}
	/* eslint-enable no-await-in-loop */
}

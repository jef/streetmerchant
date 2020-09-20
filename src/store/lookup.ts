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

		try {
			await page.goto(link.url, {waitUntil: 'networkidle0'});
		} catch {
			Logger.error(`✖ [${store.name}] ${graphicsCard} skipping; timed out`);
			await page.close();
			continue;
		}

		const bodyHandle = await page.$('body');
		const textContent = await page.evaluate(body => body.textContent, bodyHandle);

		Logger.debug(textContent);

		let inStock = false;

		if (includesLabels(textContent, link.oosLabels)) {
			Logger.info(`✖ [${store.name}] still out of stock: ${graphicsCard}`);
		} else if (link.captchaLabels && includesLabels(textContent, link.captchaLabels)) {
			Logger.warn(`✖ [${store.name}] CAPTCHA from: ${graphicsCard}`);
		} else if (link.elemSelector) {
			try {
				await page.waitFor(250);
				await page.waitForSelector(link.elemSelector, {timeout: 3000});
				const element = await page.$(link.elemSelector);
				if (element !== null) {
					inStock = true;
				}
			} catch (error) {
				Logger.warn(`✖ [${store.name}] 'add to cart' element not found`);
			}
		} else {
			inStock = true;
		}

		if (inStock) {
			Logger.info(`🚀🚀🚀 [${store.name}] ${graphicsCard} IN STOCK 🚀🚀🚀`);
			Logger.info(link.url);

			if (Config.page.capture === 'true') {
				Logger.debug('ℹ saving screenshot');
				await page.screenshot({path: `success-${Date.now()}.png`});
			}

			const givenUrl = link.cartUrl ? link.cartUrl : link.url;

			if (Config.openBrowser === 'true') {
				await open(givenUrl);
			}

			sendNotification(givenUrl);
		}

		await page.close();
	}
	/* eslint-enable no-await-in-loop */
}

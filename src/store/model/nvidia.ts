import {Store} from './store';
import {Browser, Response} from 'puppeteer';
import {timestampUrlParameter} from '../timestamp-url-parameter';
import {Logger} from '../../logger';
import {Config} from '../../config';
import open from 'open';

const fe2060SuperId = 5379432500;
let locale: string
let fe3080Id
switch (Config.location) {
	case 'GB':
		locale = 'en_gb';
		fe3080Id = 5438792800;
		Logger.info('checking nvidia gb')
		break;
		
	default:
		locale = 'en_us';
		fe3080Id = 5438481700;
		Logger.info('checking nvidia us')
		break;
}

const nvidiaApiKey = '9485fa7b159e42edb08a83bde0d83dia';

function digitalRiverStockUrl(id: number, locale: string): string {
	return `https://api.digitalriver.com/v1/shoppers/me/products/${id}/inventory-status?` +
		`&apiKey=${nvidiaApiKey}&locale=${locale}` +
		timestampUrlParameter();
}

interface NvidiaSessionTokenJSON {
	access_token: string;
}

function nvidiaSessionUrl(locale: string): string {
	return `https://store.nvidia.com/store/nvidia/SessionToken?format=json&locale=${locale}` +
		`&apiKey=${nvidiaApiKey}` +
		timestampUrlParameter();
}

function addToCartUrl(id: number, token: string): string {
	return 'https://api.digitalriver.com/v1/shoppers/me/carts/active/line-items?format=json&method=post' +
		`&productId=${id}` +
		`&token=${token}` +
		'&quantity=1' +
		timestampUrlParameter();
}

function checkoutUrl(token: string): string {
	return `https://api.digitalriver.com/v1/shoppers/me/carts/active/web-checkout?token=${token}`;
}

function fallbackCartUrl(): string {
	return `https://www.nvidia.com/en-us/shop/geforce?${timestampUrlParameter()}`;
}

function generateCartAction(id: number, cardName: string) {
	return async (browser: Browser) => {
		const page = await browser.newPage();
		Logger.info(`🚀🚀🚀 [nvidia] ${cardName}, starting auto add to cart... 🚀🚀🚀`);
		let response: Response | null;
		try {
			Logger.info(`🚀🚀🚀 [nvidia] ${cardName}, getting access token... 🚀🚀🚀`);
			response = await page.goto(nvidiaSessionUrl(locale), {waitUntil: 'networkidle0'});
			if (response === null) {
				throw new Error('NvidiaAccessTokenUnavailable');
			}

			const data = await response.json() as NvidiaSessionTokenJSON;
			const accessToken = data.access_token;

			Logger.info(`🚀🚀🚀 [nvidia] ${cardName}, adding to cart... 🚀🚀🚀`);
			response = await page.goto(addToCartUrl(id, accessToken), {waitUntil: 'networkidle0'});

			Logger.info(`🚀🚀🚀 [nvidia] ${cardName}, opening checkout page... 🚀🚀🚀`);
			Logger.info(checkoutUrl(accessToken));
			await open(checkoutUrl(accessToken));
		} catch {
			Logger.error(`✖ [nvidia] ${cardName} could not automatically add to cart, opening page`);
			await open(fallbackCartUrl());
		}

		await page.close();
	};
}

export const Nvidia: Store = {
	links: [
		{
			series: 'debug',
			brand: 'TEST',
			model: 'CARD',
			url: digitalRiverStockUrl(fe2060SuperId, locale),
			openCartAction: generateCartAction(fe2060SuperId, 'TEST CARD')
		},
		{
			series: '3080',
			brand: 'nvidia',
			model: 'founders edition',
			url: digitalRiverStockUrl(fe3080Id, locale),
			openCartAction: generateCartAction(fe3080Id, 'nvidia founders edition 3080')
		}
	],
	labels: {
		outOfStock: ['product_inventory_out_of_stock', 'rate limit exceeded', 'request timeout']
	},
	name: 'nvidia'
};

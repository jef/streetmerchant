import {Store} from './store';
import {Browser, Response} from 'puppeteer';
import {timestampUrlParam} from "../timestamp-url-param";
import {Logger} from "../../logger";
import open from 'open';

const fe2060SuperId = 5379432500;
const fe3080Id = 5438481700;
const locale = 'en_us';

const nvidiaApiKey = '9485fa7b159e42edb08a83bde0d83dia';

function digitalRiverStockUrl(id: number): string {
	return `https://api.digitalriver.com/v1/shoppers/me/products/${id}/inventory-status?` +
		`&apiKey=${nvidiaApiKey}` +
		timestampUrlParam();
}

interface NvidiaSessionTokenJSON {
	access_token: string;
}

function nvidiaSessionUrl(): string {
	return `https://store.nvidia.com/store/nvidia/SessionToken?format=json&locale=${locale}` +
		`&apiKey=${nvidiaApiKey}` +
		timestampUrlParam();
}

function addToCartUrl(id: number, token: string): string {
	return 'https://api.digitalriver.com/v1/shoppers/me/carts/active/line-items?format=json&method=post' +
		`&productId=${id}` +
		`&token=${token}` +
		'&quantity=1' +
		timestampUrlParam();
}

function checkoutUrl(token: string): string {
	return `https://api.digitalriver.com/v1/shoppers/me/carts/active/web-checkout?token=${token}`;
}

function fallback3080CartUrl(): string {
	return 'https://www.nvidia.com/en-us/shop/geforce/?page=1&limit=9&locale=en-us&gpu=RTX%203080&manufacturer=NVIDIA&manufacturer_filter=NVIDIA~1,ACER~0,ALIENWARE~0,ASUS~1,DELL~0,EVGA~2,GIGABYTE~2,HP~0,LENOVO~0,LG~0,MSI~1,PNY~0,RAZER~0,ZOTAC~0' +
		timestampUrlParam();
}

export const Nvidia: Store = {
	links: [
		{
			series: 'debug',
			brand: 'TEST',
			model: 'CARD',
			url: digitalRiverStockUrl(fe2060SuperId),
			cartUrl: 'https://www.nvidia.com/en-us/shop/geforce'
		},
		{
			series: '3080',
			brand: 'nvidia',
			model: 'founders edition 3080',
			url: digitalRiverStockUrl(fe3080Id),
			openCartAction: async (browser: Browser) => {
				const page = await browser.newPage();
				Logger.info('🚀🚀🚀 [nvidia] nvidia founders edition 3080, starting auto add to cart... 🚀🚀🚀');
				let response: Response | null;
				try {
					Logger.info('🚀🚀🚀 [nvidia] nvidia founders edition 3080, getting access token... 🚀🚀🚀');
					response = await page.goto(nvidiaSessionUrl(), {waitUntil: 'networkidle0'});
					if (response === null) { throw 'NvidiaAccessTokenUnavailable'; }

					let data = <NvidiaSessionTokenJSON>await response.json();
					let accessToken = data.access_token;

					Logger.info('🚀🚀🚀 [nvidia] nvidia founders edition 3080, adding to cart... 🚀🚀🚀');
					response = await page.goto(addToCartUrl(fe3080Id, accessToken), {waitUntil: 'networkidle0'});

					Logger.info('🚀🚀🚀 [nvidia] nvidia founders edition 3080, opening checkout page... 🚀🚀🚀');
					Logger.info(checkoutUrl(accessToken));
					await open(checkoutUrl(accessToken));
				} catch (e) {
					Logger.error(e);
					Logger.error(`✖ [nvidia] nvidia founders edition 3080 could not automatically add to cart, opening page`);
					await open(fallback3080CartUrl());
				}
				await page.close();
			}
		}
	],
	labels: {
		oosList: ['product_inventory_out_of_stock', 'rate limit exceeded']
	},
	name: 'nvidia'
};

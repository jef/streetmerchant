import {timestampUrlParameter} from '../../timestamp-url-parameter';
import {Browser, Response} from 'puppeteer';
import {Logger} from '../../../logger';
import open from 'open';
import {Link} from '../store';
import {Config} from '../../../config';
import {NvidiaRegionInfo, regionInfos} from '../nvidia';

const nvidiaApiKey = '9485fa7b159e42edb08a83bde0d83dia';

function getRegionInfo(): NvidiaRegionInfo {
	const country = Array.from(regionInfos.keys()).includes(Config.store.country) ? Config.store.country : 'usa';

	const defaultRegionInfo: NvidiaRegionInfo = {drLocale: 'en_us', nvidiaLocale: 'en_us', fe3080Id: 5438481700, fe3090Id: null, fe2060SuperId: 5379432500};
	return regionInfos.get(country) ?? defaultRegionInfo;
}

function digitalRiverStockUrl(id: number, drLocale: string): string {
	return `https://api.digitalriver.com/v1/shoppers/me/products/${id}/inventory-status?` +
		`&apiKey=${nvidiaApiKey}` +
		`&locale=${drLocale}` +
		timestampUrlParameter();
}

interface NvidiaSessionTokenJSON {
	access_token: string;
}

function nvidiaSessionUrl(nvidiaLocale: string): string {
	return `https://store.nvidia.com/store/nvidia/SessionToken?format=json&locale=${nvidiaLocale}` +
		`&apiKey=${nvidiaApiKey}` +
		timestampUrlParameter();
}

function addToCartUrl(id: number, drLocale: string, token: string): string {
	return 'https://api.digitalriver.com/v1/shoppers/me/carts/active/line-items?format=json&method=post' +
		`&productId=${id}` +
		`&token=${token}` +
		'&quantity=1' +
		`&locale=${drLocale}` +
		timestampUrlParameter();
}

function checkoutUrl(drLocale: string, token: string): string {
	return `https://api.digitalriver.com/v1/shoppers/me/carts/active/web-checkout?token=${token}&locale=${drLocale}`;
}

function fallbackCartUrl(nvidiaLocale: string): string {
	return `https://www.nvidia.com/${nvidiaLocale}/shop/geforce?${timestampUrlParameter()}`;
}

export function generateSetupAction() {
	return async (browser: Browser) => {
		const {drLocale, nvidiaLocale} = getRegionInfo();

		const page = await browser.newPage();

		Logger.info('[nvidia] creating cart/session token...');
		let response: Response | null;
		try {
			response = await page.goto(nvidiaSessionUrl(nvidiaLocale), {waitUntil: 'networkidle0'});
			if (response === null) {
				throw new Error('NvidiaAccessTokenUnavailable');
			}

			const data = await response.json() as NvidiaSessionTokenJSON;
			const accessToken = data.access_token;

			Logger.info('[nvidia] you can log into your cart now...');
			Logger.info(checkoutUrl(drLocale, accessToken));
			await open(checkoutUrl(drLocale, accessToken));
		} catch (error) {
			Logger.debug(error);
			Logger.error('✖ [nvidia] cannot generate cart/session token, continuing without, auto-"add to cart" may not work...');
		}

		await page.close();
	};
}

export function generateOpenCartAction(id: number, nvidiaLocale: string, drLocale: string, cardName: string) {
	return async (browser: Browser) => {
		const page = await browser.newPage();
		Logger.info(`🚀🚀🚀 [nvidia] ${cardName}, starting auto add to cart... 🚀🚀🚀`);
		let response: Response | null;
		try {
			Logger.info(`🚀🚀🚀 [nvidia] ${cardName}, getting access token... 🚀🚀🚀`);
			response = await page.goto(nvidiaSessionUrl(nvidiaLocale), {waitUntil: 'networkidle0'});
			if (response === null) {
				throw new Error('NvidiaAccessTokenUnavailable');
			}

			const data = await response.json() as NvidiaSessionTokenJSON;
			const accessToken = data.access_token;

			Logger.info(`🚀🚀🚀 [nvidia] ${cardName}, adding to cart... 🚀🚀🚀`);
			response = await page.goto(addToCartUrl(id, drLocale, accessToken), {waitUntil: 'networkidle0'});

			Logger.info(`🚀🚀🚀 [nvidia] ${cardName}, opening checkout page... 🚀🚀🚀`);
			Logger.info(checkoutUrl(drLocale, accessToken));
			await open(checkoutUrl(drLocale, accessToken));
		} catch (error) {
			Logger.debug(error);
			Logger.error(`✖ [nvidia] ${cardName} could not automatically add to cart, opening page`);
			await open(fallbackCartUrl(nvidiaLocale));
		}

		await page.close();
	};
}

export function generateLinks(): Link[] {
	const {drLocale, nvidiaLocale, fe3080Id, fe3090Id, fe2060SuperId} = getRegionInfo();

	const links: Link[] = [];

	if (fe2060SuperId) {
		links.push({
			series: 'debug',
			brand: 'TEST',
			model: 'CARD',
			url: digitalRiverStockUrl(fe2060SuperId, drLocale),
			openCartAction: generateOpenCartAction(fe2060SuperId, nvidiaLocale, drLocale, 'TEST CARD debug')
		});
	}

	if (fe3080Id) {
		links.push({
			series: '3080',
			brand: 'nvidia',
			model: 'founders edition',
			url: digitalRiverStockUrl(fe3080Id, drLocale),
			openCartAction: generateOpenCartAction(fe3080Id, nvidiaLocale, drLocale, 'nvidia founders edition 3080')
		});
	}

	if (fe3090Id) {
		links.push({
			series: '3090',
			brand: 'nvidia',
			model: 'founders edition',
			url: digitalRiverStockUrl(fe3090Id, drLocale),
			openCartAction: generateOpenCartAction(fe3090Id, nvidiaLocale, drLocale, 'nvidia founders edition 3090')
		});
	}

	return links;
}

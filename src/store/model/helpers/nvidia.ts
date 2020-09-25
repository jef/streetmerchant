import {Browser, Page, Response} from 'puppeteer';
import {NvidiaRegionInfo, regionInfos} from '../nvidia-api';
import {Config} from '../../../config';
import {Link} from '../store';
import {Logger} from '../../../logger';
import open from 'open';
import {timestampUrlParameter} from '../../timestamp-url-parameter';

function getRegionInfo(): NvidiaRegionInfo {
	const country = Array.from(regionInfos.keys()).includes(Config.store.country) ? Config.store.country : 'usa';

	const defaultRegionInfo: NvidiaRegionInfo = {currency: 'USD', drLocale: 'en_us', fe2060SuperId: 5379432500, fe3080Id: 5438481700, fe3090Id: null, nvidiaLocale: 'en_us'};
	return regionInfos.get(country) ?? defaultRegionInfo;
}

function nvidiaStockUrl(id: number, drLocale: string, currency: string): string {
	return `https://api-prod.nvidia.com/direct-sales-shop/DR/products/${drLocale}/${currency}/${id}?` +
		timestampUrlParameter().slice(1);
}

interface NvidiaSessionTokenJSON {
	session_token: string;
}

interface NvidiaAddToCardJSON {
	location: string;
}

function nvidiaSessionUrl(nvidiaLocale: string): string {
	return `https://store.nvidia.com/store/nvidia/SessionToken?format=json&locale=${nvidiaLocale}` +
		timestampUrlParameter();
}

async function addToCartAndGetLocationRedirect(page: Page, sessionToken: string, productId: number): Promise<string> {
	const url = 'https://api-prod.nvidia.com/direct-sales-shop/DR/add-to-cart';

	page.removeAllListeners('request');

	await page.setRequestInterception(true);

	page.on('request', interceptedRequest => {
		void interceptedRequest.continue({
			headers: {
				...interceptedRequest.headers(),
				'content-type': 'application/json',
				nvidia_shop_id: sessionToken
			},
			method: 'POST',
			postData: JSON.stringify({
				products: [
					{productId, quantity: 1}
				]
			})
		});
	});

	const response = await page.goto(url, {waitUntil: 'networkidle0'});
	if (response === null) {
		throw new Error('NvidiaAddToCartUnavailable');
	}

	const locationData = await response.json() as NvidiaAddToCardJSON;

	return locationData.location;
}

function fallbackCartUrl(nvidiaLocale: string): string {
	return `https://www.nvidia.com/${nvidiaLocale}/shop/geforce?${timestampUrlParameter()}`;
}

export function generateOpenCartAction(id: number, nvidiaLocale: string, drLocale: string, cardName: string) {
	return async (browser: Browser) => {
		const page = await browser.newPage();

		Logger.info(`🚀🚀🚀 [nvidia] ${cardName}, starting auto add to cart 🚀🚀🚀`);

		let response: Response | null;
		let cartUrl: string;
		try {
			Logger.info(`🚀🚀🚀 [nvidia] ${cardName}, getting access token 🚀🚀🚀`);

			response = await page.goto(nvidiaSessionUrl(nvidiaLocale), {waitUntil: 'networkidle0'});
			if (response === null) {
				throw new Error('NvidiaAccessTokenUnavailable');
			}

			const data = await response.json() as NvidiaSessionTokenJSON;
			const sessionToken = data.session_token;

			Logger.info(`🚀🚀🚀 [nvidia] ${cardName}, adding to cart 🚀🚀🚀`);

			cartUrl = await addToCartAndGetLocationRedirect(page, sessionToken, id);

			Logger.info(`🚀🚀🚀 [nvidia] ${cardName}, opening checkout page 🚀🚀🚀`);
			Logger.info(cartUrl);

			await open(cartUrl);
		} catch (error) {
			Logger.debug(error);
			Logger.error(`✖ [nvidia] ${cardName} could not automatically add to cart, opening page`, error);

			cartUrl = fallbackCartUrl(nvidiaLocale);
			await open(cartUrl);
		}

		await page.close();

		return cartUrl;
	};
}

export function generateLinks(): Link[] {
	const {drLocale, nvidiaLocale, fe3080Id, fe3090Id, fe2060SuperId, currency} = getRegionInfo();

	const links: Link[] = [];

	if (fe2060SuperId) {
		links.push({
			brand: 'test:brand',
			model: 'test:model',
			openCartAction: generateOpenCartAction(fe2060SuperId, nvidiaLocale, drLocale, 'TEST CARD debug'),
			series: 'test:series',
			url: nvidiaStockUrl(fe2060SuperId, drLocale, currency)
		});
	}

	if (fe3080Id) {
		links.push({
			brand: 'nvidia',
			model: 'founders edition',
			openCartAction: generateOpenCartAction(fe3080Id, nvidiaLocale, drLocale, 'nvidia founders edition 3080'),
			series: '3080',
			url: nvidiaStockUrl(fe3080Id, drLocale, currency)
		});
	}

	if (fe3090Id) {
		links.push({
			brand: 'nvidia',
			model: 'founders edition',
			openCartAction: generateOpenCartAction(fe3090Id, nvidiaLocale, drLocale, 'nvidia founders edition 3090'),
			series: '3090',
			url: nvidiaStockUrl(fe3090Id, drLocale, currency)
		});
	}

	return links;
}

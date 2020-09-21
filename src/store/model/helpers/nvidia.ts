import {timestampUrlParameter} from "../../timestamp-url-parameter";
import {Browser, Response} from "puppeteer";
import {Logger} from "../../../logger";
import open from "open";

const nvidiaApiKey = '9485fa7b159e42edb08a83bde0d83dia';

export function digitalRiverStockUrl(id: number, locale: string): string {
	return `https://api.digitalriver.com/v1/shoppers/me/products/${id}/inventory-status?` +
		`&apiKey=${nvidiaApiKey}` +
		`&locale=${locale}` +
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

function fallbackCartUrl(locale: string): string {
	return `https://www.nvidia.com/${locale}/shop/geforce?${timestampUrlParameter()}`;
}

export function generateOpenCartAction(id: number, locale: string, cardName: string) {
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
		} catch(error) {
			Logger.debug(error);
			Logger.error(`✖ [nvidia] ${cardName} could not automatically add to cart, opening page`);
			await open(fallbackCartUrl(locale));
		}

		await page.close();
	};
}

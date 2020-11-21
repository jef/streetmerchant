import {NvidiaRegionInfo, regionInfos} from '../nvidia-api';
import {usingPage, usingResponse} from '../../../util';
import {Browser} from 'puppeteer';
import {config} from '../../../config';
import {logger} from '../../../logger';
import open from 'open';

interface NvidiaSessionTokenJSON {
	session_token: string;
}

interface NvidiaAddToCardJSON {
	location: string;
}

export class NvidiaCart {
	protected readonly browser: Browser;
	protected isKeepAlive = false;
	protected sessionToken: string | null = null;

	public constructor(browser: Browser) {
		this.browser = browser;
	}

	public keepAlive() {
		if (this.isKeepAlive) {
			return;
		}

		const callback = async () => {
			if (!this.isKeepAlive) {
				return;
			}

			await this.refreshSessionToken();

			setTimeout(callback, config.nvidia.sessionTtl);
		};

		this.isKeepAlive = true;

		void callback();
	}

	public get fallbackCartUrl(): string {
		return `https://www.nvidia.com/${this.regionInfo.siteLocale}/geforce/`;
	}

	public get regionInfo(): NvidiaRegionInfo {
		const country = config.store.country.toLowerCase();
		const regionInfo = regionInfos.get(country);
		if (!regionInfo) {
			throw new Error(`Unknown country ${country}`);
		}

		return regionInfo;
	}

	public get sessionUrl(): string {
		return `https://store.nvidia.com/store/nvidia/SessionToken?format=json&locale=${this.regionInfo.drLocale}`;
	}

	public async addToCard(productId: number, name: string): Promise<string> {
		let cartUrl: string | undefined;
		logger.info(`🚀🚀🚀 [nvidia] ${name}, starting auto add to cart 🚀🚀🚀`);
		try {
			logger.info(`🚀🚀🚀 [nvidia] ${name}, adding to cart 🚀🚀🚀`);
			let lastError: Error | string | undefined;

			/* eslint-disable no-await-in-loop */
			for (let i = 0; i < config.nvidia.addToCardAttempts; i++) {
				try {
					cartUrl = await this.addToCartAndGetLocationRedirect(productId);

					break;
				} catch (error: unknown) {
					logger.error(
						`✖ [nvidia] ${name} could not automatically add to cart, attempt ${
							i + 1
						} of ${config.nvidia.addToCardAttempts}`,
						error
					);
					logger.debug(error);

					lastError = error as Error;
				}
			}
			/* eslint-enable no-await-in-loop */

			if (!cartUrl) {
				// eslint-disable-next-line @typescript-eslint/no-throw-literal
				throw lastError;
			}

			logger.info(`🚀🚀🚀 [nvidia] ${name}, opening checkout page 🚀🚀🚀`);
			logger.info(cartUrl);

			await open(cartUrl);
		} catch (error: unknown) {
			logger.error(
				`✖ [nvidia] ${name} could not automatically add to cart, opening page`,
				error
			);

			cartUrl = this.fallbackCartUrl;

			await open(cartUrl);
		}

		return cartUrl;
	}

	public async getSessionToken(): Promise<string> {
		if (!this.sessionToken) {
			await this.refreshSessionToken();
		}

		if (!this.sessionToken) {
			throw new Error('Failed to create the session_token');
		}

		return this.sessionToken;
	}

	public async refreshSessionToken(): Promise<void> {
		logger.debug('ℹ [nvidia] refreshing session token');
		try {
			const result = await usingResponse(
				this.browser,
				this.sessionUrl,
				async (response) => {
					return response?.json() as NvidiaSessionTokenJSON | undefined;
				}
			);
			if (
				typeof result !== 'object' ||
				result === null ||
				!('session_token' in result)
			) {
				throw new Error('malformed response');
			}

			this.sessionToken = result.session_token;
			logger.debug(`ℹ [nvidia] session_token=${result.session_token}`);
		} catch (error: unknown) {
			const message: string =
				typeof error === 'object'
					? (error as Error).message
					: (error as string);
			logger.error(`✖ [nvidia] ${message}`);
		}
	}

	protected async addToCartAndGetLocationRedirect(
		productId: number
	): Promise<string> {
		const url = 'https://api-prod.nvidia.com/direct-sales-shop/DR/add-to-cart';
		const sessionToken = await this.getSessionToken();

		logger.info(`ℹ [nvidia] session_token=${sessionToken}`);

		const locationData = await usingPage(this.browser, async (page) => {
			page.removeAllListeners('request');

			await page.setRequestInterception(true);

			page.on('request', (interceptedRequest) => {
				void interceptedRequest.continue({
					headers: {
						...interceptedRequest.headers(),
						'content-type': 'application/json',
						nvidia_shop_id: sessionToken
					},
					method: 'POST',
					postData: JSON.stringify({
						products: [{productId, quantity: 1}]
					})
				});
			});

			const response = await page.goto(url, {waitUntil: 'networkidle0'});

			if (response === null) {
				throw new Error('NvidiaAddToCartUnavailable');
			}

			return response.json() as Promise<NvidiaAddToCardJSON>;
		});

		return locationData.location;
	}
}

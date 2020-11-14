import {NvidiaRegionInfo, regionInfos} from '../nvidia-api';
import {Browser} from 'puppeteer';
import {Link} from '../store';
import {NvidiaCart} from './nvidia-cart';
import {config} from '../../../config';
import {timestampUrlParameter} from '../../timestamp-url-parameter';

function getRegionInfo(): NvidiaRegionInfo {
	let country = config.store.country.toLowerCase();
	if (!regionInfos.has(country)) {
		country = 'usa';
	}

	const regionInfo = regionInfos.get(country);
	if (!regionInfo) {
		throw new Error(
			`LogicException could not retrieve region info for ${country}`
		);
	}

	return regionInfo;
}

function nvidiaStockUrl(
	id: number,
	drLocale: string,
	currency: string
): string {
	return (
		`https://api-prod.nvidia.com/direct-sales-shop/DR/products/${drLocale}/${currency}/${id}?` +
		timestampUrlParameter().slice(1)
	);
}

let cart: NvidiaCart;

export function generateSetupAction() {
	return async (browser: Browser) => {
		cart = new NvidiaCart(browser);

		if (config.browser.open) {
			cart.keepAlive();
		}
	};
}

export function generateOpenCartAction(id: number, cardName: string) {
	return async () => {
		const url = await cart.addToCard(id, cardName);

		return url;
	};
}

export function generateLinks(): Link[] {
	const {
		drLocale,
		fe3080Id,
		fe3090Id,
		fe2060SuperId,
		currency
	} = getRegionInfo();

	const links: Link[] = [];

	if (fe2060SuperId) {
		links.push({
			brand: 'test:brand',
			model: 'test:model',
			openCartAction: generateOpenCartAction(fe2060SuperId, 'TEST CARD debug'),
			series: 'test:series',
			url: nvidiaStockUrl(fe2060SuperId, drLocale, currency)
		});
	}

	if (fe3080Id) {
		links.push({
			brand: 'nvidia',
			model: 'founders edition',
			openCartAction: generateOpenCartAction(
				fe3080Id,
				'nvidia founders edition 3080'
			),
			series: '3080',
			url: nvidiaStockUrl(fe3080Id, drLocale, currency)
		});
	}

	if (fe3090Id) {
		links.push({
			brand: 'nvidia',
			model: 'founders edition',
			openCartAction: generateOpenCartAction(
				fe3090Id,
				'nvidia founders edition 3090'
			),
			series: '3090',
			url: nvidiaStockUrl(fe3090Id, drLocale, currency)
		});
	}

	return links;
}

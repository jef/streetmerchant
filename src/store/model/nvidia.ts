import {config} from '../../config';
import {logger} from '../../logger';
import {Store} from './store';

// Country set by config file, silently ignores null / missing values and defaults to UK

function getSiteLocale() {
	const SUPPORTED_COUNTRIES = [
		'france', 'germany', 'ireland', 'spain', 'uk'
	];

	let country = config.store.country.toLowerCase();
	if (!SUPPORTED_COUNTRIES.includes(country)) {
		country = 'uk';
		logger.warn(
			'✖ Unsupported country detected for nvidia store. Defaulting to UK.'
		);
	}

	let locale;
	switch (country) {
		case 'france':
			locale = 'fr-fr';
			break;
		case 'germany':
			locale = 'de-de';
			break;
		case 'ireland':
			locale = 'en-gb';
			break;
		case 'spain':
			locale = 'es-es';
			break;
		case 'uk':
			locale = 'en-gb';
			break;
		default:
			locale = 'en-gb';
			break;
	}

	return locale;
}

const locale = getSiteLocale();

export const Nvidia: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['are you a human?']
		},
		inStock: [
			{
				container: '.buy',
				text: ['add to cart', 'buy now', 'buy']
			}
		],
		outOfStock: [
			{
				container: '.buy',
				text: ['out of stock', 'DERZEIT NICHT VERFÜGBAR', 'RUPTURE DE STOCK', 'AGOTADO']
			}
		]
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: `https://www.nvidia.com/en-us/geforce/graphics-cards/rtx-2060-super/`
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			series: '3060ti',
			url:
				`https://www.nvidia.com/${locale}/shop/geforce/gpu/?page=1&limit=9&locale=${locale}&category=GPU&gpu=RTX%203060%20Ti&manufacturer=NVIDIA&manufacturer_filter=NVIDIA~1,ASUS~0,EVGA~0,GAINWARD~0,GIGABYTE~0,MSI~0,PALIT~4,PNY~0,ZOTAC~2`
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			series: '3070',
			url:
				`https://www.nvidia.com/${locale}/shop/geforce/gpu/?page=1&limit=9&locale=${locale}&category=GPU&gpu=RTX%203070&manufacturer=NVIDIA&manufacturer_filter=NVIDIA~1,ASUS~4,EVGA~0,GAINWARD~0,GIGABYTE~5,MSI~3,PALIT~2,PNY~2,ZOTAC~2`
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			series: '3080',
			url:
				`https://www.nvidia.com/${locale}/shop/geforce/gpu/?page=1&limit=9&locale=${locale}&category=GPU&gpu=RTX%203080&manufacturer=NVIDIA&manufacturer_filter=NVIDIA~1,ASUS~3,EVGA~4,GAINWARD~0,GIGABYTE~3,MSI~2,PALIT~1,PNY~1,ZOTAC~3`
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			series: '3090',
			url:
				`https://www.nvidia.com/${locale}/shop/geforce/gpu/?page=1&limit=9&locale=${locale}&category=GPU&gpu=RTX%203090&manufacturer=NVIDIA&manufacturer_filter=NVIDIA~1,ASUS~4,EVGA~0,GAINWARD~0,GIGABYTE~3,MSI~1,PALIT~2,PNY~1,ZOTAC~1`
		}
	],
	name: 'nvidia',
	waitUntil: 'load'
};
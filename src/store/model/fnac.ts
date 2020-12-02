import {Store} from './store';

export const Fnac: Store = {
	labels: {
		inStock: {
			container: '.f-buyShopBox',
			text: ['En stock en ligne']
		},
		maxPrice: {
			container: 'span[class*="PriceString"]',
			euroFormat: true
		},
		outOfStock: {
			container: '.f-buyShopBox',
			text: ['Indisponible en ligne']
		}
	},
	links: [
		{
			brand: 'test:brand',
			cartUrl:
				'https://secure.nl.fnac.be/basket/add?from=111&productId=14119956',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.fnac.com/Console-Sony-PS5-Edition-Standard/a14119956/w-4'
		},
		{
			brand: 'sony',
			cartUrl:
				'https://secure.nl.fnac.be/basket/add?from=111&productId=14119956',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://www.nl.fnac.be/Sony-PS5-Console-Standaard-Edition/a14119956'
		}
	],
	name: 'fnac'
};

import {Store} from './store';

export const AMD: Store = {
	labels: {
		inStock: {
			container: '.btn-shopping-cart',
			text: ['add to cart']
		},
		maxPrice: {
			container: '.product-page-description h4',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amd.com/en/direct-buy/5450881400/us'
		},
		{
			brand: 'amd',
			cartUrl: 'https://www.amd.com/en/direct-buy/5450881400/us?add-to-cart=true',
			model: '5950x',
			series: '5950',
			url: 'https://www.amd.com/en/direct-buy/5450881400/us'
		},
	],
	name: 'amd'
};

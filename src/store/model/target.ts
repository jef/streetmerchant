import {Store} from './store';

export const Target: Store = {
	labels: {
		inStock: {
			container: '[data-test="preorderButton"]',
			text: ['Preorder now']
		},
		maxPrice: {
			container: '[data-test="product-price"]'
		}
	},
	links: [
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.target.com/p/playstation-5-console/-/A-81114595'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url: 'https://www.target.com/p/playstation-5-digital-edition-console/-/A-81114596'
		}
	],
	name: 'target'
};

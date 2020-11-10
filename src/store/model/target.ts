import {Store} from './store';

export const Target: Store = {
	labels: {
		inStock: [
			{
				container: '[data-test="preorderButton"]',
				text: ['Preorder now']
			},
			{
				container: '[data-test="shipItButton"]',
				text: ['Ship it']
			}
		],
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
			url:
				'https://www.target.com/p/playstation-5-digital-edition-console/-/A-81114596'
		},
		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://www.target.com/p/xbox-series-x-console/-/A-80790841'
		},
		{
			brand: 'microsoft',
			model: 'xbox series s',
			series: 'xboxss',
			url: 'https://www.target.com/p/xbox-series-s-console/-/A-80790842'
		}
	],
	name: 'target'
};

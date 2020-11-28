import {Store} from './store';

export const AmazonIt: Store = {
	backoffStatusCodes: [403, 429, 503],
	labels: {
		captcha: {
			container: 'body',
			text: ['enter the characters you see below']
		},
		inStock: {
			container: '#desktop_buybox',
			text: ['Aggiungi al carrello']
		},
		maxPrice: {
			container: 'span[class*="PriceString"]'
		}
	},
	links: [
		{
			brand: 'sony',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08KKJ37F7&Quantity.1=1',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.amazon.it/dp/B08KKJ37F7'
		},
		{
			brand: 'sony',
			cartUrl:
				'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08KJF2D25&Quantity.1=1',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url: 'https://www.amazon.it/dp/B08KJF2D25'
		}
	],
	name: 'amazon-it'
};

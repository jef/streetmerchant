import {Link, Store} from './store';
import {logger} from '../../logger';
import {parseCard} from './helpers/card';

export const AmazonBr: Store = {
	backoffStatusCodes: [403, 429, 503],
	labels: {
		captcha: {
			container: 'body',
			text: ['insira os caracteres abaixo']
		},
		inStock: {
			container: '#availability',
			text: ['Em estoque']
		},
		maxPrice: {
			container: 'span[class*="PriceString"]'
		},
		outOfStock: [
			{
				container: '#availability',
				text: ['Não disponível']
			},
		]
	},
	links: [
		{
			brand: 'test:brand',
			cartUrl:
				'https://www.amazon.com.br/gp/aws/cart/add.html?ASIN.1=B088GNRX3J&Quantity.1=1',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.com.br/dp/B088GNRX3J/'
		},
		{
			brand: 'sony',
			cartUrl:
				'https://www.amazon.com.br/gp/aws/cart/add.html?ASIN.1=B088GNRX3J&Quantity.1=1',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.amazon.com.br/dp/B088GNRX3J/'
		},
		{
			brand: 'sony',
			cartUrl:
				'https://www.amazon.com.br/gp/aws/cart/add.html?ASIN.1=B08CWG5K2D&Quantity.1=1',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url: 'https://www.amazon.com.br/dp/B08CWG5K2D'
        }
	],

	name: 'amazon-br'
};

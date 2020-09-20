import {Store} from './store';

export const Evga: Store = {
	links: [
		{
			series: 'debug',
			brand: 'TEST',
			model: 'CARD',
			url: 'https://www.evga.com/products/product.aspx?pn=06G-P4-2065-KR'
		},
		{
			series: '3080',
			brand: 'evga',
			model: 'xc3 black',
			url: 'https://www.evga.com/products/product.aspx?pn=10G-P5-3881-KR'
		},
		{
			series: '3080',
			brand: 'evga',
			model: 'ftw3',
			url: 'https://www.evga.com/products/product.aspx?pn=10G-P5-3897-KR'
		},
		{
			series: '3080',
			brand: 'evga',
			model: 'xc3',
			url: 'https://www.evga.com/products/product.aspx?pn=10G-P5-3883-KR'
		},
		{
			series: '3080',
			brand: 'evga',
			model: 'xc3 ultra',
			url: 'https://www.evga.com/products/product.aspx?pn=10G-P5-3885-KR'
		}
	],
	labels: {
		oosList: ['out of stock']
	},
	elements: {
		addToCart: '#LFrame_btnAddToCart'
	},
	cartUrl: 'https://www.evga.com/products/shoppingcart.aspx',
	name: 'evga'
};


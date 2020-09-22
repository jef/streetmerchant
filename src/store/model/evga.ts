import {Store} from './store';

export const Evga: Store = {
	links: [
		{
			brand: 'TEST',
			model: 'CARD',
			series: 'debug',
			url: 'https://www.evga.com/products/product.aspx?pn=06G-P4-2065-KR'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.evga.com/products/product.aspx?pn=10G-P5-3881-KR'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.evga.com/products/product.aspx?pn=10G-P5-3897-KR'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url: 'https://www.evga.com/products/product.aspx?pn=10G-P5-3883-KR'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.evga.com/products/product.aspx?pn=10G-P5-3885-KR'
		}
	],
	labels: {
		inStock: {
			container: '.product-buy-specs',
			labels: ['add to cart']
		}
	},
	name: 'evga'
};


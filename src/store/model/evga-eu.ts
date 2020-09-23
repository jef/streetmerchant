import {Store} from './store';

export const EvgaEu: Store = {
	labels: {
		inStock: {
			container: '.product-buy-specs',
			text: ['add to cart']
		}
	},
	links: [
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url: 'https://eu.evga.com/products/product.aspx?pn=10G-P5-3881-KR'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3080',
			url: 'https://eu.evga.com/products/product.aspx?pn=10G-P5-3895-KR'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url: 'https://eu.evga.com/products/product.aspx?pn=10G-P5-3883-KR'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://eu.evga.com/products/product.aspx?pn=10G-P5-3885-KR'
		}
	],
	name: 'evga-eu'
};

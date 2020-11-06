import {Store} from './store';

export const Walmart: Store = {
	labels: {
		inStock: {
			container: '#ProductPrimaryCTA-cta_add_to_cart_button',
			text: ['Add to cart']
		},
		maxPrice: {
			container: 'span[class*="price-characteristic"]'
		}
	},
	links: [
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.walmart.com/ip/PlayStation5-Console/363472942'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url: 'https://www.walmart.com/ip/PlayStation5-Console/363472942'
		}
	],
	name: 'walmart'
};

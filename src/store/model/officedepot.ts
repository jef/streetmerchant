import {Store} from './store';

export const OfficeDepot: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['please verify you are a human']
		},
		inStock: {
			container: '#productPurchase',
			text: ['add to cart']
		},
		maxPrice: {
			container: 'span[class^="price_column right"]',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.officedepot.com/a/products/4652239/EVGA-GeForce-RTX-2060-Graphic-Card/'
		},
		{
			brand: 'pny',
			model: 'xlr8 revel',
			series: '3080',
			url:
				'https://www.officedepot.com/a/products/7189374/PNY-GeForce-RTX-3080-10GB-GDDR6X/'
		},
		{
			brand: 'pny',
			model: 'xlr8 revel',
			series: '3080',
			url:
				'https://www.officedepot.com/a/products/7791294/PNY-GeForce-RTX-3080-10GB-GDDR6X/'
		}
	],
	name: 'officedepot'
};

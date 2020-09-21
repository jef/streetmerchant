import {Store} from './store';

export const OfficeDepot: Store = {
	links: [
		{
			brand: 'test:brand',
			model: 'CARD',
			series: 'test:series',
			url: 'https://www.officedepot.com/a/products/7189374/PNY-GeForce-RTX-3080-10GB-GDDR6X/'
		},
		{
			brand: 'pny',
			model: 'xlr8',
			series: '3080',
			url: 'https://www.officedepot.com/a/products/7189374/PNY-GeForce-RTX-3080-10GB-GDDR6X/'
		},
		{
			brand: 'pny',
			model: 'xlr8 rgb',
			series: '3080',
			url: 'https://www.officedepot.com/a/products/7791294/PNY-GeForce-RTX-3080-10GB-GDDR6X/'
		}
	],
	labels: {
		captcha: ['please verify you are a human'],
		outOfStock: ['out of stock for delivery', 'out of stock']
	},
	name: 'officedepot'
};

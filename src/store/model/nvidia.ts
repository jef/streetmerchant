import {Store} from './store';

export const Nvidia: Store = {
	labels: {
		captcha: {
			containers: ['body'],
			text: ['are you a human?']
		},
		inStock: {
			containers: ['.js-product-item .btn-cart', '.main-container'],
			text: ['add to cart']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.nvidia.com/en-us/shop/geforce/gpu/'
		},
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.nvidia.com/en-us/geforce/graphics-cards/rtx-2060-super/'
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			series: '3080',
			url: 'https://www.nvidia.com/en-us/shop/geforce/gpu/?page=1&limit=9&locale=en-us&category=GPU&gpu=RTX%203080'
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			series: '3080',
			url: 'https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3080'
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			series: '3090',
			url: 'https://www.nvidia.com/en-us/shop/geforce/gpu/?page=1&limit=9&locale=en-us&category=GPU&gpu=RTX%203090'
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			series: '3090',
			url: 'https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3090'
		}
	],
	name: 'nvidia'
};

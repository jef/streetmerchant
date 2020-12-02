import {Store} from './store';

export const Argos: Store = {
	labels: {
		inStock: {
			container: 'button[data-test="add-to-trolley-button-button"',
			text: ['to trolley']
		},
		maxPrice: {
			container: 'li[itemprop="price"]'
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.argos.co.uk/product/5718469'
		},
		{
			brand: 'asus',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.argos.co.uk/product/6795199'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url: 'https://www.argos.co.uk/product/6795151'
		}
	],
	name: 'argos'
};

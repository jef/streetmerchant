import {Store} from './store';

export const Galaxus: Store = {
	labels: {
		inStock: {
			container: '#addToCartButton:enabled',
			text: ['In den Warenkorb']
		},
		maxPrice: {
			container: '.productDetail .ZZa5',
			euroFormat: true
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.galaxus.de/de/product/11156643'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://www.galaxus.de/de/product/13987919'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url: 'https://www.galaxus.de/de/product/13987918'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://www.galaxus.de/de/product/13987917'
		},
		{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen5950',
			url: 'https://www.galaxus.de/de/product/13987916'
		}
	],
	name: 'galaxus'
};

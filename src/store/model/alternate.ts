import {Store} from './store';

export const Alternate: Store = {
	labels: {
		inStock: {
			container: '.stockStatus',
			text: ['auf lager']
		},
		maxPrice: {
			container: '.productShort .price span[itemprop="price"]',
			euroFormat: true
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.alternate.de/GIGABYTE/GeForce-GTX-1660-SUPER-OC-6G-Grafikkarte/html/product/1586802?'
		},
		{
			brand: 'msi',
			model: 'ventusx3',
			series: '3090',
			url: 'https://www.alternate.de/MSI/GeForce-RTX-3090-Ventus-3X-24G-OC-Grafikkarte/html/product/1672346?'
		},
		{
			brand: 'inno3d',
			model: 'ichillx3',
			series: '3090',
			url: 'https://www.alternate.de/INNO3D/GeForce-RTX-3090-GAMING-X3-Grafikkarte/html/product/1673131?'
		}
	],
	name: 'alternate'
};

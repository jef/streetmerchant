import {Store} from './store';

export const Coolblue: Store = {
	labels: {
		inStock: {
			container: '.product-order',
			text: ['bestel snel', 'Morgen in huis']
		},
		outOfStock: {
			container: '.product-order',
			text: ['Binnenkort leverbaar', 'Tijdelijk uitverkocht']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.coolblue.nl/product/826844/'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.coolblue.nl/product/868737/gigabyte-geforce-rtx-3080-eagle-oc-10g.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.coolblue.nl/product/868741/msi-geforce-rtx-3080-ventus-3x-oc-10g.html'
		},
		{
			brand: 'asus',
			model: 'tuf gaming',
			series: '3080',
			url: 'https://www.coolblue.nl/product/868726/asus-geforce-rtx-3080-tuf-gaming-10g.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.coolblue.nl/product/868736/gigabyte-geforce-rtx-3080-gaming-oc-10g.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.coolblue.nl/product/868740/msi-geforce-rtx-3080-gaming-x-trio-10g.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc gaming',
			series: '3080',
			url: 'https://www.coolblue.nl/product/868733/asus-geforce-rtx-3080-tuf-gaming-oc-10g.html'
		},
		{
			brand: 'asus',
			model: 'rog strix oc gaming',
			series: '3080',
			url: 'https://www.coolblue.nl/product/868731/asus-geforce-rtx-3080-rog-strix-gaming-oc-10g.html'
		},
		{
			brand: 'asus',
			model: 'rog strix gaming',
			series: '3080',
			url: 'https://www.coolblue.nl/product/868732/asus-geforce-rtx-3080-rog-strix-gaming-10g.html'
		}
	],
	name: 'coolblue'
};


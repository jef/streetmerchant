import {Store} from './store';

export const Coolblue: Store = {
	labels: {
		inStock: {
			container: '.product-order',
			text: ['bestel snel', 'morgen in huis']
		},
		maxPrice: {
			container: '.js-order-block .sales-price__current',
			euroFormat: true
		},
		outOfStock: {
			container: '.product-order',
			text: ['binnenkort leverbaar', 'tijdelijk uitverkocht']
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
			url: 'https://www.coolblue.nl/product/868737/'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.coolblue.nl/product/868741/'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.coolblue.nl/product/868726/'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.coolblue.nl/product/868736/'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.coolblue.nl/product/868740/'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.coolblue.nl/product/868733/'
		},
		{
			brand: 'asus',
			model: 'rog strix oc gaming',
			series: '3080',
			url: 'https://www.coolblue.nl/product/868731/'
		},
		{
			brand: 'asus',
			model: 'rog strix gaming',
			series: '3080',
			url: 'https://www.coolblue.nl/product/868732/'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090',
			url: 'https://www.coolblue.nl/product/868738/'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3090',
			url: 'https://www.coolblue.nl/product/868739/'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090',
			url: 'https://www.coolblue.nl/product/868730/'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url: 'https://www.coolblue.nl/product/868727/'
		},
		{
			brand: 'asus',
			model: 'rog strix oc gaming',
			series: '3090',
			url: 'https://www.coolblue.nl/product/868728/'
		},
		{
			brand: 'asus',
			model: 'rog strix gaming',
			series: '3090',
			url: 'https://www.coolblue.nl/product/868729/'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3090',
			url: 'https://www.coolblue.nl/product/868734/'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3090',
			url: 'https://www.coolblue.nl/product/868735/'
		}
	],
	name: 'coolblue'
};

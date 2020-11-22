import {Store} from './store';

export const MemoryExpress: Store = {
	labels: {
		maxPrice: {
			container:
				'#ProductPricing .GrandTotal.c-capr-pricing__grand-total > div',
			euroFormat: false
		},
		outOfStock: {
			container:
				'.c-capr-inventory-selector__details-online .c-capr-inventory-store__availability',
			text: ['Out of Stock', 'Backorder']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.memoryexpress.com/Products/MX79473'
		},
		{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen5950',
			url: 'https://www.memoryexpress.com/Products/MX00114450'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://www.memoryexpress.com/Products/MX00114451'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url: 'https://www.memoryexpress.com/Products/MX00114452'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://www.memoryexpress.com/Products/MX00114455'
		}
	],
	name: 'memoryexpress',
	waitUntil: 'domcontentloaded'
};

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
		},
		{
			brand: 'xfx',
			model: 'amd reference',
			series: 'rx6800xt',
			url: 'https://www.memoryexpress.com/Products/MX00114996'
		},
		{
			brand: 'gigabyte',
			model: 'eagle',
			series: '3080',
			url: 'https://www.memoryexpress.com/Products/MX00114687'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.memoryexpress.com/Products/MX00113955'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.memoryexpress.com/Products/MX00113954'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.memoryexpress.com/Products/MX00114094'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url: 'https://www.memoryexpress.com/Products/MX00114095'
		},
		{
			brand: 'asus',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.memoryexpress.com/Products/MX00114003'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url: 'https://www.memoryexpress.com/Products/MX00114313'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.memoryexpress.com/Products/MX00113972'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.memoryexpress.com/Products/MX00113956'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.memoryexpress.com/Products/MX00113957'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.memoryexpress.com/Products/MX00114024'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url: 'https://www.memoryexpress.com/Products/MX00114312'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
			url: 'https://www.memoryexpress.com/Products/MX00114092'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3080',
			url: 'https://www.memoryexpress.com/Products/MX00114404'
		}
	],
	name: 'memoryexpress',
	waitUntil: 'domcontentloaded'
};

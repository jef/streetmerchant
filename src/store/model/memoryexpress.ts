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
                        brand: 'msi',
                        model: 'gaming x trio',
                        series: '3060ti',
                        url: 'https://www.memoryexpress.com/Products/MX00114969'
                },
		{
                        brand: 'msi',
                        model: 'ventus 2x oc',
                        series: '3060ti',
                        url: 'https://www.memoryexpress.com/Products/MX00114970'
                },
		{
                        brand: 'asus',
                        model: 'dual',
                        series: '3060ti',
                        url: 'https://www.memoryexpress.com/Products/MX00114818'
                },
		{
                        brand: 'asus',
                        model: 'strix',
                        series: '3060ti',
                        url: 'https://www.memoryexpress.com/Products/MX00114786'
                },
		{
                        brand: 'asus',
                        model: 'tuf',
                        series: '3060ti',
                        url: 'https://www.memoryexpress.com/Products/MX00114819'
                },
		{
                        brand: 'gigabyte',
                        model: 'aorus',
                        series: '3060ti',
                        url: 'https://www.memoryexpress.com/Products/MX00114923'
                },
		{
                        brand: 'gigabyte',
                        model: 'eagle',
                        series: '3060ti',
                        url: 'https://www.memoryexpress.com/Products/MX00114927'
                },
		{
                        brand: 'gigabyte',
                        model: 'eagle oc',
                        series: '3060ti',
                        url: 'https://www.memoryexpress.com/Products/MX00114926'
                },
		{
                        brand: 'evga',
                        model: 'ftw3 ultra',
                        series: '3060ti',
                        url: 'https://www.memoryexpress.com/Products/MX00115013'
                },
		{
                        brand: 'gigabyte',
                        model: 'gaming oc',
                        series: '3060ti',
                        url: 'https://www.memoryexpress.com/Products/MX00114925'
                },
		{
                        brand: 'gigabyte',
                        model: 'gaming oc pro',
                        series: '3060ti',
                        url: 'https://www.memoryexpress.com/Products/MX00114924'
                },
		{
                        brand: 'evga',
                        model: 'xc gaming',
                        series: '3060ti',
                        url: 'https://www.memoryexpress.com/Products/MX00115014'
                },
		{
                        brand: 'asus',
                        model: 'ko',
                        series: '3060ti',
                        url: 'https://www.memoryexpress.com/Products/MX00114888'
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

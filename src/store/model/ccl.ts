import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Ccl: Store = {
	backoffStatusCodes: [403, 429, 503],
	labels: {
		inStock: {
			container: '#pnlAddToBasket',
			text: ['add to basket']
		},
		maxPrice: {
			container: '#pnlPriceText > p',
			euroFormat: false // Note: CCL uses non-euroFromat as price seperator
		},
		outOfStock: {
			container: '#pnlSoldOut',
			text: ['sold out', 'coming soon']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.cclonline.com/product/296443/RTX-2060-SUPER-VENTUS-GP-OC/Graphics-Cards/MSI-GeForce-RTX-2060-SUPER-VENTUS-GP-OC-8GB-Overclocked-Graphics-Card/VGA5671/'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url:
				'https://www.cclonline.com/product/331765/100-100000065BOX/CPU-Processors/AMD-Ryzen-5-5600X-3-7GHz-Hexa-Core-Processor-with-6-Cores-12-Threads-65W-TDP-35MB-Cache-4-6GHz-Turbo-Wraith-Stealth-Cooler/CPU0679/'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url:
				'https://www.cclonline.com/product/331766/100-100000063WOF/CPU-Processors/AMD-Ryzen-7-5800X-3-8GHz-Octa-Core-Processor-with-8-Cores-16-Threads-105W-TDP-36MB-Cache-4-7GHz-Turbo-No-Cooler/CPU0680/'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url:
				'https://www.cclonline.com/product/331767/100-100000061WOF/CPU-Processors/AMD-Ryzen-9-5900X-3-7GHz-Dodeca-Core-Processor-with-12-Cores-24-Threads-105W-TDP-70MB-Cache-4-8GHz-Turbo-No-Cooler/CPU0681/'
		},
		{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen5950',
			url:
				'https://www.cclonline.com/product/331768/100-100000059WOF/CPU-Processors/AMD-Ryzen-9-5950X-3-4GHz-Hexadeca-Core-Processor-with-16-Cores-32-Threads-105W-TDP-72MB-Cache-4-9GHz-Turbo-No-Cooler/CPU0682/'
		}
	],
	linksBuilder: {
		builder: getProductLinksBuilder({
			productsSelector: '.productListingContainerOuter .productList',
			sitePrefix: 'https://www.cclonline.com',
			titleAttribute: 'title',
			titleSelector: '.productList_Detail a[title]'
		}),
		urls: [
			{
				series: '3070',
				url:
					'https://www.cclonline.com/category/430/PC-Components/Graphics-Cards/GeForce-RTX-3070-Graphics-Cards/'
			},
			{
				series: '3080',
				url:
					'https://www.cclonline.com/category/430/PC-Components/Graphics-Cards/GeForce-RTX-3080-Graphics-Cards/'
			},
			{
				series: '3090',
				url:
					'https://www.cclonline.com/category/430/PC-Components/Graphics-Cards/GeForce-RTX-3090-Graphics-Cards/'
			},
			{
				series: 'rx6800',
				url:
					'https://www.cclonline.com/category/430/PC-Components/Graphics-Cards/AMD-Radeon-RX-6800-Graphics-Cards/'
			},
			{
				series: 'rx6800xt',
				url:
					'https://www.cclonline.com/category/430/PC-Components/Graphics-Cards/AMD-Radeon-RX-6800-XT-Graphics-Cards/'
			}
		]
	},
	name: 'ccl',
	waitUntil: 'domcontentloaded'
};

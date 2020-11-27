import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Overclockers: Store = {
	labels: {
		inStock: {
			container: '#detailbox',
			text: ['add to basket', 'in stock']
		},
		maxPrice: {
			container: 'div[class="article_details_price"]',
			euroFormat: false // Note: Overclockers uses non-euroFromat as price seperator
		},
		outOfStock: {
			container: '#detailbox',
			text: ['out of stock', 'pre order', 'bought to order']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.overclockers.co.uk/gigabyte-geforce-rtx-2060-oc-rev2-6144mb-gddr6-pci-express-graphics-card-gx-1bj-gi.html'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url:
				'https://www.overclockers.co.uk/amd-ryzen-5-5600x-six-core-4.6ghz-socket-am4-processor-retail-cp-3cc-am.html'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url:
				'https://www.overclockers.co.uk/amd-ryzen-7-5800x-eight-core-4.7ghz-socket-am4-processor-retail-cp-3cb-am.html'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url:
				'https://www.overclockers.co.uk/amd-ryzen-9-5900x-twelve-core-4.8ghz-socket-am4-processor-retail-cp-3ca-am.html'
		},
		{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen5950',
			url:
				'https://www.overclockers.co.uk/amd-ryzen-9-5950x-sixteen-core-4.9ghz-socket-am4-processor-retail-cp-3c9-am.html'
		}
	],
	linksBuilder: {
		builder: getProductLinksBuilder({
			productsSelector: '.ck_listing .artbox',
			sitePrefix: 'https://www.overclockers.co.uk',
			titleAttribute: 'data-description',
			titleSelector: 'a[href].producttitles'
		}),
		urls: [
			{
				series: 'rx6800',
				url:
					'https://www.overclockers.co.uk/pc-components/graphics-cards/amd/radeon-rx-6800-series'
			},
			{
				series: 'rx6800xt',
				url:
					'https://www.overclockers.co.uk/pc-components/graphics-cards/amd/radeon-rx-6800-xt-series'
			},
			{
				series: '3070',
				url:
					'https://www.overclockers.co.uk/pc-components/graphics-cards/nvidia/geforce-rtx-3070'
			},
			{
				series: '3080',
				// Need to add support to detect pagination so this can be dynamically detected
				url: [
					'https://www.overclockers.co.uk/pc-components/graphics-cards/nvidia/geforce-rtx-3080',
					'https://www.overclockers.co.uk/pc-components/graphics-cards/nvidia/geforce-rtx-3080?p=2'
				]
			},
			{
				series: '3090',
				url:
					'https://www.overclockers.co.uk/pc-components/graphics-cards/nvidia/geforce-rtx-3090'
			}
		]
	},
	name: 'overclockers',
	waitUntil: 'domcontentloaded'
};

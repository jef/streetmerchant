import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Novatech: Store = {
	labels: {
		inStock: {
			container: '.newspec-specprice',
			text: ['add to basket']
		},
		maxPrice: {
			container: 'p[class="newspec-price"]',
			euroFormat: false // Note: Novatech uses non-euroFromat as price seperator
		},
		outOfStock: {
			container: '.newspec-pricesection',
			text: [
				'very short supply, no confirmed date',
				'this product is only available to buy when in stock',
				'ordered upon request',
				'price to be confirmed'
			]
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.novatech.co.uk/products/gigabyte-geforce-rtx-2060-oc-v2-6g-graphics-card/gv-n2060oc-6gdv2.html'
		}
	],
	linksBuilder: {
		builder: getProductLinksBuilder({
			productsSelector: '.seo-container .search-box-results',
			sitePrefix: 'https://www.novatech.co.uk',
			titleSelector: '.search-box-title',
			urlSelector: 'a[href]'
		}),
		urls: [
			{
				series: '3080',
				url: 'https://www.novatech.co.uk/products/components/nvidiageforcegraphicscards/nvidiartxseries/nvidiartx3080/?i=200'
			},
			{
				series: '3090',
				url: 'https://www.novatech.co.uk/products/components/nvidiageforcegraphicscards/nvidiartxseries/nvidiartx3090/?i=200'
			}
		]
	},
	name: 'novatech',
	waitUntil: 'domcontentloaded'
};

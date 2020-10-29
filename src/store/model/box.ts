import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Box: Store = {
	labels: {
		inStock: {
			container: '#divBuyButton',
			text: ['add to basket']
		},
		maxPrice: {
			container: '.p-right-wrapper .pq-price',
			euroFormat: false // Note: Box uses non-euroFromat as price seperator
		},
		outOfStock: {
			text: ['request stock alert', 'coming soon']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.box.co.uk/Gigabyte-GeForce-RTX-2080-Super-8GB-Wind_2724554.html'
		}
	],
	linksBuilder: {
		builder: getProductLinksBuilder({
			productsSelector: '.products-right .p-list',
			sitePrefix: 'https://www.box.co.uk',
			titleSelector: '.p-list-section > h3 > a[href]'
		}),
		urls: [
			{
				series: '3070',
				url: 'https://www.box.co.uk/rtx-3070-graphics-cards'
			},
			{
				series: '3080',
				url: 'https://www.box.co.uk/rtx-3080-graphics-cards'
			},
			{
				series: '3090',
				url: 'https://www.box.co.uk/rtx-3090-graphics-cards'
			}
		]
	},
	name: 'box',
	waitUntil: 'domcontentloaded'
};

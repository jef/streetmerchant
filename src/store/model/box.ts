import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Box: Store = {
	labels: {
		inStock: {
			container: '#divBuyButton',
			text: ['add to basket']
		},
		outOfStock: {
			text: ['request stock alert', 'coming soon']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'CARD',
			series: 'test:series',
			url: 'https://www.box.co.uk/ASUS-TUF-GeForce-RTX-2060-6GB-Gaming-Gra_2669497.html'
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

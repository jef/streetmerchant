import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Ebuyer: Store = {
	labels: {
		inStock: {
			container: '.purchase-info',
			text: ['add to basket', 'in stock']
		},
		outOfStock: {
			container: '.purchase-info',
			text: ['coming soon', 'we are expecting this item on']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'CARD',
			series: 'test:series',
			url: 'https://www.ebuyer.com/874209-gigabyte-geforce-rtx-2060-windforce-6gb-oc-graphics-card-gv-n2060wf2oc-6gd-v2'
		}
	],
	linksBuilder: {
		builder: getProductLinksBuilder({
			productsSelector: '#list-view .listing-product',
			sitePrefix: 'https://www.ebuyer.com',
			titleSelector: '.listing-product-title',
			urlSelector: 'a[href]'
		}),
		urls: [
			{
				series: '3070',
				url: 'https://www.ebuyer.com/store/Components/cat/Graphics-Cards-Nvidia/subcat/GeForce-RTX-3070'
			},
			{
				series: '3080',
				url: 'https://www.ebuyer.com/store/Components/cat/Graphics-Cards-Nvidia/subcat/GeForce-RTX-3080'
			},
			{
				series: '3090',
				url: 'https://www.ebuyer.com/store/Components/cat/Graphics-Cards-Nvidia/subcat/GeForce-RTX-3090'
			}
		]
	},
	name: 'ebuyer',
	waitUntil: 'domcontentloaded'
};

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
			url: 'https://www.overclockers.co.uk/gigabyte-geforce-rtx-2060-oc-rev2-6144mb-gddr6-pci-express-graphics-card-gx-1bj-gi.html'
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
				series: '3070',
				url: 'https://www.overclockers.co.uk/pc-components/graphics-cards/nvidia/geforce-rtx-3070'
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
				url: 'https://www.overclockers.co.uk/pc-components/graphics-cards/nvidia/geforce-rtx-3090'
			}
		]
	},
	name: 'overclockers',
	waitUntil: 'domcontentloaded'
};

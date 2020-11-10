import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Currys: Store = {
	labels: {
		inStock: {
			container: '#product-actions button',
			text: ['add to basket']
		},
		maxPrice: {
			container: '#product-actions span[class*="ProductPriceBlock__Price"]',
			euroFormat: false // Note: Currys uses non-euroFromat as price seperator
		},
		outOfStock: {
			container: '#product-actions .unavailable',
			text: ['not available for delivery']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/msi-geforce-rtx-2060-8-gb-super-ventus-gp-oc-graphics-card-10196803-pdt.html'
		}
	],
	linksBuilder: {
		builder: getProductLinksBuilder({
			productsSelector: '.resultList .product',
			sitePrefix: 'https://www.currys.co.uk',
			titleSelector: '.productTitle',
			urlSelector: 'a[href]'
		}),
		urls: [
			{
				series: '3080',
				url: 'https://www.currys.co.uk/gbuk/rtx-3080/components-upgrades/graphics-cards/324_3091_30343_xx_ba00013562-bv00313767/xx-criteria.html'
			},
			{
				series: '3090',
				url: 'https://www.currys.co.uk/gbuk/rtx-3090/components-upgrades/graphics-cards/324_3091_30343_xx_ba00013562-bv00313725/xx-criteria.html'
			}
		]
	},
	name: 'currys',
	waitUntil: 'domcontentloaded'
};

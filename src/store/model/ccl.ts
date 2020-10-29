import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Ccl: Store = {
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
			url: 'https://www.cclonline.com/product/296443/RTX-2060-SUPER-VENTUS-GP-OC/Graphics-Cards/MSI-GeForce-RTX-2060-SUPER-VENTUS-GP-OC-8GB-Overclocked-Graphics-Card/VGA5671/'
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
				url: 'https://www.cclonline.com/category/430/PC-Components/Graphics-Cards/GeForce-RTX-3070-Graphics-Cards/'
			},
			{
				series: '3080',
				url: 'https://www.cclonline.com/category/430/PC-Components/Graphics-Cards/GeForce-RTX-3080-Graphics-Cards/'
			},
			{
				series: '3090',
				url: 'https://www.cclonline.com/category/430/PC-Components/Graphics-Cards/GeForce-RTX-3090-Graphics-Cards/'
			}
		]
	},
	name: 'ccl',
	waitUntil: 'domcontentloaded'
};

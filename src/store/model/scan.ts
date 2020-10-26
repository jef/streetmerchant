import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Scan: Store = {
	disableAdBlocker: true,
	labels: {
		captcha: [{
			container: '#challenge-form',
			text: ['hcaptcha_submit']
		}],
		inStock: {
			container: '.buyPanel .priceAvailability',
			text: ['add to basket', 'in stock']
		},
		maxPrice: {
			container: '.buyPanel .price',
			euroFormat: false // Note: Scan uses non-euroFromat as price seperator
		},
		outOfStock: {
			container: '.buyPanel .priceAvailability',
			text: ['pre order']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.scan.co.uk/products/msi-geforce-rtx-2060-ventus-xs-oc-6gb-gddr6-vr-ready-graphics-card-1920-core-1710mhz-boost'
		}
	],
	linksBuilder: {
		builder: getProductLinksBuilder({
			productsSelector: 'ul.productColumns li.product',
			sitePrefix: 'https://www.scan.co.uk',
			titleSelector: '.details .description',
			urlSelector: 'a[href]'
		}),
		ttl: 300000,
		urls: [
			{
				series: '3070',
				url: 'https://www.scan.co.uk/shop/computer-hardware/gpu-nvidia/nvidia-geforce-rtx-3070-graphics-cards'
			},
			{
				series: '3080',
				url: 'https://www.scan.co.uk/shop/computer-hardware/gpu-nvidia/nvidia-geforce-rtx-3080-graphics-cards'
			},
			{
				series: '3090',
				url: 'https://www.scan.co.uk/shop/computer-hardware/gpu-nvidia/nvidia-geforce-rtx-3090-graphics-cards'
			}
		]
	},
	name: 'scan',
	waitUntil: 'domcontentloaded'
};

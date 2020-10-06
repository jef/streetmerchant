import {Store} from './store';

export const Zotac: Store = {
	backoffStatusCodes: [403, 503],
	labels: {
		inStock: {
			container: '.add-to-cart-wrapper',
			text: ['add to cart']
		},
		maxPrice: {
			container: 'div[class="product-shop"] span[class="price"]',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://store.zotac.com/zotac-gaming-geforce-rtx-2060-twin-fan-zt-t20600f-10m'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://store.zotac.com/zotac-gaming-geforce-rtx-3080-trinity-zt-a30800d-10p'
		},
		{
			brand: 'zotac',
			model: 'trinity oc',
			series: '3080',
			url: 'https://store.zotac.com/zotac-gaming-geforce-rtx-3080-trinity-oc-zt-a30800j-10p'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3090',
			url: 'https://store.zotac.com/zotac-gaming-geforce-rtx-3090-trinity-zt-a30900d-10p'
		}
	],
	name: 'zotac'
};


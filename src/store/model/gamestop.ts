import {Store} from './store';

export const Gamestop: Store = {
	labels: {
		inStock: {
			container: '.add-to-cart',
			text: ['add to cart']
		},
		outOfStock: {
			container: '.add-to-cart',
			text: ['not available']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.gamestop.com/video-games/pc/components/graphics-cards/products/tuf-gaming-geforce-rtx-3080-graphics-card/11109446.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.gamestop.com/video-games/pc/components/graphics-cards/products/tuf-gaming-geforce-rtx-3080-graphics-card/11109446.html'
		}
	],
	name: 'gamestop',
	successStatusCodes: [[0, 399], 404]
};

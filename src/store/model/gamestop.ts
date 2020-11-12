import {Store} from './store';

export const Gamestop: Store = {
	labels: {
		inStock: [
			{
				container: '.add-to-cart',
				text: ['add to cart']
			},
			{
				container: '.add-to-cart',
				text: ['Pre-Order']
			}
		],
		maxPrice: {
			container: '.primary-details-row .actual-price',
			euroFormat: false
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
			url:
				'https://www.gamestop.com/nav-pc-hardware-desktops/products/clx-set-tgmsetgxe9600bm-gaming-desktop/11096665'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url:
				'https://www.gamestop.com/video-games/pc/components/graphics-cards/products/tuf-gaming-geforce-rtx-3080-graphics-card/11109446.html'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://www.gamestop.com/video-games/playstation-5/consoles/products/playstation-5/11108140'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://www.gamestop.com/video-games/playstation-5/consoles/products/playstation-5-digital-edition/11108141'
		},
		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url:
				'https://www.gamestop.com/video-games/xbox-series-x/consoles/products/xbox-series-x/11108371.html?condition=New'
		},
		{
			brand: 'microsoft',
			model: 'xbox series s',
			series: 'xboxss',
			url:
				'https://www.gamestop.com/video-games/xbox-series-x/consoles/products/xbox-series-s-digital-edition/11108372.html?condition=New'
		}
	],
	name: 'gamestop',
	successStatusCodes: [[0, 399], 404]
};

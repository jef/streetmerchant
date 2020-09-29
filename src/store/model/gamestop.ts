import {Store} from './store';

export const Gamestop: Store = {
	labels: {
		inStock: {
			container: '#primary-details .primary-details-row .cart-and-ipay.divider-line.no-border-mobile',
			text: ['ADD TO CART']
		}
	},
	links: [
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.gamestop.com/video-games/pc/components/graphics-cards/products/tuf-gaming-geforce-rtx-3080-graphics-card/11109446.html'
		}
	],
	name: 'gamestop'
};

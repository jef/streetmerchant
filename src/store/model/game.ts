import {Store} from './store';

export const Game: Store = {
	labels: {
		inStock: {
			container: '.buyingOptions',
			text: ['Pre-order Now', 'Buy New']
		},
		maxPrice: {
			container: '.buyingOptions .btnPrice',
			euroFormat: false
		},
		outOfStock: {
			container: '.buyingOptions',
			text: ['out of stock']
		}
	},
	links: [
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.game.co.uk/en/playstation-5-console-2826338'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url: 'https://www.game.co.uk/en/playstation-5-digital-edition-2826341'
		}
	],
	name: 'game'
};

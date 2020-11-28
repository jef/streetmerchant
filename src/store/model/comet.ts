import {Store} from './store';

export const Comet: Store = {
	labels: {
		inStock: {
			container: '.caption',
			text: ['Aggiungi al carrello']
		}
	},
	links: [
		{
			brand: 'sony',
			cartUrl: 'https://www.comet.it/cart/insert/PSX01802A/online',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.comet.it/ps5/sony-playstation-5'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url: 'https://www.comet.it/ps5/sony-playstation-5-digital-edition'
		},
		{
			brand: 'microsoft',
			cartUrl: 'https://www.comet.it/cart/insert/MIS01077A/online',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://www.comet.it/xbox-serie-x/xbox-series-x'
		},
		{
			brand: 'microsoft',
			cartUrl: 'https://www.comet.it/cart/insert/MIS010761/online',
			model: 'xbox series s',
			series: 'xboxss',
			url: 'https://www.comet.it/xbox-serie-x/xbox-series-s'
		}
	],
	name: 'comet'
};

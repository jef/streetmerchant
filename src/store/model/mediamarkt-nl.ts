import {Store} from './store';

export const MediamarktNL: Store = {
	labels: {
		inStock: {
			container: '.offers',
			text: ['Online op voorraad']
		},
		maxPrice: {
			container: 'span[font-family="price"]',
			euroFormat: false
		},
		outOfStock: {
			container: '.offers',
			text: ['Online uitverkocht.']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.mediamarkt.nl/nl/product/-1475596.html'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.mediamarkt.nl/nl/product/-1664768.html'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url: 'https://www.mediamarkt.nl/nl/product/-1665134.html'
		},
		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://www.mediamarkt.nl/nl/product/-1667555.html'
		},
		{
			brand: 'microsoft',
			model: 'xbox series s',
			series: 'xboxss',
			url: 'https://www.mediamarkt.nl/nl/product/-1673371.html'
		}
	],
	name: 'mediamarkt-nl'
};

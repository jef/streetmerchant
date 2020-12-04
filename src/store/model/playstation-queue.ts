import {Store} from './store';
import fetch from 'node-fetch';

export const PlayStationQueue: Store = {
	labels: {
		inStock: {
			container: '.bulleted-info.queue',
			text: ['queue']
		},
		outOfStock: {
			container: '.productHero-info .out-stock-wrpr:not(.hide)',
			text: ['Out of Stock']
		}
	},
	links: [
		{
			brand: 'sony',
			itemNumber: '3005816',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://direct.playstation.com/en-us/consoles/console/playstation5-console.3005816'
		},
		{
			brand: 'sony',
			itemNumber: '3005817',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://direct.playstation.com/en-us/consoles/console/playstation5-digital-edition-console.3005817'
		}
	],
	name: 'playstation-queue',
};

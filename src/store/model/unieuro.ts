import {Store} from './store';

export const Unieuro: Store = {
	labels: {
		inStock: {
			container: '.price-container',
			text: ['Aggiungi al carrello']
		}
	},
	links: [
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://www.unieuro.it/online/Playstation-5/PlayStation-5-pidSONPS5DISC'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://www.unieuro.it/online/Playstation-5/PlayStation-5-Digital-Edition-pidSONPS5DIGITAL'
		}
	],
	name: 'unieuro'
};

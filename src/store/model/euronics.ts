import {Store} from './store';

export const Euronics: Store = {
	labels: {
		inStock: {
			container: '.purchaseButtonsWidth',
			text: ['Aggiungi al carrello', 'prenota e ritira']
		}
	},
	links: [
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://www.euronics.it/console/sony-computer/playstation-5/eProd202008906/'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://www.euronics.it/console/sony-computer/playstation-5-digital-edition/eProd202008907/'
		}
	],
	name: 'euronics'
};

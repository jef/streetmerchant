import {Store} from './store';

export const EuronicsDE: Store = {
	labels: {
		inStock: {
			container: '.buy-btn--cart-text',
			text: ['Warenkorb']
		},
		maxPrice: {
			container: '.price--content',
			euroFormat: true
		},
		outOfStock: {
			container: '.product--buybox .alert--content',
			text: ['Artikel steht derzeit nicht zur Verfügung']
		}
	},
	links: [
		{
			brand: 'microsoft',
			model: 'xbox series s',
			series: 'xboxss',
			url:
				'https://www.euronics.de/spiele-und-konsolen-film-und-musik/spiele-und-konsolen/xbox-series-x/spielekonsole/xbox-series-s-512gb-konsole-4061856838076'
		},
                {
                        brand: 'sony',
                        model: 'ps5 console',
                        series: 'sonyps5c',
                        url: 'https://euronics.de/spiele-und-konsolen-film-und-musik/spiele-und-konsolen/playstation-5/spielekonsole/playstation-5-konsole-4061856837826'
                },
                {
                        brand: 'sony',
                        model: 'ps5 digital',
                        series: 'sonyps5de',
                        url: 'https://www.euronics.de/spiele-und-konsolen-film-und-musik/spiele-und-konsolen/playstation-5/spielekonsole/playstation-5-digital-edition-konsole-4061856837833'
                }
	],
	name: 'euronics-de'
};

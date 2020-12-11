import {Store} from './store';

export const EbGames: Store = {
	labels: {
		maxPrice: {
			container: '.singleVariantText .prodPriceCont'
		},
		outOfStock: {
			container: '#btnAddToCart[style*="display:none;"] ',
			text: ['add to cart']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.ebgames.ca/Switch/Games/727918/mario-kart-8-deluxe'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.ebgames.ca/PS5/Games/877522'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url: 'https://www.ebgames.ca/PS5/Games/877523'
		},
		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url:
				'https://www.ebgames.ca/Xbox%20Series%20X/Games/877779/xbox-series-x'
		},
		{
			brand: 'microsoft',
			model: 'xbox series s',
			series: 'xboxss',
			url:
				'https://www.ebgames.ca/Xbox%20Series%20X/Games/877780/xbox-series-s'
		}
	],
	name: 'ebgames'
};

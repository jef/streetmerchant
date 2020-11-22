import {Store} from './store';

export const Corsair: Store = {
	labels: {
		inStock: {
			container: '.add_to_cart_form',
			text: ['add to cart']
		},
		maxPrice: {
			container: '.product-price',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.corsair.com/us/en/Categories/Products/Power-Supply-Units/Power-Supply-Units-Advanced/SF-Series/p/CP-9020181-NA'
		},
		{
			brand: 'corsair',
			model: '750 platinum',
			series: 'sf',
			url:
				'https://www.corsair.com/us/en/Categories/Products/Power-Supply-Units/Power-Supply-Units-Advanced/SF-Series/p/CP-9020186-NA'
		},
		{
			brand: 'corsair',
			model: '600 platinum',
			series: 'sf',
			url:
				'https://www.corsair.com/us/en/Categories/Products/Power-Supply-Units/Power-Supply-Units-Advanced/SF-Series/p/CP-9020182-NA'
		}
	],
	name: 'corsair'
};

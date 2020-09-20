import {Store} from './store';

export const Asus: Store = {
	links: [
		{
			brand: 'TEST',
			model: 'CARD',
			series: 'debug',
			url: 'https://store.asus.com/us/item/202003AM280000002/'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://store.asus.com/us/item/202009AM160000001/'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://store.asus.com/us/item/202009AM150000004/'
		}
	],
	labels: {
		inStock: {
			container: '#item_add_cart',
			labels: ['add to cart']
		}
	},
	name: 'asus'
};


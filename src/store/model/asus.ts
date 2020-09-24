import {Store} from './store';

export const Asus: Store = {
	labels: {
		inStock: {
			containers: ['#item_add_cart'],
			text: ['add to cart']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
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
	name: 'asus'
};


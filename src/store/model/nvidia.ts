import {Store} from './store';

export const Nvidia: Store = {
	links: [
		{
			series: 'debug',
			brand: 'TEST',
			model: 'CARD',
			url: 'https://api.digitalriver.com/v1/shoppers/me/products/5379432500/inventory-status?apiKey=9485fa7b159e42edb08a83bde0d83dia',
			cartUrl: 'https://www.nvidia.com/en-us/shop/geforce'
		},
		{
			series: '3080',
			brand: 'nvidia',
			model: 'founders edition',
			url: 'https://api.digitalriver.com/v1/shoppers/me/products/5438481700/inventory-status?apiKey=9485fa7b159e42edb08a83bde0d83dia',
			cartUrl: 'https://www.nvidia.com/en-us/shop/geforce'
		}
	],
	labels: {
		oosList: ['product_inventory_out_of_stock', 'rate limit exceeded']
	},
	name: 'nvidia'
};

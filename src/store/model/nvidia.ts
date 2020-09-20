import {Store} from './store';

export const Nvidia: Store = {
	links: [
		{
			brand: 'TEST',
			cartUrl: 'https://www.nvidia.com/en-us/shop/geforce',
			model: 'CARD',
			series: 'debug',
			url: 'https://api.digitalriver.com/v1/shoppers/me/products/5379432500/inventory-status?apiKey=9485fa7b159e42edb08a83bde0d83dia'
		},
		{
			brand: 'nvidia',
			cartUrl: 'https://www.nvidia.com/en-us/shop/geforce',
			model: 'founders edition',
			series: '3080',
			url: 'https://api.digitalriver.com/v1/shoppers/me/products/5438481700/inventory-status?apiKey=9485fa7b159e42edb08a83bde0d83dia'
		}
	],
	labels: {
		outOfStock: ['product_inventory_out_of_stock', 'rate limit exceeded', 'request timeout']
	},
	name: 'nvidia'
};

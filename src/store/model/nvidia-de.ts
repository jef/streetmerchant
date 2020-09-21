import {Store} from './store';

export const NvidiaDe: Store = {
	links: [
		{
			brand: 'TEST',
			cartUrl: 'https://www.nvidia.com/de-de/shop/geforce',
			model: 'CARD',
			series: 'debug',
			url: 'https://in-and-ru-store-api.uk-e1.cloudhub.io/DR/products/de_de/EUR/5394902900'
		},
		{
			brand: 'nvidia',
			cartUrl: 'https://www.nvidia.com/de-de/shop/geforce',
			model: 'founders edition',
			series: '3080',
			url: 'https://in-and-ru-store-api.uk-e1.cloudhub.io/DR/products/de_de/EUR/5438792300'
		},
	],
	labels: {
		outOfStock: ['product_inventory_out_of_stock', 'rate limit exceeded']
	},
	name: 'nvidia-de'
};

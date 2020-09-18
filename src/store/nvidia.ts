import {Store} from './store';

export const Nvidia: Store = {
	cartUrl: 'https://store.nvidia.com/store/nvidia/en_US/buy/productID.5438481700/clearCart.yes/nextPage.QuickBuyCartPage',
	links: [
		{
			brand: 'nvidia',
			model: 'founders edition',
			url: 'https://www.nvidia.com/en-us/geforce/buy/',
			oosLabels: ['out of stock']
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			url: 'https://www.nvidia.com/en-us/shop/geforce/?page=1&limit=9&locale=en-us&search=3080',
			oosLabels: ['out of stock']
		}
	],
	name: 'nvidia'
};

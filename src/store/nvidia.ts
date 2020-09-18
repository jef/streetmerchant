import {Store} from './store';

export const Nvidia: Store = {
	cartUrl: 'https://store.nvidia.com/store/nvidia/en_US/buy/productID.5438481700/clearCart.yes/nextPage.QuickBuyCartPage',
	links: [
		{
			brand: 'nvidia',
			model: 'founders edition',
			url: 'https://api.digitalriver.com/v1/shoppers/me/products/5438481700/inventory-status?apiKey=9485fa7b159e42edb08a83bde0d83dia',
			oosLabels: ['PRODUCT_INVENTORY_OUT_OF_STOCK']
		}
	],
	name: 'nvidia'
};

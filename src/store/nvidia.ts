import {Store} from './store';

export const Nvidia: Store = {
	cartUrl: 'https://www.nvidia.com/en-us/shop/geforce/?page=1&limit=9&locale=en-us&gpu=RTX%203080&gpu_filter=RTX%203090~1,RTX%203080~7,RTX%203070~1,TITAN%20RTX~1,RTX%202080%20Ti~2,RTX%202080%20SUPER~16,RTX%202080~5,RTX%202070%20SUPER~26,RTX%202070~15,RTX%202060%20SUPER~7,RTX%202060~36,GTX%201660%20Ti~29,GTX%201660%20SUPER~4,GTX%201660~11,GTX%201650%20Ti~6,GTX%201650%20SUPER~8,GTX%201650~34',
	links: [
		{
			brand: 'nvidia',
			model: 'founders edition',
			url: 'https://api.digitalriver.com/v1/shoppers/me/products/5438481700/inventory-status?apiKey=9485fa7b159e42edb08a83bde0d83dia',
			oosLabels: ['product_inventory_out_of_stock']
		}
	],
	name: 'nvidia'
};

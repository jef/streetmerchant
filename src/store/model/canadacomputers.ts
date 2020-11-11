import {Store} from './store';

export const CanadaComputers: Store = {
	labels: {
		maxPrice: {
			container: 'NEEDS TO BE FILLED IN',
			euroFormat: false
		},
		outOfStock: {
			container: 'NEEDS TO BE FILLED IN',
			text: ['Not Available Online']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=151558'
		},
		{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen5950',
			url: 'https://www.canadacomputers.com/product_info.php?cPath=4_64&item_id=183427'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://www.canadacomputers.com/product_info.php?cPath=4_64&item_id=183430'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url: 'https://www.canadacomputers.com/product_info.php?cPath=4_64&item_id=183431'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://www.canadacomputers.com/product_info.php?cPath=4_64&item_id=183432'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3070',
			url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183500'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3070',
			url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183499'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3070',
			url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183498'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181797'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181376'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181798'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181375'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3090',
			url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181854'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3090',
			url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181852'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3090',
			url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181853'
		}
	],
	name: 'canadacomputers',
	waitUntil: 'domcontentloaded'
};

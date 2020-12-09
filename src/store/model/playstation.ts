import {Store} from './store';
import fetch from 'node-fetch';

export const PlayStation: Store = {
	labels: {
		inStock: {
			container: '.productHero-info .add-to-cart:not(.hide)',
			text: ['Add']
		},
		outOfStock: {
			container: '.productHero-info .out-stock-wrpr:not(.hide)',
			text: ['Out of Stock']
		}
	},
	links: [
		{
			brand: 'sony',
			itemNumber: '3005715',
			model: 'ps5 dualsense',
			series: 'sonyps5ds',
			url:
				'https://direct.playstation.com/en-us/accessories/accessory/dualsense-wireless-controller.3005715'
		},
		{
			brand: 'sony',
			itemNumber: '3005715',
			model: 'ps5 dualsense charger',
			series: 'sonyps5dsc',
			url:
				'https://direct.playstation.com/en-us/accessories/accessory/dualsense-charging-station.3005837'
		},
		{
			brand: 'sony',
			itemNumber: '3005715',
			model: 'ps5 Pulse3D',
			series: 'sonyps5p3d',
			url:
				'https://direct.playstation.com/en-us/accessories/accessory/pulse-3d-wireless-headset.3005688'
		},
		{
			brand: 'sony',
			itemNumber: '3005715',
			model: 'ps5 media remote',
			series: 'sonyps5mr',
			url:
				'https://direct.playstation.com/en-us/accessories/accessory/media-remote.3005727'
		},
		{
			brand: 'sony',
			itemNumber: '3005816',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://direct.playstation.com/en-us/consoles/console/playstation5-console.3005816'
		},
		{
			brand: 'sony',
			itemNumber: '3005817',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://direct.playstation.com/en-us/consoles/console/playstation5-digital-edition-console.3005817'
		}
	],
	name: 'playstation',
	realTimeInventoryLookup: async (itemNumber: string) => {
		const request_url =
			'https://api.direct.playstation.com/commercewebservices/ps-direct-us/products/productList?fields=BASIC&productCodes=' +
			itemNumber;
		const response = await fetch(request_url);
		const response_json = await response.json();
		if (
			response_json.products[0].stock.stockLevelStatus !== 'outOfStock' &&
			response_json.products[0].maxOrderQuantity >= 0
		) {
			return true;
		}

		return false;
	}
};

import {Store} from './store';

export const Target: Store = {
	labels: {
		inStock: [
			{
				container: '[data-test="preorderButton"]',
				text: ['Preorder now']
			},
			{
				container: '[data-test="shipItButton"]',
				text: ['Ship it']
			}
		],
		maxPrice: {
			container: '[data-test="product-price"]'
		}
	},
	links: [
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.target.com/p/playstation-5-console/-/A-81114595'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://www.target.com/p/playstation-5-digital-edition-console/-/A-81114596'
		},
		{
			brand: 'sony',
			model: 'ps5 dualsense',
			series: 'sonyps5ds',
			url:
				'https://www.target.com/p/dualsense-wireless-controller-for-playstation-5/-/A-81114477'
		},
		{
			brand: 'sony',
			model: 'ps5 dualsense charger',
			series: 'sonyps5dsc',
			url:
				'https://www.target.com/p/dualsense-charging-station-for-playstation-5/-/A-81114475'
		},
		{
			brand: 'sony',
			model: 'ps5 Pulse3D',
			series: 'sonyps5p3d',
			url:
				'https://www.target.com/p/sony-pulse-3d-wireless-gaming-headset-for-playstation-5/-/A-81114474'
		},
		{
			brand: 'sony',
			model: 'ps5 media remote',
			series: 'sonyps5mr',
			url:
				'https://www.target.com/p/playstation-5-media-remote/-/A-81114476'
		},
		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://www.target.com/p/xbox-series-x-console/-/A-80790841'
		},
		{
			brand: 'microsoft',
			model: 'xbox series s',
			series: 'xboxss',
			url: 'https://www.target.com/p/xbox-series-s-console/-/A-80790842'
		}
	],
	name: 'target'
};

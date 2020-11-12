import {Store} from './store';

export const MikesComputerShop: Store = {
	labels: {
		outOfStock: {
			container:
				'div.gd-1.State.Pre-Order',
			text: ['Pre-Order']
		},
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://mikescomputershop.com/product/10906221'
		},

		{
			brand: 'zotac',
			model: 'twin edge',
			series: '3070',
			url: 'https://mikescomputershop.com/product/10906221'
		},
		{
			brand: 'gigabyte',
			model: 'eagle',
			series: '3070',
			url: 'https://mikescomputershop.com/product/10909756'
		},
		{
			brand: 'asus',
			model: 'dual',
			series: '3070',
			url: 'https://mikescomputershop.com/product/10909754'
		},
		{
			brand: 'asus',
			model: 'dual oc',
			series: '3070',
			url: 'https://mikescomputershop.com/product/10909752'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3070',
			url: 'https://mikescomputershop.com/product/10909757'
		},
		{
			brand: 'msi',
			model: 'ventus 2x',
			series: '3070',
			url: 'https://mikescomputershop.com/product/10909671'
		},
		{
			brand: 'msi',
			model: 'ventus 3x',
			series: '3070',
			url: 'https://mikescomputershop.com/product/10909675'
		},
		{
			brand: 'asus',
			model: 'gaming',
			series: '3070',
			url: 'https://mikescomputershop.com/product/10909753'
		},
		{
			brand: 'msi',
			model: 'gaming x3',
			series: '3070',
			url: 'https://mikescomputershop.com/product/10909680'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3070',
			url: 'https://mikescomputershop.com/product/10909755'
		}, //3070s

		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://mikescomputershop.com/product/10887292'
		}, //3080s

		{
			brand: 'asus',
			model: 'gaming',
			series: '3090',
			url: 'https://mikescomputershop.com/product/10892784'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3090',
			url: 'https://mikescomputershop.com/product/10892788'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3090',
			url: 'https://mikescomputershop.com/product/10892787'
		},
		{
			brand: 'asus',
			model: 'gaming',
			series: '3090',
			url: 'https://mikescomputershop.com/product/10892783'
		},
		{
			brand: 'msi',
			model: 'ventus 3x',
			series: '3090',
			url: 'https://mikescomputershop.com/product/10892786'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090',
			url: 'https://mikescomputershop.com/product/10892785'
		}, //3090s

	],
	name: 'mikescomputershop',
	waitUntil: 'domcontentloaded'
};

import {Store} from './store';

export const AmazonNl: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['voer de karakters in die u hieronder ziet']
		},
		inStock: {
			container: '#desktop_buybox',
			text: ['in winkelwagen plaatsen']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.com/dp/B07MQ36Z6L'
		},
		{
			brand: 'msi',
			model: 'ventus',
			series: '3080',
			url: 'https://www.amazon.nl/3080-VENTUS-3X-10G-OC/dp/B08HM4M621'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.amazon.nl/3080-GAMING-TRIO-10G-grafische/dp/B08HM4V2DH'
		}
	],
	name: 'amazon-nl'
};

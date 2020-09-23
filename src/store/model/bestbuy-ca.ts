import {Store} from './store';

export const BestBuyCa: Store = {
	labels: {
		inStock: {
			container: '#root',
			text: ['available online']
		}
	},
	links: [
		{
			brand: 'TEST',
			model: 'CARD',
			series: 'debug',
			url: 'https://www.bestbuy.ca/en-ca/product/msi-nvidia-geforce-rtx-2060-super-gaming-x-8gb-gddr6-video-card/14419420?intl=nosplash'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://www.bestbuy.ca/en-ca/product/zotac-geforce-rtx-3080-trinity-10gb-gddr6x-video-card/14953249?intl=nosplash'
		}
	],
	name: 'bestbuy-ca',
	waitUntil: 'domcontentloaded'
};

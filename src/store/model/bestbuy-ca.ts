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
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.bestbuy.ca/en-ca/product/msi-nvidia-geforce-rtx-2060-super-gaming-x-8gb-gddr6-video-card/14419420?intl=nosplash'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://www.bestbuy.ca/en-ca/product/zotac-geforce-rtx-3080-trinity-10gb-gddr6x-video-card/14953249?intl=nosplash'
		},
		{
			brand: 'msi',
			model: 'ventus 3x',
			series: '3080',
			url: 'https://www.bestbuy.ca/en-ca/product/msi-nvidia-geforce-rtx-3080-ventus-3x-10gb-gddr6x-video-card/14950588?intl=nosplash'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.bestbuy.ca/en-ca/product/evga-geforce-rtx-3080-xc3-ultra-gaming-10gb-gddr6x-video-card/14961449?intl=nosplash'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.bestbuy.ca/en-ca/product/asus-tuf-gaming-geforce-rtx-3080-10gb-gddr6x-video-card/14953248?intl=nosplash'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3080',
			url: 'https://www.bestbuy.ca/en-ca/product/asus-rog-strix-geforce-rtx-3080-10gb-gddr6x-video-card/14954116?intl=nosplash'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3090',
			url: 'https://www.bestbuy.ca/en-ca/product/zotac-geforce-rtx-3090-trinity-24gb-gddr6x-video-card/14953250?intl=nosplash'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url: 'https://www.bestbuy.ca/en-ca/product/asus-tuf-gaming-geforce-rtx-3090-24gb-gddr6x-video-card/14953247?intl=nosplash'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3090',
			url: 'https://www.bestbuy.ca/en-ca/product/asus-rog-strix-geforce-rtx-3090-24gb-gddr6x-video-card/14954117?intl=nosplash'
		},
		{
			brand: 'msi',
			model: 'ventus 3x',
			series: '3090',
			url: 'https://www.bestbuy.ca/en-ca/product/msi-nvidia-geforce-rtx-3090-ventus-3x-oc-24gb-gddr6x-video-card/14966477?intl=nosplash'
		}
	],
	name: 'bestbuy-ca',
	waitUntil: 'domcontentloaded'
};

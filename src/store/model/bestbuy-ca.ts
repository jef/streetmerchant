import {Store} from './store';

export const BestBuyCa: Store = {
	labels: {
		inStock: {
			container: '.x-product-detail-page .addToCartButton:enabled',
			text: ['Add to Cart']
		},
		maxPrice: {
			container:
				'div[class^="productPricingContainer"] span[class^="screenReaderOnly_"',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.bestbuy.ca/en-ca/product/msi-nvidia-geforce-rtx-2060-super-gaming-x-8gb-gddr6-video-card/14419420?intl=nosplash'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url:
				'https://www.bestbuy.ca/en-ca/product/zotac-geforce-rtx-3080-trinity-10gb-gddr6x-video-card/14953249?intl=nosplash'
		},
		{
			brand: 'msi',
			model: 'ventus 3x',
			series: '3080',
			url:
				'https://www.bestbuy.ca/en-ca/product/msi-nvidia-geforce-rtx-3080-ventus-3x-10gb-gddr6x-video-card/14950588?intl=nosplash'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url:
				'https://www.bestbuy.ca/en-ca/product/evga-geforce-rtx-3080-xc3-ultra-gaming-10gb-gddr6x-video-card/14961449?intl=nosplash'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url:
				'https://www.bestbuy.ca/en-ca/product/asus-tuf-gaming-geforce-rtx-3080-10gb-gddr6x-video-card/14953248?intl=nosplash'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3080',
			url:
				'https://www.bestbuy.ca/en-ca/product/asus-rog-strix-geforce-rtx-3080-10gb-gddr6x-video-card/14954116?intl=nosplash'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3090',
			url:
				'https://www.bestbuy.ca/en-ca/product/zotac-geforce-rtx-3090-trinity-24gb-gddr6x-video-card/14953250?intl=nosplash'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url:
				'https://www.bestbuy.ca/en-ca/product/asus-tuf-gaming-geforce-rtx-3090-24gb-gddr6x-video-card/14953247?intl=nosplash'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3090',
			url:
				'https://www.bestbuy.ca/en-ca/product/asus-rog-strix-geforce-rtx-3090-24gb-gddr6x-video-card/14954117?intl=nosplash'
		},
		{
			brand: 'msi',
			model: 'ventus 3x',
			series: '3090',
			url:
				'https://www.bestbuy.ca/en-ca/product/msi-nvidia-geforce-rtx-3090-ventus-3x-oc-24gb-gddr6x-video-card/14966477?intl=nosplash'
		},
		{
			brand: 'msi',
			model: 'ventus 3x',
			series: '3070',
			url:
				'https://www.bestbuy.ca/en-ca/product/msi-nvidia-geforce-rtx-3070-ventus-3x-oc-8gb-gddr6x-video-card/15038016?intl=nosplash'
		},
		{
			brand: 'zotac',
			model: 'twin edge oc',
			series: '3070',
			url:
				'https://www.bestbuy.ca/en-ca/product/zotac-nvidia-geforce-rtx-3070-twin-edge-oc-8gb-gddr6x-video-card/15000078?intl=nosplash'
		},
		{
			brand: 'zotac',
			model: 'twin edge',
			series: '3070',
			url:
				'https://www.bestbuy.ca/en-ca/product/zotac-nvidia-geforce-rtx-3070-twin-edge-8gb-gddr6x-video-card/15000079?intl=nosplash'
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			series: '3070',
			url:
				'https://www.bestbuy.ca/en-ca/product/nvidia-geforce-rtx-3070-8gb-gddr6-video-card-only-at-best-buy/15078017?intl=nosplash'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://www.bestbuy.ca/en-ca/product/playstation-5-console-online-only/14962185?intl=nosplash'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5de',
			url:
				'https://www.bestbuy.ca/en-ca/product/playstation-5-digital-edition-console-online-only/14962184?intl=nosplash'
		}
	],
	name: 'bestbuy-ca',
	waitUntil: 'domcontentloaded'
};

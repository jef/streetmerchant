import {Store} from './store';

export const Bol: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['voer de karakters in die u hieronder ziet']
		},
		inStock: {
			container: '.buy-block',
			text: ['Op voorraad']
		},
		maxPrice: {
			container: 'span[class*="PriceString"]',
			euroFormat: true
		},
		outOfStock: {
			container: '.buy-block',
			text: ['Niet leverbaar']
		}
	},
	links: [
		{
			brand: 'test:brand',
			cartUrl:
				'https://www.bol.com/nl/order/basket/addItems.html?productId=9300000010038849&offerId=0&quantity=1',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.bol.com/nl/p/nintendo-switch-console-geel-blauw-verbeterde-accuduur-nieuw-model/9300000010038849/'
		},
		{
			brand: 'sony',
			cartUrl:
				'https://www.bol.com/nl/order/basket/addItems.html?productId=9300000004162282&offerId=0&quantity=1',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://www.bol.com/nl/p/sony-playstation-5-console/9300000004162282/'
		}
	],
	name: 'bol'
};

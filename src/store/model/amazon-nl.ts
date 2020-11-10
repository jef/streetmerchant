import {Store} from './store';

export const AmazonNl: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['voer de karakters in die u hieronder ziet']
		},
		inStock: {
			container: '#availability',
			text: ['op voorraad', 'verkrijgbaar vanaf', 'wordt gewoonlijk verzonden binnen', 'nog slechts']
		},
		maxPrice: {
			container: 'span[class*="PriceString"]',
			euroFormat: true
		},
		outOfStock: [
			{
				container: '#availability',
				text: ['tijdelijk niet']
			},
			{
				container: '#outOfStock',
				text: ['we weten niet of en wanneer dit item weer op voorraad is']
			}
		]
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.nl/dp/B083GGYNQ6'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08HM4M621'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08HM4V2DH'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08HJ9XFNM'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08HH1BMQQ'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08HN7VVLJ'
		},
		{
			brand: 'amd',
			cartUrl: 'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08166SLDF&Quantity.1=1',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://www.amazon.nl/dp/product/B08166SLDF'
		},
		{
			brand: 'amd',
			cartUrl: 'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B0815XFSGK&Quantity.1=1',
			model: '5800x',
			series: 'ryzen5800',
			url: 'https://www.amazon.nl/dp/product/B0815XFSGK'
		},
		{
			brand: 'amd',
			cartUrl: 'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08164VTWH&Quantity.1=1',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://www.amazon.nl/dp/product/B08164VTWH'
		},
		{
			brand: 'amd',
			cartUrl: 'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B0815Y8J9N&Quantity.1=1',
			model: '5950x',
			series: 'ryzen5950',
			url: 'https://www.amazon.nl/dp/product/B0815Y8J9N'
		}
	],
	name: 'amazon-nl'
};

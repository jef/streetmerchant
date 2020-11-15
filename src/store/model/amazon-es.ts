import {Store} from './store';

export const AmazonEs: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['introduzca los caracteres que ve a continuación']
		},
		inStock: {
			container: '#desktop_buybox',
			text: ['añadir a la cesta']
		},
		maxPrice: {
			container: 'span[class*="PriceString"]',
			euroFormat: true
		}
	},
	links: [
		{
			brand: 'test:brand',
			cartUrl:
				'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B083JX52VG&Quantity.1=1',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.es/dp/B083JX52VG'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HM4V2DH&Quantity.1=1',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HM4V2DH'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HGYXP4C&Quantity.1=1',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HGYXP4C'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HJ9XFNM&Quantity.1=1',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HJ9XFNM'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HGBYWQ6&Quantity.1=1',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HGBYWQ6'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HGLN78Q&Quantity.1=1',
			model: 'xc3',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HGLN78Q'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HH1BMQQ&Quantity.1=1',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HH1BMQQ'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HLZXHZY&Quantity.1=1',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HLZXHZY'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HHZVZ3N&Quantity.1=1',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HHZVZ3N'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HN37VQK&Quantity.1=1',
			model: 'tuf',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HN37VQK'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HN4DSTC&Quantity.1=1',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HN4DSTC'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HN6KYS3&Quantity.1=1',
			model: 'strix oc',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HN6KYS3'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HM4M621&Quantity.1=1',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HM4M621'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HR1NPPQ&Quantity.1=1',
			model: 'trinity',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HR1NPPQ'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08166SLDF&Quantity.1=1',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://www.amazon.es/dp/B08166SLDF'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B0815XFSGK&Quantity.1=1',
			model: '5800x',
			series: 'ryzen5800',
			url: 'https://www.amazon.es/dp/B0815XFSGK'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08164VTWH&Quantity.1=1',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://www.amazon.es/dp/B08164VTWH'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B0815Y8J9N&Quantity.1=1',
			model: '5950x',
			series: 'ryzen5950',
			url: 'https://www.amazon.es/dp/B0815Y8J9N'
		}
	],
	name: 'amazon-es'
};

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
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.es/dp/B083JX52VG/'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HM4V2DH'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HGYXP4C'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HJ9XFNM'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HGBYWQ6'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HGLN78Q'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HH1BMQQ'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HLZXHZY'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HHZVZ3N'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HN37VQK'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HN4DSTC'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HN6KYS3'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HM4M621'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://www.amazon.es/dp/B08HR1NPPQ'
		}
	],
	name: 'amazon-es'
};

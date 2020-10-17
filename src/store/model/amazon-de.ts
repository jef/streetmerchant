import {Store} from './store';

export const AmazonDe: Store = {
	backoffStatusCodes: [403, 429, 503],
	labels: {
		captcha: {
			container: 'body',
			text: ['geben sie die unten angezeigten zeichen ein', 'geben sie die zeichen unten ein']
		},
		inStock: {
			container: '#desktop_buybox',
			text: ['in den einkaufswagen']
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
			url: 'https://www.amazon.de/dp/B083JX52VG/'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HN7VVLJ'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HN6KYS3'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HN37VQK'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HN4DSTC'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HGBYWQ6'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HGYXP4C'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HGLN78Q'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HH1BMQQ'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HJ9XFNM'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HHZVZ3N'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HLZXHZY'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HM4V2DH'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HM4M621'
		},
		{
			brand: 'pny',
			model: 'xlr8 rgb',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HBTJMLJ'
		},
		{
			brand: 'pny',
			model: 'xlr8 rgb',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HBR7QBM'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HR1NPPQ'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HN642LY'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HN51T8Q'
		}
	],
	name: 'amazon-de'
};

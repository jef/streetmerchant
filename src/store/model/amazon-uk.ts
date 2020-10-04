import {Store} from './store';

export const AmazonUk: Store = {
	backoffStatusCodes: [403, 429, 503],
	labels: {
		captcha: {
			container: 'body',
			text: ['enter the characters you see below']
		},
		inStock: {
			container: '#availability',
			text: ['in stock']
		},
		maxPrice: {
			container: 'span[class*="PriceString"]'
		},
		outOfStock: [
			{
				container: '#availability',
				text: ['out of stock', 'unavailable']
			},
			{
				container: '#backInStock',
				text: ['unavailable']
			}
		]
	},
	links: [
		{
			brand: 'test:brand',
			cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B081265T5Z&Quantity.1=1',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.co.uk/dp/B081265T5Z/'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HN37VQK'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HN4DSTC'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HGYXP4C'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HJ9XFNM'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HGBYWQ6'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HGLN78Q'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HH1BMQQ'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HLZXHZY'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HHZVZ3N'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HM4V2DH'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HM4M621'
		},
		{
			brand: 'pny',
			model: 'xlr8',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HBTJMLJ'
		},
		{
			brand: 'pny',
			model: 'xlr8-rgb',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HBR7QBM'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HR1NPPQ'
		}
	],
	name: 'amazon-uk'
};

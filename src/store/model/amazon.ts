import {Store} from './store';

export const Amazon: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['enter the characters you see below']
		},
		inStock: {
			container: '#desktop_buybox',
			text: ['add to cart']
		},
		maxPrice: {
			container: 'span[class*="PriceString"]'
		}
	},
	links: [
		{
			brand: 'test:brand',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07TDN1SC5&Quantity.1=1',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.com/dp/B07TDN1SC5'
		},
		{
			brand: 'pny',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBR7QBM&Quantity.1=1',
			model: 'xlr8',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HBR7QBM'
		},
		{
			brand: 'pny',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBTJMLJ&Quantity.1=1',
			model: 'xlr8 rgb',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HBTJMLJ'
		},
		{
			brand: 'msi',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR7SV3M&Quantity.1=1',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HR7SV3M'
		},
		{
			brand: 'evga',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR3Y5GQ&Quantity.1=1',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HR3Y5GQ'
		},
		{
			brand: 'evga',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR55YB5&Quantity.1=1',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HR55YB5'
		},
		{
			brand: 'evga',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR3DPGW&Quantity.1=1',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HR3DPGW'
		},
		{
			brand: 'evga',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR4RJ3Q&Quantity.1=1',
			model: 'xc3',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HR4RJ3Q'
		},
		{
			brand: 'evga',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR6FMF3&Quantity.1=1',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HR6FMF3'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJTH61J&Quantity.1=1',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HJTH61J'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJS2JLJ&Quantity.1=1',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HJS2JLJ'
		},
		{
			brand: 'asus',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HH5WF97&Quantity.1=1',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HH5WF97'
		},
		{
			brand: 'asus',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HHDP9DW&Quantity.1=1',
			model: 'tuf',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HHDP9DW'
		},
		{
			brand: 'asus',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08J6F174Z&Quantity.1=1',
			model: 'rog strix oc',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08J6F174Z'
		},
		{
			brand: 'asus',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08J6GMWCQ&Quantity.1=1',
			model: 'rog strix oc',
			series: '3090',
			url: 'https://www.amazon.com/dp/B08J6GMWCQ'
		},
		{
			brand: 'msi',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR5SXPS&Quantity.1=1',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HR5SXPS'
		},
		{
			brand: 'zotac',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJNKT3P&Quantity.1=1',
			model: 'trinity',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HJNKT3P'
		},
		{
			brand: 'zotac',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJQ182D&Quantity.1=1',
			model: 'trinity',
			series: '3090',
			url: 'https://www.amazon.com/dp/B08HJQ182D'
		},
		{
			brand: 'pny',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBQWBHH&Quantity.1=1',
			model: 'xlr8',
			series: '3090',
			url: 'https://www.amazon.com/dp/B08HBQWBHH'
		},
		{
			brand: 'pny',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBVX53D&Quantity.1=1',
			model: 'xlr8',
			series: '3090',
			url: 'https://www.amazon.com/dp/B08HBVX53D'
		},
		{
			brand: 'msi',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HRBW6VB&Quantity.1=1',
			model: 'gaming x trio',
			series: '3090',
			url: 'https://www.amazon.com/dp/B08HRBW6VB'
		},
		{
			brand: 'msi',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR9D2JS&Quantity.1=1',
			model: 'ventus 3x',
			series: '3090',
			url: 'https://www.amazon.com/dp/B08HR9D2JS'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJRF2CN&Quantity.1=1',
			model: 'gaming oc',
			series: '3090',
			url: 'https://www.amazon.com/dp/B08HJRF2CN'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJPDJTY&Quantity.1=1',
			model: 'eagle oc',
			series: '3090',
			url: 'https://www.amazon.com/dp/B08HJPDJTY'
		},
		{
			brand: 'asus',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJGNJ81&Quantity.1=1',
			model: 'tuf oc',
			series: '3090',
			url: 'https://www.amazon.com/dp/B08HJGNJ81'
		},
		{
			brand: 'asus',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJLLF7G&Quantity.1=1',
			model: 'tuf oc',
			series: '3090',
			url: 'https://www.amazon.com/dp/B08HJLLF7G'
		}
	],
	name: 'amazon'
};

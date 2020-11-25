import {Store} from './store';

export const Amazon: Store = {
	backoffStatusCodes: [403, 429, 503],
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
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07TDN1SC5&Quantity.1=1',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.com/dp/B07TDN1SC5'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08L8LG4M3&Quantity.1=1',
			model: 'dual',
			series: '3070',
			url: 'https://www.amazon.com/dp/B08L8LG4M3'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08L8HPKR6&Quantity.1=1',
			model: 'dual',
			series: '3070',
			url: 'https://www.amazon.com/dp/B08L8HPKR6'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08LW46GH2&Quantity.1=1',
			model: 'xc3 black',
			series: '3070',
			url: 'https://www.amazon.com/dp/B08LW46GH2'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08L8JNTXQ&Quantity.1=1',
			model: 'strix',
			series: '3070',
			url: 'https://www.amazon.com/dp/B08L8JNTXQ'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08L8KC1J7&Quantity.1=1',
			model: 'tuf',
			series: '3070',
			url: 'https://www.amazon.com/dp/B08L8KC1J7'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08KY266MG&Quantity.1=1',
			model: 'gaming oc',
			series: '3070',
			url: 'https://www.amazon.com/dp/B08KY266MG'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08KWN2LZG&Quantity.1=1',
			model: 'gaming',
			series: '3070',
			url: 'https://www.amazon.com/dp/B08KWN2LZG'
		},
		{
			brand: 'pny',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBJB7YD&Quantity.1=1',
			model: 'xlr8 revel',
			series: '3070',
			url: 'https://www.amazon.com/dp/B08HBJB7YD'
		},
		{
			brand: 'pny',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBF5L3K&Quantity.1=1',
			model: 'xlr8 uprising',
			series: '3070',
			url: 'https://www.amazon.com/dp/B08HBF5L3K'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08KWPDXJZ&Quantity.1=1',
			model: 'ventus 2x oc',
			series: '3070',
			url: 'https://www.amazon.com/dp/B08KWPDXJZ'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08KWLMZV4&Quantity.1=1',
			model: 'ventus 3x oc',
			series: '3070',
			url: 'https://www.amazon.com/dp/B08KWLMZV4'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08LF1CWT2&Quantity.1=1',
			model: 'twin edge oc',
			series: '3070',
			url: 'https://www.amazon.com/dp/B08LF1CWT2'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08LF32LJ6&Quantity.1=1',
			model: 'gaming',
			series: '3070',
			url: 'https://www.amazon.com/dp/B08LF32LJ6'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08L8L71SM&Quantity.1=1',
			model: 'xc3 ultra',
			series: '3070',
			url: 'https://www.amazon.com/dp/B08L8L71SM'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08L8L9TCZ&Quantity.1=1',
			model: 'ftw3',
			series: '3070',
			url: 'https://www.amazon.com/dp/B08L8L9TCZ'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08LW46GH2&Quantity.1=1',
			model: 'xc3 black',
			series: '3070',
			url: 'https://www.amazon.com/dp/B08LW46GH2'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08KY266MG&Quantity.1=1',
			model: 'gaming oc',
			series: '3070',
			url: 'https://www.amazon.com/dp/B08KY266MG'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08M13DXSZ&Quantity.1=1',
			model: 'vision oc',
			series: '3070',
			url: 'https://www.amazon.com/dp/B08M13DXSZ'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08M4YFNX2&Quantity.1=1',
			model: 'gaming oc',
			series: '3070',
			url: 'https://www.amazon.com/dp/B08M4YFNX2'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08KXZV626&Quantity.1=1',
			model: 'eagle',
			series: '3070',
			url: 'https://www.amazon.com/dp/B08KXZV626'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08KY322TH&Quantity.1=1',
			model: 'eagle oc',
			series: '3070',
			url: 'https://www.amazon.com/dp/B08KY322TH'
		},
		{
			brand: 'pny',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBR7QBM&Quantity.1=1',
			model: 'xlr8 revel',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HBR7QBM'
		},
		{
			brand: 'pny',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBTJMLJ&Quantity.1=1',
			model: 'xlr8 revel',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HBTJMLJ'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR7SV3M&Quantity.1=1',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HR7SV3M'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR3Y5GQ&Quantity.1=1',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HR3Y5GQ'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR55YB5&Quantity.1=1',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HR55YB5'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR3DPGW&Quantity.1=1',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HR3DPGW'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR4RJ3Q&Quantity.1=1',
			model: 'xc3',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HR4RJ3Q'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR6FMF3&Quantity.1=1',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HR6FMF3'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJTH61J&Quantity.1=1',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HJTH61J'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJS2JLJ&Quantity.1=1',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HJS2JLJ'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HH5WF97&Quantity.1=1',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HH5WF97'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HHDP9DW&Quantity.1=1',
			model: 'tuf',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HHDP9DW'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08J6F174Z&Quantity.1=1',
			model: 'strix oc',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08J6F174Z'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08J6GMWCQ&Quantity.1=1',
			model: 'strix oc',
			series: '3090',
			url: 'https://www.amazon.com/dp/B08J6GMWCQ'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR5SXPS&Quantity.1=1',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HR5SXPS'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJNKT3P&Quantity.1=1',
			model: 'trinity',
			series: '3080',
			url: 'https://www.amazon.com/dp/B08HJNKT3P'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJQ182D&Quantity.1=1',
			model: 'trinity',
			series: '3090',
			url: 'https://www.amazon.com/dp/B08HJQ182D'
		},
		{
			brand: 'pny',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBQWBHH&Quantity.1=1',
			model: 'xlr8 revel',
			series: '3090',
			url: 'https://www.amazon.com/dp/B08HBQWBHH'
		},
		{
			brand: 'pny',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBVX53D&Quantity.1=1',
			model: 'xlr8 revel',
			series: '3090',
			url: 'https://www.amazon.com/dp/B08HBVX53D'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HRBW6VB&Quantity.1=1',
			model: 'gaming x trio',
			series: '3090',
			url: 'https://www.amazon.com/dp/B08HRBW6VB'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR9D2JS&Quantity.1=1',
			model: 'ventus 3x',
			series: '3090',
			url: 'https://www.amazon.com/dp/B08HR9D2JS'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJRF2CN&Quantity.1=1',
			model: 'gaming oc',
			series: '3090',
			url: 'https://www.amazon.com/dp/B08HJRF2CN'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJPDJTY&Quantity.1=1',
			model: 'eagle oc',
			series: '3090',
			url: 'https://www.amazon.com/dp/B08HJPDJTY'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJGNJ81&Quantity.1=1',
			model: 'tuf oc',
			series: '3090',
			url: 'https://www.amazon.com/dp/B08HJGNJ81'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJLLF7G&Quantity.1=1',
			model: 'tuf oc',
			series: '3090',
			url: 'https://www.amazon.com/dp/B08HJLLF7G'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08166SLDF&Quantity.1=1',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://www.amazon.com/dp/B08166SLDF'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0815XFSGK&Quantity.1=1',
			model: '5800x',
			series: 'ryzen5800',
			url: 'https://www.amazon.com/dp/product/B0815XFSGK'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08164VTWH&Quantity.1=1',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://www.amazon.com/dp/B08164VTWH'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0815Y8J9N&Quantity.1=1',
			model: '5950x',
			series: 'ryzen5950',
			url: 'https://www.amazon.com/dp/B0815Y8J9N'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NS4W2ZY&Quantity.1=1',
			model: 'amd reference',
			series: 'rx6800xt',
			url: 'https://www.amazon.com/dp/B08NS4W2ZY'
		},
		{
			brand: 'sapphire',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08MVC76SR&Quantity.1=1',
			model: 'amd reference',
			series: 'rx6800xt',
			url: 'https://www.amazon.com/dp/B08MVC76SR'
		},
		{
			brand: 'xfx',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08N6ZLX9B&Quantity.1=1',
			model: 'amd reference',
			series: 'rx6800xt',
			url: 'https://www.amazon.com/dp/B08N6ZLX9B'
		},
		{
			brand: 'powercolor',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08MNZM5TK&Quantity.1=1',
			model: 'amd reference',
			series: 'rx6800',
			url: 'https://www.amazon.com/dp/B08MNZM5TK'
		},
		{
			brand: 'sapphire',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08MVCLBWK&Quantity.1=1',
			model: 'amd reference',
			series: 'rx6800',
			url: 'https://www.amazon.com/dp/B08MVCLBWK'
		},
		{
			brand: 'sony',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08FC5L3RG&Quantity.1=1',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.amazon.com/dp/B08FC5L3RG'
		},
		{
			brand: 'sony',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08FC6MR62&Quantity.1=1',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url: 'https://www.amazon.com/dp/B08FC6MR62'
		},
		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://www.amazon.com/dp/B08H75RTZ8'
		},
		{
			brand: 'microsoft',
			model: 'xbox series s',
			series: 'xboxss',
			url: 'https://www.amazon.com/dp/B08G9J44ZN'
		},
		{
			brand: 'corsair',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07M63H81H&Quantity.1=1',
			model: '750 platinum',
			series: 'sf',
			url: 'https://www.amazon.com/dp/B07M63H81H'
		},
		{
			brand: 'corsair',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07F84FJ1G&Quantity.1=1',
			model: '600 platinum',
			series: 'sf',
			url: 'https://www.amazon.com/dp/B07F84FJ1G'
		}
	],
	name: 'amazon'
};

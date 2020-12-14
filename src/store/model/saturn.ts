import {Store} from './store';

export const Saturn: Store = {
	backoffStatusCodes: [403, 429, 503],
	currency: '€',
	labels: {
		captcha: {
			container: 'p',
			text: ['Das ging uns leider zu schnell.']
		},
		maxPrice: {
			container: 'span[font-family="price"]',
			euroFormat: false
		},
		outOfStock: [
			{
				container: '#root',
				text: ['Dieser artikel ist aktuell nicht verfügbar.']
			},
			{
				container: '#root',
				text: ['Leider keine Lieferung möglich']
			}
		]
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.saturn.de/de/product/-2641856.html'
		},
		{
			brand: 'asus',
			model: 'dual',
			series: '3060ti',
			url: 'https://www.saturn.de/de/product/-2701239.html'
		},
		{
			brand: 'zotac',
			model: 'twin edge',
			series: '3060ti',
			url: 'https://www.saturn.de/de/product/-2704436.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3070',
			url: 'https://www.saturn.de/de/product/-2691244.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3070',
			url: 'https://www.saturn.de/de/product/-2691439.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3070',
			url: 'https://www.saturn.de/de/product/-2695942.html'
		},
		{
			brand: 'zotac',
			model: 'twin edge',
			series: '3070',
			url: 'https://www.saturn.de/de/product/-2691365.html'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2681869.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2681871.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2681859.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2681861.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2683942.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2683937.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2684241.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2684238.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2683227.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2683229.html'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2683243.html'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3090',
			url: 'https://www.saturn.de/de/product/-2681863.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3090',
			url: 'https://www.saturn.de/de/product/-2681866.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url: 'https://www.saturn.de/de/product/-2681855.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090',
			url: 'https://www.saturn.de/de/product/-2681857.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3090',
			url: 'https://www.saturn.de/de/product/-2691441.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3090',
			url: 'https://www.saturn.de/de/product/-2691440.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3090',
			url: 'https://www.saturn.de/de/product/-2684235.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090',
			url: 'https://www.saturn.de/de/product/-2683226.html'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.saturn.de/de/product/-2661938.html'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url: 'https://www.saturn.de/de/product/-2661939.html'
		},
		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://www.saturn.de/de/product/-2677360.html'
		},
		{
			brand: 'microsoft',
			model: 'xbox series s',
			series: 'xboxss',
			url: 'https://www.saturn.de/de/product/-2677359.html'
		}
	],
	name: 'saturn'
};

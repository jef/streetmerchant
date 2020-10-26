import {Store} from './store';

export const Saturn: Store = {
	labels: {
		maxPrice: {
			container: 'span[font-family="price"]',
			euroFormat: false // Note: Saturn uses non-euroFromat as price seperator
		},
		outOfStock: {
			container: '#root',
			text: ['dieser artikel ist aktuell nicht verfügbar.']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.saturn.de/de/product/-2592355.html'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2681869.html'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
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
			model: 'rog strix',
			series: '3090',
			url: 'https://www.saturn.de/de/product/-2681863.html'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
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
		}
	],
	name: 'saturn'
};

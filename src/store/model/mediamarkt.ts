import {Store} from './store';

export const Mediamarkt: Store = {
	labels: {
		inStock: {
			container: '#root',
			text: ['lieferung']
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
			url: 'https://www.mediamarkt.de/de/product/-2592355.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2681859.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2681861.html'
		},
		{
			brand: 'asus',
			model: 'rog strix gaming',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2681869.html'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2681871.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2683942.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2683937.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill 3x',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2684241.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill 4x',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2684238.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2683227.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2683229.html'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2683243.html'
		},
		{
			brand: 'zotac',
			model: 'amp extreme holo',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2689452.html'
		}
	],
	name: 'mediamarkt'
};

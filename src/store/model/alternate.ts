import {Store} from './store';

export const Alternate: Store = {
	labels: {
		inStock: {
			container: '.stockStatus',
			text: ['auf lager', 'ware neu eingetroffen', 'in kürze versandfertig', 'ware im zulauf']
		},
		maxPrice: {
			container: 'div.price > span',
			euroFormat: true
		},
		outOfStock: {
			container: '.stockStatus',
			text: ['liefertermin unbekannt']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.alternate.de/product/1516616'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3080',
			url: 'https://www.alternate.de/product/1672868'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3080',
			url: 'https://www.alternate.de/product/1672867'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.alternate.de/product/1672251'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.alternate.de/product/1672634'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.alternate.de/product/1673517'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.alternate.de/product/1673524'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.alternate.de/product/1673512'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url: 'https://www.alternate.de/product/1673520'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.alternate.de/product/1674164'
		},
		{
			brand: 'gainward',
			model: 'phantom gs',
			series: '3080',
			url: 'https://www.alternate.de/product/1688597'
		},
		{
			brand: 'gainward',
			model: 'phoenix gs',
			series: '3080',
			url: 'https://www.alternate.de/product/1673442'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url: 'https://www.alternate.de/product/1680168'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3080',
			url: 'https://www.alternate.de/product/1680168'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.alternate.de/product/1672756'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.alternate.de/product/1672753'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url: 'https://www.alternate.de/product/1681134'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3080',
			url: 'https://www.alternate.de/product/1673136'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3080',
			url: 'https://www.alternate.de/product/1673134'
		},
		{
			brand: 'inno3d',
			model: 'twin x2 oc',
			series: '3080',
			url: 'https://www.alternate.de/product/1673137'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.alternate.de/product/1672343'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.alternate.de/product/1672345'
		},
		{
			brand: 'palit',
			model: 'gamerock oc',
			series: '3080',
			url: 'https://www.alternate.de/product/1688594'
		},
		{
			brand: 'palit',
			model: 'gaming pro oc',
			series: '3080',
			url: 'https://www.alternate.de/product/1673431'
		},
		{
			brand: 'zotac',
			model: 'amp extreme holo',
			series: '3080',
			url: 'https://www.alternate.de/product/1677982'
		},
		{
			brand: 'zotac',
			model: 'amp holo',
			series: '3080',
			url: 'https://www.alternate.de/product/1677985'
		},
		{
			brand: 'zotac',
			model: 'trinity oc',
			series: '3080',
			url: 'https://www.alternate.de/product/1677989'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://www.alternate.de/product/1672612'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3090',
			url: 'https://www.alternate.de/product/1672870'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3090',
			url: 'https://www.alternate.de/product/1672872'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url: 'https://www.alternate.de/product/1672259'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090',
			url: 'https://www.alternate.de/product/1672629'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3090',
			url: 'https://www.alternate.de/product/1673530'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3090',
			url: 'https://www.alternate.de/product/1673531'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3090',
			url: 'https://www.alternate.de/product/1673521'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3090',
			url: 'https://www.alternate.de/product/1673525'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3090',
			url: 'https://www.alternate.de/product/1673529'
		},
		{
			brand: 'gainward',
			model: 'phoenix gs',
			series: '3090',
			url: 'https://www.alternate.de/product/1673440'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3090',
			url: 'https://www.alternate.de/product/1680670'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3090',
			url: 'https://www.alternate.de/product/1687793'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3090',
			url: 'https://www.alternate.de/product/1672744'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3090',
			url: 'https://www.alternate.de/product/1672749'
		},
		{
			brand: 'gigabyte',
			model: 'turbo',
			series: '3090',
			url: 'https://www.alternate.de/product/1687703'
		},
		{
			brand: 'inno3d',
			model: 'gaming x3',
			series: '3090',
			url: 'https://www.alternate.de/product/1673131'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3090',
			url: 'https://www.alternate.de/product/1673135'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3090',
			url: 'https://www.alternate.de/product/1673129'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090',
			url: 'https://www.alternate.de/product/1672341'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3090',
			url: 'https://www.alternate.de/product/1672346'
		},
		{
			brand: 'palit',
			model: 'gaming pro oc',
			series: '3090',
			url: 'https://www.alternate.de/product/1673434'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3090',
			url: 'https://www.alternate.de/product/1672611'
		}
	],
	name: 'alternate'
};

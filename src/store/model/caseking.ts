import {Store} from './store';

export const Caseking: Store = {
	backoffStatusCodes: [403, 429],
	labels: {
		inStock: {
			container: '.delivery_container',
			text: ['lagernd', 'im zulauf', 'ab']
		},
		maxPrice: {
			container: '#buybox .article_details_price',
			euroFormat: true
		},
		outOfStock: {
			container: '.delivery_container',
			text: ['unbekannt']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.caseking.de/evga-geforce-rtx-2060-super-xc-ultra-gaming-8192-mb-gddr6-gcev-385.html'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3080',
			url: 'https://www.caseking.de/asus-geforce-rtx-3080-rog-strix-10g-10240-mb-gddr6x-gcas-400.html'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3080',
			url: 'https://www.caseking.de/asus-geforce-rtx-3080-rog-strix-o10g-10240-mb-gddr6x-gcas-399.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.caseking.de/asus-geforce-rtx-3080-tuf-gaming-10g-10240-mb-gddr6x-gcas-394.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.caseking.de/asus-geforce-rtx-3080-tuf-gaming-o10g-10240-mb-gddr6x-gcas-396.html'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.caseking.de/evga-geforce-rtx-3080-ftw3-gaming-10240-mb-gddr6x-gcev-416.html'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.caseking.de/evga-geforce-rtx-3080-ftw3-ultra-gaming-10240-mb-gddr6x-gcev-417.html'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url: 'https://www.caseking.de/evga-geforce-rtx-3080-xc3-gaming-10240-mb-gddr6x-gcev-415.html'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.caseking.de/evga-geforce-rtx-3080-xc3-black-gaming-10240-mb-gddr6x-gcev-414.html'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.caseking.de/evga-geforce-rtx-3080-xc3-ultra-gaming-10240-mb-gddr6x-gcev-423.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url: 'https://www.caseking.de/gigabyte-aorus-geforce-rtx-3080-master-10g-10240-mb-gddr6x-gcgb-331.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.caseking.de/gigabyte-geforce-rtx-3080-eagle-oc-10g-10240-mb-gddr6x-gcgb-326.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.caseking.de/gigabyte-geforce-rtx-3080-gaming-oc-10g-10240-mb-gddr6x-gcgb-327.html'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url: 'https://www.caseking.de/gigabyte-geforce-rtx-3080-vision-oc-10g-10240-mb-gddr6x-gcgb-332.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3080',
			url: 'https://www.caseking.de/inno3d-geforce-rtx-3080-ichill-x3-10240-mb-gddr6x-gci3-170.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3080',
			url: 'https://www.caseking.de/inno3d-geforce-rtx-3080-ichill-x4-10240-mb-gddr6x-gci3-169.html'
		},
		{
			brand: 'inno3d',
			model: 'twin x2 oc',
			series: '3080',
			url: 'https://www.caseking.de/inno3d-geforce-rtx-3080-twin-x2-oc-10240-mb-gddr6x-gci3-171.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.caseking.de/msi-geforce-rtx-3080-gaming-x-trio-10g-10240-mb-gddr6x-gcmc-248.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.caseking.de/msi-geforce-rtx-3080-ventus-3x-10g-oc-10240-mb-gddr6x-gcmc-247.html'
		},
		{
			brand: 'pny',
			model: 'xlr8 rgb',
			series: '3080',
			url: 'https://www.caseking.de/pny-geforce-rtx-3080-xlr8-gaming-epic-x-rgb-10240-mb-gddr6x-gcpn-075.html'
		},
		{
			brand: 'pny',
			model: 'xlr8 rgb',
			series: '3080',
			url: 'https://www.caseking.de/pny-geforce-rtx-3080-xlr8-gaming-revel-epic-x-rgb-10240-mb-gddr6x-gcpn-076.html'
		},
		{
			brand: 'zotac',
			model: 'amp holo',
			series: '3080',
			url: 'https://www.caseking.de/zotac-gaming-geforce-rtx-3080-amp-holo-10240-mb-gddr6x-gczt-166.html'
		},
		{
			brand: 'zotac',
			model: 'trinity oc',
			series: '3080',
			url: 'https://www.caseking.de/zotac-gaming-geforce-rtx-3080-trinity-oc-10240-mb-gddr6x-gczt-167.html'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://www.caseking.de/zotac-gaming-geforce-rtx-3080-trinity-10240-mb-gddr6x-gczt-163.html'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3090',
			url: 'https://www.caseking.de/asus-geforce-rtx-3090-rog-strix-24g-24576-mb-gddr6x-gcas-397.html'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3090',
			url: 'https://www.caseking.de/asus-geforce-rtx-3090-rog-strix-o24g-24576-mb-gddr6x-gcas-398.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url: 'https://www.caseking.de/asus-geforce-rtx-3090-tuf-gaming-24g-24576-mb-gddr6x-gcas-393.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090',
			url: 'https://www.caseking.de/asus-geforce-rtx-3090-tuf-gaming-o24g-24576-mb-gddr6x-gcas-395.html'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3090',
			url: 'https://www.caseking.de/evga-geforce-rtx-3090-ftw3-gaming-24576-mb-gddr6x-gcev-421.html'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3090',
			url: 'https://www.caseking.de/evga-geforce-rtx-3090-ftw3-ultra-gaming-24576-mb-gddr6x-gcev-422.html'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3090',
			url: 'https://www.caseking.de/evga-geforce-rtx-3090-xc3-gaming-24576-mb-gddr6x-gcev-419.html'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3090',
			url: 'https://www.caseking.de/evga-geforce-rtx-3090-xc3-black-gaming-24576-mb-gddr6x-gcev-418.html'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3090',
			url: 'https://www.caseking.de/evga-geforce-rtx-3090-xc3-ultra-gaming-24576-mb-gddr6x-gcev-420.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3090',
			url: 'https://www.caseking.de/gigabyte-geforce-rtx-3090-eagle-oc-24g-24576-mb-gddr6x-gcgb-329.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3090',
			url: 'https://www.caseking.de/gigabyte-geforce-rtx-3090-gaming-oc-24g-24576-mb-gddr6x-gcgb-328.html'
		},
		{
			brand: 'inno3d',
			model: 'gaming x3',
			series: '3090',
			url: 'https://www.caseking.de/inno3d-geforce-rtx-3090-gaming-x3-24576-mb-gddr6x-gci3-172.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3090',
			url: 'https://www.caseking.de/inno3d-geforce-rtx-3090-ichill-x3-24576-mb-gddr6x-gci3-168.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3090',
			url: 'https://www.caseking.de/inno3d-geforce-rtx-3090-ichill-x4-24576-mb-gddr6x-gci3-167.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090',
			url: 'https://www.caseking.de/msi-geforce-rtx-3090-gaming-x-trio-24g-24576-mb-gddr6x-gcmc-244.html'
		},
		{
			brand: 'pny',
			model: 'xlr8 rgb',
			series: '3090',
			url: 'https://www.caseking.de/pny-geforce-rtx-3090-xlr8-gaming-epic-x-rgb-24576-mb-gddr6x-gcpn-073.html'
		},
		{
			brand: 'pny',
			model: 'xlr8 rgb',
			series: '3090',
			url: 'https://www.caseking.de/pny-geforce-rtx-3090-xlr8-gaming-revel-epic-x-rgb-24576-mb-gddr6x-gcpn-074.html'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3090',
			url: 'https://www.caseking.de/zotac-gaming-geforce-rtx-3090-trinity-24576-mb-gddr6x-gczt-162.html'
		}
	],
	name: 'caseking'
};


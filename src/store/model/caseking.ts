import {Store} from './store';

export const Caseking: Store = {
	backoffStatusCodes: [403, 429],
	currency: '€',
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
			url:
				'https://www.caseking.de/evga-geforce-rtx-2060-super-xc-ultra-gaming-8192-mb-gddr6-gcev-385.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3060ti',
			url:
				'https://www.caseking.de/asus-geforce-rtx-3060-ti-rog-strix-o8g-8192-mb-gddr6-gcas-407.html'
		},
		{
			brand: 'asus',
			model: 'dual oc',
			series: '3060ti',
			url:
				'https://www.caseking.de/asus-geforce-rtx-3060-ti-dual-o8g-8192-mb-gddr6-gcas-410.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3060ti',
			url:
				'https://www.caseking.de/asus-geforce-rtx-3060-ti-tuf-o8g-8192-mb-gddr6-gcas-412.html'
		},
		{
			brand: 'asus',
			model: 'dual',
			series: '3060ti',
			url:
				'https://www.caseking.de/asus-geforce-rtx-3060-ti-dual-8g-8192-mb-gddr6-gcas-411.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3060ti',
			url:
				'https://www.caseking.de/asus-geforce-rtx-3060-ti-tuf-8g-8192-mb-gddr6-gcas-408.html'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3060ti',
			url:
				'https://www.caseking.de/asus-geforce-rtx-3060-ti-rog-strix-8g-8192-mb-gddr6-gcas-409.html'
		},
		{
			brand: 'evga',
			model: 'xc gaming',
			series: '3060ti',
			url:
				'https://www.caseking.de/evga-geforce-rtx-3060-ti-xc-gaming-8192-mb-gddr6-gcev-431.html'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3060ti',
			url:
				'https://www.caseking.de/evga-geforce-rtx-3060-ti-ftw3-ultra-gaming-8192-mb-gddr6-gcev-403.html'
		},
		{
			brand: 'evga',
			model: 'ftw3 black',
			series: '3060ti',
			url:
				'https://www.caseking.de/evga-geforce-rtx-3060-ti-ftw3-black-gaming-8192-mb-gddr6-gcev-430.html'
		},
		{
			brand: 'evga',
			model: 'xc black',
			series: '3060ti',
			url:
				'https://www.caseking.de/evga-geforce-rtx-3060-ti-xc-black-gaming-8192-mb-gddr6-gcev-432.html'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3060ti',
			url:
				'https://www.caseking.de/evga-geforce-rtx-3060-ti-ftw3-gaming-8192-mb-gddr6-gcev-429.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3060ti',
			url:
				'https://www.caseking.de/gigabyte-geforce-rtx-3060-ti-eagle-oc-8g-8192-mb-gddr6-gcgb-349.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3060ti',
			url:
				'https://www.caseking.de/gigabyte-aorus-geforce-rtx-3060-ti-master-8g-8192-mb-gddr6-gcgb-346.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc pro',
			series: '3060ti',
			url:
				'https://www.caseking.de/gigabyte-geforce-rtx-3060-ti-gaming-oc-pro-8g-8192-mb-gddr6-gcgb-347.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3060ti',
			url:
				'https://www.caseking.de/gigabyte-geforce-rtx-3060-ti-gaming-oc-8g-8192-mb-gddr6-gcgb-348.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle',
			series: '3060ti',
			url:
				'https://www.caseking.de/gigabyte-geforce-rtx-3060-ti-eagle-8g-8192-mb-gddr6-gcgb-350.html'
		},
		{
			brand: 'inno3d',
			model: 'twin x2 oc',
			series: '3060ti',
			url:
				'https://www.caseking.de/inno3d-geforce-rtx-3060-ti-twin-x2-oc-8192-mb-gddr6-gci3-180.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3060ti',
			url:
				'https://www.caseking.de/inno3d-geforce-rtx-3060-ti-ichill-x3-8192-mb-gddr6-gci3-179.html'
		},
		{
			brand: 'inno3d',
			model: 'twin x2',
			series: '3060ti',
			url:
				'https://www.caseking.de/inno3d-geforce-rtx-3060-ti-twin-x2-8192-mb-gddr6-gci3-181.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3060ti',
			url:
				'https://www.caseking.de/msi-geforce-rtx-3060-ti-gaming-x-trio-8192-mb-gddr6-gcmc-255.html'
		},
		{
			brand: 'msi',
			model: 'ventus 2x oc',
			series: '3060ti',
			url:
				'https://www.caseking.de/msi-geforce-rtx-3060-ti-ventus-2x-oc-8192-mb-gddr6-gcmc-246.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3060ti',
			url:
				'https://www.caseking.de/msi-geforce-rtx-3060-ti-ventus-3x-oc-8192-mb-gddr6-gcmc-245.html'
		},
		{
			brand: 'pny',
			model: 'xlr8 epic x',
			series: '3060ti',
			url:
				'https://www.caseking.de/pny-geforce-rtx-3060-ti-xlr8-gaming-revel-epic-x-8192-mb-gddr6-gcpn-080.html'
		},
		{
			brand: 'pny',
			model: 'xlr8 uprising',
			series: '3060ti',
			url:
				'https://www.caseking.de/pny-geforce-rtx-3060-ti-uprising-8g-8192-mb-gddr6-gcpn-079.html'
		},
		{
			brand: 'zotac',
			model: 'twin edge',
			series: '3060ti',
			url:
				'https://www.caseking.de/zotac-gaming-geforce-rtx-3060-ti-twin-edge-8192-mb-gddr6-gczt-169.html'
		},
		{
			brand: 'zotac',
			model: 'twin edge oc',
			series: '3060ti',
			url:
				'https://www.caseking.de/zotac-gaming-geforce-rtx-3060-ti-twin-edge-oc-8192-mb-gddr6-gczt-170.html'
		},
		{
			brand: 'asus',
			model: 'dual',
			series: '3070',
			url:
				'https://www.caseking.de/asus-geforce-rtx-3070-dual-8g-8192-mb-gddr6-gcas-404.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3070',
			url:
				'https://www.caseking.de/asus-geforce-rtx-3070-tuf-o8g-8192-mb-gddr6-gcas-406.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3070',
			url:
				'https://www.caseking.de/asus-geforce-rtx-3070-rog-strix-o8g-8192-mb-gddr6-gcas-403.html'
		},
		{
			brand: 'asus',
			model: 'dual oc',
			series: '3070',
			url:
				'https://www.caseking.de/asus-geforce-rtx-3070-dual-o8g-8192-mb-gddr6-gcas-405.html'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3070',
			url:
				'https://www.caseking.de/asus-geforce-rtx-3070-rog-strix-8g-8192-mb-gddr6-gcas-415.html'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3070',
			url:
				'https://www.caseking.de/evga-geforce-rtx-3070-xc3-black-gaming-8192-mb-gddr6-gcev-424.html'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3070',
			url:
				'https://www.caseking.de/evga-geforce-rtx-3070-xc3-ultra-gaming-8192-mb-gddr6-gcev-426.html'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3070',
			url:
				'https://www.caseking.de/evga-geforce-rtx-3070-ftw3-ultra-8192-mb-gddr6-gcev-428.html'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3070',
			url:
				'https://www.caseking.de/evga-geforce-rtx-3070-xc3-8192-mb-gddr6-gcev-425.html'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3070',
			url:
				'https://www.caseking.de/evga-geforce-rtx-3070-ftw3-8192-mb-gddr6-gcev-427.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3070',
			url:
				'https://www.caseking.de/gigabyte-geforce-rtx-3070-gaming-oc-8g-8192-mb-gddr6-gcgb-338.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3070',
			url:
				'https://www.caseking.de/gigabyte-aorus-geforce-rtx-3070-master-8g-8192-mb-gddr6-gcgb-343.html'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3070',
			url:
				'https://www.caseking.de/gigabyte-geforce-rtx-3070-vision-oc-8g-8192-mb-gddr6-gcgb-344.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle',
			series: '3070',
			url:
				'https://www.caseking.de/gigabyte-geforce-rtx-3070-eagle-8g-8192-mb-gddr6-gcgb-340.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3070',
			url:
				'https://www.caseking.de/gigabyte-geforce-rtx-3070-eagle-oc-8g-8192-mb-gddr6-gcgb-339.html'
		},
		{
			brand: 'inno3d',
			model: 'twin x2',
			series: '3070',
			url:
				'https://www.caseking.de/inno3d-geforce-rtx-3070-twin-x2-8192-mb-gddr6-gci3-176.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3070',
			url:
				'https://www.caseking.de/inno3d-geforce-rtx-3070-ichill-x3-8192-mb-gddr6-gci3-174.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3070',
			url:
				'https://www.caseking.de/inno3d-geforce-rtx-3070-ichill-x4-8192-mb-gddr6-gci3-173.html'
		},
		{
			brand: 'inno3d',
			model: 'twin x2 oc',
			series: '3070',
			url:
				'https://www.caseking.de/inno3d-geforce-rtx-3070-twin-x2-oc-8192-mb-gddr6-gci3-175.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3070',
			url:
				'https://www.caseking.de/msi-geforce-rtx-3070-gaming-x-trio-8192-mb-gddr6-gcmc-250.html'
		},
		{
			brand: 'msi',
			model: 'suprim',
			series: '3070',
			url:
				'https://www.caseking.de/msi-geforce-rtx-3070-suprim-8g-8192-mb-gddr6-gcmc-256.html'
		},
		{
			brand: 'msi',
			model: 'ventus 2x oc',
			series: '3070',
			url:
				'https://www.caseking.de/msi-geforce-rtx-3070-ventus-2x-oc-8192-mb-gddr6-gcmc-249.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3070',
			url:
				'https://www.caseking.de/msi-geforce-rtx-3070-ventus-3x-oc-8192-mb-gddr6-gcmc-251.html'
		},
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3070',
			url:
				'https://www.caseking.de/msi-geforce-rtx-3070-suprim-x-8g-8192-mb-gddr6-gcmc-254.html'
		},
		{
			brand: 'pny',
			model: 'xlr8 epic x',
			series: '3070',
			url:
				'https://www.caseking.de/pny-geforce-rtx-3070-xlr8-gaming-revel-epic-x-rgb-8192-mb-gddr6-gcpn-078.html'
		},
		{
			brand: 'pny',
			model: 'dual fan',
			series: '3070',
			url:
				'https://www.caseking.de/pny-geforce-rtx-3070-dual-fan-8192-mb-gddr6-gcpn-077.html'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3080',
			url:
				'https://www.caseking.de/asus-geforce-rtx-3080-rog-strix-10g-10240-mb-gddr6x-gcas-400.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
			url:
				'https://www.caseking.de/asus-geforce-rtx-3080-rog-strix-o10g-10240-mb-gddr6x-gcas-399.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url:
				'https://www.caseking.de/asus-geforce-rtx-3080-tuf-gaming-10g-10240-mb-gddr6x-gcas-394.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url:
				'https://www.caseking.de/asus-geforce-rtx-3080-tuf-gaming-o10g-10240-mb-gddr6x-gcas-396.html'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3080',
			url:
				'https://www.caseking.de/evga-geforce-rtx-3080-ftw3-gaming-10240-mb-gddr6x-gcev-416.html'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url:
				'https://www.caseking.de/evga-geforce-rtx-3080-ftw3-ultra-gaming-10240-mb-gddr6x-gcev-417.html'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url:
				'https://www.caseking.de/evga-geforce-rtx-3080-xc3-gaming-10240-mb-gddr6x-gcev-415.html'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url:
				'https://www.caseking.de/evga-geforce-rtx-3080-xc3-black-gaming-10240-mb-gddr6x-gcev-414.html'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url:
				'https://www.caseking.de/evga-geforce-rtx-3080-xc3-ultra-gaming-10240-mb-gddr6x-gcev-423.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url:
				'https://www.caseking.de/gigabyte-aorus-geforce-rtx-3080-master-10g-10240-mb-gddr6x-gcgb-331.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url:
				'https://www.caseking.de/gigabyte-geforce-rtx-3080-eagle-oc-10g-10240-mb-gddr6x-gcgb-326.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url:
				'https://www.caseking.de/gigabyte-geforce-rtx-3080-gaming-oc-10g-10240-mb-gddr6x-gcgb-327.html'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url:
				'https://www.caseking.de/gigabyte-geforce-rtx-3080-vision-oc-10g-10240-mb-gddr6x-gcgb-332.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3080',
			url:
				'https://www.caseking.de/inno3d-geforce-rtx-3080-ichill-x3-10240-mb-gddr6x-gci3-170.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3080',
			url:
				'https://www.caseking.de/inno3d-geforce-rtx-3080-ichill-x4-10240-mb-gddr6x-gci3-169.html'
		},
		{
			brand: 'inno3d',
			model: 'twin x2 oc',
			series: '3080',
			url:
				'https://www.caseking.de/inno3d-geforce-rtx-3080-twin-x2-oc-10240-mb-gddr6x-gci3-171.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url:
				'https://www.caseking.de/msi-geforce-rtx-3080-gaming-x-trio-10g-10240-mb-gddr6x-gcmc-248.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url:
				'https://www.caseking.de/msi-geforce-rtx-3080-ventus-3x-10g-oc-10240-mb-gddr6x-gcmc-247.html'
		},
		{
			brand: 'pny',
			model: 'xlr8 revel',
			series: '3080',
			url:
				'https://www.caseking.de/pny-geforce-rtx-3080-xlr8-gaming-epic-x-rgb-10240-mb-gddr6x-gcpn-075.html'
		},
		{
			brand: 'pny',
			model: 'xlr8 revel',
			series: '3080',
			url:
				'https://www.caseking.de/pny-geforce-rtx-3080-xlr8-gaming-revel-epic-x-rgb-10240-mb-gddr6x-gcpn-076.html'
		},
		{
			brand: 'zotac',
			model: 'amp holo',
			series: '3080',
			url:
				'https://www.caseking.de/zotac-gaming-geforce-rtx-3080-amp-holo-10240-mb-gddr6x-gczt-166.html'
		},
		{
			brand: 'zotac',
			model: 'trinity oc',
			series: '3080',
			url:
				'https://www.caseking.de/zotac-gaming-geforce-rtx-3080-trinity-oc-10240-mb-gddr6x-gczt-167.html'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url:
				'https://www.caseking.de/zotac-gaming-geforce-rtx-3080-trinity-10240-mb-gddr6x-gczt-163.html'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3090',
			url:
				'https://www.caseking.de/asus-geforce-rtx-3090-rog-strix-24g-24576-mb-gddr6x-gcas-397.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3090',
			url:
				'https://www.caseking.de/asus-geforce-rtx-3090-rog-strix-o24g-24576-mb-gddr6x-gcas-398.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url:
				'https://www.caseking.de/asus-geforce-rtx-3090-tuf-gaming-24g-24576-mb-gddr6x-gcas-393.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090',
			url:
				'https://www.caseking.de/asus-geforce-rtx-3090-tuf-gaming-o24g-24576-mb-gddr6x-gcas-395.html'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3090',
			url:
				'https://www.caseking.de/evga-geforce-rtx-3090-ftw3-gaming-24576-mb-gddr6x-gcev-421.html'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3090',
			url:
				'https://www.caseking.de/evga-geforce-rtx-3090-ftw3-ultra-gaming-24576-mb-gddr6x-gcev-422.html'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3090',
			url:
				'https://www.caseking.de/evga-geforce-rtx-3090-xc3-gaming-24576-mb-gddr6x-gcev-419.html'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3090',
			url:
				'https://www.caseking.de/evga-geforce-rtx-3090-xc3-black-gaming-24576-mb-gddr6x-gcev-418.html'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3090',
			url:
				'https://www.caseking.de/evga-geforce-rtx-3090-xc3-ultra-gaming-24576-mb-gddr6x-gcev-420.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3090',
			url:
				'https://www.caseking.de/gigabyte-geforce-rtx-3090-eagle-oc-24g-24576-mb-gddr6x-gcgb-329.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3090',
			url:
				'https://www.caseking.de/gigabyte-geforce-rtx-3090-gaming-oc-24g-24576-mb-gddr6x-gcgb-328.html'
		},
		{
			brand: 'inno3d',
			model: 'gaming x3',
			series: '3090',
			url:
				'https://www.caseking.de/inno3d-geforce-rtx-3090-gaming-x3-24576-mb-gddr6x-gci3-172.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3090',
			url:
				'https://www.caseking.de/inno3d-geforce-rtx-3090-ichill-x3-24576-mb-gddr6x-gci3-168.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3090',
			url:
				'https://www.caseking.de/inno3d-geforce-rtx-3090-ichill-x4-24576-mb-gddr6x-gci3-167.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090',
			url:
				'https://www.caseking.de/msi-geforce-rtx-3090-gaming-x-trio-24g-24576-mb-gddr6x-gcmc-244.html'
		},
		{
			brand: 'pny',
			model: 'xlr8 revel',
			series: '3090',
			url:
				'https://www.caseking.de/pny-geforce-rtx-3090-xlr8-gaming-epic-x-rgb-24576-mb-gddr6x-gcpn-073.html'
		},
		{
			brand: 'pny',
			model: 'xlr8 revel',
			series: '3090',
			url:
				'https://www.caseking.de/pny-geforce-rtx-3090-xlr8-gaming-revel-epic-x-rgb-24576-mb-gddr6x-gcpn-074.html'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3090',
			url:
				'https://www.caseking.de/zotac-gaming-geforce-rtx-3090-trinity-24576-mb-gddr6x-gczt-162.html'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url:
				'https://www.caseking.de/amd-ryzen-5-5600x-3-7-ghz-vermeer-am4-mit-amd-wraith-stealth-kuehler-hpam-202.html'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url:
				'https://www.caseking.de/amd-ryzen-7-5800x-3-8-ghz-vermeer-am4-boxed-ohne-kuehler-hpam-203.html'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url:
				'https://www.caseking.de/amd-ryzen-9-5900x-3-7-ghz-vermeer-am4-boxed-ohne-kuehler-hpam-204.html'
		},
		{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen5950',
			url:
				'https://www.caseking.de/amd-ryzen-9-5950x-3-4-ghz-vermeer-am4-boxed-ohne-kuehler-hpam-205.html'
		},
		{
			brand: 'sapphire',
			model: 'nitro oc se',
			series: 'rx6800xt',
			url:
				'https://www.caseking.de/sapphire-nitro-radeon-rx-6800-xt-oc-16g-16384-mb-gddr6-gcsp-215.html'
		},
		{
			brand: 'sapphire',
			model: 'nitro oc',
			series: 'rx6800xt',
			url:
				'https://www.caseking.de/sapphire-nitro-radeon-rx-6800-xt-oc-se-16g-16384-mb-gddr6-gcsp-214.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: 'rx6800xt',
			url:
				'https://www.caseking.de/gigabyte-radeon-rx-6800-xt-gaming-oc-16g-16384-mb-gddr6-gcgb-356.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming',
			series: 'rx6800xt',
			url:
				'https://www.caseking.de/gigabyte-radeon-rx-6800-xt-16g-16384-mb-gddr6-gcgb-357.html'
		},
		{
			brand: 'asus',
			model: 'strix lc',
			series: 'rx6800xt',
			url:
				'https://www.caseking.de/asus-radeon-rx-6800-xt-rog-strix-lc-o16g-16384-mb-gddr6-gcas-416.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: 'rx6800xt',
			url:
				'https://www.caseking.de/asus-radeon-rx-6800-xt-tuf-o16g-16384-mb-gddr6-gcas-417.html'
		}
	],
	name: 'caseking'
};

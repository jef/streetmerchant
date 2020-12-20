import {Store} from './store';

export const Equippr: Store = {
	currency: '€',
	labels: {
		inStock: {
			container: '.delivery--information', 
			text: [
				'Sofort versandfertig, Lieferung innerhalb 1-3 Werktage',
				'Jetzt bestellen. Lieferung innerhalb 3-5 Werktage',
				'kurzfristig verfügbar'
			]
		},
		maxPrice: {
			container: '.price',
			euroFormat: true
		},
		outOfStock: {
			container: '.alert--content',
			text: ['Bald verfügbar']
		}
	},
	links: [
		
			{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.equippr.de/corsair-vengeance-lpx-32-gb-ddr4-3200-dimm-cl16-dual-kit-schwarz-cmk32gx4m2b3200c16-2011145.html'
		},
		
		{
			brand: 'asus',
			model: 'strix',
			series: '3080',
			url:
				'https://www.equippr.de/asus-geforce-rtx-3080-rog-strix-10-gb-gddr6x-retail-2059780.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
			url:
				'https://www.equippr.de/asus-geforce-rtx-3080-rog-strix-oc-10-gb-gddr6x-retail-2059781.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url:
				'https://www.equippr.de/asus-geforce-rtx-3080-tuf-gaming-10-gb-gddr6x-retail-2059776.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url:
				'https://www.equippr.de/asus-geforce-rtx-3080-tuf-gaming-oc-10-gb-gddr6x-retail-2059777.html'
		},
	
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url:
				'https://www.equippr.de/evga-geforce-rtx-3080-ftw3-ultra-gaming-10-gb-gddr6x-retail-2061553.html'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url:
				'https://www.equippr.de/evga-geforce-rtx-3080-xc3-gaming-10-gb-gddr6x-retail-2061391.html'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url:
				'https://www.equippr.de/evga-geforce-rtx-3080-xc3-black-gaming-10-gb-gddr6x-retail-2061390.html'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url:
				'https://www.equippr.de/evga-geforce-rtx-3080-xc3-ultra-gaming-10-gb-gddr6x-retail-2061393.html'
		},
		{
			brand: 'gainward',
			model: 'phoenix',
			series: '3080',
			url:
				'https://www.equippr.de/gainward-geforce-rtx-3080-phoenix-10-gb-gddr6x-retail-2061395.html'
		},
		{
			brand: 'gainward',
			model: 'phoenix gs',
			series: '3080',
			url:
				'https://www.equippr.de/gainward-geforce-rtx-3080-phoenix-gs-10-gb-gddr6x-retail-2061394.html'
		},
		
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url:
				'https://www.equippr.de/gigabyte-geforce-rtx-3080-gaming-oc-10-gb-gddr6x-retail-2061386.html'
		},
		
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3080',
			url:
				'https://www.equippr.de/inno3d-geforce-rtx-3080-ichill-x3-10-gb-gddr6x-retail-2060455.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3080',
			url:
				'https://www.equippr.de/inno3d-geforce-rtx-3080-ichill-x4-10-gb-gddr6x-retail-2060456.html'
		},
		
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url:
				'https://www.equippr.de/msi-geforce-rtx-3080-gaming-x-trio-10-gb-gddr6x-retail-2060387.html'
		},
		{brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url:
				'https://www.equippr.de/msi-geforce-rtx-3080-ventus-3x-oc-10-gb-gddr6x-retail-2060386.html'
			
		},
		{ brand: 'msi',
			model: 'suprim x',
			series: '3080',
			url:
				'https://www.equippr.de/msi-geforce-rtx-3080-suprim-x-10-gb-gddr6x-retail-2066166.html'
		
		
		
		},
		
		{
			brand: 'zotac',
			model: 'amp holo',
			series: '3080',
			url:
				'https://www.equippr.de/zotac-geforce-rtx-3080-amp-holo-10-gb-gddr6x-retail-2061396.html'
		},
		
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url:
				'https://www.equippr.de/zotac-geforce-rtx-3080-trinity-10-gb-gddr6x-retail-2060389.html'
		},
		{
			brand: 'zotac',
			model: 'trinity oc',
			series: '3080',
			url:
				'https://www.equippr.de/zotac-geforce-rtx-3080-trinity-oc-10-gb-gddr6x-retail-2061397.html'
		}
	],
	name: 'equippr'
};

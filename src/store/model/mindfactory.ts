import {Store} from './store';

export const Mindfactory: Store = {
	labels: {
		inStock: {
			container: '.pshipping',
			text: ['lagernd', 'verfügbar']
		},
		maxPrice: {
			container: 'div[class="pprice"]',
			euroFormat: true
		},
		outOfStock: {
			container: '.pshipping',
			text: ['ohne liefertermin']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.mindfactory.de/product_info.php/8GB-MSI-GeForce-RTX2070Super-GAMING-X-DDR6--Retail-_1329683.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url:
				'https://www.mindfactory.de/product_info.php/10GB-Gigabyte-RTX3080-AORUS-MASTER-GDDR6X-3xHDMI-3xDP--Retail-_1378681.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3080',
			url:
				'https://www.mindfactory.de/product_info.php/10GB-Gigabyte-RTX3080-AORUS-XTREME-GDDR6X-3xHDMI-3xDP--Retail-_1380484.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url:
				'https://www.mindfactory.de/product_info.php/10GB-Gigabyte-GeForce-RTX-3080-Gaming-OC-3xDP-2x-HDMI--Retail-_1376263.html'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url:
				'https://www.mindfactory.de/product_info.php/10GB-Gigabyte-RTX3080-VISION-OC-GDDR6X-2xHDMI-3xDP--Retail-_1378682.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url:
				'https://www.mindfactory.de/product_info.php/10GB-MSI-GeForce-RTX-3080-Gaming-X-TRIO--Retail-_1376481.html'
		},
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3080',
			url:
				'https://www.mindfactory.de/product_info.php/10GB-Palit-GeForce-RTX-3080-GamingPro--Retail-_1376483.html'
		},
		{
			brand: 'zotac',
			model: 'trinity oc',
			series: '3080',
			url:
				'https://www.mindfactory.de/product_info.php/10GB-Zotac-GeForce-RTX-3080-TRINITY-OC--GDDR6X-_1377143.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3090',
			url:
				'https://www.mindfactory.de/product_info.php/24GB-Gigabyte-GeForce-3090-Gaming-OC--Retail-_1377265.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x',
			series: '3090',
			url:
				'https://www.mindfactory.de/product_info.php/24GB-MSI-GeForce-RTX-3090-VENTUS-3X-DDR6--Retail-_1377475.html'
		},
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3090',
			url:
				'https://www.mindfactory.de/product_info.php/24GB-Palit-GeForce-RTX-3090-GamingPro-DDR6--Retail-_1377233.html'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url:
				'https://www.mindfactory.de/product_info.php/AMD-Ryzen-5-5600X-6x-3-70GHz-So-AM4-BOX_1380726.html'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url:
				'https://www.mindfactory.de/product_info.php/AMD-Ryzen-7-5800X-8x-3-80GHz-So-AM4-WOF_1380727.html'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url:
				'https://www.mindfactory.de/product_info.php/AMD-Ryzen-9-5900X-12x-3-70GHz-So-AM4-WOF_1380728.html'
		},
		{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen5950',
			url:
				'https://www.mindfactory.de/product_info.php/AMD-Ryzen-9-5950X-16x-3-40GHz-So-AM4-WOF_1380729.html'
		}
	],
	name: 'mindfactory'
};

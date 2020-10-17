import {Store} from './store';

export const Mindfactory: Store = {
	labels: {
		inStock: {
			container: '.pshipping',
			text: ['lagernd', 'verfügbar']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.mindfactory.de/product_info.php/8GB-MSI-GeForce-RTX-2080-SUPER-Gaming-X-Trio--GDDR6--HDMI--3x-DP--USB-C_1322590.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.mindfactory.de/product_info.php/10GB-Gigabyte-GeForce-RTX-3080-Gaming-OC-3xDP-2x-HDMI--Retail-_1376263.html'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url: 'https://www.mindfactory.de/product_info.php/10GB-Gigabyte-RTX3080-VISION-OC-GDDR6X-2xHDMI-3xDP--Retail-_1378682.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.mindfactory.de/product_info.php/10GB-MSI-GeForce-RTX-3080-Gaming-X-TRIO--Retail-_1376481.html'
		},
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3080',
			url: 'https://www.mindfactory.de/product_info.php/10GB-Palit-GeForce-RTX-3080-GamingPro--Retail-_1376483.html'
		},
		{
			brand: 'zotac',
			model: 'trinity oc',
			series: '3080',
			url: 'https://www.mindfactory.de/product_info.php/10GB-Zotac-GeForce-RTX-3080-TRINITY-OC--GDDR6X-_1377143.html'
		},
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3090',
			url: 'https://www.mindfactory.de/product_info.php/24GB-Palit-GeForce-RTX-3090-GamingPro-DDR6--Retail-_1377233.html'
		}
	],
	name: 'mindfactory'
};

import {Store} from './store';

export const Amazon: Store = {
	links: [
		{
			brand: 'TEST',
			model: 'CARD',
			series: 'debug',
			url: 'https://www.amazon.com/MSI-GeForce-RTX-2060-Architecture/dp/B07MQ36Z6L'
		},
		{
			brand: 'pny',
			model: 'xlr8',
			series: '3080',
			url: 'https://www.amazon.com/PNY-GeForce-Gaming-Epic-X-Graphics/dp/B08HBR7QBM'
		},
		{
			brand: 'pny',
			model: 'xlr8 rgb',
			series: '3080',
			url: 'https://www.amazon.com/PNY-GeForce-Gaming-Epic-X-Graphics/dp/B08HBTJMLJ'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.amazon.com/MSI-GeForce-RTX-3080-10G/dp/B08HR7SV3M'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.amazon.com/EVGA-10G-P5-3897-KR-GeForce-Technology-Backplate/dp/B08HR3Y5GQ'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.amazon.com/EVGA-10G-P5-3885-KR-GeForce-Cooling-Backplate/dp/B08HR55YB5'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.amazon.com/EVGA-10G-P5-3895-KR-GeForce-Technology-Backplate/dp/B08HR3DPGW'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url: 'https://www.amazon.com/EVGA-10G-P5-3883-KR-GeForce-Cooling-Backplate/dp/B08HR4RJ3Q'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.amazon.com/EVGA-10G-P5-3881-KR-GeForce-GAMING-Cooling/dp/B08HR6FMF3'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.amazon.com/GIGABYTE-GeForce-Graphics-WINDFORCE-GV-N3080GAMING/dp/B08HJTH61J'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.amazon.com/GIGABYTE-GeForce-Graphics-WINDFORCE-GV-N3080EAGLE/dp/B08HJS2JLJ'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.amazon.com/ASUS-Graphics-DisplayPort-Military-Grade-Certification/dp/B08HH5WF97'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.amazon.com/ASUS-Graphics-DisplayPort-Military-Grade-Certification/dp/B08HHDP9DW'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.amazon.com/MSI-GeForce-RTX-3080-10G/dp/B08HR5SXPS'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://www.amazon.com/ZOTAC-Graphics-IceStorm-Advanced-ZT-A30800D-10P/dp/B08HJNKT3P'
		}
	],
	labels: {
		captcha: {
			container: 'body',
			text: ['enter the characters you see below']
		},
		inStock: {
			container: '#desktop_buybox',
			text: ['add to cart']
		}
	},
	name: 'amazon'
};

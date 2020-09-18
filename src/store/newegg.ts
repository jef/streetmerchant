import {Store} from './store';

export const NewEgg: Store = {
	cartUrl: '',
	links: [
		{
			brand: 'asus',
			model: 'tuf',
			url: 'https://www.newegg.com/asus-geforce-rtx-3080-tuf-rtx3080-10g-gaming/p/N82E16814126453',
			oosLabels: ['auto notify', 'out of stock']
		},
		{
			brand: 'evga',
			model: 'black gaming',
			url: 'https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3881-kr/p/N82E16814487522',
			oosLabels: ['auto notify', 'out of stock']
		},
		{
			brand: 'evga',
			model: 'argb led icx3',
			url: 'https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3883-kr/p/N82E16814487521',
			oosLabels: ['auto notify', 'out of stock']
		},
		{
			brand: 'evga',
			model: 'xc3 ultra gaming',
			url: 'https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3885-kr/p/N82E16814487520',
			oosLabels: ['auto notify', 'out of stock']
		},
		{
			brand: 'msi',
			model: 'ventus',
			url: 'https://www.newegg.com/msi-geforce-rtx-3080-rtx-3080-ventus-3x-10g/p/N82E16814137600',
			oosLabels: ['auto notify', 'out of stock']
		}
	],
	name: 'newegg'
};

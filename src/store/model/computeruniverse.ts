import {Store} from './store';

export const Computeruniverse: Store = {
	labels: {
		inStock: {
			container: '.availability',
			text: ['auf lager und sofort lieferbar']
		},
		maxPrice: {
			container: '.product-price',
			euroFormat: true
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.computeruniverse.net/de/palit-geforce-gtx-1660-super-stormx-6-gb-high-end-grafikkarte'
		},
		{
			brand: 'msi',
			model: 'ventusx3',
			series: '3090',
			url: 'https://www.computeruniverse.net/de/msi-geforce-rtx3090-ventus-3x-oc-24-gb-oc-enthusiast-grafikkarte'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3090',
			url: 'https://www.computeruniverse.net/de/zotac-gaming-geforce-rtx-3090-trinity-24-gb-enthusiast-grafikkarte'
		},
		{
			brand: 'inno3d',
			model: 'ichillx4',
			series: '3090',
			url: 'https://www.computeruniverse.net/de/inno3d-geforce-rtx3090-ichill-x4-24-gb-enthusiast-grafikkarte'
		},
		{
			brand: 'palit',
			model: 'gamingpro',
			series: '3090',
			url: 'https://www.computeruniverse.net/de/palit-geforce-rtx3090-gamingpro-24-gb-enthusiast-grafikkarte'
		},
		{
			brand: 'inno3d',
			model: 'ichillx3',
			series: '3090',
			url: 'https://www.computeruniverse.net/de/inno3d-geforce-rtx3090-ichill-x3-24-gb-enthusiast-grafikkarte'
		},
		{
			brand: 'gainward',
			model: 'phoenix',
			series: '3090',
			url: 'https://www.computeruniverse.net/de/gainward-geforce-rtx3090-phoenix-24-gb-enthusiast-grafikkarte'
		}
	],
	name: 'computeruniverse'
};

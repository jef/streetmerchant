import {Store} from './store';

export const Azerty: Store = {
	labels: {
		inStock: {
			container: '.orderdelay',
			text: ['Volgende werkdag in huis', '1 werkdag', '2-3 werkdagen']
		},
		maxPrice: {
			container: '.mod_article .price',
			euroFormat: true
		},
		outOfStock: {
			container: '.orderdelay',
			text: ['Onbekend', 'meer dan 10 werkdagen', 'Pre-order']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://azerty.nl/product/gigabyte/3756757/geforce-rtx-2060-oc-6g-grafische-kaart-geforce-rtx-2060'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3080',
			url: 'https://azerty.nl/product/gigabyte/4349658/aorus-geforce-rtx-3080-xtreme-10g-grafische-kaart-gf-rtx-3080'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://azerty.nl/product/msi/4346262/geforce-rtx-3080-ventus-3x-10g-oc-grafische-kaart-rtx-3080'
		},
		{
			brand: 'asus',
			model: 'tuf gaming',
			series: '3080',
			url: 'https://azerty.nl/product/asus/4346679/tuf-gaming-geforce-rtx-3080-grafische-kaart-gf-rtx-3080'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://azerty.nl/product/msi/4346263/geforce-rtx-3080-gaming-x-trio-10g-grafische-kaart-rtx-3080'
		},
		{
			brand: 'asus',
			model: 'tuf oc gaming',
			series: '3080',
			url: 'https://azerty.nl/product/asus/4348176/tuf-gaming-geforce-rtx-3080-oc-grafische-kaart-gf-rtx-3080'
		},
		{
			brand: 'asus',
			model: 'rog strix oc gaming',
			series: '3080',
			url: 'https://azerty.nl/product/asus/4348174/rog-strix-geforce-rtx-3080-oc-grafische-kaart-gf-rtx-3080'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://azerty.nl/product/zotac/4352301/gaming-geforce-rtx-3080-trinity-oc-grafische-kaart-gf-rtx-3080'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url: 'https://azerty.nl/product/gigabyte/4349651/aorus-geforce-rtx-3080-master-10g-grafische-kaart-gf-rtx-3080'
		},
		{
			brand: 'pny',
			model: 'xlr8 rgb',
			series: '3080',
			url: 'https://azerty.nl/product/pny/4342269/geforce-rtx-3080-xlr8-gaming-revel-epic-x-rgb-triple-fan-gaming-edition-grafische-kaart-gf-rtx-3080'
		}
	],
	name: 'azerty'
};

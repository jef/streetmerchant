import {Store} from './store';

export const Mwave: Store = {
	backoffStatusCodes: [403, 429],
	currency: '$',
	labels: {
		maxPrice: {
			container: 'div.divPriceNormal > div',
			euroFormat: false
		},
		outOfStock: {
			container: '.stockAndDelivery > li:nth-child(1) > dl > dd',
			text: ['Currently No Stock']
		}
	},
	links: [
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/gigabyte-geforce-rtx-3080-vision-oc-10gb-video-card-ac38364'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/gigabyte-geforce-rtx-3080-gaming-oc-10gb-video-card-ac38091'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/gigabyte-aorus-geforce-rtx-3080-xtreme-10gb-video-card-ac38093'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/asus-geforce-rtx-3080-tuf-gaming-oc-10gb-video-card-ac38205'
		},
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/msi-geforce-rtx-3080-suprim-x-10gb-video-card-ac40223'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/evga-geforce-rtx-3080-ftw3-gaming-10gb-video-card-ac38468'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/asus-geforce-rtx-3080-rog-strix-oc-10gb-video-card-ac38206'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/evga-geforce-rtx-3080-ftw3-ultra-gaming-10gb-video-card-ac38322'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/evga-geforce-rtx-3080-xc3-black-gaming-10gb-video-card-ac38323'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/evga-geforce-rtx-3080-xc3-gaming-10gb-video-card-ac38325'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/evga-geforce-rtx-3080-xc3-ultra-gaming-10gb-video-card-ac38327'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/inno3d-geforce-rtx-3080-ichill-x4-10gb-video-card-ac38355'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/inno3d-geforce-rtx-3080-ichill-x3-10gb-video-card-ac38356'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme waterforce',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/gigabyte-aorus-geforce-rtx-3080-xtreme-waterforce-10gb-video-card-ac39833'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme waterforce wb',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/gigabyte-aorus-geforce-rtx-3080-xtreme-waterforce-wb-10gb-video-card-ac39844'
		},
		{
			brand: 'gigabyte',
			model: 'eagle',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/gigabyte-geforce-rtx-3080-eagle-10gb-video-card-ac39514'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/asus-geforce-rtx-3080-rog-strix-gaming-10gb-video-card-ac38086'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/asus-geforce-rtx-3080-tuf-gaming-10gb-video-card-ac38087'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/gigabyte-geforce-rtx-3080-eagle-oc-10gb-video-card-ac38090'
		},
		{
			brand: 'pny',
			model: 'xlr8 revel',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/pny-geforce-rtx-3080-xlr8-gaming-revel-epicx-rgb-10gb-video-card-ac38114'
		},
		{
			brand: 'pny',
			model: 'xlr8 uprising',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/pny-geforce-rtx-3080-xlr8-gaming-uprising-epicx-rgb-10gb-video-card-ac38115'
		},
		{
			brand: 'galax',
			model: 'sg oc',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/galax-geforce-rtx-3080-sg-1click-oc-10gb-video-card-ac38128'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/gigabyte-aorus-geforce-rtx-3080-master-10gb-video-card-ac38092'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/msi-geforce-rtx-3080-ventus-3x-oc-10gb-video-card-ac38105'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url:
				'https://www.mwave.com.au/product/msi-geforce-rtx-3080-gaming-x-trio-10gb-video-card-ac38107'
		}
	],
	name: 'mwave'
};

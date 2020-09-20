import {Store} from './store';

export const BestBuy: Store = {
	links: [
		{
			brand: 'TEST',
			model: 'CARD',
			series: 'debug',
			url: 'https://www.bestbuy.com/site/nvidia-geforce-rtx-2060-super-8gb-gddr6-pci-express-graphics-card-black-silver/6361329.p?skuId=6361329'
		},
		{
			brand: 'nvidia',
			cartUrl: 'https://api.bestbuy.com/click/-/6429440/cart',
			model: 'founders edition',
			url: 'https://www.bestbuy.com/site/nvidia-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card-titanium-and-black/6429440.p?skuId=6429440',
			series: '3080'
		},
		{
			brand: 'asus',
			cartUrl: 'https://api.bestbuy.com/click/-/6432445/cart',
			model: 'rog strix',
			url: 'https://www.bestbuy.com/site/asus-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-strix-graphics-card-black/6432445.p?skuId=6432445',
			series: '3080'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6432399/cart',
			model: 'xc3 black',
			url: 'https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6432399.p?skuId=6432399',
			series: '3080'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6432400/cart',
			model: 'xc3 ultra',
			url: 'https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6432400.p?skuId=6432400',
			series: '3080'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6430620/cart',
			model: 'gaming oc',
			url: 'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3080-10g-gddr6x-pci-express-4-0-graphics-card-black/6430620.p?acampID=0&cmp=RMX&loc=Hatch&ref=198&skuId=6430620',
			series: '3080'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6430621/cart',
			model: 'eagle oc',
			url: 'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3080-10g-gddr6x-pci-express-4-0-graphics-card-black/6430621.p?skuId=6430621',
			series: '3080'
		},
		{
			brand: 'msi',
			cartUrl: 'https://api.bestbuy.com/click/-/6430175/cart',
			model: 'ventus 3x oc',
			url: 'https://www.bestbuy.com/site/msi-geforce-rtx-3080-ventus-3x-10g-oc-bv-gddr6x-pci-express-4-0-graphic-card-black-silver/6430175.p?skuId=6430175',
			series: '3080'
		}
	],
	labels: {
		outOfStock: ['sold out', 'coming soon']
	},
	name: 'bestbuy'
};

import {Store} from './store';

export const BestBuy: Store = {
	links: [
		{
			brand: 'TEST',
			model: 'CARD',
			url: 'https://www.bestbuy.com/site/nvidia-geforce-rtx-2060-super-8gb-gddr6-pci-express-graphics-card-black-silver/6361329.p?skuId=6361329'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			url: 'https://www.bestbuy.com/site/asus-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-strix-graphics-card-black/6432445.p?skuId=6432445',
			
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			url: 'https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6432399.p?skuId=6432399'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			url: 'https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6432400.p?skuId=6432400'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			url: 'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3080-10g-gddr6x-pci-express-4-0-graphics-card-black/6430620.p?acampID=0&cmp=RMX&loc=Hatch&ref=198&skuId=6430620'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			url: 'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3080-10g-gddr6x-pci-express-4-0-graphics-card-black/6430621.p?skuId=6430621'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			url: 'https://www.bestbuy.com/site/msi-geforce-rtx-3080-ventus-3x-10g-oc-bv-gddr6x-pci-express-4-0-graphic-card-black-silver/6430175.p?skuId=6430175'
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			url: 'https://www.bestbuy.com/site/nvidia-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card-titanium-and-black/6429440.p?skuId=6429440'
		}
	],
	labels: {
		oosList: ['sold out', 'coming soon']
	},
	elements: {
		addToCart: 'button.btn-primary.add-to-cart-button'
	},
	cartUrl: 'https://www.bestbuy.com/cart',
	name: 'bestbuy'
};

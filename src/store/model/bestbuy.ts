import {Store} from './store';

export const BestBuy: Store = {
	labels: {
		inStock: {
			container: '.v-m-bottom-g',
			text: ['add to cart']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.bestbuy.com/site/nvidia-geforce-rtx-2060-super-8gb-gddr6-pci-express-graphics-card-black-silver/6361329.p?skuId=6361329&intl=nosplash'
		},
		{
			brand: 'nvidia',
			cartUrl: 'https://api.bestbuy.com/click/-/6429440/cart',
			model: 'founders edition',
			series: '3080',
			url: 'https://www.bestbuy.com/site/nvidia-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card-titanium-and-black/6429440.p?skuId=6429440&intl=nosplash'
		},
		{
			brand: 'asus',
			cartUrl: 'https://api.bestbuy.com/click/-/6432445/cart',
			model: 'rog strix',
			series: '3080',
			url: 'https://www.bestbuy.com/site/asus-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-strix-graphics-card-black/6432445.p?skuId=6432445&intl=nosplash'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6432399/cart',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6432399.p?skuId=6432399&intl=nosplash'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6432400/cart',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6432400.p?skuId=6432400&intl=nosplash'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6430620/cart',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3080-10g-gddr6x-pci-express-4-0-graphics-card-black/6430620.p?acampID=0&cmp=RMX&loc=Hatch&ref=198&skuId=6430620&intl=nosplash'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6430621/cart',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3080-10g-gddr6x-pci-express-4-0-graphics-card-black/6430621.p?skuId=6430621&intl=nosplash'
		},
		{
			brand: 'msi',
			cartUrl: 'https://api.bestbuy.com/click/-/6430175/cart',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.bestbuy.com/site/msi-geforce-rtx-3080-ventus-3x-10g-oc-bv-gddr6x-pci-express-4-0-graphic-card-black-silver/6430175.p?skuId=6430175&intl=nosplash'
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			series: '3090',
			url: 'https://www.bestbuy.com/site/nvidia-geforce-rtx-3090-24gb-gddr6x-pci-express-4-0-graphics-card-titanium-and-black/6429434.p?skuId=6429434'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3090',
			url: 'https://www.bestbuy.com/site/asus-geforce-rtx-3090-24gb-gddr6x-pci-express-4-0-strix-graphics-card-black/6432447.p?skuId=6432447'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url: 'https://www.bestbuy.com/site/asus-tuf-rtx-3090-24gb-gddr6x-pci-express-4-0-graphics-card-black/6432446.p?skuId=6432446'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3090',
			url: 'https://www.bestbuy.com/site/msi-geforce-rtx-3090-ventus-3x-24g-oc-bv-24gb-gddr6x-pci-express-4-0-graphics-card-black-silver/6430215.p?skuId=6430215'
		},
		{
			brand: 'gigabyte',
			model: 'gaming',
			series: '3090',
			url: 'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3090-24g-gddr6x-pci-express-4-0-graphics-card-black/6430623.p?skuId=6430623'
		},
		{
			brand: 'gigabyte',
			model: 'eagle',
			series: '3090',
			url: 'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3090-24g-gddr6x-pci-express-4-0-graphics-card-black/6430624.p?skuId=6430624'
		}
	],
	name: 'bestbuy'
};

import {Store} from './store';

export const BestBuy: Store = {
	currency: '$',
	labels: {
		inStock: {
			container:
				'[data-sticky-media-gallery] .fulfillment-add-to-cart-button',
			text: ['add to cart']
		},
		maxPrice: {
			container:
				'[data-sticky-media-gallery] .priceView-price .priceView-hero-price span'
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://api.bestbuy.com/click/-/6258941/pdp'
		},
		{
			brand: 'nvidia',
			cartUrl: 'https://api.bestbuy.com/click/-/6429442/cart',
			model: 'founders edition',
			series: '3070',
			url: 'https://api.bestbuy.com/click/-/6429442/pdp'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6439300/cart',
			model: 'xc3 black',
			series: '3070',
			url: 'https://api.bestbuy.com/click/-/6439300/pdp'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6437912/cart',
			model: 'eagle',
			series: '3070',
			url: 'https://api.bestbuy.com/click/-/6437912/pdp'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6437909/cart',
			model: 'gaming oc',
			series: '3070',
			url: 'https://api.bestbuy.com/click/-/6437909/pdp'
		},
		{
			brand: 'pny',
			cartUrl: 'https://api.bestbuy.com/click/-/6432654/cart',
			model: 'dual fan',
			series: '3070',
			url: 'https://api.bestbuy.com/click/-/6432654/pdp'
		},
		{
			brand: 'pny',
			cartUrl: 'https://api.bestbuy.com/click/-/6432653/cart',
			model: 'xlr8 revel',
			series: '3070',
			url: 'https://api.bestbuy.com/click/-/6432653/pdp'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6439384/cart',
			model: 'aorus',
			series: '3070',
			url: 'https://api.bestbuy.com/click/-/6439384/pdp'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6439385/cart',
			model: 'vision',
			series: '3070',
			url: 'https://api.bestbuy.com/click/-/6439385/pdp'
		},
		{
			brand: 'asus',
			cartUrl: 'https://api.bestbuy.com/click/-/6439128/cart',
			model: 'tuf',
			series: '3070',
			url: 'https://api.bestbuy.com/click/-/6439128/pdp'
		},
		{
			brand: 'msi',
			cartUrl: 'https://api.bestbuy.com/click/-/6438278/cart',
			model: 'ventus 3x oc',
			series: '3070',
			url: 'https://api.bestbuy.com/click/-/6438278/pdp'
		},
		{
			brand: 'asus',
			cartUrl: 'https://api.bestbuy.com/click/-/6439127/cart',
			model: 'strix',
			series: '3070',
			url: 'https://api.bestbuy.com/click/-/6439127/pdp'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6439301/cart',
			model: 'ftw3 ultra',
			series: '3070',
			url: 'https://api.bestbuy.com/click/-/6439301/pdp'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6439299/cart',
			model: 'xc3 ultra',
			series: '3070',
			url: 'https://api.bestbuy.com/click/-/6439299/pdp'
		},
		{
			brand: 'nvidia',
			cartUrl: 'https://api.bestbuy.com/click/-/6429440/cart',
			model: 'founders edition',
			series: '3080',
			url: 'https://api.bestbuy.com/click/-/6429440/pdp'
		},
		{
			brand: 'asus',
			cartUrl: 'https://api.bestbuy.com/click/-/6432445/cart',
			model: 'strix',
			series: '3080',
			url: 'https://api.bestbuy.com/click/-/6432445/pdp'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6432399/cart',
			model: 'xc3 black',
			series: '3080',
			url: 'https://api.bestbuy.com/click/-/6432399/pdp'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6436194/cart',
			model: 'xc3',
			series: '3080',
			url: 'https://api.bestbuy.com/click/-/6436194/pdp'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6432400/cart',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://api.bestbuy.com/click/-/6432400/pdp'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6436196/cart',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://api.bestbuy.com/click/-/6436196/pdp'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6436191/cart',
			model: 'ftw3',
			series: '3080',
			url: 'https://api.bestbuy.com/click/-/6436191/pdp'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6430620/cart',
			model: 'gaming oc',
			series: '3080',
			url: 'https://api.bestbuy.com/click/-/6430620/pdp'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6430621/cart',
			model: 'eagle oc',
			series: '3080',
			url: 'https://api.bestbuy.com/click/-/6430621/pdp'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6436219/cart',
			model: 'vision oc',
			series: '3080',
			url: 'https://api.bestbuy.com/click/-/6436219/pdp'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6436223/cart',
			model: 'aorus master',
			series: '3080',
			url: 'https://api.bestbuy.com/click/-/6436223/pdp'
		},
		{
			brand: 'msi',
			cartUrl: 'https://api.bestbuy.com/click/-/6430175/cart',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://api.bestbuy.com/click/-/6430175/pdp'
		},
		{
			brand: 'pny',
			cartUrl: 'https://api.bestbuy.com/click/-/6432655/cart',
			model: 'xlr8 revel',
			series: '3080',
			url: 'https://api.bestbuy.com/click/-/6432655/pdp'
		},
		{
			brand: 'pny',
			cartUrl: 'https://api.bestbuy.com/click/-/6432658/cart',
			model: 'xlr8 revel',
			series: '3080',
			url: 'https://api.bestbuy.com/click/-/6432658/pdp'
		},
		{
			brand: 'nvidia',
			cartUrl: 'https://api.bestbuy.com/click/-/6429434/cart',
			model: 'founders edition',
			series: '3090',
			url: 'https://api.bestbuy.com/click/-/6429434/pdp'
		},
		{
			brand: 'asus',
			cartUrl: 'https://api.bestbuy.com/click/-/6432447/cart',
			model: 'strix',
			series: '3090',
			url: 'https://api.bestbuy.com/click/-/6432447/pdp'
		},
		{
			brand: 'asus',
			cartUrl: 'https://api.bestbuy.com/click/-/6432446/cart',
			model: 'tuf',
			series: '3090',
			url: 'https://api.bestbuy.com/click/-/6432446/pdp'
		},
		{
			brand: 'msi',
			cartUrl: 'https://api.bestbuy.com/click/-/6430215/cart',
			model: 'ventus 3x oc',
			series: '3090',
			url: 'https://api.bestbuy.com/click/-/6430215/pdp'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6430623/cart',
			model: 'gaming',
			series: '3090',
			url: 'https://api.bestbuy.com/click/-/6430623/pdp'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6430624/cart',
			model: 'eagle',
			series: '3090',
			url: 'https://api.bestbuy.com/click/-/6430624/pdp'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6434363/cart',
			model: 'xc3',
			series: '3090',
			url: 'https://api.bestbuy.com/click/-/6434363/pdp'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6436193/cart',
			model: 'ftw3',
			series: '3090',
			url: 'https://api.bestbuy.com/click/-/6436193/pdp'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6436192/cart',
			model: 'ftw3 ultra',
			series: '3090',
			url: 'https://api.bestbuy.com/click/-/6436192/pdp'
		},
		{
			brand: 'pny',
			cartUrl: 'https://api.bestbuy.com/click/-/6432657/cart',
			model: 'xlr8 revel',
			series: '3090',
			url: 'https://api.bestbuy.com/click/-/6432657/pdp'
		},
		{
			brand: 'nvidia',
			cartUrl: 'https://api.bestbuy.com/click/-/6439402/cart',
			model: 'founders edition',
			series: '3060ti',
			url: 'https://api.bestbuy.com/click/-/6439402/pdp'
		},
		{
			brand: 'msi',
			cartUrl: 'https://api.bestbuy.com/click/-/6441172/cart',
			model: 'ventus 2x',
			series: '3060ti',
			url: 'https://api.bestbuy.com/click/-/6441172/pdp'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6442484/cart',
			model: 'gaming oc',
			series: '3060ti',
			url: 'https://api.bestbuy.com/click/-/6442484/pdp'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6442485/cart',
			model: 'eagle',
			series: '3060ti',
			url: 'https://api.bestbuy.com/click/-/6442485/pdp'
		},
		{
			brand: 'amd',
			cartUrl: 'https://api.bestbuy.com/click/-/6438942/cart',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://api.bestbuy.com/click/-/6438942/pdp'
		},
		{
			brand: 'amd',
			cartUrl: 'https://api.bestbuy.com/click/-/6438941/cart',
			model: '5950x',
			series: 'ryzen5950',
			url: 'https://api.bestbuy.com/click/-/6438941/pdp'
		},
		{
			brand: 'amd',
			cartUrl: 'https://api.bestbuy.com/click/-/6439000/cart',
			model: '5800x',
			series: 'ryzen5800',
			url: 'https://api.bestbuy.com/click/-/6439000/pdp'
		},
		{
			brand: 'amd',
			cartUrl: 'https://api.bestbuy.com/click/-/6438943/cart',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://api.bestbuy.com/click/-/6438943/pdp'
		},
		{
			brand: 'sony',
			cartUrl: 'https://api.bestbuy.com/click/-/6426149/cart',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://api.bestbuy.com/click/-/6426149/pdp'
		},
		{
			brand: 'sony',
			cartUrl: 'https://api.bestbuy.com/click/-/6430161/cart',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url: 'https://api.bestbuy.com/click/-/6430161/pdp'
		},
		{
			brand: 'microsoft',
			cartUrl: 'https://api.bestbuy.com/click/-/6428324/cart',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://api.bestbuy.com/click/-/6428324/pdp'
		},
		{
			brand: 'microsoft',
			cartUrl: 'https://api.bestbuy.com/click/-/6430277/cart',
			model: 'xbox series s',
			series: 'xboxss',
			url: 'https://api.bestbuy.com/click/-/6430277/pdp'
		},
		{
			brand: 'msi',
			cartUrl: 'https://api.bestbuy.com/click/-/6440913/cart',
			model: 'amd reference',
			series: 'rx6800xt',
			url: 'https://api.bestbuy.com/click/-/6440913/pdp'
		},
		{
			brand: 'msi',
			cartUrl: 'https://api.bestbuy.com/click/-/6441020/cart',
			model: 'amd reference',
			series: 'rx6800',
			url: 'https://api.bestbuy.com/click/-/6441020/pdp'
		},
		{
			brand: 'xfx',
			cartUrl: 'https://api.bestbuy.com/click/-/6442077/cart',
			model: 'amd reference',
			series: 'rx6800',
			url: 'https://api.bestbuy.com/click/-/6442077/pdp'
		},
		{
			brand: 'xfx',
			cartUrl: 'https://api.bestbuy.com/click/-/6441226/cart',
			model: 'amd reference',
			series: 'rx6800xt',
			url: 'https://api.bestbuy.com/click/-/6441226/pdp'
		},
		{
			brand: 'xfx',
			cartUrl: 'https://api.bestbuy.com/click/-/6442585/cart',
			model: 'merc',
			series: 'rx6800xt',
			url: 'https://api.bestbuy.com/click/-/6442585/pdp'
		},
		{
			brand: 'xfx',
			cartUrl: 'https://api.bestbuy.com/click/-/6444358/cart',
			model: 'amd reference',
			series: 'rx6900xt',
			url: 'https://api.bestbuy.com/click/-/6444358/pdp'
		},
		{
			brand: 'msi',
			cartUrl: 'https://api.bestbuy.com/click/-/6444716/cart',
			model: 'amd reference',
			series: 'rx6900xt',
			url: 'https://api.bestbuy.com/click/-/6444716/pdp'
		},
		{
			brand: 'xfx',
			cartUrl: 'https://api.bestbuy.com/click/-/6445157/cart',
			model: 'merc',
			series: 'rx6900xt',
			url: 'https://api.bestbuy.com/click/-/6445157/pdp'
		},
		{
			brand: 'corsair',
			cartUrl: 'https://api.bestbuy.com/click/-/6351845/cart',
			model: '750 platinum',
			series: 'sf',
			url: 'https://api.bestbuy.com/click/-/6351845/pdp'
		},
		{
			brand: 'corsair',
			cartUrl: 'https://api.bestbuy.com/click/-/6351844/cart',
			model: '600 platinum',
			series: 'sf',
			url: 'https://api.bestbuy.com/click/-/6351844/pdp'
		},
		{
			brand: 'pny',
			cartUrl: 'https://api.bestbuy.com/click/-/6446660/cart',
			model: 'xlr8 uprising',
			series: '3060ti',
			url: 'https://api.bestbuy.com/click/-/6446660/pdp'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6444445/cart',
			model: 'xc gaming',
			series: '3060ti',
			url: 'https://api.bestbuy.com/click/-/6444445/pdp'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6444444/cart',
			model: 'ftw3',
			series: '3060ti',
			url: 'https://api.bestbuy.com/click/-/6444444/pdp'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6444449/cart',
			model: 'ftw3',
			series: '3060ti',
			url: 'https://api.bestbuy.com/click/-/6444449/pdp'
		}
	],
	name: 'bestbuy'
};

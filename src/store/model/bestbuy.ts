import {Store} from './store';

export const BestBuy: Store = {
	labels: {
		inStock: {
			container: '[data-sticky-media-gallery] .fulfillment-add-to-cart-button',
			text: ['add to cart']
		},
		maxPrice: {
			container: '[data-sticky-media-gallery] .priceView-price .priceView-hero-price span',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.bestbuy.com/site/evga-ko-ultra-gaming-nvidia-geforce-rtx-2060-6gb-gddr6-pci-express-3-0-graphics-card-black-gray/6403801.p?skuId=6403801&intl=nosplash'
		},
		{
			brand: 'nvidia',
			cartUrl: 'https://api.bestbuy.com/click/-/6429442/cart',
			model: 'founders edition',
			series: '3070',
			url: 'https://www.bestbuy.com/site/nvidia-geforce-rtx-3070-8gb-gddr6-pci-express-4-0-graphics-card-dark-platinum-and-black/6429442.p?skuId=6429442&intl=nosplash'
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
			cartUrl: 'https://api.bestbuy.com/click/-/6436194/cart',
			model: 'xc3',
			series: '3080',
			url: 'https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6436194.p?skuId=6436194&intl=nosplash'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6432400/cart',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6432400.p?skuId=6432400&intl=nosplash'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6436196/cart',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6436196.p?skuId=6436196&intl=nosplash'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6436191/cart',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6436191.p?skuId=6436191&intl=nosplash'
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
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6436219/cart',
			model: 'vision oc',
			series: '3080',
			url: 'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3080-10g-gddr6x-pci-express-4-0-graphics-card-white/6436219.p?skuId=6436219&intl=nosplash'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6436223/cart',
			model: 'aorus master',
			series: '3080',
			url: 'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3080-10g-gddr6x-pci-express-4-0-graphics-card-black/6436223.p?skuId=6436223&intl=nosplash'
		},
		{
			brand: 'msi',
			cartUrl: 'https://api.bestbuy.com/click/-/6430175/cart',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.bestbuy.com/site/msi-geforce-rtx-3080-ventus-3x-10g-oc-bv-gddr6x-pci-express-4-0-graphic-card-black-silver/6430175.p?skuId=6430175&intl=nosplash'
		},
		{
			brand: 'pny',
			cartUrl: 'https://api.bestbuy.com/click/-/6432655/cart',
			model: 'xlr8 rgb',
			series: '3080',
			url: 'https://www.bestbuy.com/site/pny-geforce-rtx-3080-10gb-xlr8-gaming-epic-x-rgb-triple-fan-graphics-card/6432655.p?skuId=6432655&intl=nosplash'
		},
		{
			brand: 'pny',
			cartUrl: 'https://api.bestbuy.com/click/-/6432658/cart',
			model: 'xlr8 rgb',
			series: '3080',
			url: 'https://www.bestbuy.com/site/pny-geforce-rtx-3080-10gb-xlr8-gaming-epic-x-rgb-triple-fan-graphics-card/6432658.p?skuId=6432658&intl=nosplash'
		},
		{
			brand: 'nvidia',
			cartUrl: 'https://api.bestbuy.com/click/-/6429434/cart',
			model: 'founders edition',
			series: '3090',
			url: 'https://www.bestbuy.com/site/nvidia-geforce-rtx-3090-24gb-gddr6x-pci-express-4-0-graphics-card-titanium-and-black/6429434.p?skuId=6429434&intl=nosplash'
		},
		{
			brand: 'asus',
			cartUrl: 'https://api.bestbuy.com/click/-/6432447/cart',
			model: 'rog strix',
			series: '3090',
			url: 'https://www.bestbuy.com/site/asus-geforce-rtx-3090-24gb-gddr6x-pci-express-4-0-strix-graphics-card-black/6432447.p?skuId=6432447&intl=nosplash'
		},
		{
			brand: 'asus',
			cartUrl: 'https://api.bestbuy.com/click/-/6432446/cart',
			model: 'tuf',
			series: '3090',
			url: 'https://www.bestbuy.com/site/asus-tuf-rtx-3090-24gb-gddr6x-pci-express-4-0-graphics-card-black/6432446.p?skuId=6432446&intl=nosplash'
		},
		{
			brand: 'msi',
			cartUrl: 'https://api.bestbuy.com/click/-/6430215/cart',
			model: 'ventus 3x oc',
			series: '3090',
			url: 'https://www.bestbuy.com/site/msi-geforce-rtx-3090-ventus-3x-24g-oc-bv-24gb-gddr6x-pci-express-4-0-graphics-card-black-silver/6430215.p?skuId=6430215&intl=nosplash'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6430623/cart',
			model: 'gaming',
			series: '3090',
			url: 'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3090-24g-gddr6x-pci-express-4-0-graphics-card-black/6430623.p?skuId=6430623&intl=nosplash'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6430624/cart',
			model: 'eagle',
			series: '3090',
			url: 'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3090-24g-gddr6x-pci-express-4-0-graphics-card-black/6430624.p?skuId=6430624&intl=nosplash'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6434363/cart',
			model: 'xc3',
			series: '3090',
			url: 'https://www.bestbuy.com/site/evga-geforce-rtx-3090-24gb-gddr6x-pci-express-4-0-graphics-card/6434363.p?skuId=6434363&intl=nosplash'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6436193/cart',
			model: 'ftw3',
			series: '3090',
			url: 'https://www.bestbuy.com/site/evga-geforce-rtx-3090-24gb-gddr6x-pci-express-4-0-graphics-card/6436193.p?skuId=6436193&intl=nosplash'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6436192/cart',
			model: 'ftw3 ultra',
			series: '3090',
			url: 'https://www.bestbuy.com/site/evga-geforce-rtx-3090-24gb-gddr6x-pci-express-4-0-graphics-card/6436192.p?skuId=6436192&intl=nosplash'
		},
		{
			brand: 'pny',
			cartUrl: 'https://api.bestbuy.com/click/-/6432657/cart',
			model: 'xlr8 rgb',
			series: '3090',
			url: 'https://www.bestbuy.com/site/pny-geforce-rtx-3090-24gb-xlr8-gaming-epic-x-rgb-triple-fan-graphics-card/6432657.p?skuId=6432657&intl=nosplash'
		}
	],
	name: 'bestbuy'
};

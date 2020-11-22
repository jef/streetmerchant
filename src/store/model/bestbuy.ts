import {Store} from './store';

export const BestBuy: Store = {
	labels: {
		inStock: {
			container: '[data-sticky-media-gallery] .fulfillment-add-to-cart-button',
			text: ['add to cart']
		},
		maxPrice: {
			container:
				'[data-sticky-media-gallery] .priceView-price .priceView-hero-price span',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.bestbuy.com/site/evga-ko-ultra-gaming-nvidia-geforce-rtx-2060-6gb-gddr6-pci-express-3-0-graphics-card-black-gray/6403801.p?skuId=6403801&intl=nosplash'
		},
		{
			brand: 'nvidia',
			cartUrl: 'https://api.bestbuy.com/click/-/6429442/cart',
			model: 'founders edition',
			series: '3070',
			url:
				'https://www.bestbuy.com/site/nvidia-geforce-rtx-3070-8gb-gddr6-pci-express-4-0-graphics-card-dark-platinum-and-black/6429442.p?skuId=6429442&intl=nosplash'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6439300/cart',
			model: 'xc3 black',
			series: '3070',
			url:
				'https://www.bestbuy.com/site/evga-geforce-rtx-3070-xc3-black-gaming-8gb-gddr6x-pci-express-4-0-graphics-card/6439300.p?skuId=6439300&intl=nosplash'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6437912/cart',
			model: 'eagle',
			series: '3070',
			url:
				'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3070-8g-gddr6-pci-express-4-0-graphics-card-black/6437912.p?skuId=6437912&intl=nosplash'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6437909/cart',
			model: 'gaming oc',
			series: '3070',
			url:
				'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3070-8g-gddr6-pci-express-4-0-graphics-card-black/6437909.p?skuId=6437909&intl=nosplash'
		},
		{
			brand: 'pny',
			cartUrl: 'https://api.bestbuy.com/click/-/6432654/cart',
			model: 'dual fan',
			series: '3070',
			url:
				'https://www.bestbuy.com/site/pny-geforce-rtx-3070-8gb-dual-fan-graphics-card/6432654.p?skuId=6432654&intl=nosplash'
		},
		{
			brand: 'pny',
			cartUrl: 'https://api.bestbuy.com/click/-/6432653/cart',
			model: 'xlr8 revel',
			series: '3070',
			url:
				'https://www.bestbuy.com/site/pny-geforce-rtx-3070-8gb-xlr8-gaming-epic-x-rgb-triple-fan-graphics-card/6432653.p?skuId=6432653&intl=nosplash'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6439384/cart',
			model: 'aorus',
			series: '3070',
			url:
				'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3070-8g-gddr6-pci-express-4-0-graphics-card-black/6439384.p?skuId=6439384'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6439385/cart',
			model: 'vision',
			series: '3070',
			url:
				'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3070-8g-gddr6-pci-express-4-0-graphics-card-white/6439385.p?skuId=6439385'
		},
		{
			brand: 'asus',
			cartUrl: 'https://api.bestbuy.com/click/-/6439128/cart',
			model: 'tuf',
			series: '3070',
			url:
				'https://www.bestbuy.com/site/asus-tuf-rtx3070-8gb-gddr6-pci-express-4-0-graphics-card-black/6439128.p?skuId=6439128'
		},
		{
			brand: 'msi',
			cartUrl: 'https://api.bestbuy.com/click/-/6438278/cart',
			model: 'ventus 3x oc',
			series: '3070',
			url:
				'https://www.bestbuy.com/site/msi-geforce-rtx-3070-ventus-3x-oc-bv-8gb-gddr6-pci-express-4-0-graphics-card-black/6438278.p?skuId=6438278'
		},
		{
			brand: 'asus',
			cartUrl: 'https://api.bestbuy.com/click/-/6439127/cart',
			model: 'strix',
			series: '3070',
			url:
				'https://www.bestbuy.com/site/asus-rog-strix-rtx3070-8gb-gddr6-pci-express-4-0-graphics-card-black/6439127.p?skuId=6439127'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6439301/cart',
			model: 'ftw3 ultra',
			series: '3070',
			url:
				'https://www.bestbuy.com/site/evga-geforce-rtx-3070-ftw3-ultra-gaming-8gb-gddr6x-pci-express-4-0-graphics-card/6439301.p?skuId=6439301'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6439299/cart',
			model: 'xc3 ultra',
			series: '3070',
			url:
				'https://www.bestbuy.com/site/evga-geforce-rtx-3070-xc3-ultra-gaming-8gb-gddr6x-pci-express-4-0-graphics-card/6439299.p?skuId=6439299'
		},
		{
			brand: 'nvidia',
			cartUrl: 'https://api.bestbuy.com/click/-/6429440/cart',
			model: 'founders edition',
			series: '3080',
			url:
				'https://www.bestbuy.com/site/nvidia-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card-titanium-and-black/6429440.p?skuId=6429440&intl=nosplash'
		},
		{
			brand: 'asus',
			cartUrl: 'https://api.bestbuy.com/click/-/6432445/cart',
			model: 'strix',
			series: '3080',
			url:
				'https://www.bestbuy.com/site/asus-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-strix-graphics-card-black/6432445.p?skuId=6432445&intl=nosplash'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6432399/cart',
			model: 'xc3 black',
			series: '3080',
			url:
				'https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6432399.p?skuId=6432399&intl=nosplash'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6436194/cart',
			model: 'xc3',
			series: '3080',
			url:
				'https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6436194.p?skuId=6436194&intl=nosplash'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6432400/cart',
			model: 'xc3 ultra',
			series: '3080',
			url:
				'https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6432400.p?skuId=6432400&intl=nosplash'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6436196/cart',
			model: 'ftw3 ultra',
			series: '3080',
			url:
				'https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6436196.p?skuId=6436196&intl=nosplash'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6436191/cart',
			model: 'ftw3',
			series: '3080',
			url:
				'https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6436191.p?skuId=6436191&intl=nosplash'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6430620/cart',
			model: 'gaming oc',
			series: '3080',
			url:
				'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3080-10g-gddr6x-pci-express-4-0-graphics-card-black/6430620.p?acampID=0&cmp=RMX&loc=Hatch&ref=198&skuId=6430620&intl=nosplash'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6430621/cart',
			model: 'eagle oc',
			series: '3080',
			url:
				'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3080-10g-gddr6x-pci-express-4-0-graphics-card-black/6430621.p?skuId=6430621&intl=nosplash'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6436219/cart',
			model: 'vision oc',
			series: '3080',
			url:
				'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3080-10g-gddr6x-pci-express-4-0-graphics-card-white/6436219.p?skuId=6436219&intl=nosplash'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6436223/cart',
			model: 'aorus master',
			series: '3080',
			url:
				'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3080-10g-gddr6x-pci-express-4-0-graphics-card-black/6436223.p?skuId=6436223&intl=nosplash'
		},
		{
			brand: 'msi',
			cartUrl: 'https://api.bestbuy.com/click/-/6430175/cart',
			model: 'ventus 3x oc',
			series: '3080',
			url:
				'https://www.bestbuy.com/site/msi-geforce-rtx-3080-ventus-3x-10g-oc-bv-gddr6x-pci-express-4-0-graphic-card-black-silver/6430175.p?skuId=6430175&intl=nosplash'
		},
		{
			brand: 'pny',
			cartUrl: 'https://api.bestbuy.com/click/-/6432655/cart',
			model: 'xlr8 revel',
			series: '3080',
			url:
				'https://www.bestbuy.com/site/pny-geforce-rtx-3080-10gb-xlr8-gaming-epic-x-rgb-triple-fan-graphics-card/6432655.p?skuId=6432655&intl=nosplash'
		},
		{
			brand: 'pny',
			cartUrl: 'https://api.bestbuy.com/click/-/6432658/cart',
			model: 'xlr8 revel',
			series: '3080',
			url:
				'https://www.bestbuy.com/site/pny-geforce-rtx-3080-10gb-xlr8-gaming-epic-x-rgb-triple-fan-graphics-card/6432658.p?skuId=6432658&intl=nosplash'
		},
		{
			brand: 'nvidia',
			cartUrl: 'https://api.bestbuy.com/click/-/6429434/cart',
			model: 'founders edition',
			series: '3090',
			url:
				'https://www.bestbuy.com/site/nvidia-geforce-rtx-3090-24gb-gddr6x-pci-express-4-0-graphics-card-titanium-and-black/6429434.p?skuId=6429434&intl=nosplash'
		},
		{
			brand: 'asus',
			cartUrl: 'https://api.bestbuy.com/click/-/6432447/cart',
			model: 'strix',
			series: '3090',
			url:
				'https://www.bestbuy.com/site/asus-geforce-rtx-3090-24gb-gddr6x-pci-express-4-0-strix-graphics-card-black/6432447.p?skuId=6432447&intl=nosplash'
		},
		{
			brand: 'asus',
			cartUrl: 'https://api.bestbuy.com/click/-/6432446/cart',
			model: 'tuf',
			series: '3090',
			url:
				'https://www.bestbuy.com/site/asus-tuf-rtx-3090-24gb-gddr6x-pci-express-4-0-graphics-card-black/6432446.p?skuId=6432446&intl=nosplash'
		},
		{
			brand: 'msi',
			cartUrl: 'https://api.bestbuy.com/click/-/6430215/cart',
			model: 'ventus 3x oc',
			series: '3090',
			url:
				'https://www.bestbuy.com/site/msi-geforce-rtx-3090-ventus-3x-24g-oc-bv-24gb-gddr6x-pci-express-4-0-graphics-card-black-silver/6430215.p?skuId=6430215&intl=nosplash'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6430623/cart',
			model: 'gaming',
			series: '3090',
			url:
				'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3090-24g-gddr6x-pci-express-4-0-graphics-card-black/6430623.p?skuId=6430623&intl=nosplash'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://api.bestbuy.com/click/-/6430624/cart',
			model: 'eagle',
			series: '3090',
			url:
				'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3090-24g-gddr6x-pci-express-4-0-graphics-card-black/6430624.p?skuId=6430624&intl=nosplash'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6434363/cart',
			model: 'xc3',
			series: '3090',
			url:
				'https://www.bestbuy.com/site/evga-geforce-rtx-3090-24gb-gddr6x-pci-express-4-0-graphics-card/6434363.p?skuId=6434363&intl=nosplash'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6436193/cart',
			model: 'ftw3',
			series: '3090',
			url:
				'https://www.bestbuy.com/site/evga-geforce-rtx-3090-24gb-gddr6x-pci-express-4-0-graphics-card/6436193.p?skuId=6436193&intl=nosplash'
		},
		{
			brand: 'evga',
			cartUrl: 'https://api.bestbuy.com/click/-/6436192/cart',
			model: 'ftw3 ultra',
			series: '3090',
			url:
				'https://www.bestbuy.com/site/evga-geforce-rtx-3090-24gb-gddr6x-pci-express-4-0-graphics-card/6436192.p?skuId=6436192&intl=nosplash'
		},
		{
			brand: 'pny',
			cartUrl: 'https://api.bestbuy.com/click/-/6432657/cart',
			model: 'xlr8 revel',
			series: '3090',
			url:
				'https://www.bestbuy.com/site/pny-geforce-rtx-3090-24gb-xlr8-gaming-epic-x-rgb-triple-fan-graphics-card/6432657.p?skuId=6432657&intl=nosplash'
		},
		{
			brand: 'amd',
			cartUrl: 'https://api.bestbuy.com/click/-/6438942/cart',
			model: '5900x',
			series: 'ryzen5900',
			url:
				'https://www.bestbuy.com/site/amd-ryzen-9-5900x-4th-gen-12-core-24-threads-unlocked-desktop-processor-without-cooler/6438942.p?skuId=6438942&intl=nosplash'
		},
		{
			brand: 'amd',
			cartUrl: 'https://api.bestbuy.com/click/-/6438941/cart',
			model: '5950x',
			series: 'ryzen5950',
			url:
				'https://www.bestbuy.com/site/amd-ryzen-9-5950x-4th-gen-16-core-32-threads-unlocked-desktop-processor-without-cooler/6438941.p?skuId=6438941&intl=nosplash'
		},
		{
			brand: 'amd',
			cartUrl: 'https://api.bestbuy.com/click/-/6439000/cart',
			model: '5800x',
			series: 'ryzen5800',
			url:
				'https://www.bestbuy.com/site/amd-ryzen-7-5800x-4th-gen-8-core-16-threads-unlocked-desktop-processor-without-cooler/6439000.p?skuId=6439000&intl=nosplash'
		},
		{
			brand: 'amd',
			cartUrl: 'https://api.bestbuy.com/click/-/6438943/cart',
			model: '5600x',
			series: 'ryzen5600',
			url:
				'https://www.bestbuy.com/site/amd-ryzen-5-5600x-4th-gen-6-core-12-threads-unlocked-desktop-processor-with-wraith-stealth-cooler/6438943.p?skuId=6438943&intl=nosplash'
		},
		{
			brand: 'sony',
			cartUrl: 'https://api.bestbuy.com/click/-/6426149/cart',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://www.bestbuy.com/site/sony-playstation-5-console/6426149.p?skuId=6426149&intl=nosplash'
		},
		{
			brand: 'sony',
			cartUrl: 'https://api.bestbuy.com/click/-/6430161/cart',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://www.bestbuy.com/site/sony-playstation-5-digital-edition-console/6430161.p?skuId=6430161&intl=nosplash'
		},
		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url:
				'https://www.bestbuy.com/site/microsoft-xbox-series-x-1tb-console-black/6428324.p?skuId=6428324'
		},
		{
			brand: 'microsoft',
			model: 'xbox series s',
			series: 'xboxss',
			url:
				'https://www.bestbuy.com/site/microsoft-xbox-series-s-512-gb-all-digital-console-disc-free-gaming-white/6430277.p?skuId=6430277'
		},
		{
			brand: 'msi',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://www.bestbuy.com/site/msi-radeon-rx-6800-xt-16g-16gb-gddr6-pci-express-4-0-graphics-card-black-black/6440913.p?skuId=6440913'
		},
		{
			brand: 'msi',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://www.bestbuy.com/site/msi-radeon-rx-6800-16g-16gb-gddr6-pci-express-4-0-graphics-card-black-black/6441020.p?skuId=6441020'
		},
		{
			brand: 'xfx',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.bestbuy.com/site/xfx-amd-radeon-rx-6800-16gb-gddr6-pci-express-4-0-gaming-graphics-card-black/6442077.p?skuId=6442077'
		},
		{
			brand: 'xfx',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://www.bestbuy.com/site/xfx-amd-radeon-rx-6800xt-16gb-gddr6-pci-express-4-0-gaming-graphics-card-black/6441226.p?skuId=6441226'
		},
		{
			brand: 'corsair',
			cartUrl: 'https://api.bestbuy.com/click/-/6351845/cart',
			model: '750 platinum',
			series: 'sf',
			url:
				'https://www.bestbuy.com/site/corsair-sf-series-750w-atx12v-2-4-eps12v-2-92-sfx12v-80-plus-platinum-modular-power-supply-black/6351845.p?skuId=6351845'
		},
		{
			brand: 'corsair',
			cartUrl: 'https://api.bestbuy.com/click/-/6351844/cart',
			model: '600 platinum',
			series: 'sf',
			url:
				'https://www.bestbuy.com/site/corsair-sf-series-600w-atx12v-2-4-eps12v-2-92-sfx12v-80-plus-platinum-modular-power-supply-black/6351844.p?skuId=6351844'
		}
	],
	name: 'bestbuy'
};

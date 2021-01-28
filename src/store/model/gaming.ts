import { Store } from './store';

export const Gaming: Store = {
	currency: '₺',
	labels: {
		inStock: {
			container: '.cart',
			text: ['sepete ekle']
		},
		maxPrice: {
			container: 'p.price > span:nth-child(1)',
			euroFormat: true
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.gaming.gen.tr/urun/5393/corsair-hs50-pro-stereo-siyah-gaming-kulaklik/'
		},
		// RTX 3060 TI
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3060TITRY',
			url: 'https://www.gaming.gen.tr/urun/25615/asus-geforce-rtx-3060-ti-rog-strix-oc-8gb-gddr6-256-bit-ekran-karti/'
		},
		{
			brand: 'asus',
			model: 'dual oc',
			series: '3060TITRY',
			url: 'https://www.gaming.gen.tr/urun/25592/asus-geforce-rtx-3060-ti-dual-oc-8gb-gddr6-256-bit-ekran-karti/'
		},
		{
			brand: 'zotac',
			model: 'twin edge',
			series: '3060TITRY',
			url: 'https://www.gaming.gen.tr/urun/23770/zotac-gaming-geforce-rtx-3060-ti-twin-edge-8gb-256-bit-ekran-karti/'
		},
		// RTX 3070
		{
			brand: 'asus',
			model: 'dual',
			series: '3070TRY',
			url: 'https://www.gaming.gen.tr/urun/16940/asus-dual-geforce-rtx-3070-8gb-gddr6-256bit-ekran-karti/'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3070TRY',
			url: 'https://www.gaming.gen.tr/urun/16893/asus-rog-strix-geforce-rtx-3070-gaming-oc-8gb-gddr6-256-bit-ekran-karti/'
		},
		// 3080, 3090
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080TRY',
			url: 'https://www.gaming.gen.tr/urun/10086/asus-tuf-geforce-rtx-3080-10gb-gddr6x-320-bit-ekran-karti/'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090TRY',
			url: 'https://www.gaming.gen.tr/urun/10225/asus-tuf-geforce-rtx-3090-24gb-gddr6x-384-bit-ekran-karti/'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090TRY',
			url: 'https://www.gaming.gen.tr/urun/10273/asus-tuf-geforce-rtx-3090-24gb-oc-gddr6x-384-bit-ekran-karti/'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3080TRY',
			url: 'https://www.gaming.gen.tr/urun/10148/asus-geforce-rog-strix-rtx-3080-gaming-10gb-gddr6x-320bit-dx12-ekran-karti/'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3090TRY',
			url: 'https://www.gaming.gen.tr/urun/10404/asus-rog-strix-geforce-rtx-3090-24gb-gddr6x-384-bit-ekran-karti/'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080TRY',
			url: 'https://www.gaming.gen.tr/urun/10185/asus-geforce-rog-strix-rtx-3080-gaming-oc-10gb-gddr6x-320bit-dx12-ekran-karti/'
		}

	],
	name: 'gaming'
};

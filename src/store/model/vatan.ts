import { Store } from './store';

export const Vatan: Store = {
	currency: '₺',
	labels: {
		inStock: {
			container: '#add-to-cart-button',
			text: ['SEPETE EKLE']
		},
		outOfStock: {
			container:'.btn.btn-success',
			text: ['TÜKENDİ','ÇOK YAKINDA'] // bazı sitelerde birçok stok yok bilgisi oluyor, container class yapıları aynı veya ortak
		},
		maxPrice: {
			container: 'span.product-list__price:nth-child(2)',
			euroFormat: true
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.vatanbilgisayar.com/tefal-travel-mug-inox-termos-0-36l-3100517969.html'
		},
		// RTX 3060 TI
		{
			brand: 'zotac',
			model: 'twin edge oc',
			series: '3060TITRY',
			url: 'https://www.vatanbilgisayar.com/zotac-geforce-rtx-3060-ti-twin-edge-oc-8gb-gddr6-256bit-nvidia-ekran-karti.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3060TITRY',
			url: 'https://www.vatanbilgisayar.com/asus-geforce-tuf-rtx-3060-ti-gaming-oc-8gb-gddr6-256bit-nvidia-rgb-ekran-karti.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3060TITRY',
			url: 'https://www.vatanbilgisayar.com/asus-geforce-rog-strix-rtx-3060-ti-gaming-oc-8gb-gddr6-256bit-rgb-ekran-karti.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3060TITRY',
			url: 'https://www.vatanbilgisayar.com/msi-geforce-rtx-3060-ti-gaming-x-trio-8gb-gddr6-256bit-nvidia-ekran-karti.html'
		},
		{
			brand: 'msi',
			model: 'ventus 2x oc',
			series: '3060TITRY',
			url: 'https://www.vatanbilgisayar.com/msi-geforce-rtx-3060-ti-ventus-2x-oc-8gb-gddr6-256bit-nvidia-ekran-karti.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3060TITRY',
			url: 'https://www.vatanbilgisayar.com/gigabyte-geforce-rtx-3060-ti-eagle-oc-8gb-gddr6-256bit-nvidia-dx12-ekran-karti.html'
		},

		// RTX 3070
		{
			brand: 'msi',
			model: 'ventus 2x oc',
			series: '3070TRY',
			url: 'https://www.vatanbilgisayar.com/msi-geforce-rtx-3070-ventus-2x-oc-8gb-gddr6-256bit-nvidia-ekran-karti.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3070TRY',
			url: 'https://www.vatanbilgisayar.com/msi-geforce-rtx-3070-ventus-3x-oc-8gb-gddr6-256bit-nvidia-ekran-karti.html'
		},
		{
			brand: 'zotac',
			model: 'twin edge oc',
			series: '3070TRY',
			url: 'https://www.vatanbilgisayar.com/zotac-geforce-rtx-3070-twin-edge-gaming-oc-8gb-gddr6-256bit-nvidia-ekran-karti.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3070TRY',
			url: 'https://www.vatanbilgisayar.com/msi-geforce-rtx-3070-gaming-x-trio-8gb-gddr6-256bit-nvidia-ekran-karti.html'
		},
		{
			brand: 'evga',
			model: 'xc black',
			series: '3070TRY',
			url: 'https://www.vatanbilgisayar.com/evga-geforce-rtx-3070-xc-black-edition-gaming-8gb-gddr6-256bit-rgb-ekran-karti.html'
		},
		{
			brand: 'asus',
			model: 'dual oc',
			series: '3070TRY',
			url: 'https://www.vatanbilgisayar.com/asus-geforce-dual-rtx-3070-oc-8gb-gddr6-256bit-dx12-ekran-karti.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3070TRY',
			url: 'https://www.vatanbilgisayar.com/gigabyte-geforce-rtx-3070-eagle-oc-8gb-gddr6-256bit-nvidia-ekran-karti.html'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3070TRY',
			url: 'https://www.vatanbilgisayar.com/evga-geforce-rtx-3070-xc3-ultra-gaming-8gb-gddr6-256bit-nvidia-rgb-ekran-karti.html'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3070TRY',
			url: 'https://www.vatanbilgisayar.com/gigabyte-geforce-rtx-3070-vision-oc-8gb-gddr6-256bit-nvidia-ekran-karti.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3070TRY',
			url: 'https://www.vatanbilgisayar.com/gigabyte-geforce-rtx-3070-gaming-oc-8gb-gddr6-256bit-nvidia-ekran-karti.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3070TRY',
			url: 'https://www.vatanbilgisayar.com/asus-geforce-tuf-rtx-3070-gaming-oc-8gb-gddr6-256bit-dx12-nvidia-ekran-karti.html'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3070TRY',
			url: 'https://www.vatanbilgisayar.com/evga-geforce-rtx-3070-ftw3-ultra-gaming-8gb-gddr6-256bit-nvidia-argb-ekran-karti.html'
		},
		{
			brand: 'asus',
			model: 'dual',
			series: '3070TRY',
			url: 'https://www.vatanbilgisayar.com/asus-geforce-dual-rtx-3070-8gb-gddr6-256bit-dx12-ekran-karti.html'
		},
		// 3080, 3090
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080TRY',
			url: 'https://www.vatanbilgisayar.com/msi-geforce-rtx-3080-ventus-3x-10g-oc-10gb-gddr6x-320bit-nvidia-ekran-karti.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3090TRY',
			url: 'https://www.vatanbilgisayar.com/msi-geforce-rtx-3090-ventus-3x-24g-oc-24gb-gddr6x-384bit-nvidia-ekran-karti.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x',
			series: '3080TRY',
			url: 'https://www.vatanbilgisayar.com/msi-geforce-rtx-3080-ventus-3x-10g-10gb-gddr6x-320bit-nvidia-ekran-karti.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090TRY',
			url: 'https://www.vatanbilgisayar.com/msi-geforce-rtx-3090-gaming-x-trio-24g-24gb-gddr6x-384bit-nvidia-ekran-karti.html'
		},

		{
			brand: 'asus',
			model: 'tuf',
			series: '3080TRY',
			url: 'https://www.vatanbilgisayar.com/asus-tuf-rtx3080-gaming-10gb-gddr6x-320bit-dx12-nvidia-ekran-karti.html'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3080TRY',
			url: 'https://www.vatanbilgisayar.com/asus-rog-strix-rtx3080-gaming-10gb-gddr6x-320bit-dx12-ekran-karti.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080TRY',
			url: 'https://www.vatanbilgisayar.com/asus-rog-strix-rtx3080-gaming-oc-10gb-gddr6x-320bit-dx12-ekran-karti.html'
		}
		// {
		// 	brand: 'xxx',
		// 	model: 'xxx',
		// 	series: 'xxx',
		// 	url: 'xxx'
		// },
	],
	name: 'vatan'
};

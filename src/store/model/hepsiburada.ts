import { Store } from './store';

export const Hepsiburada: Store = {
	currency: '₺',
	labels: {
		inStock: {
			container: '#addToCart',
			text: ['Sepete Ekle']
		},
		// #offering-price > span:nth-child(1)
		// .extra-discount-price > span:nth-child(1)
		// maxPrice: {
		// 	container: ['#offering-price > span:nth-child(1)','.extra-discount-price > span:nth-child(1)'],
		// 	euroFormat: false
		// }
		maxPrice: {
			container: '#offering-price',
			euroFormat: true
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.hepsiburada.com/sapphire-pulsa-amd-radeon-rx580-8gb-256bit-gddr5-dx12-ekran-karti-11265-67-20g-p-HBV00000SM1W0'
		},
		// RTX 3060 TI
		{
			brand: 'asus',
			model: 'dual oc',
			series: '3060TITRY',
			url: 'https://www.hepsiburada.com/asus-geforce-dual-rtx-3060ti-8gb-oc-256bit-gddr6-dx12-pci-express-4-0-ekran-karti-dual-rtx3060ti-o8g-p-HBV000013WLTL'
		},
		{
			brand: 'gigabyte',
			model: 'eagle',
			series: '3060TITRY',
			url: 'https://www.hepsiburada.com/gigabyte-nvidia-geforce-rtx-3060ti-8gb-256bit-gddr6-dx12-pci-express-4-0-ekran-karti-gv-n306teagle-8gd-p-HBV000013TTWC'
		},
		{
			brand: 'palit',
			model: 'gaming pro oc',
			series: '3060TITRY',
			url: 'https://www.hepsiburada.com/palit-rtx3060ti-gaming-pro-oc-8gb-256bit-gddr6-dx12-pci-express-4-0-ekran-karti-ne6306tt19p2-1041a-p-HBV000013YOBE'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3060TITRY',
			url: 'https://www.hepsiburada.com/gigabyte-geforce-rtx-3060ti-gaming-8gb-oc-256bit-gddr6-pci-express-4-0-ekran-karti-gv-n306tgaming-oc-8gd-p-HBV000014798O'
		},
		// RTX 3070
		{
			brand: 'palit',
			model: 'gaming pro oc',
			series: '3070TRY',
			url: 'https://www.hepsiburada.com/palit-nvidia-geforce-rtx3070-gaming-pro-oc-8gb-256bit-dx12-pci-e-4-0-gddr6-ekran-karti-p-HBV00000ZOYT2'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3070TRY',
			url: 'https://www.hepsiburada.com/asus-tuf-geforce-rtx-3070-oc-8gb-256bit-gddr6-256bit-pci-express-4-0-tuf-rtx3070-o8g-gaming-p-HBV000011DKGN'
		},
		{
			brand: 'palit',
			model: 'gamerock oc',
			series: '3070TRY',
			url: 'https://www.hepsiburada.com/palit-nvidia-geforce-rtx3070-gamerock-oc-8gb-256bit-ddr6-dx12-pci-express-4-0-ekran-karti-p-HBV0000119QQR'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3070TRY',
			url: 'https://www.hepsiburada.com/gigabyte-geforce-rtx-3070-8gb-oc-256bit-gddr6-pci-express-4-0-ekran-karti-gv-n3070gaming-oc-8gd-p-HBV000012E9EM'
		},
		{
			brand: 'asus',
			model: 'dual oc',
			series: '3070TRY',
			url: 'https://www.hepsiburada.com/asus-geforce-dual-rtx-3070-8gb-oc-256bit-gddr6-dx12-pci-express-4-0-ekran-karti-dual-rtx3070-8g-p-HBV00000Y80SH'
		},
		{
			brand: 'asus',
			model: 'dual oc',
			series: '3070TRY',
			url: 'https://www.hepsiburada.com/asus-geforce-dual-rtx-3070-8gb-256bit-oc-gddr6-dx12-pci-express-4-0-ekran-karti-dual-rtx3070-o8g-p-HBV00000Y80SJ'
		},
		{
			brand: 'msi',
			model: 'ventus 2x oc',
			series: '3070TRY',
			url: 'https://www.hepsiburada.com/msi-geforce-rtx-3070-ventus-2x-oc-8gb-gddr6-256bit-dx-12-pci-express-4-0-ekran-karti-geforce-rtx-3070-ventus-2x-oc-p-HBV000011TMHQ'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3070TRY',
			url: 'https://www.hepsiburada.com/msi-geforce-rtx-3070-gaming-x-trio-8gb-gddr6-256bit-dx-12-pci-express-4-0-ekran-karti-geforce-rtx-3070-gaming-x-trio-p-HBV000011TMHN'
		},
		{
			brand: 'zotac',
			model: 'twin edge oc',
			series: '3070TRY',
			url: 'https://www.hepsiburada.com/zotac-gaming-geforce-rtx3070-twin-edge-oc-8gb-gddr6-256bit-dx12-ekran-karti-zt-a30700h-10p-p-HBV0000147XHZ'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3070TRY',
			url: 'https://www.hepsiburada.com/inno3d-rtx3070-ichill-x4-8gb-256bit-gddr6-ekran-karti-p-HBV0000140KNW'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3070TRY',
			url: 'https://www.hepsiburada.com/asus-geforce-rog-strix-rtx-3070-8gb-oc-256bit-gddr6-dx12-pci-express-4-0-ekran-karti-rog-strix-rtx3070-o8g-gaming-p-HBV00000Y80SN'
		},
		// 3080, 3090
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080TRY',
			url: 'https://www.hepsiburada.com/asus-geforce-rtx-3080-oc-10gb-320bit-gddr6x-dx12-pci-express-4-0-ekran-karti-tuf-rtx-3080-10g-gaming-pm-HB00000XATX1'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090TRY',
			url: 'https://www.hepsiburada.com/asus-geforce-rtx-3090-oc-24gb-384bit-gddr6x-dx12-pci-express-4-0-ekran-karti-rog-strix-rtx-3090-o24g-gaming-p-HBV00000XATX6'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080TRY',
			url: 'https://www.hepsiburada.com/asus-geforce-rtx-3080-oc-10gb-384bit-gddr6x-dx12-pci-express-4-0-ekran-karti-rog-strix-rtx-3080-o10g-gaming-p-HBV00000XATX4'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3090TRY',
			url: 'https://www.hepsiburada.com/asus-geforce-rtx-3090-oc-24gb-384bit-gddr6x-dx12-pci-express-4-0-ekran-karti-tuf-rtx-3090-o24g-gaming-p-HBV00000XATWW'
		}
		// {
		// 	brand: 'XXX',
		// 	model: 'XXX',
		// 	series: '3070TRY',
		// 	url: 'XXX'
		// },
	],
	name: 'hepsiburada'
};

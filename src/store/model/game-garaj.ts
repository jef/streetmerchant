import { Store } from './store';

export const GameGraj: Store = {
	currency: '₺',
	labels: {
		inStock: {
			container: '.single_add_to_cart_button',
			text: ['sepete ekle']
		},
		maxPrice: {
			// .price > span:nth-child(1)
			container: '.woocommerce-Price-amount',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.gamegaraj.com/urun/asus-prime-b450m-k-4400mhz-oc-am4-matx-2/'
		},
		// RTX 3060 TI
		{
			brand: 'inno3d',
			model: 'twin x2 oc',
			series: '3060TITRY',
			url: 'https://www.gamegaraj.com/urun/inno3d-rtx3060ti-twin-x2-oc-8gb-256bit-gddr6/'
		},
		{
			brand: 'palit',
			model: 'dual',
			series: '3060TITRY',
			url: 'https://www.gamegaraj.com/urun/palit-rtx3060ti-dual-8gb-256bit-gddr6-2/'
		},
		{
			brand: 'palit',
			model: 'dual oc',
			series: '3060TITRY',
			url: 'https://www.gamegaraj.com/urun/palit-rtx3060ti-dual-oc-8gb-256bit-gddr6/'
		},
		{
			brand: 'palit',
			model: 'gaming pro oc',
			series: '3060TITRY',
			url: 'https://www.gamegaraj.com/urun/palit-rtx3060ti-gamingpro-oc-8gb-256bit-gddr6/'
		},
		// RTX 3070
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3070TRY',
			url: 'https://www.gamegaraj.com/urun/inno3d-rtx3070-ichill-x4-8gb-256bit-gddr6-2/'
		},
		{
			brand: 'inno3d',
			model: 'twin x2 oc',
			series: '3070TRY',
			url: 'https://www.gamegaraj.com/urun/inno3d-rtx3070-twin-x2-oc-8gb-256bit-gddr6/'
		},
		{
			brand: 'palit',
			model: 'gamerock',
			series: '3070TRY',
			url: 'https://www.gamegaraj.com/urun/palit-rtx3070-gamerock-8gb-256bit-gddr6/'
		},
		{
			brand: 'palit',
			model: 'gamerock oc',
			series: '3070TRY',
			url: 'https://www.gamegaraj.com/urun/palit-rtx3070-gamerock-oc-8gb-256bit-gddr6/'
		},
		{
			brand: 'palit',
			model: 'gaming pro oc',
			series: '3070TRY',
			url: 'https://www.gamegaraj.com/urun/palit-rtx3070-gamingpro-oc-8gb-256bit-gddr6/'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3070TRY',
			url: 'https://www.gamegaraj.com/urun/asus-strix-rtx3070-o8g-gaming-8gb-256bit-gddr6-2/'
		},
		{
			brand: 'asus',
			model: 'dual oc',
			series: '3070TRY',
			url: 'https://www.gamegaraj.com/urun/asus-dual-rtx3070-o8g-gaming-8gb-256bit-gddr6-2/'
		},
		// 3080, 3090
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090TRY',
			url: 'https://www.gamegaraj.com/urun/asus-tuf-rtx3090-o24g-gaming-24gb-384bit-gddr6x-2/'
		},
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3080TRY',
			url: 'https://www.gamegaraj.com/urun/palit-rtx3080-gamingpro-10gb-320bit-gddr6x-2/'
		},
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3090TRY',
			url: 'https://www.gamegaraj.com/urun/palit-rtx3090-gamingpro-24gb-384bit-gddr6x/'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3080TRY',
			url: 'https://www.gamegaraj.com/urun/inno3d-rtx3080-ichill-x4-10gb-320bit-gddr6x-2/'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3090TRY',
			url: 'https://www.gamegaraj.com/urun/inno3d-rtx3090-ichill-x3-24gb-384bit-gddr6x/'
		},
		// {
		// 	brand: 'xxx',
		// 	model: 'xxx',
		// 	series: '3070TRY',
		// 	url: 'xxx'
		// },

	],
	name: 'gamegaraj'
};

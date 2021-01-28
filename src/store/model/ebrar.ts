import { Store } from './store';

export const Ebrar: Store = {
	currency: '₺',
	labels: {
		inStock: {
			container: '#sepete_ekle_buton',
			text: ['Sepete Ekle']
		},
		maxPrice: {
			container: '.urun_fiyati > span:nth-child(1)',
			euroFormat: true
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.ebrarbilgisayar.com/msi-gl65-leopard-10sdr-412xtr-i7-10750h-16gb-256gb-ssd-6gb-gtx1660ti-156-freedos-pmu365490'
		},
		// RTX 3070
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3070TRY',
			url: 'https://www.ebrarbilgisayar.com/msi-geforce-rtx-3070-gaming-x-trio-8gb-256bit-gddr6-pmu365501'
		},
		{
			brand: 'msi',
			model: 'gaming trio',
			series: '3070TRY',
			url: 'https://www.ebrarbilgisayar.com/msi-geforce-rtx-3070-gaming-trio-8gb-256bit-gddr6-pmu365502'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3070TRY',
			url: 'https://www.ebrarbilgisayar.com/msi-geforce-rtx-3070-ventus-3x-oc-8gb-256bit-gddr6-pmu365507'
		},
		{
			brand: 'msi',
			model: 'ventus 3x',
			series: '3070TRY',
			url: 'https://www.ebrarbilgisayar.com/msi-geforce-rtx-3070-ventus-3x-8gb-256bit-gddr6-pmu365508'
		},
		{
			brand: 'msi',
			model: 'ventus 2x oc',
			series: '3070TRY',
			url: 'https://www.ebrarbilgisayar.com/msi-geforce-rtx-3070-ventus-2x-oc-8gb-256bit-gddr6-pmu365509'
		},
		{
			brand: 'msi',
			model: 'ventus 2x',
			series: '3070TRY',
			url: 'https://www.ebrarbilgisayar.com/msi-geforce-rtx-3070-ventus-2x-8gb-256bit-gddr6-pmu365510'
		},
		{
			brand: 'asus',
			model: 'dual',
			series: '3070TRY',
			url: 'https://www.ebrarbilgisayar.com/asus-dual-geforce-rtx-3070-8gb-256bit-gddr6-pmu365511'
		},
		{
			brand: 'asus',
			model: 'dual oc',
			series: '3070TRY',
			url: 'https://www.ebrarbilgisayar.com/asus-dual-geforce-rtx-3070-oc-8gb-256bit-gddr6-pmu365512'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3070TRY',
			url: 'https://www.ebrarbilgisayar.com/asus-rog-strix-geforce-rtx-3070-oc-8gb-256bit-gddr6-pmu365513'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3070TRY',
			url: 'https://www.ebrarbilgisayar.com/asus-rog-strix-geforce-rtx-3070-8gb-256bit-gddr6-pmu365514'
		},
		// 3080
		{
			brand: 'msi',
			model: 'gaming trio',
			series: '3080TRY',
			url: 'https://www.ebrarbilgisayar.com/msi-geforce-rtx-3080-gaming-trio-10g-10gb-320bit-gddr6x-pmu365500'
		},
		{
			brand: 'msi',
			model: 'gaming trio',
			series: '3080TRY',
			url: 'https://www.ebrarbilgisayar.com/msi-geforce-rtx-3090-gaming-trio-24g-24gb-384bit-gddr6x-pmu365498'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080TRY',
			url: 'https://www.ebrarbilgisayar.com/msi-geforce-rtx-3080-gaming-x-trio-10g-10gb-320bit-gddr6x-pmu365499'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090TRY',
			url: 'https://www.ebrarbilgisayar.com/msi-geforce-rtx-3090-gaming-x-trio-24g-24gb-384bit-gddr6x-pmu365497'
		},

		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080TRY',
			url: 'https://www.ebrarbilgisayar.com/msi-geforce-rtx-3080-ventus-3x-10g-oc-10gb-320bit-gddr6x-pmu365505'
		},
		{
			brand: 'msi',
			model: 'ventus 3x',
			series: '3080TRY',
			url: 'https://www.ebrarbilgisayar.com/msi-geforce-rtx-3080-ventus-3x-10g-10gb-320bit-gddr6x-pmu365506'
		},
		{
			brand: 'msi',
			model: 'ventus 3x',
			series: '3080TRY',
			url: 'https://www.ebrarbilgisayar.com/msi-geforce-rtx-3090-ventus-3x-24g-24gb-384bit-gddr6x-pmu365504'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3090',
			url: 'https://www.ebrarbilgisayar.com/msi-geforce-rtx-3090-ventus-3x-24g-oc-24gb-384bit-gddr6x-pmu365503'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3080TRY',
			url: 'https://www.ebrarbilgisayar.com/gigabyte-aorus-geforce-rtx-3080-xtreme-10g-10gb-320bit-gddr6x-pmu365524'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3090TRY',
			url: 'https://www.ebrarbilgisayar.com/gigabyte-aorus-geforce-rtx-3090-xtreme-24g-24gb-384bit-gddr6x-pmu365523'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080TRY',
			url: 'https://www.ebrarbilgisayar.com/gigabyte-aorus-geforce-rtx-3080-master-10g-10gb-320bit-gddr6x-pmu365526'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3090TRY',
			url: 'https://www.ebrarbilgisayar.com/gigabyte-aorus-geforce-rtx-3090-master-24g-24gb-384bit-gddr6x-pmu365525'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3090TRY',
			url: 'https://www.ebrarbilgisayar.com/gigabyte-geforce-rtx-3090-gaming-oc-24g-24gb-384bit-gddr6x-pmu365527'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080TRY',
			url: 'https://www.ebrarbilgisayar.com/gigabyte-geforce-rtx-3080-eagle-oc-10g-10gb-320bit-gddr6x-pmu365530'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3090TRY',
			url: 'https://www.ebrarbilgisayar.com/gigabyte-geforce-rtx-3090-eagle-oc-24g-24gb-384bit-gddr6x-pmu365529'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080TRY',
			url: 'https://www.ebrarbilgisayar.com/asus-tuf-gaming-geforce-rtx-3080-10gb-320bit-gddr6x-pmu365517'
		},
		// 3090
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090TRY',
			url: 'https://www.ebrarbilgisayar.com/asus-tuf-gaming-geforce-rtx-3090-24gb-384bit-gddr6x-pmu365522'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080TRY',
			url: 'https://www.ebrarbilgisayar.com/asus-tuf-gaming-geforce-rtx-3080-oc-10gb-320bit-gddr6x-pmu365518'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090TRY',
			url: 'https://www.ebrarbilgisayar.com/asus-tuf-gaming-geforce-rtx-3090-oc-24gb-384bit-gddr6x-pmu365521'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3080TRY',
			url: 'https://www.ebrarbilgisayar.com/asus-rog-strix-geforce-rtx-3080-10gb-320bit-gddr6x-pmu365516'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3090TRY',
			url: 'https://www.ebrarbilgisayar.com/asus-rog-strix-geforce-rtx-3090-24gb-384bit-gddr6x-pmu365520'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3090TRY',
			url: 'https://www.ebrarbilgisayar.com/asus-rog-strix-geforce-rtx-3090-oc-24gb-384bit-gddr6x-pmu365519'
		}

		// {
		// 	brand: 'xxx',
		// 	model: 'xxx',
		// 	series: '3070TRY',
		// 	url: 'xxx'
		// },

	],
	name: 'ebrar'
};

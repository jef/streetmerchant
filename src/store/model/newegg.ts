import {Store} from './store';

export const Newegg: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['are you a human?']
		},
		inStock: {
			container: 'div#ProductBuy .btn-primary',
			text: ['add to cart']
		},
		maxPrice: {
			container: 'div#app div.product-price > ul > li.price-current > strong',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.newegg.com/evga-geforce-rtx-2060-06g-p4-2066-kr/p/N82E16814487488'
		},
		{
			brand: 'asus',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126453',
			model: 'tuf',
			series: '3080',
			url: 'https://www.newegg.com/asus-geforce-rtx-3080-tuf-rtx3080-10g-gaming/p/N82E16814126453'
		},
		{
			brand: 'evga',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487518',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3897-kr/p/N82E16814487518'
		},
		{
			brand: 'evga',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487519',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3895-kr/p/N82E16814487519'
		},
		{
			brand: 'evga',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487522',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3881-kr/p/N82E16814487522'
		},
		{
			brand: 'evga',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487521',
			model: 'xc3',
			series: '3080',
			url: 'https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3883-kr/p/N82E16814487521'
		},
		// Removed from Newegg currently not available in US
		// {
		// 	brand: 'evga',
		// 	cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487520',
		// 	model: 'xc3 ultra',
		// 	series: '3080',
		// 	url: 'https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3885-kr/p/N82E16814487520'
		// },
		{
			brand: 'msi',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137600',
			model: 'ventus 3x',
			series: '3080',
			url: 'https://www.newegg.com/msi-geforce-rtx-3080-rtx-3080-ventus-3x-10g/p/N82E16814137600'
		},
		{
			brand: 'msi',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137598',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.newegg.com/msi-geforce-rtx-3080-rtx-3080-ventus-3x-10g-oc/p/N82E16814137598'
		},
		{
			brand: 'msi',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137597',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.newegg.com/msi-geforce-rtx-3080-rtx-3080-gaming-x-trio-10g/p/N82E16814137597'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932329',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080gaming-oc-10gd/p/N82E16814932329'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932330',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080eagle-oc-10gd/p/N82E16814932330'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932336',
			model: 'aorus master',
			series: '3080',
			url: 'https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080aorus-m-10gd/p/N82E16814932336'
		},
		{
			brand: 'zotac',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500502',
			model: 'trinity',
			series: '3080',
			url: 'https://www.newegg.com/zotac-geforce-rtx-3080-zt-a30800d-10p/p/N82E16814500502'
		},
		{
			brand: 'asus',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126457',
			model: 'rog strix',
			series: '3080',
			url: 'https://www.newegg.com/asus-geforce-rtx-3080-rog-strix-rtx3080-o10g-gaming/p/N82E16814126457'
		},
		{
			brand: 'asus',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126452',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.newegg.com/asus-geforce-rtx-3080-tuf-rtx3080-o10g-gaming/p/N82E16814126452'
		},
		{
			brand: 'zotac',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500504',
			model: 'trinity oc',
			series: '3080',
			url: 'https://www.newegg.com/zotac-geforce-rtx-3080-zt-t30800j-10p/p/N82E16814500504'
		},
		{
			brand: 'pny',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814133809',
			model: 'xlr8 rgb',
			series: '3080',
			url: 'https://www.newegg.com/pny-geforce-rtx-3080-vcg308010tfxppb/p/N82E16814133809'
		},
		{
			brand: 'asus',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126455',
			model: 'tuf',
			series: '3090',
			url: 'https://www.newegg.com/asus-geforce-rtx-3090-tuf-rtx3090-24g-gaming/p/N82E16814126455'
		},
		{
			brand: 'asus',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126456',
			model: 'rog strix',
			series: '3090',
			url: 'https://www.newegg.com/asus-geforce-rtx-3090-rog-strix-rtx3090-o24g-gaming/p/N82E16814126456'
		},
		{
			brand: 'msi',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137595',
			model: 'gaming x trio',
			series: '3090',
			url: 'https://www.newegg.com/msi-geforce-rtx-3090-rtx-3090-gaming-x-trio-24g/p/N82E16814137595'
		},
		{
			brand: 'msi',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137596',
			model: 'ventus 3x oc',
			series: '3090',
			url: 'https://www.newegg.com/msi-geforce-rtx-3090-rtx-3090-ventus-3x-24g-oc/p/N82E16814137596'
		},
		{
			brand: 'zotac',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500503',
			model: 'trinity',
			series: '3090',
			url: 'https://www.newegg.com/zotac-geforce-rtx-3090-zt-a30900d-10p/p/N82E16814500503'
		},
		{
			brand: 'msi',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137599',
			model: 'ventus 3x',
			series: '3090',
			url: 'https://www.newegg.com/msi-geforce-rtx-3090-rtx-3090-ventus-3x-24g/p/N82E16814137599'
		},
		{
			brand: 'evga',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487525',
			model: 'ftw3',
			series: '3090',
			url: 'https://www.newegg.com/evga-geforce-rtx-3090-24g-p5-3985-kr/p/N82E16814487525'
		},
		{
			brand: 'evga',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487524',
			model: 'xc3 ultra',
			series: '3090',
			url: 'https://www.newegg.com/evga-geforce-rtx-3090-24g-p5-3975-kr/p/N82E16814487524'
		},
		{
			brand: 'evga',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487526',
			model: 'ftw3 ultra',
			series: '3090',
			url: 'https://www.newegg.com/evga-geforce-rtx-3090-24g-p5-3987-kr/p/N82E16814487526'
		},
		{
			brand: 'evga',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487527',
			model: 'xc3 black',
			series: '3090',
			url: 'https://www.newegg.com/evga-geforce-rtx-3090-24g-p5-3971-kr/p/N82E16814487527'
		},
		{
			brand: 'evga',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487523',
			model: 'xc3',
			series: '3090',
			url: 'https://www.newegg.com/evga-geforce-rtx-3090-24g-p5-3973-kr/p/N82E16814487523'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932327',
			model: 'gaming',
			series: '3090',
			url: 'https://www.newegg.com/gigabyte-geforce-rtx-3090-gv-n3090gaming-oc-24gd/p/N82E16814932327'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932328',
			model: 'eagle',
			series: '3090',
			url: 'https://www.newegg.com/gigabyte-geforce-rtx-3090-gv-n3090eagle-oc-24gd/p/N82E16814932328'
		}
	],
	name: 'newegg'
};

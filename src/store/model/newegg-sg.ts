import {Store} from './store';
import fetch from 'node-fetch';

export const NeweggSg: Store = {
	currency: '$',
	labels: {
		captcha: {
			container: 'body',
			text: ['are you a human?']
		},
		inStock: [
			{
				container: '.product-buy',
				text: ['add to cart']
			},
			{
				container: '.loading-text',
				text: ['add to cart']
			}
		],
		maxPrice: {
			container: '.price-current'
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.newegg.com/global/sg-en/western-digital-blue-500gb/p/N82E16820250087?Item=N82E16820250087'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137601',
			itemNumber: '14-137-601',
			model: 'ventus 3x oc',
			series: '3070',
			url:
				'https://www.newegg.com/global/sg-en/msi-geforce-rtx-3070-rtx-3070-ventus-3x-oc/p/N82E16814137601'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137602',
			itemNumber: '14-137-602',
			model: 'ventus 2x oc',
			series: '3070',
			url:
				'https://www.newegg.com/global/sg-en/msi-geforce-rtx-3070-rtx-3070-ventus-2x-oc/p/N82E16814137602'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137603',
			itemNumber: '14-137-603',
			model: 'gaming x trio',
			series: '3070',
			url:
				'https://www.newegg.com/global/sg-en/msi-geforce-rtx-3070-rtx-3070-gaming-x-trio/p/N82E16814137603'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137605',
			itemNumber: '14-137-605',
			model: 'ventus 2x',
			series: '3070',
			url:
				'https://www.newegg.com/global/sg-en/msi-geforce-rtx-3070-rtx-3070-gaming-x-trio/p/N82E16814137605'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932360',
			itemNumber: '14-932-360',
			model: 'vision oc',
			series: '3070',
			url:
				'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3070-gv-n3070vision-oc-8gd/p/N82E16814932360'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126459',
			itemNumber: '14-126-459',
			model: 'dual oc',
			series: '3070',
			url:
				'https://www.newegg.com/global/sg-en/asus-geforce-rtx-3070-dual-rtx3070-o8g/p/N82E16814126459'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126458',
			itemNumber: '14-126-458',
			model: 'strix',
			series: '3070',
			url:
				'https://www.newegg.com/global/sg-en/asus-geforce-rtx-3070-rog-strix-rtx3070-o8g-gaming/p/N82E16814126458'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500501',
			itemNumber: '14-500-501',
			model: 'twin edge',
			series: '3070',
			url:
				'https://www.newegg.com/global/sg-en/zotac-geforce-rtx-3070-zt-a30700e-10p/p/N82E16814500501'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500505',
			itemNumber: '14-500-505',
			model: 'twin edge oc',
			series: '3070',
			url:
				'https://www.newegg.com/global/sg-en/zotac-geforce-rtx-3070-zt-a30700h-10p/p/N82E16814500505'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932342',
			itemNumber: '14-932-342',
			model: 'gaming oc',
			series: '3070',
			url:
				'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3070-gv-n3070gaming-oc-8gd/p/N82E16814932342'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487532',
			itemNumber: '14-487-532',
			model: 'ftw3 ultra',
			series: '3070',
			url:
				'https://www.newegg.com/global/sg-en/evga-geforce-rtx-3070-08g-p5-3767-kr/p/N82E16814487532'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487530',
			itemNumber: '14-487-530',
			model: 'xc3 ultra',
			series: '3070',
			url:
				'https://www.newegg.com/global/sg-en/evga-geforce-rtx-3070-08g-p5-3755-kr/p/N82E16814487530'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487528',
			itemNumber: '14-487-528',
			model: 'xc3 black',
			series: '3070',
			url:
				'https://www.newegg.com/global/sg-en/evga-geforce-rtx-3070-08g-p5-3751-kr/p/N82E16814487528'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932343',
			itemNumber: '14-932-343',
			model: 'eagle oc',
			series: '3070',
			url:
				'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3070-gv-n3070eagle-oc-8gd/p/N82E16814932343'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932344',
			itemNumber: '14-932-344',
			model: 'eagle',
			series: '3070',
			url:
				'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3070-gv-n3070eagle-8gd/p/N82E16814932344'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487529',
			itemNumber: '14-487-529',
			model: 'xc3',
			series: '3070',
			url:
				'https://www.newegg.com/global/sg-en/evga-geforce-rtx-3070-08g-p5-3753-kr/p/N82E16814487529'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126460',
			itemNumber: '14-126-460',
			model: 'dual',
			series: '3070',
			url:
				'https://www.newegg.com/global/sg-en/asus-geforce-rtx-3070-dual-rtx3070-8g/p/N82E16814126460'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126466',
			itemNumber: '14-126-466',
			model: 'gaming',
			series: '3070',
			url:
				'https://www.newegg.com/global/sg-en/asus-geforce-rtx-3070-ko-rtx3070-o8g-gamin/p/N82E16814126466'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932359',
			itemNumber: '14-932-359',
			model: 'aorus master',
			series: '3070',
			url:
				'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3070-gv-n3070aorus-m-8gd/p/N82E16814932359'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487531',
			itemNumber: '14-487-531',
			model: 'ftw3',
			series: '3070',
			url:
				'https://www.newegg.com/global/sg-en/evga-geforce-rtx-3070-08g-p5-3765-kr/p/N82E16814487531'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126461',
			itemNumber: '14-126-461',
			model: 'tuf oc',
			series: '3070',
			url:
				'https://www.newegg.com/global/sg-en/asus-geforce-rtx-3070-tuf-rtx3070-o8g-gaming/p/N82E16814126461'
		},
		{
			brand: 'pny',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814133811',
			itemNumber: '14-133-811',
			model: 'gaming',
			series: '3070',
			url:
				'https://www.newegg.com/global/sg-en/pny-geforce-rtx-3070-vcg30708tfxppb/p/N82E16814133811'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126453',
			itemNumber: '14-126-453',
			model: 'tuf',
			series: '3080',
			url:
				'https://www.newegg.com/global/sg-en/asus-geforce-rtx-3080-tuf-rtx3080-10g-gaming/p/N82E16814126453'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487518',
			itemNumber: '14-487-518',
			model: 'ftw3 ultra',
			series: '3080',
			url:
				'https://www.newegg.com/global/sg-en/evga-geforce-rtx-3080-10g-p5-3897-kr/p/N82E16814487518'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487519',
			itemNumber: '14-487-519',
			model: 'ftw3',
			series: '3080',
			url:
				'https://www.newegg.com/global/sg-en/evga-geforce-rtx-3080-10g-p5-3895-kr/p/N82E16814487519'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487522',
			itemNumber: '14-487-522',
			model: 'xc3 black',
			series: '3080',
			url:
				'https://www.newegg.com/global/sg-en/evga-geforce-rtx-3080-10g-p5-3881-kr/p/N82E16814487522'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487521',
			itemNumber: '14-487-521',
			model: 'xc3',
			series: '3080',
			url:
				'https://www.newegg.com/global/sg-en/evga-geforce-rtx-3080-10g-p5-3883-kr/p/N82E16814487521'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137600',
			itemNumber: '14-137-600',
			model: 'ventus 3x',
			series: '3080',
			url:
				'https://www.newegg.com/global/sg-en/msi-geforce-rtx-3080-rtx-3080-ventus-3x-10g/p/N82E16814137600'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137598',
			itemNumber: '14-137-598',
			model: 'ventus 3x oc',
			series: '3080',
			url:
				'https://www.newegg.com/global/sg-en/msi-geforce-rtx-3080-rtx-3080-ventus-3x-10g-oc/p/N82E16814137598'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137597',
			itemNumber: '14-137-597',
			model: 'gaming x trio',
			series: '3080',
			url:
				'https://www.newegg.com/global/sg-en/msi-geforce-rtx-3080-rtx-3080-gaming-x-trio-10g/p/N82E16814137597'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932329',
			itemNumber: '149-32-329',
			model: 'gaming oc',
			series: '3080',
			url:
				'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3080-gv-n3080gaming-oc-10gd/p/N82E16814932329'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932330',
			itemNumber: '149-32-330',
			model: 'eagle oc',
			series: '3080',
			url:
				'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3080-gv-n3080eagle-oc-10gd/p/N82E16814932330'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932336',
			itemNumber: '14-932-336',
			model: 'aorus master',
			series: '3080',
			url:
				'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3080-gv-n3080aorus-m-10gd/p/N82E16814932336'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500502',
			itemNumber: '14-950-502',
			model: 'trinity',
			series: '3080',
			url:
				'https://www.newegg.com/global/sg-en/zotac-geforce-rtx-3080-zt-a30800d-10p/p/N82E16814500502'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126457',
			itemNumber: '14-126-457',
			model: 'strix',
			series: '3080',
			url:
				'https://www.newegg.com/global/sg-en/asus-geforce-rtx-3080-rog-strix-rtx3080-o10g-gaming/p/N82E16814126457'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126452',
			itemNumber: '14-126-452',
			model: 'tuf oc',
			series: '3080',
			url:
				'https://www.newegg.com/global/sg-en/asus-geforce-rtx-3080-tuf-rtx3080-o10g-gaming/p/N82E16814126452'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500504',
			itemNumber: '14-500-504',
			model: 'trinity oc',
			series: '3080',
			url:
				'https://www.newegg.com/global/sg-en/zotac-geforce-rtx-3080-zt-t30800j-10p/p/N82E16814500504'
		},
		{
			brand: 'pny',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814133809',
			itemNumber: '14-133-809',
			model: 'xlr8 revel',
			series: '3080',
			url:
				'https://www.newegg.com/global/sg-en/pny-geforce-rtx-3080-vcg308010tfxppb/p/N82E16814133809'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932337',
			itemNumber: '14-932-337',
			model: 'vision oc',
			series: '3080',
			url:
				'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3080-gv-n3080vision-oc-10gd/p/N82E16814932337'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126455',
			itemNumber: '14-126-455',
			model: 'tuf',
			series: '3090',
			url:
				'https://www.newegg.com/global/sg-en/asus-geforce-rtx-3090-tuf-rtx3090-24g-gaming/p/N82E16814126455'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126456',
			itemNumber: '14-126-456',
			model: 'strix',
			series: '3090',
			url:
				'https://www.newegg.com/global/sg-en/asus-geforce-rtx-3090-rog-strix-rtx3090-o24g-gaming/p/N82E16814126456'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137595',
			itemNumber: '14-137-595',
			model: 'gaming x trio',
			series: '3090',
			url:
				'https://www.newegg.com/global/sg-en/msi-geforce-rtx-3090-rtx-3090-gaming-x-trio-24g/p/N82E16814137595'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137596',
			itemNumber: '14-137-596',
			model: 'ventus 3x oc',
			series: '3090',
			url:
				'https://www.newegg.com/global/sg-en/msi-geforce-rtx-3090-rtx-3090-ventus-3x-24g-oc/p/N82E16814137596'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500503',
			itemNumber: '14-500-503',
			model: 'trinity',
			series: '3090',
			url:
				'https://www.newegg.com/global/sg-en/zotac-geforce-rtx-3090-zt-a30900d-10p/p/N82E16814500503'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137599',
			itemNumber: '14-137-599',
			model: 'ventus 3x',
			series: '3090',
			url:
				'https://www.newegg.com/global/sg-en/msi-geforce-rtx-3090-rtx-3090-ventus-3x-24g/p/N82E16814137599'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487525',
			itemNumber: '14-487-525',
			model: 'ftw3',
			series: '3090',
			url:
				'https://www.newegg.com/global/sg-en/evga-geforce-rtx-3090-24g-p5-3985-kr/p/N82E16814487525'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487524',
			itemNumber: '14-487-524',
			model: 'xc3 ultra',
			series: '3090',
			url:
				'https://www.newegg.com/global/sg-en/evga-geforce-rtx-3090-24g-p5-3975-kr/p/N82E16814487524'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487526',
			itemNumber: '14-487-526',
			model: 'ftw3 ultra',
			series: '3090',
			url:
				'https://www.newegg.com/global/sg-en/evga-geforce-rtx-3090-24g-p5-3987-kr/p/N82E16814487526'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487527',
			itemNumber: '14-487-527',
			model: 'xc3 black',
			series: '3090',
			url:
				'https://www.newegg.com/global/sg-en/evga-geforce-rtx-3090-24g-p5-3971-kr/p/N82E16814487527'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487523',
			itemNumber: '14-487-523',
			model: 'xc3',
			series: '3090',
			url:
				'https://www.newegg.com/global/sg-en/evga-geforce-rtx-3090-24g-p5-3973-kr/p/N82E16814487523'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932327',
			itemNumber: '14-932-327',
			model: 'gaming',
			series: '3090',
			url:
				'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3090-gv-n3090gaming-oc-24gd/p/N82E16814932327'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932328',
			itemNumber: '14-932-328',
			model: 'eagle',
			series: '3090',
			url:
				'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3090-gv-n3090eagle-oc-24gd/p/N82E16814932328'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16819113663',
			itemNumber: '19-113-663',
			model: '5950x',
			series: 'ryzen5950',
			url:
				'https://www.newegg.com/global/sg-en/amd-ryzen-9-5950x/p/N82E16819113663'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16819113664',
			itemNumber: '19-113-664',
			model: '5900x',
			series: 'ryzen5900',
			url:
				'https://www.newegg.com/global/sg-en/amd-ryzen-9-5900x/p/N82E16819113664'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16819113665',
			itemNumber: '19-113-665',
			model: '5800x',
			series: 'ryzen5800',
			url:
				'https://www.newegg.com/global/sg-en/amd-ryzen-7-5800x/p/N82E16819113665'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16819113666',
			itemNumber: '19-113-666',
			model: '5600x',
			series: 'ryzen5600',
			url:
				'https://www.newegg.com/global/sg-en/amd-ryzen-5-5600x/p/N82E16819113666'
		},
		{
			brand: 'microsoft',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16868105273',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://www.newegg.com/global/sg-en/p/N82E16868105273'
		},
		{
			brand: 'microsoft',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16868105274',
			model: 'xbox series s',
			series: 'xboxss',
			url: 'https://www.newegg.com/global/sg-en/p/N82E16868105274'
		},
		{
			brand: 'asrock',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930051',
			model: 'amd reference',
			series: 'rx6900xt',
			url:
				'https://www.newegg.com/global/sg-en/asrock-radeon-rx-6900-xt-rx6900xt-16g/p/N82E16814930051'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932384',
			model: 'amd reference',
			series: 'rx6900xt',
			url:
				'https://www.newegg.com/global/sg-en/gigabyte-radeon-rx-6900-xt-gv-r69xt-16gc-b/p/N82E16814932384'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137618',
			model: 'amd reference',
			series: 'rx6900xt',
			url:
				'https://www.newegg.com/global/sg-en/msi-radeon-rx-6900-xt-rx-6900-xt-16g/p/N82E16814137618'
		},
		{
			brand: 'powercolor',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814131774',
			model: 'amd reference',
			series: 'rx6900xt',
			url:
				'https://www.newegg.com/global/sg-en/powercolor-radeon-rx-6900-xt-axrx-6900xt-16gbd6-m2dhc/p/N82E16814131774'
		},
		{
			brand: 'sapphire',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202393',
			model: 'amd reference',
			series: 'rx6900xt',
			url:
				'https://www.newegg.com/global/sg-en/sapphire-radeon-rx-6900-xt-21308-01-20g/p/N82E16814202393'
		},
		{
			brand: 'asrock',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930052',
			model: 'phantom gaming',
			series: 'rx6900xt',
			url:
				'https://www.newegg.com/global/sg-en/asrock-radeon-rx-6800-xt-rx6900xt-pgd-16g/p/N82E16814930052'
		},
		{
			brand: 'xfx',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814150846',
			model: 'merc',
			series: 'rx6900xt',
			url:
				'https://www.newegg.com/global/sg-en/xfx-radeon-rx-6900-xt-rx-69xtacud9/p/N82E16814150846'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932373',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://www.newegg.com/global/sg-en/gigabyte-radeon-rx-6800-xt-gv-r68xt-16gc-b/p/N82E16814932373'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932381',
			model: 'gaming oc',
			series: 'rx6800xt',
			url:
				'https://www.newegg.com/global/sg-en/gigabyte-radeon-rx-6800-xt-gv-r68xtgaming-oc-16gd/p/N82E16814932381'
		},
		{
			brand: 'sapphire',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202394',
			model: 'pulse',
			series: 'rx6800',
			url:
				'https://www.newegg.com/global/sg-en/sapphire-radeon-rx-6800-11305-02-20g/p/N82E16814202394'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137607',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://www.newegg.com/global/sg-en/msi-radeon-rx-6800-xt-rx-6800-xt-16g/p/N82E16814137607'
		},
		{
			brand: 'sapphire',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202388',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://www.newegg.com/global/sg-en/sapphire-radeon-rx-6800-xt-21304-01-20g/p/N82E16814202388'
		},
		{
			brand: 'asrock',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930045',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://www.newegg.com/global/sg-en/asrock-radeon-rx-6800-xt-rx-6800-xt-16g/p/N82E16814930045'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126472',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://www.newegg.com/global/sg-en/asus-radeon-rx-6800-xt-rx6800xt-16g/p/N82E16814126472'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126473',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.newegg.com/global/sg-en/asus-radeon-rx-6800-rx6800-16g/p/N82E16814126473'
		},
		{
			brand: 'asrock',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930046',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.newegg.com/global/sg-en/asrock-radeon-rx-6800-rx-6800-16g/p/N82E16814930046'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932374',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.newegg.com/global/sg-en/gigabyte-radeon-rx-6800-gv-r68-16gc-b/p/N82E16814932374'
		},
		{
			brand: 'sapphire',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202389',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.newegg.com/global/sg-en/sapphire-radeon-rx-6800-21305-01-20g/p/N82E16814202389'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137608',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.newegg.com/global/sg-en/msi-radeon-rx-6800-rx-6800-16g/p/N82E16814137608'
		},
		{
			brand: 'asrock',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930047',
			model: 'challenger',
			series: 'rx6800',
			url:
				'https://www.newegg.com/global/sg-en/asrock-radeon-rx-6800-rx6800-clp-16go/p/N82E16814930047'
		},

		{
			brand: 'asrock',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930048',
			model: 'phantom gaming',
			series: 'rx6800',
			url:
				'https://www.newegg.com/global/sg-en/asrock-radeon-rx-6800-rx6800-pgd-16go/p/N82E16814930048'
		},
		{
			brand: 'asrock',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930049',
			model: 'phantom gaming',
			series: 'rx6800xt',
			url:
				'https://www.newegg.com/global/sg-en/asrock-radeon-rx-6800-xt-rx6800xt-pgd-16go/p/N82E16814930049'
		},
		{
			brand: 'asrock',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930050',
			model: 'taichi',
			series: 'rx6800xt',
			url:
				'https://www.newegg.com/global/sg-en/asrock-radeon-rx-6800-xt-rx6800xt-tcx-16go/p/N82E16814930050'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126478',
			model: 'tuf',
			series: 'rx6800',
			url:
				'https://www.newegg.com/global/sg-en/asus-radeon-rx-6800-tuf-rx6800-o16g-gaming/p/N82E16814126478'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126476',
			model: 'tuf',
			series: 'rx6800xt',
			url:
				'https://www.newegg.com/global/sg-en/asus-radeon-rx-6800-xt-tuf-rx6800xt-o16g-gaming/p/N82E16814126476'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126477',
			model: 'strix',
			series: 'rx6800',
			url:
				'https://www.newegg.com/global/sg-en/asus-radeon-rx-6800-rog-strix-rx6800-o16g-gaming/p/N82E16814126477'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126475',
			model: 'strix lc',
			series: 'rx6800xt',
			url:
				'https://www.newegg.com/global/sg-en/asus-radeon-rx-6800-xt-rog-strix-lc-rx6800xt-o16g-gaming/p/N82E16814126475'
		},
		{
			brand: 'sapphire',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202391',
			model: 'nitro+',
			series: 'rx6800xt',
			url:
				'https://www.newegg.com/global/sg-en/sapphire-radeon-rx-6800-xt-11304-02-20g/p/N82E16814202391'
		},
		{
			brand: 'sapphire',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202390',
			model: 'nitro+ se',
			series: 'rx6800xt',
			url:
				'https://www.newegg.com/global/sg-en/sapphire-radeon-rx-6800-xt-11304-01-20g/p/N82E16814202390'
		},
		{
			brand: 'xfx',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814150844',
			model: 'merc',
			series: 'rx6800xt',
			url:
				'https://www.newegg.com/global/sg-en/xfx-radeon-rx-6800-xt-rx-68xtacbd9/p/N82E16814150844'
		},
		{
			brand: 'corsair',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16817139080',
			model: '750 platinum',
			series: 'sf',
			url:
				'https://www.newegg.com/global/sg-en/corsair-sf750-cp-9020186-na-750w/p/N82E16817139080'
		},
		{
			brand: 'corsair',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16817139242',
			model: '600 platinum',
			series: 'sf',
			url:
				'https://www.newegg.com/global/sg-en/corsair-sf-series-sf600-cp-9020182-na-600w/p/N82E16817139242'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126470',
			model: 'strix',
			series: '3060ti',
			url:
				'https://www.newegg.com/global/sg-en/asus-geforce-rtx-3060-ti-rog-strix-rtx3060ti-o8g-gaming/p/N82E16814126470'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137611',
			model: 'gaming x trio',
			series: '3060ti',
			url:
				'https://www.newegg.com/global/sg-en/msi-geforce-rtx-3060-ti-rtx-3060-ti-gaming-x-trio/p/N82E16814137611'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500507',
			model: 'twin edge oc',
			series: '3060ti',
			url:
				'https://www.newegg.com/global/sg-en/zotac-geforce-rtx-3060-ti-zt-a30610h-10m/p/N82E16814500507'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126471',
			model: 'tuf',
			series: '3060ti',
			url:
				'https://www.newegg.com/global/sg-en/asus-geforce-rtx-3060-ti-tuf-rtx3060ti-o8g-gaming/p/N82E16814126471'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487535',
			model: 'xc3',
			series: '3060ti',
			url:
				'https://www.newegg.com/global/sg-en/evga-geforce-rtx-3060-ti-08g-p5-3663-kr/p/N82E16814487535'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126468',
			model: 'dual',
			series: '3060ti',
			url:
				'https://www.newegg.com/global/sg-en/asus-geforce-rtx-3060-ti-dual-rtx3060ti-o8g/p/N82E16814126468'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137612',
			model: 'ventus 2x oc',
			series: '3060ti',
			url:
				'https://www.newegg.com/global/sg-en/msi-geforce-rtx-3060-ti-rtx-3060-ti-ventus-2x-oc/p/N82E16814137612'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487537',
			model: 'ftw3 ultra',
			series: '3060ti',
			url:
				'https://www.newegg.com/global/sg-en/evga-geforce-rtx-3060-ti-08g-p5-3667-kr/p/N82E16814487537'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932375',
			model: 'aorus',
			series: '3060ti',
			url:
				'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3060-ti-gv-n306taorus-m-8gd/p/N82E16814932375'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932376',
			model: 'gaming oc',
			series: '3060ti',
			url:
				'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3060-ti-gv-n306tgamingoc-pro-8gd/p/N82E16814932376'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932379',
			model: 'eagle',
			series: '3060ti',
			url:
				'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3060-ti-gv-n306teagle-8gd/p/N82E16814932379'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932377',
			model: 'gaming oc',
			series: '3060ti',
			url:
				'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3060-ti-gv-n306tgaming-oc-8gd/p/N82E16814932377'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500506',
			model: 'twin edge',
			series: '3060ti',
			url:
				'https://www.newegg.com/global/sg-en/zotac-geforce-rtx-3060-ti-zt-a30610e-10m/p/N82E16814500506'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932378',
			model: 'eagle',
			series: '3060ti',
			url:
				'https://www.newegg.com/global/sg-en/gigabyte-geforce-rtx-3060-ti-gv-n306teagle-oc-8gd/p/N82E16814932378'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126474',
			model: 'gaming',
			series: '3060ti',
			url:
				'https://www.newegg.com/global/sg-en/asus-geforce-rtx-3060-ti-ko-rtx3060ti-o8g-gaming/p/N82E16814126474'
		},
		{
			brand: 'powercolor',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814131767',
			model: 'red devil',
			series: 'rx6800xt',
			url:
				'https://www.newegg.com/global/sg-en/powercolor-radeon-rx-6800-xt-axrx-6800xt-16gbd6-2dhce-oc/p/N82E16814131767'
		},
		{
			brand: 'powercolor',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814131770',
			model: 'red devil',
			series: 'rx6800',
			url:
				'https://www.newegg.com/global/sg-en/powercolor-radeon-rx-6800-axrx-6800-16gbd6-2dhce-oc/p/N82E16814131770'
		},
		{
			brand: 'powercolor',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814131773',
			model: 'red dragon',
			series: 'rx6800',
			url:
				'https://www.newegg.com/global/sg-en/powercolor-radeon-rx-6800-axrx-6800-16gbd6-3dhr-oc/p/N82E16814131773'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16813119362',
			model: 'crosshair viii',
			series: 'darkhero',
			url:
				'https://www.newegg.com/global/sg-en/asus-rog-crosshair-viii-dark-hero/p/N82E16813119362'
		}
	],
	name: 'newegg-sg',
	realTimeInventoryLookup: async (itemNumber: string) => {
		const request_url =
			'https://www.newegg.com/global/sg-en/product/api/ProductRealtime?ItemNumber=' +
			itemNumber;
		const response = await fetch(request_url);
		const response_json = await response.json();
		return (
			response_json.MainItem !== undefined &&
			response_json.MainItem.Instock === true
		);
	}
};

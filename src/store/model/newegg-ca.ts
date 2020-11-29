import {Store} from './store';
import fetch from 'node-fetch';

export const NeweggCa: Store = {
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
			itemNumber: '14-500-495',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.newegg.ca/evga-geforce-rtx-2060-06g-p4-2066-kr/p/N82E16814487488'
		},
		{
			brand: 'asus',
			itemNumber: '14-126-453',
			model: 'tuf',
			series: '3080',
			url:
				'https://www.newegg.ca/asus-geforce-rtx-3080-tuf-rtx3080-10g-gaming/p/N82E16814126453'
		},
		{
			brand: 'evga',
			itemNumber: '14-487-519',
			model: 'ftw3',
			series: '3080',
			url:
				'https://www.newegg.ca/evga-geforce-rtx-3080-10g-p5-3895-kr/p/N82E16814487519'
		},
		{
			brand: 'evga',
			itemNumber: '14-487-518',
			model: 'ftw3 ultra',
			series: '3080',
			url:
				'https://www.newegg.ca/evga-geforce-rtx-3080-10g-p5-3897-kr/p/N82E16814487518'
		},
		{
			brand: 'evga',
			itemNumber: '14-487-522',
			model: 'xc3 black',
			series: '3080',
			url:
				'https://www.newegg.ca/evga-geforce-rtx-3080-10g-p5-3881-kr/p/N82E16814487522'
		},
		{
			brand: 'evga',
			itemNumber: '14-487-521',
			model: 'xc3',
			series: '3080',
			url:
				'https://www.newegg.ca/evga-geforce-rtx-3080-10g-p5-3883-kr/p/N82E16814487521'
		},
		{
			brand: 'evga',
			itemNumber: '14-487-520',
			model: 'xc3 ultra',
			series: '3080',
			url:
				'https://www.newegg.ca/evga-geforce-rtx-3080-10g-p5-3885-kr/p/N82E16814487520'
		},
		{
			brand: 'msi',
			itemNumber: '14-137-600',
			model: 'ventus 3x',
			series: '3080',
			url:
				'https://www.newegg.ca/msi-geforce-rtx-3080-rtx-3080-ventus-3x-10g/p/N82E16814137600'
		},
		{
			brand: 'msi',
			itemNumber: '14-137-598',
			model: 'ventus 3x oc',
			series: '3080',
			url:
				'https://www.newegg.ca/msi-geforce-rtx-3080-rtx-3080-ventus-3x-10g-oc/p/N82E16814137598'
		},
		{
			brand: 'msi',
			itemNumber: '14-137-597',
			model: 'gaming x trio',
			series: '3080',
			url:
				'https://www.newegg.ca/msi-geforce-rtx-3080-rtx-3080-gaming-x-trio-10g/p/N82E16814137597'
		},
		{
			brand: 'gigabyte',
			itemNumber: '149-32-329',
			model: 'gaming oc',
			series: '3080',
			url:
				'https://www.newegg.ca/gigabyte-geforce-rtx-3080-gv-n3080gaming-oc-10gd/p/N82E16814932329'
		},
		{
			brand: 'gigabyte',
			itemNumber: '149-32-330',
			model: 'eagle oc',
			series: '3080',
			url:
				'https://www.newegg.ca/gigabyte-geforce-rtx-3080-gv-n3080eagle-oc-10gd/p/N82E16814932330'
		},
		{
			brand: 'gigabyte',
			itemNumber: '14-932-336',
			model: 'aorus master',
			series: '3080',
			url:
				'https://www.newegg.ca/gigabyte-geforce-rtx-3080-gv-n3080aorus-m-10gd/p/N82E16814932336'
		},
		{
			brand: 'zotac',
			itemNumber: '14-950-502',
			model: 'trinity',
			series: '3080',
			url:
				'https://www.newegg.ca/zotac-geforce-rtx-3080-zt-a30800d-10p/p/N82E16814500502'
		},
		{
			brand: 'asus',
			itemNumber: '14-126-457',
			model: 'strix',
			series: '3080',
			url:
				'https://www.newegg.ca/asus-geforce-rtx-3080-rog-strix-rtx3080-o10g-gaming/p/N82E16814126457'
		},
		{
			brand: 'asus',
			itemNumber: '14-126-452',
			model: 'tuf oc',
			series: '3080',
			url:
				'https://www.newegg.ca/asus-geforce-rtx-3080-tuf-rtx3080-o10g-gaming/p/N82E16814126452'
		},
		{
			brand: 'zotac',
			itemNumber: '14-500-504',
			model: 'trinity oc',
			series: '3080',
			url:
				'https://www.newegg.ca/zotac-geforce-rtx-3080-zt-t30800j-10p/p/N82E16814500504'
		},
		{
			brand: 'pny',
			itemNumber: '14-133-809',
			model: 'xlr8 revel',
			series: '3080',
			url:
				'https://www.newegg.ca/pny-geforce-rtx-3080-vcg308010tfxppb/p/N82E16814133809'
		},
		{
			brand: 'gigabyte',
			itemNumber: '14-932-337',
			model: 'vision oc',
			series: '3080',
			url:
				'https://www.newegg.ca/gigabyte-geforce-rtx-3080-gv-n3080vision-oc-10gd/p/N82E16814932337'
		},
		{
			brand: 'msi',
			itemNumber: '14-137-595',
			model: 'gaming x trio',
			series: '3090',
			url:
				'https://www.newegg.ca/msi-geforce-rtx-3090-rtx-3090-gaming-x-trio-24g/p/N82E16814137595'
		},
		{
			brand: 'gigabyte',
			itemNumber: '14-932-327',
			model: 'gaming oc',
			series: '3090',
			url:
				'https://www.newegg.ca/gigabyte-geforce-rtx-3090-gv-n3090gaming-oc-24gd/p/N82E16814932327'
		},
		{
			brand: 'msi',
			itemNumber: '14-137-596',
			model: 'ventus 3x oc',
			series: '3090',
			url:
				'https://www.newegg.ca/msi-geforce-rtx-3090-rtx-3090-ventus-3x-24g-oc/p/N82E16814137596'
		},
		{
			brand: 'zotac',
			itemNumber: '14-500-503',
			model: 'trinity',
			series: '3090',
			url:
				'https://www.newegg.ca/zotac-geforce-rtx-3090-zt-a30900d-10p/p/N82E16814500503'
		},
		{
			brand: 'asus',
			itemNumber: '14-126-454',
			model: 'tuf',
			series: '3090',
			url:
				'https://www.newegg.ca/asus-geforce-rtx-3090-tuf-rtx3090-o24g-gaming/p/N82E16814126454'
		},
		{
			brand: 'asus',
			itemNumber: '14-126-456',
			model: 'strix',
			series: '3090',
			url:
				'https://www.newegg.ca/asus-geforce-rtx-3090-rog-strix-rtx3090-o24g-gaming/p/N82E16814126456'
		},
		{
			brand: 'evga',
			itemNumber: '14-487-524',
			model: 'xc3 ultra',
			series: '3090',
			url:
				'https://www.newegg.ca/evga-geforce-rtx-3090-24g-p5-3975-kr/p/N82E16814487524'
		},
		{
			brand: 'evga',
			itemNumber: '14-487-523',
			model: 'xc3',
			series: '3090',
			url:
				'https://www.newegg.ca/evga-geforce-rtx-3090-24g-p5-3973-kr/p/N82E16814487523'
		},
		{
			brand: 'evga',
			itemNumber: '14-487-526',
			model: 'ftw3 ultra',
			series: '3090',
			url:
				'https://www.newegg.ca/evga-geforce-rtx-3090-24g-p5-3987-kr/p/N82E16814487526'
		},
		{
			brand: 'evga',
			itemNumber: '14-487-525',
			model: 'ftw3',
			series: '3090',
			url:
				'https://www.newegg.ca/evga-geforce-rtx-3090-24g-p5-3985-kr/p/N82E16814487525'
		},
		{
			brand: 'msi',
			itemNumber: '14-137-602',
			model: 'ventus 2x',
			series: '3070',
			url:
				'https://www.newegg.ca/msi-geforce-rtx-3070-rtx-3070-ventus-2x-oc/p/N82E16814137602'
		},
		{
			brand: 'msi',
			itemNumber: '14-137-601',
			model: 'ventus 3x',
			series: '3070',
			url:
				'https://www.newegg.ca/msi-geforce-rtx-3070-rtx-3070-ventus-3x-oc/p/N82E16814137601'
		},
		{
			brand: 'msi',
			itemNumber: '14-137-603',
			model: 'gaming x trio',
			series: '3070',
			url:
				'https://www.newegg.ca/msi-geforce-rtx-3070-rtx-3070-gaming-x-trio/p/N82E16814137603'
		},
		{
			brand: 'asus',
			itemNumber: '14-126-460',
			model: 'dual',
			series: '3070',
			url:
				'https://www.newegg.ca/asus-geforce-rtx-3070-dual-rtx3070-8g/p/N82E16814126460'
		},
		{
			brand: 'asus',
			itemNumber: '14-126-459',
			model: 'dual oc',
			series: '3070',
			url:
				'https://www.newegg.ca/asus-geforce-rtx-3070-dual-rtx3070-o8g/p/N82E16814126459'
		},
		{
			brand: 'gigabyte',
			itemNumber: '14-932-342',
			model: 'gaming oc',
			series: '3070',
			url:
				'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070gaming-oc-8gd/p/N82E16814932342'
		},
		{
			brand: 'asus',
			itemNumber: '14-126-458',
			model: 'strix',
			series: '3070',
			url:
				'https://www.newegg.ca/asus-geforce-rtx-3070-rog-strix-rtx3070-o8g-gaming/p/N82E16814126458'
		},
		{
			brand: 'zotac',
			itemNumber: '14-500-501',
			model: 'twin edge',
			series: '3070',
			url:
				'https://www.newegg.ca/zotac-geforce-rtx-3070-zt-a30700e-10p/p/N82E16814500501'
		},
		{
			brand: 'gigabyte',
			itemNumber: '14-932-344',
			model: 'eagle',
			series: '3070',
			url:
				'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070eagle-8gd/p/N82E16814932344'
		},
		{
			brand: 'evga',
			itemNumber: '14-487-528',
			model: 'xc3 black',
			series: '3070',
			url:
				'https://www.newegg.ca/evga-geforce-rtx-3070-08g-p5-3751-kr/p/N82E16814487528'
		},
		{
			brand: 'gigabyte',
			itemNumber: '14-932-360',
			model: 'vision oc',
			series: '3070',
			url:
				'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070vision-oc-8gd/p/N82E16814932360'
		},
		{
			brand: 'zotac',
			itemNumber: '14-500-505',
			model: 'twin edge oc',
			series: '3070',
			url:
				'https://www.newegg.ca/zotac-geforce-rtx-3070-zt-a30700h-10p/p/N82E16814500505'
		},
		{
			brand: 'pny',
			itemNumber: '14-133-812',
			model: 'uprising',
			series: '3070',
			url:
				'https://www.newegg.ca/pny-geforce-rtx-3070-vcg30708dfmpb/p/N82E16814133812'
		},
		{
			brand: 'asus',
			itemNumber: '14-126-461',
			model: 'tuf',
			series: '3070',
			url:
				'https://www.newegg.ca/asus-geforce-rtx-3070-tuf-rtx3070-o8g-gaming/p/N82E16814126461'
		},
		{
			brand: 'evga',
			itemNumber: '14-487-531',
			model: 'ftw3',
			series: '3070',
			url:
				'https://www.newegg.ca/evga-geforce-rtx-3070-08g-p5-3765-kr/p/N82E16814487531'
		},
		{
			brand: 'gigabyte',
			itemNumber: '14-932-359',
			model: 'aorus',
			series: '3070',
			url:
				'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070aorus-m-8gd/p/N82E16814932359'
		},
		{
			brand: 'gigabyte',
			itemNumber: '14-932-343',
			model: 'eagle oc',
			series: '3070',
			url:
				'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070eagle-oc-8gd/p/N82E16814932343'
		},
		{
			brand: 'evga',
			itemNumber: '14-487-530',
			model: 'xc3 ultra',
			series: '3070',
			url:
				'https://www.newegg.ca/evga-geforce-rtx-3070-08g-p5-3755-kr/p/N82E16814487530'
		},
		{
			brand: 'evga',
			itemNumber: '14-487-532',
			model: 'ftw3 ultra',
			series: '3070',
			url:
				'https://www.newegg.ca/evga-geforce-rtx-3070-08g-p5-3767-kr/p/N82E16814487532'
		},
		{
			brand: 'pny',
			itemNumber: '14-133-811',
			model: 'xlr8 revel',
			series: '3070',
			url:
				'https://www.newegg.ca/pny-geforce-rtx-3070-vcg30708tfxppb/p/N82E16814133811'
		},
		{
			brand: 'evga',
			itemNumber: '14-487-529',
			model: 'xc3',
			series: '3070',
			url:
				'https://www.newegg.ca/evga-geforce-rtx-3070-08g-p5-3753-kr/p/N82E16814487529'
		},
		{
			brand: 'amd',
			itemNumber: '19-113-663',
			model: '5950x',
			series: 'ryzen5950',
			url: 'https://www.newegg.ca/amd-ryzen-9-5950x/p/N82E16819113663'
		},
		{
			brand: 'amd',
			itemNumber: '19-113-664',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://www.newegg.ca/amd-ryzen-9-5900x/p/N82E16819113664'
		},
		{
			brand: 'amd',
			itemNumber: '19-113-665',
			model: '5800x',
			series: 'ryzen5800',
			url: 'https://www.newegg.ca/amd-ryzen-7-5800x/p/N82E16819113665'
		},
		{
			brand: 'amd',
			itemNumber: '19-113-666',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://www.newegg.ca/amd-ryzen-5-5600x/p/N82E16819113666'
		},
		{
			brand: 'msi',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://www.newegg.ca/msi-radeon-rx-6800-xt-rx-6800-xt-16g/p/N82E16814137607'
		},
		{
			brand: 'msi',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.newegg.ca/msi-radeon-rx-6800-rx-6800-16g/p/N82E16814137608'
		},
		{
			brand: 'asus',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://www.newegg.ca/asus-radeon-rx-6800-xt-rx6800xt-16g/p/N82E16814126472'
		},
		{
			brand: 'asus',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.newegg.ca/asus-radeon-rx-6800-rx6800-16g/p/N82E16814126473'
		},
		{
			brand: 'asrock',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://www.newegg.ca/asrock-radeon-rx-6800-xt-rx-6800-xt-16g/p/N82E16814930045'
		},
		{
			brand: 'asrock',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.newegg.ca/asrock-radeon-rx-6800-rx-6800-16g/p/N82E16814930046'
		},
		{
			brand: 'gigabyte',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://www.newegg.ca/gigabyte-radeon-rx-6800-xt-gv-r68xt-16gc-b/p/N82E16814932373'
		},
		{
			brand: 'gigabyte',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.newegg.ca/gigabyte-radeon-rx-6800-gv-r68-16gc-b/p/N82E16814932374'
		},
		{
			brand: 'sapphire',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://www.newegg.ca/sapphire-radeon-rx-6800-xt-21304-01-20g/p/N82E16814202388'
		},
		{
			brand: 'sapphire',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.newegg.ca/sapphire-radeon-rx-6800-21305-01-20g/p/N82E16814202389'
		},
		{
			brand: 'gigabyte',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://www.newegg.com/gigabyte-radeon-rx-6800-xt-gv-r68xt-16gc-b/p/N82E16814932373'
		},
		{
			brand: 'sapphire',
			model: 'nitro+',
			series: 'rx6800',
			url:
				'https://www.newegg.ca/sapphire-radeon-rx-6800-11305-01-20g/p/N82E16814202392'
		},
		{
			brand: 'asrock',
			model: 'phantom gaming',
			series: 'rx6800xt',
			url:
				'https://www.newegg.ca/asrock-radeon-rx-6800-xt-rx6800xt-pgd-16go/p/N82E16814930049'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: 'rx6800xt',
			url:
				'https://www.newegg.ca/asus-radeon-rx-6800-xt-tuf-rx6800xt-o16g-gaming/p/N82E16814126476'
		},
		{
			brand: 'xfx',
			model: 'merc',
			series: 'rx6800xt',
			url:
				'https://www.newegg.ca/xfx-radeon-rx-6800-xt-rx-68xtacbd9/p/N82E16814150844'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: 'rx6800',
			url:
				'https://www.newegg.ca/asus-radeon-rx-6800-rog-strix-rx6800-o16g-gaming/p/N82E16814126477'
		},
		{
			brand: 'asrock',
			model: 'challenger',
			series: 'rx6800',
			url:
				'https://www.newegg.ca/asrock-radeon-rx-6800-rx6800-clp-16go/p/N82E16814930047'
		},
		{
			brand: 'sapphire',
			model: 'nitro+',
			series: 'rx6800xt',
			url:
				'https://www.newegg.ca/sapphire-radeon-rx-6800-xt-11304-01-20g/p/N82E16814202390'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: 'rx6800xt',
			url:
				'https://www.newegg.ca/asus-radeon-rx-6800-xt-rog-strix-lc-rx6800xt-o16g-gaming/p/N82E16814126475'
		},
		{
			brand: 'powercolor',
			model: 'red devil',
			series: 'rx6800xt',
			url:
				'https://www.newegg.ca/powercolor-radeon-rx-6800-xt-axrx-6800xt-16gbd6-2dhce-oc/p/N82E16814131767'
		},
		{
			brand: 'sapphire',
			model: 'nitro+',
			series: 'rx6800xt',
			url:
				'https://www.newegg.ca/sapphire-radeon-rx-6800-xt-11304-02-20g/p/N82E16814202391'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: 'rx6800',
			url:
				'https://www.newegg.ca/asus-radeon-rx-6800-tuf-rx6800-o16g-gaming/p/N82E16814126478'
		},
		{
			brand: 'asrock',
			model: 'taichi',
			series: 'rx6800xt',
			url:
				'https://www.newegg.ca/asrock-radeon-rx-6800-xt-rx6800xt-tcx-16go/p/N82E16814930050'
		},
		{
			brand: 'asrock',
			model: 'phantom gaming',
			series: 'rx6800',
			url:
				'https://www.newegg.ca/asrock-radeon-rx-6800-rx6800-pgd-16go/p/N82E16814930048'
		}
	],
	name: 'newegg-ca',
	realTimeInventoryLookup: async (itemNumber: string) => {
		const request_url =
			'https://www.newegg.ca/product/api/ProductRealtime?ItemNumber=' +
			itemNumber;
		const response = await fetch(request_url);
		const response_json = await response.json();
		return (
			response_json.MainItem !== undefined &&
			response_json.MainItem.Instock === true
		);
	}
};

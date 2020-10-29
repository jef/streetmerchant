import {Store} from './store';

export const BAndH: Store = {
	backoffStatusCodes: [403, 429],
	labels: {
		inStock: {
			container: 'div[data-selenium="addToCartSection"]',
			text: ['add to cart']
		},
		maxPrice: {
			container: 'div[data-selenium="pricingPrice"]',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.bhphotovideo.com/c/product/1452927-REG/evga_06g_p4_2063_kr_geforce_rtx_2060_xc.html'
		},
		// TUF was removed from BH, not sure why so commenting out listing for now
		// {
		// 	brand: 'asus',
		// 	model: 'tuf',
		// 	series: '3080',
		// 	url: 'https://www.bhphotovideo.com/c/product/1593649-REG/asus_tuf_rtx3080_10g_gaming_tuf_gaming_geforce_rtx.html'
		// },
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.bhphotovideo.com/c/product/1593333-REG/gigabyte_gv_n3080gaming_oc_10gd_geforce_rtx_3080_gaming.html'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://www.bhphotovideo.com/c/product/1592969-REG/zotac_zt_a30800d_10p_gaming_geforce_rtx_3080.html'
		},
		// TUF was removed from BH, not sure why so commenting out listing for now
		// {
		// 	brand: 'asus',
		// 	model: 'tuf oc',
		// 	series: '3080',
		// 	url: 'https://www.bhphotovideo.com/c/product/1593650-REG/asus_tuf_rtx3080_o10g_gaming_tuf_gaming_geforce_rtx.html'
		// },
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.bhphotovideo.com/c/product/1593996-REG/msi_g3080gxt10_geforce_rtx_3080_gaming.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.bhphotovideo.com/c/product/1593997-REG/msi_g3080v3x10c_geforce_rtx_3080_ventus.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.bhphotovideo.com/c/product/1593645-REG/msi_geforce_rtx_3080_gaming.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.bhphotovideo.com/c/product/1593646-REG/msi_geforce_rtx_3080_ventus.html'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3090',
			url: 'https://www.bhphotovideo.com/c/product/1592970-REG/zotac_zt_a30900d_10p_gaming_geforce_rtx_3090.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090',
			url: 'https://www.bhphotovideo.com/c/product/1593647-REG/msi_geforce_rtx_3090_gaming.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090',
			url: 'https://www.bhphotovideo.com/c/product/1593994-REG/msi_g3090gxt24_geforce_rtx_3090_gaming.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3090',
			url: 'https://www.bhphotovideo.com/c/product/1593648-REG/msi_geforce_rtx_3090_ventus.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3090',
			url: 'https://www.bhphotovideo.com/c/product/1593995-REG/msi_g3090v3x24c_geforce_rtx_3090_ventus.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3090',
			url: 'https://www.bhphotovideo.com/c/product/1593334-REG/gigabyte_gv_n3090eagle_oc_24gd_geforce_rtx_3090_eagle.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3090',
			url: 'https://www.bhphotovideo.com/c/product/1593335-REG/gigabyte_gv_n3090gaming_oc_24gd_geforce_rtx3090_gaming_oc.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url: 'https://www.bhphotovideo.com/c/product/1594454-REG/asus_90yv0fd0_m0am00_tuf_gaming_geforce_rtx.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090',
			url: 'https://www.bhphotovideo.com/c/product/1594451-REG/asus_90yv0fd1_m0am00_tuf_gaming_geforce_rtx.html'
		}
	],
	name: 'bandh'
};

import {Store} from './store';

export const BAndH: Store = {
	labels: {
		outOfStock: ['notify when available', 'try varying your search terms', 'sorry, an unexpected error has occurred']
	},
	links: [
		{
			brand: 'TEST',
			model: 'CARD',
			series: 'debug',
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
			model: 'gaming x trio - duplicate',
			series: '3080',
			url: 'https://www.bhphotovideo.com/c/product/1593645-REG/msi_geforce_rtx_3080_gaming.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc - duplicate',
			series: '3080',
			url: 'https://www.bhphotovideo.com/c/product/1593646-REG/msi_geforce_rtx_3080_ventus.html'
		}

	],
	name: 'bandh'
};

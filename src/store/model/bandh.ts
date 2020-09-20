import {Store} from './store';

export const BAndH: Store = {
	links: [
		{
			series: 'debug',
			brand: 'TEST',
			model: 'CARD',
			url: 'https://www.bhphotovideo.com/c/product/1452927-REG/evga_06g_p4_2063_kr_geforce_rtx_2060_xc.html',
		},
		{
			series: '3080',
			brand: 'asus',
			model: 'tuf',
			url: 'https://www.bhphotovideo.com/c/product/1593649-REG/asus_tuf_rtx3080_10g_gaming_tuf_gaming_geforce_rtx.html'
		},
		{
			series: '3080',
			brand: 'gigabyte',
			model: 'gaming oc',
			url: 'https://www.bhphotovideo.com/c/product/1593333-REG/gigabyte_gv_n3080gaming_oc_10gd_geforce_rtx_3080_gaming.html'
		},
		{
			series: '3080',
			brand: 'zotac',
			model: 'trinity',
			url: 'https://www.bhphotovideo.com/c/product/1592969-REG/zotac_zt_a30800d_10p_gaming_geforce_rtx_3080.html'
		},
		{
			series: '3080',
			brand: 'asus',
			model: 'tuf oc',
			url: 'https://www.bhphotovideo.com/c/product/1593650-REG/asus_tuf_rtx3080_o10g_gaming_tuf_gaming_geforce_rtx.html'
		},
		{
			series: '3080',
			brand: 'msi',
			model: 'gaming x trio',
			url: 'https://www.bhphotovideo.com/c/product/1593996-REG/msi_g3080gxt10_geforce_rtx_3080_gaming.html'
		},
		{
			series: '3080',
			brand: 'msi',
			model: 'ventus 3x oc',
			url: 'https://www.bhphotovideo.com/c/product/1593997-REG/msi_g3080v3x10c_geforce_rtx_3080_ventus.html'
		},
		{
			series: '3080',
			brand: 'msi',
			model: 'gaming x trio - duplicate',
			url: 'https://www.bhphotovideo.com/c/product/1593645-REG/msi_geforce_rtx_3080_gaming.html'
		},
		{
			series: '3080',
			brand: 'msi',
			model: 'ventus 3x oc - duplicate',
			url: 'https://www.bhphotovideo.com/c/product/1593646-REG/msi_geforce_rtx_3080_ventus.html'
		}

	],
	labels: {
		oosList: ['notify when available']
	},
	elements: {
		addToCart: 'button[data-selenium="addToCartButton"]'
	},
	cartUrl: 'https://www.bhphotovideo.com/find/cart.jsp',
	name: 'bandh'
};

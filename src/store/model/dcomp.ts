import {Store} from './store';

export const Dcomp: Store = {
	backoffStatusCodes: [403, 429],
	currency: '$',
	labels: {
		inStock: {
			container: '#cart-info > button.btn.addToCart',
			text: ['Add to', '']
		},
		maxPrice: {
			container: '#prodprice',
			euroFormat: false
		},
		outOfStock: {
			container: '#cart-info > button.btn.notifyMe',
			text: ['Notify Me']
		}
	},
	links: [
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://dcomp.com.au/productdetail/3172'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url: 'https://dcomp.com.au/productdetail/3205'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://dcomp.com.au/productdetail/3206'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url: 'https://dcomp.com.au/productdetail/3183'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3080',
			url: 'https://dcomp.com.au/productdetail/3310'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme waterforce',
			series: '3080',
			url: 'https://dcomp.com.au/productdetail/3307'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme waterforce wb',
			series: '3080',
			url: 'https://dcomp.com.au/productdetail/3308'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url: 'https://dcomp.com.au/productdetail/3136'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://dcomp.com.au/productdetail/3135'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url: 'https://dcomp.com.au/productdetail/3166'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://dcomp.com.au/productdetail/3199'
		},
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3080',
			url: 'https://dcomp.com.au/productdetail/3306'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://dcomp.com.au/productdetail/3141'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url: 'https://dcomp.com.au/productdetail/3226'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3090',
			url: 'https://dcomp.com.au/productdetail/3281'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3090',
			url: 'https://dcomp.com.au/productdetail/3309'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3090',
			url: 'https://dcomp.com.au/productdetail/3263'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme waterforce',
			series: '3090',
			url: 'https://dcomp.com.au/productdetail/3388'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme waterforce wb',
			series: '3090',
			url: 'https://dcomp.com.au/productdetail/3417'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3090',
			url: 'https://dcomp.com.au/productdetail/3234'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3090',
			url: 'https://dcomp.com.au/productdetail/3158'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3090',
			url: 'https://dcomp.com.au/productdetail/3235'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3090',
			url: 'https://dcomp.com.au/productdetail/3168'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090',
			url: 'https://dcomp.com.au/productdetail/3167'
		},
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3090',
			url: 'https://dcomp.com.au/productdetail/3300'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: 'rx6800',
			url: 'https://dcomp.com.au/productdetail/3358'
		},
		{
			brand: 'msi',
			model: 'amd reference',
			series: 'rx6800',
			url: 'https://dcomp.com.au/productdetail/3386'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: 'rx6800xt',
			url:
				'https://dcomp.com.au/productdetail/3421'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: 'rx6800xt',
			url: 'https://dcomp.com.au/productdetail/3387'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: 'rx6900xt',
			url: 'https://dcomp.com.au/productdetail/3422'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://dcomp.com.au/productdetail/3270'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url: 'https://dcomp.com.au/productdetail/3289'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://dcomp.com.au/productdetail/3265'
		}
	],
	name: 'dcomp'
};

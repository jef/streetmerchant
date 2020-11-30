import {Store} from './store';

export const Eprice: Store = {
	labels: {
		inStock: {
			container: '.form_aggiungi_articolo',
			text: ['AGGIUNGI AL CARRELLO']
		},
		maxPrice: {
			container: '#PrezzoClasic span[class*="big"]',
			euroFormat: true
		}
	},
	links: [
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3070',
			url: 'https://www.eprice.it/schede-video-MSI/d-14039974'
		},
		{
			brand: 'asus',
			model: 'dual',
			series: '3070',
			url: 'https://www.eprice.it/schede-video-ASUS/d-14042082'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3070',
			url: 'https://www.eprice.it/schede-video-ASUS/d-14039878'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3070',
			url: 'https://www.eprice.it/schede-video-ASUS/d-14039876'
		},
		{
			brand: 'msi',
			model: 'gaming',
			series: '3070',
			url: 'https://www.eprice.it/schede-video-MSI/d-14039972'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3070',
			url: 'https://www.eprice.it/schede-video-MSI/d-14039974'
		},
		{
			brand: 'msi',
			model: 'ventus 2x oc',
			series: '3070',
			url: 'https://www.eprice.it/schede-video-MSI/d-14039973'
		},
		{
			brand: 'zotac',
			model: 'gaming',
			series: '3070',
			url: 'https://www.eprice.it/schede-video-ZOTAC/d-13979806'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.eprice.it/playstation-5-SONY/d-13981612'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url: 'https://www.eprice.it/playstation-5-SONY/d-13981613'
		}
	],
	name: 'eprice'
};

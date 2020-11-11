import {Store} from './store';

export const vsgamers: Store = {
	labels: {
		inStock: {
			container: '#vs-product-sheet-dashboard',
			text: ['COMPRAR']
		},
		outOfStock: {
			container: '#vs-product-sheet-dashboard',
			text: ['Avísame']
		}
	},
    links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.vsgamers.es/product/silla-gaming-msi-mag-ch120-negro-rojo'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://www.vsgamers.es/product/procesador-amd-ryzen-5-5600x-37-ghz'
        },
        {
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://www.vsgamers.es/product/procesador-amd-ryzen-5-5600x-37-ghz'
        }
    ],
	name: 'vsgamers'
};
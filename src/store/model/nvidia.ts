import {Store} from './store';
import {
	digitalRiverStockUrl,
	fe2060SuperId,
	fe3080Id,
	generateCartAction
} from './store-helpers/nvidia';


export const Nvidia: Store = {
	links: [
		{
			series: 'debug',
			brand: 'TEST',
			model: 'CARD',
			url: digitalRiverStockUrl(fe2060SuperId),
			openCartAction: generateCartAction(fe2060SuperId, 'TEST CARD')
		},
		{
			series: '3080',
			brand: 'nvidia',
			model: 'founders edition',
			url: digitalRiverStockUrl(fe3080Id),
			openCartAction: generateCartAction(fe3080Id, 'nvidia founders edition 3080')
		}
	],
	labels: {
		outOfStock: ['product_inventory_out_of_stock', 'rate limit exceeded', 'request timeout']
	},
	name: 'nvidia'
};

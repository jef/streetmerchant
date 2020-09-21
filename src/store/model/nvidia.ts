import {Store} from './store';
import {
	digitalRiverStockUrl,
	generateOpenCartAction
} from './helpers/nvidia';

/* FE 2060 SUPER debug IDs
USA: 5379432500
 */
export const fe2060SuperId = 5379432500;

/* FE 3080 IDs
USA: 5379432500
 */
export const fe3080Id = 5438481700;

/* Locales
USA: en_us
 */
const locale = 'en_us';

export const Nvidia: Store = {
	links: [
		{
			series: 'debug',
			brand: 'TEST',
			model: 'CARD',
			url: digitalRiverStockUrl(fe2060SuperId),
			openCartAction: generateOpenCartAction(fe2060SuperId, locale,'TEST CARD debug')
		},
		{
			series: '3080',
			brand: 'nvidia',
			model: 'founders edition',
			url: digitalRiverStockUrl(fe3080Id),
			openCartAction: generateOpenCartAction(fe3080Id, locale, 'nvidia founders edition 3080')
		}
	],
	labels: {
		outOfStock: ['product_inventory_out_of_stock', 'rate limit exceeded', 'request timeout']
	},
	name: 'nvidia'
};

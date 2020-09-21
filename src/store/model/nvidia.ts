import {Store} from './store';
import {
	digitalRiverStockUrl,
	generateOpenCartAction
} from './helpers/nvidia';

const country = 'usa';

const fe2060SuperIds = {
	usa: 5379432500
}

const fe3080Ids = {
	usa: 5438481700
}

const locales = {
	usa: 'en_us'
}

const outOfStockLabels = {
	usa: ['product_inventory_out_of_stock', 'rate limit exceeded', 'request timeout']
}

const fe2060SuperId = fe2060SuperIds[country];
const fe3080Id = fe3080Ids[country];
const locale = locales[country];

export const Nvidia: Store = {
	links: [
		{
			series: 'debug',
			brand: 'TEST',
			model: 'CARD',
			url: digitalRiverStockUrl(fe2060SuperId, locale),
			openCartAction: generateOpenCartAction(fe2060SuperId, locale,'TEST CARD debug')
		},
		{
			series: '3080',
			brand: 'nvidia',
			model: 'founders edition',
			url: digitalRiverStockUrl(fe3080Id, locale),
			openCartAction: generateOpenCartAction(fe3080Id, locale, 'nvidia founders edition 3080')
		}
	],
	labels: {
		outOfStock: outOfStockLabels[country]
	},
	name: 'nvidia'
};

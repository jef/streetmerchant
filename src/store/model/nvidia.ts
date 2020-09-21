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
	usa: 5438481700,
	belgium: 5438795700
}

const nvidiaLocales = {
	usa: 'en_us',
	belgium: 'fr_FR'
}

const drLocales = {
	usa: 'en_us',
	belgium: 'fr_BE'
}

const outOfStockLabels = {
	usa: ['product_inventory_out_of_stock', 'rate limit exceeded', 'request timeout']
}

const fe2060SuperId = fe2060SuperIds[country];
const fe3080Id = fe3080Ids[country];
const nvidiaLocale = nvidiaLocales[country];
const drLocale = drLocales[country];

export const Nvidia: Store = {
	links: [
		{
			series: 'debug',
			brand: 'TEST',
			model: 'CARD',
			url: digitalRiverStockUrl(fe2060SuperId, drLocale),
			openCartAction: generateOpenCartAction(fe2060SuperId, nvidiaLocale, drLocale, 'TEST CARD debug')
		},
		{
			series: '3080',
			brand: 'nvidia',
			model: 'founders edition',
			url: digitalRiverStockUrl(fe3080Id, drLocale),
			openCartAction: generateOpenCartAction(fe3080Id, nvidiaLocale, drLocale, 'nvidia founders edition 3080')
		}
	],
	labels: {
		outOfStock: outOfStockLabels[country]
	},
	name: 'nvidia'
};

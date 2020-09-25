import {Store} from './store';
import {generateLinks} from './helpers/nvidia';

// Region/country set by config file, silently ignores null / missing values and defaults to usa

export interface NvidiaRegionInfo {
	currency: string;
	drLocale: string;
	fe3080Id: number | null;
	fe3090Id: number | null;
	fe2060SuperId: number | null;
}

export const regionInfos = new Map<string, NvidiaRegionInfo>([
	['austria', {currency: 'EUR', drLocale: 'de_de', fe2060SuperId: null, fe3080Id: 5440853700, fe3090Id: null}],
	['belgium', {currency: 'EUR', drLocale: 'fr_fr', fe2060SuperId: 5394902700, fe3080Id: 5438795700, fe3090Id: null}],
	['canada', {currency: 'CAD', drLocale: 'en_us', fe2060SuperId: null, fe3080Id: 5438481700, fe3090Id: null}],
	['czechia', {currency: 'CZK', drLocale: 'en_gb', fe2060SuperId: null, fe3080Id: 5438793800, fe3090Id: null}],
	['denmark', {currency: 'EUR', drLocale: 'en_gb', fe2060SuperId: null, fe3080Id: 5438793300, fe3090Id: null}],
	['finland', {currency: 'EUR', drLocale: 'en_gb', fe2060SuperId: null, fe3080Id: 5438793300, fe3090Id: null}],
	['france', {currency: 'EUR', drLocale: 'fr_fr', fe2060SuperId: null, fe3080Id: 5438795200, fe3090Id: null}],
	['germany', {currency: 'EUR', drLocale: 'de_de', fe2060SuperId: null, fe3080Id: 5438792300, fe3090Id: null}],
	['great_britain', {currency: 'GBP', drLocale: 'en_gb', fe2060SuperId: null, fe3080Id: 5438792800, fe3090Id: null}],
	['ireland', {currency: 'GBP', drLocale: 'en_gb', fe2060SuperId: null, fe3080Id: 5438792800, fe3090Id: null}],
	['italy', {currency: 'EUR', drLocale: 'it_it', fe2060SuperId: null, fe3080Id: 5438796200, fe3090Id: null}],
	['luxembourg', {currency: 'EUR', drLocale: 'fr_fr', fe2060SuperId: 5394902700, fe3080Id: 5438795700, fe3090Id: null}],
	['netherlands', {currency: 'EUR', drLocale: 'nl_nl', fe2060SuperId: 5394903500, fe3080Id: 5438796700, fe3090Id: null}],
	['poland', {currency: 'PLN', drLocale: 'pl_pl', fe2060SuperId: null, fe3080Id: 5438797700, fe3090Id: null}],
	['portugal', {currency: 'EUR', drLocale: 'en_gb', fe2060SuperId: null, fe3080Id: 5438794300, fe3090Id: null}],
	['russia', {currency: 'RUB', drLocale: 'ru_ru', fe2060SuperId: null, fe3080Id: null, fe3090Id: null}],
	['spain', {currency: 'EUR', drLocale: 'es_es', fe2060SuperId: null, fe3080Id: 5438794800, fe3090Id: null}],
	['sweden', {currency: 'SEK', drLocale: 'sv_se', fe2060SuperId: null, fe3080Id: 5438798100, fe3090Id: 5438761600}],
	['usa', {currency: 'USD', drLocale: 'en_us', fe2060SuperId: 5379432500, fe3080Id: 5438481700, fe3090Id: 5438481600}]
]);

export const NvidiaApi: Store = {
	labels: {
		inStock: {
			container: 'body',
			text: ['product_inventory_in_stock']
		}
	},
	links: generateLinks(),
	name: 'nvidia-api'
};

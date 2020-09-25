import {Store} from './store';
import {generateLinks} from './helpers/nvidia';

// Region/country set by config file, silently ignores null / missing values and defaults to usa

export interface NvidiaRegionInfo {
	currency: string;
	drLocale: string;
	fe3080Id: number | null;
	fe3090Id: number | null;
	fe2060SuperId: number | null;
	nvidiaLocale: string;
}

export const regionInfos = new Map<string, NvidiaRegionInfo>([
	['austria', {currency: 'EUR', drLocale: 'de_de', fe2060SuperId: null, fe3080Id: 5440853700, fe3090Id: null, nvidiaLocale: 'de_de'}],
	['belgium', {currency: 'EUR', drLocale: 'fr_fr', fe2060SuperId: 5394902700, fe3080Id: 5438795700, fe3090Id: null, nvidiaLocale: 'fr_fr'}],
	['canada', {currency: 'CAD', drLocale: 'en_us', fe2060SuperId: null, fe3080Id: 5438481700, fe3090Id: null, nvidiaLocale: 'en_ca'}],
	['czechia', {currency: 'CZK', drLocale: 'en_gb', fe2060SuperId: null, fe3080Id: 5438793800, fe3090Id: null, nvidiaLocale: 'en_gb'}],
	['denmark', {currency: 'EUR', drLocale: 'en_gb', fe2060SuperId: null, fe3080Id: 5438793300, fe3090Id: null, nvidiaLocale: 'en_gb'}],
	['finland', {currency: 'EUR', drLocale: 'en_gb', fe2060SuperId: null, fe3080Id: 5438793300, fe3090Id: null, nvidiaLocale: 'en_gb'}],
	['france', {currency: 'EUR', drLocale: 'fr_fr', fe2060SuperId: null, fe3080Id: 5438795200, fe3090Id: null, nvidiaLocale: 'fr_fr'}],
	['germany', {currency: 'EUR', drLocale: 'de_de', fe2060SuperId: null, fe3080Id: 5438792300, fe3090Id: null, nvidiaLocale: 'de_de'}],
	['great_britain', {currency: 'GBP', drLocale: 'en_gb', fe2060SuperId: null, fe3080Id: 5438792800, fe3090Id: null, nvidiaLocale: 'en_gb'}],
	['ireland', {currency: 'GBP', drLocale: 'en_gb', fe2060SuperId: null, fe3080Id: 5438792800, fe3090Id: null, nvidiaLocale: 'en_gb'}],
	['italy', {currency: 'EUR', drLocale: 'it_it', fe2060SuperId: null, fe3080Id: 5438796200, fe3090Id: null, nvidiaLocale: 'it_it'}],
	['luxembourg', {currency: 'EUR', drLocale: 'fr_fr', fe2060SuperId: 5394902700, fe3080Id: 5438795700, fe3090Id: null, nvidiaLocale: 'fr_fr'}],
	['netherlands', {currency: 'EUR', drLocale: 'nl_nl', fe2060SuperId: 5394903500, fe3080Id: 5438796700, fe3090Id: null, nvidiaLocale: 'nl_nl'}],
	['poland', {currency: 'PLN', drLocale: 'pl_pl', fe2060SuperId: null, fe3080Id: 5438797700, fe3090Id: null, nvidiaLocale: 'pl_pSl'}],
	['portugal', {currency: 'EUR', drLocale: 'en_gb', fe2060SuperId: null, fe3080Id: 5438794300, fe3090Id: null, nvidiaLocale: 'en_gb'}],
	['russia', {currency: 'RUB', drLocale: 'ru_ru', fe2060SuperId: null, fe3080Id: null, fe3090Id: null, nvidiaLocale: 'ru_ru'}],
	['spain', {currency: 'EUR', drLocale: 'es_es', fe2060SuperId: null, fe3080Id: 5438794800, fe3090Id: null, nvidiaLocale: 'es_es'}],
	['sweden', {currency: 'SEK', drLocale: 'sv_se', fe2060SuperId: null, fe3080Id: 5438798100, fe3090Id: null, nvidiaLocale: 'sv_se'}],
	['usa', {currency: 'USD', drLocale: 'en_us', fe2060SuperId: 5379432500, fe3080Id: 5438481700, fe3090Id: 5438481600, nvidiaLocale: 'en_us'}]
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

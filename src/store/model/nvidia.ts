import {Store} from './store';
import {generateLinks} from './helpers/nvidia';

// Region/country set by config file, silently ignores null / missing values and defaults to usa
export const regionInfos = new Map<string, {drLocale: string; nvidiaLocale: string; fe3080Id: number | null; fe3090Id: number | null; fe2060SuperId: number | null}>([
	['canada', {drLocale: 'en_us', nvidiaLocale: 'en_ca', fe3080Id: 5438481700, fe3090Id: null, fe2060SuperId: null}],
	['usa', {drLocale: 'en_us', nvidiaLocale: 'en_us', fe3080Id: 5438481700, fe3090Id: null, fe2060SuperId: 5379432500}],
	['france', {drLocale: 'fr_fr', nvidiaLocale: 'fr_fr', fe3080Id: 5438795200, fe3090Id: null, fe2060SuperId: null}],
	['belgium', {drLocale: 'fr_fr', nvidiaLocale: 'fr_fr', fe3080Id: 5438795700, fe3090Id: null, fe2060SuperId: 5394902700}],
	['luxembourg', {drLocale: 'fr_fr', nvidiaLocale: 'fr_fr', fe3080Id: 5438795700, fe3090Id: null, fe2060SuperId: 5394902700}],
	['germany', {drLocale: 'de_de', nvidiaLocale: 'de_de', fe3080Id: 5438792300, fe3090Id: null, fe2060SuperId: null}],
	['austria', {drLocale: 'de_de', nvidiaLocale: 'de_de', fe3080Id: 5440853700, fe3090Id: null, fe2060SuperId: null}],
	['italy', {drLocale: 'it_it', nvidiaLocale: 'it_it', fe3080Id: 5438796200, fe3090Id: null, fe2060SuperId: null}],
	['spain', {drLocale: 'es_es', nvidiaLocale: 'es_es', fe3080Id: 5438794800, fe3090Id: null, fe2060SuperId: null}],
	['portugal', {drLocale: 'en_gb', nvidiaLocale: 'en_gb', fe3080Id: 5438794300, fe3090Id: null, fe2060SuperId: null}],
	['poland', {drLocale: 'pl_pl', nvidiaLocale: 'pl_pl', fe3080Id: 5438797700, fe3090Id: null, fe2060SuperId: null}],
	['denmark', {drLocale: 'en_gb', nvidiaLocale: 'en_gb', fe3080Id: 5438793300, fe3090Id: null, fe2060SuperId: null}],
	['finland', {drLocale: 'en_gb', nvidiaLocale: 'en_gb', fe3080Id: 5438793300, fe3090Id: null, fe2060SuperId: null}],
	['czechia', {drLocale: 'en_gb', nvidiaLocale: 'en_gb', fe3080Id: 5438793800, fe3090Id: null, fe2060SuperId: null}],
	['russia', {drLocale: 'ru_ru', nvidiaLocale: 'ru_ru', fe3080Id: null, fe3090Id: null, fe2060SuperId: null}],
	['sweden', {drLocale: 'sv_SE', nvidiaLocale: 'sv_se', fe3080Id: 5438798100, fe3090Id: null, fe2060SuperId: null}]
]);

export const Nvidia: Store = {
	links: generateLinks(),
	labels: {
		outOfStock: ['product_inventory_out_of_stock', 'rate limit exceeded', 'request timeout']
	},
	name: 'nvidia'
};

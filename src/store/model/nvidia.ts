import {generateLinks, generateSetupAction} from './helpers/nvidia';
import {Store} from './store';

// Region/country set by config file, silently ignores null / missing values and defaults to usa

export interface NvidiaRegionInfo {
	drLocale: string;
	fe3080Id: number | null;
	fe3090Id: number | null;
	fe2060SuperId: number | null;
	nvidiaLocale: string;
}

export const regionInfos = new Map<string, NvidiaRegionInfo>([
	['austria', {drLocale: 'de_de', fe2060SuperId: null, fe3080Id: 5440853700, fe3090Id: null, nvidiaLocale: 'de_de'}],
	['belgium', {drLocale: 'fr_fr', fe2060SuperId: 5394902700, fe3080Id: 5438795700, fe3090Id: null, nvidiaLocale: 'fr_fr'}],
	['canada', {drLocale: 'en_us', fe2060SuperId: null, fe3080Id: 5438481700, fe3090Id: null, nvidiaLocale: 'en_ca'}],
	['czechia', {drLocale: 'en_gb', fe2060SuperId: null, fe3080Id: 5438793800, fe3090Id: null, nvidiaLocale: 'en_gb'}],
	['denmark', {drLocale: 'en_gb', fe2060SuperId: null, fe3080Id: 5438793300, fe3090Id: null, nvidiaLocale: 'en_gb'}],
	['finland', {drLocale: 'en_gb', fe2060SuperId: null, fe3080Id: 5438793300, fe3090Id: null, nvidiaLocale: 'en_gb'}],
	['france', {drLocale: 'fr_fr', fe2060SuperId: null, fe3080Id: 5438795200, fe3090Id: null, nvidiaLocale: 'fr_fr'}],
	['germany', {drLocale: 'de_de', fe2060SuperId: null, fe3080Id: 5438792300, fe3090Id: null, nvidiaLocale: 'de_de'}],
	['great_britain', {drLocale: 'en_gb', fe2060SuperId: null, fe3080Id: 5438792800, fe3090Id: null, nvidiaLocale: 'en_gb'}],
	['ireland', {drLocale: 'en_gb', fe2060SuperId: null, fe3080Id: 5438792800, fe3090Id: null, nvidiaLocale: 'en_gb'}],
	['italy', {drLocale: 'it_it', fe2060SuperId: null, fe3080Id: 5438796200, fe3090Id: null, nvidiaLocale: 'it_it'}],
	['luxembourg', {drLocale: 'fr_fr', fe2060SuperId: 5394902700, fe3080Id: 5438795700, fe3090Id: null, nvidiaLocale: 'fr_fr'}],
	['poland', {drLocale: 'pl_pl', fe2060SuperId: null, fe3080Id: 5438797700, fe3090Id: null, nvidiaLocale: 'pl_pSl'}],
	['portugal', {drLocale: 'en_gb', fe2060SuperId: null, fe3080Id: 5438794300, fe3090Id: null, nvidiaLocale: 'en_gb'}],
	['russia', {drLocale: 'ru_ru', fe2060SuperId: null, fe3080Id: null, fe3090Id: null, nvidiaLocale: 'ru_ru'}],
	['spain', {drLocale: 'es_es', fe2060SuperId: null, fe3080Id: 5438794800, fe3090Id: null, nvidiaLocale: 'es_es'}],
	['sweden', {drLocale: 'sv_SE', fe2060SuperId: null, fe3080Id: 5438798100, fe3090Id: null, nvidiaLocale: 'sv_se'}],
	['usa', {drLocale: 'en_us', fe2060SuperId: 5379432500, fe3080Id: 5438481700, fe3090Id: null, nvidiaLocale: 'en_us'}]
]);

export const Nvidia: Store = {
	labels: {
		outOfStock: ['product_inventory_out_of_stock', 'rate limit exceeded', 'request timeout']
	},
	links: generateLinks(),
	name: 'nvidia',
	setupAction: generateSetupAction()
};

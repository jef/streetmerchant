import {generateLinks, generateSetupAction} from './helpers/nvidia';
import {Store} from './store';

// Region/country set by config file, silently ignores null / missing values and defaults to usa

export interface NvidiaRegionInfo {
	currency: string;
	drLocale: string;
	fe3080Id: number | null;
	fe3090Id: number | null;
	fe2060SuperId: number | null;
	siteLocale: string;
}

export const regionInfos = new Map<string, NvidiaRegionInfo>([
	[
		'austria',
		{
			currency: 'EUR',
			drLocale: 'de_de',
			fe2060SuperId: 5394902900,
			fe3080Id: 5440853700,
			fe3090Id: 5444941400,
			siteLocale: 'de-at'
		}
	],
	[
		'belgium',
		{
			currency: 'EUR',
			drLocale: 'fr_fr',
			fe2060SuperId: 5394902700,
			fe3080Id: 5438795700,
			fe3090Id: 5438795600,
			siteLocale: 'fr-be'
		}
	],
	[
		'canada',
		{
			currency: 'CAD',
			drLocale: 'en_us',
			fe2060SuperId: 5379432500,
			fe3080Id: 5438481700,
			fe3090Id: 5438481600,
			siteLocale: 'en-us'
		}
	],
	[
		'czechia',
		{
			currency: 'CZK',
			drLocale: 'en_gb',
			fe2060SuperId: 5394902800,
			fe3080Id: 5438793800,
			fe3090Id: 5438793600,
			siteLocale: 'cs-cz'
		}
	],
	[
		'denmark',
		{
			currency: 'DKK',
			drLocale: 'en_gb',
			fe2060SuperId: 5394903100,
			fe3080Id: 5438793300,
			fe3090Id: null,
			siteLocale: 'da-dk'
		}
	],
	[
		'finland',
		{
			currency: 'EUR',
			drLocale: 'en_gb',
			fe2060SuperId: 5394903100,
			fe3080Id: 5438793300,
			fe3090Id: null,
			siteLocale: 'fi-fi'
		}
	],
	[
		'france',
		{
			currency: 'EUR',
			drLocale: 'fr_fr',
			fe2060SuperId: 5394903200,
			fe3080Id: 5438795200,
			fe3090Id: 5438761500,
			siteLocale: 'fr-fr'
		}
	],
	[
		'germany',
		{
			currency: 'EUR',
			drLocale: 'de_de',
			fe2060SuperId: 5394902900,
			fe3080Id: 5438792300,
			fe3090Id: 5438761400,
			siteLocale: 'de-de'
		}
	],
	[
		'great_britain',
		{
			currency: 'GBP',
			drLocale: 'en_gb',
			fe2060SuperId: 5394903300,
			fe3080Id: 5438792800,
			fe3090Id: 5438792700,
			siteLocale: 'en-gb'
		}
	],
	[
		'ireland',
		{
			currency: 'GBP',
			drLocale: 'en_gb',
			fe2060SuperId: 5394903300,
			fe3080Id: 5438792800,
			fe3090Id: 5438792700,
			siteLocale: 'en-gb'
		}
	],
	[
		'italy',
		{
			currency: 'EUR',
			drLocale: 'it_it',
			fe2060SuperId: 5394903400,
			fe3080Id: 5438796200,
			fe3090Id: 5438796100,
			siteLocale: 'it-it'
		}
	],
	[
		'luxembourg',
		{
			currency: 'EUR',
			drLocale: 'fr_fr',
			fe2060SuperId: 5394902700,
			fe3080Id: 5438795700,
			fe3090Id: 5438795600,
			siteLocale: 'fr-be'
		}
	],
	[
		'netherlands',
		{
			currency: 'EUR',
			drLocale: 'nl_nl',
			fe2060SuperId: 5394903500,
			fe3080Id: 5438796700,
			fe3090Id: 5438796600,
			siteLocale: 'nl-nl'
		}
	],
	[
		'norway',
		{
			currency: 'NOK',
			drLocale: 'no_no',
			fe2060SuperId: 5394903600,
			fe3080Id: 5438797200,
			fe3090Id: 5438797100,
			siteLocale: 'nb-no'
		}
	],
	[
		'poland',
		{
			currency: 'PLN',
			drLocale: 'pl_pl',
			fe2060SuperId: 5394903700,
			fe3080Id: 5438797700,
			fe3090Id: 5438797600,
			siteLocale: 'pl-pl'
		}
	],
	[
		'portugal',
		{
			currency: 'EUR',
			drLocale: 'en_gb',
			fe2060SuperId: null,
			fe3080Id: 5438794300,
			fe3090Id: null,
			siteLocale: 'en-gb'
		}
	],
	[
		'russia',
		{
			currency: 'RUB',
			drLocale: 'ru_ru',
			fe2060SuperId: null,
			fe3080Id: null,
			fe3090Id: null,
			siteLocale: 'ru-ru'
		}
	],
	[
		'spain',
		{
			currency: 'EUR',
			drLocale: 'es_es',
			fe2060SuperId: 5394903000,
			fe3080Id: 5438794800,
			fe3090Id: 5438794700,
			siteLocale: 'es-es'
		}
	],
	[
		'sweden',
		{
			currency: 'SEK',
			drLocale: 'sv_se',
			fe2060SuperId: 5394903900,
			fe3080Id: 5438798100,
			fe3090Id: 5438761600,
			siteLocale: 'sv-se'
		}
	],
	// https://github.com/jef/streetmerchant/issues/407 This fe2080SuperID is for the Shield TV which is out of stock in the US
	[
		'usa',
		{
			currency: 'USD',
			drLocale: 'en_us',
			fe2060SuperId: 5355772500,
			fe3080Id: 5438481700,
			fe3090Id: 5438481600,
			siteLocale: 'en-us'
		}
	]
]);

export const NvidiaApi: Store = {
	labels: {
		inStock: {
			container: 'body',
			text: ['product_inventory_in_stock']
		}
	},
	links: generateLinks(),
	name: 'nvidia-api',
	setupAction: generateSetupAction()
};

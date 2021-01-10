import {Browser, LoadEvent} from 'puppeteer';

export type Element = {
	container?: string;
	text: string[];
};

export type Pricing = {
	container: string;
	euroFormat?: boolean;
};

export type Brand =
	| 'test:brand'
	| 'amd'
	| 'asrock'
	| 'asus'
	| 'colorful'
	| 'corsair'
	| 'evga'
	| 'gainward'
	| 'galax'
	| 'gigabyte'
	| 'inno3d'
	| 'kfa2'
	| 'leadtek'
	| 'microsoft'
	| 'msi'
	| 'nvidia'
	| 'palit'
	| 'pny'
	| 'sapphire'
	| 'sony'
	| 'xfx'
	| 'powercolor'
	| 'zotac';

export type Series =
	| 'test:series'
	| '3060ti'
	| '3070'
	| '3080'
	| '3090'
	| 'darkhero'
	| 'rx6800'
	| 'rx6800xt'
	| 'rx6900xt'
	| 'ryzen5600'
	| 'ryzen5800'
	| 'ryzen5900'
	| 'ryzen5950'
	| 'sonyps5c'
	| 'sonyps5de'
	| 'sf'
	| 'xboxsx'
	| 'xboxss';

export type Model =
	| 'test:model'
	| '5600x'
	| '5800x'
	| '5900x'
	| '5950x'
	| '600 platinum'
	| '750 platinum'
	| 'amd reference'
	| 'amp extreme holo'
	| 'amp holo'
	| 'aorus master'
	| 'aorus xtreme'
	| 'aorus xtreme waterforce'
	| 'aorus xtreme waterforce wb'
	| 'aorus'
	| 'challenger'
	| 'crosshair viii'
	| 'dual fan'
	| 'dual oc'
	| 'dual'
	| 'dual mini'
	| 'dual mini oc'
	| 'eagle oc'
	| 'eagle'
	| 'ekwb'
	| 'founders edition'
	| 'ftw3'
	| 'ftw3 ultra'
	| 'ftw3 ultra hydro copper'
	| 'gamerock oc'
	| 'gaming oc'
	| 'gaming oc pro'
	| 'gaming pro oc'
	| 'gaming pro'
	| 'gaming trio'
	| 'gaming x trio'
	| 'gaming x3'
	| 'suprim x'
	| 'suprim'
	| 'gaming'
	| 'hurricane'
	| 'ichill x2'
	| 'ichill x3'
	| 'ichill x4'
	| 'ichill frostbite'
	| 'igame advanced oc'
	| 'igame vulcan oc'
	| 'ko oc'
	| 'ko'
	| 'nitro+'
	| 'nitro+ se'
	| 'nitro oc se'
	| 'nitro oc'
	| 'phantom gaming'
	| 'phantom gs'
	| 'phoenix gs oc'
	| 'phoenix gs'
	| 'phoenix'
	| 'ps5 console'
	| 'ps5 digital'
	| 'pulse'
	| 'red devil'
	| 'red dragon'
	| 'sg oc'
	| 'sg'
	| 'merc'
	| 'strix lc'
	| 'strix oc'
	| 'strix'
	| 'taichi'
	| 'trinity oc'
	| 'trinity'
	| 'tuf oc'
	| 'tuf'
	| 'turbo'
	| 'twin edge oc'
	| 'twin edge'
	| 'twin x2 oc'
	| 'twin x2'
	| 'uprising'
	| 'ventus 2x oc'
	| 'ventus 2x'
	| 'ventus 3x oc'
	| 'ventus 3x'
	| 'vision oc'
	| 'vision'
	| 'xbox series s'
	| 'xbox series x'
	| 'xc gaming'
	| 'xc3 black'
	| 'xc3 ultra'
	| 'xc3'
	| 'xlr8 epic x'
	| 'xlr8 revel'
	| 'xlr8 uprising';

export type Link = {
	brand: Brand;
	cartUrl?: string;
	itemNumber?: string;
	labels?: Labels;
	model: Model;
	openCartAction?: (browser: Browser) => Promise<string>;
	price?: number | null;
	series: Series;
	screenshot?: string;
	url: string;
};

export type LabelQuery = Element[] | Element | string[];

export type Labels = {
	bannedSeller?: LabelQuery;
	captcha?: LabelQuery;
	container?: string;
	inStock?: LabelQuery;
	outOfStock?: LabelQuery;
	maxPrice?: Pricing;
};

export type StatusCodeRangeArray = Array<number | [number, number]>;

export type Store = {
	realTimeInventoryLookup?: (itemNumber: string) => Promise<boolean>;
	/**
	 * The range of status codes which will trigger backoff, i.e. an increasing
	 * delay between requests. Setting an empty array will disable the feature.
	 * If not defined, the default range will be used: 403.
	 */
	backoffStatusCodes?: StatusCodeRangeArray;
	disableAdBlocker?: boolean;
	links: Link[];
	linksBuilder?: {
		builder: (docElement: cheerio.Cheerio, series: Series) => Link[];
		ttl?: number;
		urls: Array<{series: Series; url: string | string[]}>;
	};
	labels: Labels;
	name: string;
	currency: '£' | '$' | '€' | 'R$' | 'kr.' | '';
	setupAction?: (browser: Browser) => void;
	/**
	 * The range of status codes which considered successful, i.e. without error
	 * allowing request parsing to continue. Setting an empty array will cause
	 * all requests to fail. If not defined, the default range will be used:
	 * 0 -> 399 inclusive.
	 */
	successStatusCodes?: StatusCodeRangeArray;
	waitUntil?: LoadEvent;
	minPageSleep?: number;
	maxPageSleep?: number;

	proxyList?: string[];
	currentProxyIndex?: number;
};

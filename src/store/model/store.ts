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
	| 'corsair'
	| 'evga'
	| 'gainward'
	| 'gigabyte'
	| 'inno3d'
	| 'kfa2'
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
	| '3070'
	| '3080'
	| '3090'
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
	| 'aorus'
	| 'challenger'
	| 'dual fan'
	| 'dual oc'
	| 'dual'
	| 'eagle oc'
	| 'eagle'
	| 'founders edition'
	| 'ftw3 ultra'
	| 'ftw3'
	| 'gamerock oc'
	| 'gaming oc'
	| 'gaming pro oc'
	| 'gaming pro'
	| 'gaming x trio'
	| 'gaming x3'
	| 'gaming'
	| 'ichill x2'
	| 'ichill x3'
	| 'ichill x4'
	| 'nitro+'
	| 'nitro oc se'
	| 'nitro oc'
	| 'phantom gaming'
	| 'phantom gs'
	| 'phoenix gs oc'
	| 'phoenix gs'
	| 'phoenix'
	| 'ps5 console'
	| 'ps5 digital'
	| 'red devil'
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
	| 'xc3 black'
	| 'xc3 ultra'
	| 'xc3'
	| 'xlr8 revel'
	| 'xlr8 uprising';

export type Link = {
	brand: Brand;
	itemNumber?: string;
	series: Series;
	model: Model;
	url: string;
	cartUrl?: string;
	openCartAction?: (browser: Browser) => Promise<string>;
	screenshot?: string;
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
};

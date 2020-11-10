import {Browser, LoadEvent} from 'puppeteer';

export type Element = {
	container?: string;
	text: string[];
};

export type Pricing = {
	container: string;
	euroFormat?: boolean;
};

export type Series =
	| 'test:series'
	| '3070'
	| '3080'
	| '3090'
	| 'ryzen5950'
	| 'ryzen5900'
	| 'ryzen5800'
	| 'ryzen5600'
	| 'sonyps5c'
	| 'sonyps5de'
	| 'xboxsx'
	| 'xboxss';

export type Model =
	| 'test:model'
	| '5600x'
	| '5800x'
	| '5900x'
	| '5950x'
	| 'amp extreme holo'
	| 'amp holo'
	| 'aorus master'
	| 'aorus xtreme'
	| 'dual'
	| 'dual fan'
	| 'dual oc'
	| 'founders edition'
	| 'ftw3'
	| 'ftw3 ultra'
	| 'eagle'
	| 'eagle oc'
	| 'gaming'
	| 'gaming oc'
	| 'gaming x3'
	| 'ichill x3'
	| 'ichill x4'
	| 'gamerock oc'
	| 'gaming x trio'
	| 'gaming pro'
	| 'gaming pro oc'
	| 'ps5 console'
	| 'ps5 digital'
	| 'phantom gs'
	| 'phoenix'
	| 'phoenix gs'
	| 'phoenix gs oc'
	| 'rog strix'
	| 'rog strix oc'
	| 'sg oc'
	| 'tuf'
	| 'tuf oc'
	| 'turbo'
	| 'ventus 2s oc'
	| 'ventus 3x'
	| 'ventus 3x oc'
	| 'trinity'
	| 'trinity oc'
	| 'twin edge'
	| 'twin edge oc'
	| 'twin x2 oc'
	| 'vision'
	| 'vision oc'
	| 'xc3'
	| 'xc3 ultra'
	| 'xboxss'
	| 'xboxsx'
	| 'xlr8'
	| 'xlr8 rgb';

export type Link = {
	brand:
		| 'test:brand'
		| 'amd'
		| 'asus'
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
		| 'sony'
		| 'zotac';
	itemNumber?: string;
	series: Series;
	model: string;
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

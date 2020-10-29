import {Browser, LoadEvent} from 'puppeteer';

export type Element = {
	container?: string;
	text: string[];
};

export type Pricing = {
	container: string;
	euroFormat?: boolean;
};

export type Series = 'test:series' | '3070' | '3080' | '3090';

export type Link = {
	brand: 'test:brand' | 'asus' | 'evga' | 'gainward' | 'gigabyte' | 'inno3d' | 'kfa2' | 'msi' | 'nvidia' | 'palit' | 'pny' | 'zotac';
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

export type StatusCodeRangeArray = Array<(number | [number, number])>;

export type Store = {
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

import {Browser, LoadEvent} from 'puppeteer';

export type Element = {
	container?: string;
	text: string[];
};

export type Link = {
	brand: 'test:brand' | 'asus' | 'evga' | 'gigabyte' | 'inno3d' | 'kfa2' | 'palit' | 'pny' | 'msi' | 'nvidia' | 'zotac';
	series: 'test:series' | '3070' | '3080' | '3090';
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
};

export type Store = {
	disableAdBlocker?: boolean;
	links: Link[];
	labels: Labels;
	name: string;
	setupAction?: (browser: Browser) => void;
	waitUntil?: LoadEvent;
};

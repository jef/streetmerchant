import {Browser, LoadEvent} from 'puppeteer';

export type Element = {
	containers: string[];
	text: string[];
};

export type Link = {
	brand: 'test:brand' | 'asus' | 'evga' | 'gigabyte' | 'pny' | 'msi' | 'nvidia' | 'zotac';
	series: 'test:series' | '3070' | '3080' | '3090';
	model: string;
	url: string;
	cartUrl?: string;
	openCartAction?: (browser: Browser) => Promise<string>;
	screenshot?: string;
};

export type Labels = {
	captcha?: Element;
	inStock: Element;
};

export type Store = {
	links: Link[];
	labels: Labels;
	name: string;
	setupAction?: (browser: Browser) => void;
	waitUntil?: LoadEvent;
};

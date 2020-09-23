import {Browser, LoadEvent} from 'puppeteer';

export type Element = {
	container: string;
	text: string[];
};

export type Link = {
	series: string;
	brand: string;
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

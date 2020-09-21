import {Browser} from 'puppeteer';

export interface Link {
	series: string;
	brand: string;
	model: string;
	url: string;
	cartUrl?: string;
	openCartAction?: (browser: Browser) => void;
	screenshot?: string;
}

export interface Labels {
	outOfStock: string[];
	captcha?: string[];
}

export interface Store {
	links: Link[];
	labels: Labels;
	name: string;
}

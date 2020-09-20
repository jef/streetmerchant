import {Browser} from 'puppeteer';

interface Link {
	cartUrl?: string;
	brand: string;
	model: string;
	url: string;
	openCartAction?: (browser: Browser) => void;
	oosLabels: string[];
	captchaLabels?: string[];
}

export interface Store {
	links: Link[];
	name: string;
}

import {Page} from 'puppeteer';

interface Link {
	cartUrl?: string;
	brand: string;
	model: string;
	url: string;
	openCartAction?: (page: Page) => void;
	oosLabels: string[];
	captchaLabels?: string[];
}

export interface Store {
	links: Link[];
	name: string;
}

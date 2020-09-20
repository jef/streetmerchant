import {Page} from 'puppeteer';

interface Link {
	cartUrl?: string;
	brand: string;
	model: string;
	url: string;
	openCartAction?: OpenCartAction;
	oosLabels: string[];
	captchaLabels?: string[];
}

interface OpenCartAction {
	(page: Page): void;
}

export interface Store {
	links: Link[];
	name: string;
}

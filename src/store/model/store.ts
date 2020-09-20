import {Browser} from 'puppeteer';

interface Link {
	series: string;
	brand: string;
	model: string;
	url: string;
	cartUrl?: string;
	openCartAction?: (browser: Browser) => void;
}

export interface Labels {
	oosList: string[];
	captchaList?: string[];
}

export interface Store {
	links: Link[];
	labels: Labels;
	name: string;
}

import {Browser} from 'puppeteer';

export interface Link {
	brand: 'test:brand' | 'asus' | 'evga' | 'gigabyte' | 'pny' | 'msi' | 'nvidia' | 'zotac';
	series: 'test:series' | '3070' | '3080' | '3090';
	model: string;
	url: string;
	cartUrl?: string;
	openCartAction?: (browser: Browser) => void;
	screenshot?: string;
}

export interface Labels {
	outOfStock: string[];
	captcha?: string[];
	bannedSeller?: string[];
}

export interface Store {
	links: Link[];
	labels: Labels;
	name: string;
	setupAction?: (browser: Browser) => void;
}

export interface Link {
	series: string;
	cartUrl?: string;
	brand: string;
	model: string;
	url: string;
	oosLabels: string[];
	captchaLabels?: string[];
}

export interface Store {
	links: Link[];
	name: string;
}

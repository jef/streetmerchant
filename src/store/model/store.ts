interface Link {
	brand: string;
	model: string;
	url: string;
	oosLabels: string[];
	captchaLabels?: string[];
}

export interface Store {
	cartUrl?: string;
	links: Link[];
	name: string;
}

interface Link {
	cartUrl?: string;
	brand: string;
	model: string;
	url: string;
	oosLabels: string[];
	captchaLabels?: string[];
	elemSelector?: string;
}

export interface Store {
	links: Link[];
	name: string;
}

export interface Link {
	series: string;
	brand: string;
	model: string;
	url: string;
	cartUrl?: string;
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

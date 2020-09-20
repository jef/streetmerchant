export interface Link {
	series: string;
	brand: string;
	model: string;
	url: string;
	cartApi?: string;
}

export interface Labels {
	oosList: string[];
	captchaList?: string[];
}

export interface Elements {
	addToCart: string;
}

export interface Store {
	links: Link[];
	labels: Labels;
	elements?: Elements;
	cartUrl?: string;
	name: string;
}

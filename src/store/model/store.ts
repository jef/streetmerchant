export interface Link {
	brand: string;
	cartUrl?: string;
	model: string;
	series: string;
	url: string;
}

export interface Labels {
	captcha?: string[];
	inStock: string[];
}

export interface Store {
	links: Link[];
	labels: Labels;
	name: string;
}

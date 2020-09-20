export interface Link {
	brand: string;
	cartUrl?: string;
	model: string;
	series: string;
	url: string;
}

export interface Labels {
	outOfStock: string[];
	captcha?: string[];
}

export interface Store {
	links: Link[];
	labels: Labels;
	name: string;
}

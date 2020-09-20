export interface Element {
	container: string;
	labels: string[];
}

export interface Link {
	brand: string;
	cartUrl?: string;
	model: string;
	series: string;
	url: string;
}

export interface Labels {
	captcha?: Element;
	inStock: Element;
}

export interface Store {
	links: Link[];
	labels: Labels;
	name: string;
}

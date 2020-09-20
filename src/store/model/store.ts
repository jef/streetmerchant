interface Link {
	brand: string;
	model: string;
	url: string;
	cartApi?: string;
}

interface Labels {
	oosList: string[];
	captchaList?: string[];
}

interface Elements {
	addToCart: string;
}

export interface Store {
	links: Link[];
	labels: Labels;
	elements?: Elements;
	cartUrl?: string;
	name: string;
}

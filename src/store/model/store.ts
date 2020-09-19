interface Link {
	brand: string;
	model: string;
	url: string;
	matchLabels: string[];
}

export interface Store {
	cartUrl: string;
	links: Link[];
	name: string;
}

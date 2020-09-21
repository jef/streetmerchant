export interface Link {
	brand: 'TEST' | 'asus' | 'evga' | 'gigabyte' | 'pny' | 'msi' | 'nvidia' | 'zotac';
	series: 'debug' | '3070' | '3080' | '3090';
	model: string;
	url: string;
	cartUrl?: string;
	screenshot?: string;
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

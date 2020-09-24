export interface Card {
	brand: string;
	model: string;
}

export function parseCard(name: string): Card | null {
	name = name.replace(/\bgraphics card\b/gi, '').trim();
	name = name.replace(/\b\w+ fan\b/gi, '').trim();

	let model = name.split(' ');
	const brand = model.shift();

	if (!brand) {
		return null;
	}

	/* eslint-disable @typescript-eslint/prefer-regexp-exec */
	model = model.filter(word => {
		return !word.match(/^geforce$/i) &&
			!word.match(/^rtx$/i) &&
			!word.match(/^\d+$/i) &&
			!word.match(/^\d+gb$/i) &&
			!word.match(/^g?ddr(?:\d+x?)?$/i) &&
			!word.match(/^amp[ae]re$/i) &&
			!word.match(/^graphics$/i) &&
			!word.match(/^card$/i);
	});
	/* eslint-enable @typescript-eslint/prefer-regexp-exec */

	if (model.length === 0) {
		return null;
	}

	return {
		brand: brand.toLowerCase(),
		model: model.join(' ').toLowerCase().replace(/ gaming\b/g, '').trim()
	};
}

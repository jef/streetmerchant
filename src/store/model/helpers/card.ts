export interface Card {
	brand: string;
	model: string;
}

export function parseCard(name: string): Card | null {
	name = name.replace(/[^\w ]+/g, '').trim();
	name = name.replace(/\bgraphics card\b/gi, '').trim();
	name = name.replace(/\b\w+ fan\b/gi, '').trim();
	name = name.replace(/\s{2,}/g, ' ');

	let model = name.split(' ');
	const brand = model.shift();

	if (!brand) {
		return null;
	}

	// Some vendors have oc at the beginning of the product name,
	// store whether the card contains the term "oc" and remove
	// it during filtering, then add it to the end of the name.
	let isOC = false;

	/* eslint-disable @typescript-eslint/prefer-regexp-exec */
	model = model.filter(word => {
		if (word.toLowerCase() === 'oc') {
			isOC = true;
			return false;
		}

		return !word.match(/^(nvidia|geforce|rtx|amp[ae]re|graphics|card|gpu|pci-?e(xpress)?|ray-?tracing|ray|tracing|core|boost)$/i) &&
			!word.match(/^(\d+(?:gb?|mhz)?|gb|mhz|g?ddr(\d+x?)?)$/i);
	});
	/* eslint-enable @typescript-eslint/prefer-regexp-exec */

	if (isOC) {
		model.push('OC');
	}

	if (model.length === 0) {
		return null;
	}

	return {
		brand: brand.toLowerCase(),
		model: model.join(' ').toLowerCase().replace(/ gaming\b/g, '').trim()
	};
}

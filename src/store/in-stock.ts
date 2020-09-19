/**
 * Checks if DOM has in-stock related text.
 *
 * @param domText Complete DOM of website.
 * @param matchLabels In-stock labels.
 */
export function isInStock(domText: string, matchLabels: string[]) {
	const domTextLowerCase = domText.toLowerCase();
	return matchLabels.some(label => domTextLowerCase.includes(label));
}

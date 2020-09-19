/**
 * Checks if DOM has any out-of-stock related text.
 *
 * @param domText Complete DOM of website.
 * @param oosLabels Out-of-stock labels.
 */
export function includesLabels(domText: string, oosLabels: string[]): boolean {
	const domTextLowerCase = domText.toLowerCase();
	return oosLabels.some(label => domTextLowerCase.includes(label));
}

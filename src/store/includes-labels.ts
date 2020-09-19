/**
 * Checks if DOM has any related text to the given labels.
 *
 * @param domText Complete DOM of website.
 * @param labels Labels to check for.
 */
export function includesLabels(domText: string, labels: string[]) {
	const domTextLowerCase = domText.toLowerCase();
	return labels.some(label => domTextLowerCase.includes(label));
}

/**
 * Checks if DOM has any related text.
 *
 * @param domText Complete DOM of website.
 * @param searchLabels Search labels for a match.
 */
export function includesLabels(domText: string, searchLabels: string[]): boolean {
	const domTextLowerCase = domText.toLowerCase();
	for (const label of searchLabels) {
		if (domTextLowerCase.includes(label.toLowerCase())) {
			return true;
		}
	}

	return false;
}

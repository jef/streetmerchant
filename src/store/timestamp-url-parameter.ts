/**
 * Generates unique URL param to prevent cached responses (similar to jQuery that Nvidia uses)
 *
 * @return string in format &=1111111111111 (time since epoch in ms)
 */
export function timestampUrlParameter(): string {
	return `&_=${Date.now()}`;
}

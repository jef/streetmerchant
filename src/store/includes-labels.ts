import {Element, LabelQuery, Pricing} from './model';
import {Page} from 'puppeteer';
import {logger} from '../logger';

export type Selector = {
	requireVisible: boolean;
	selector: string;
	type: 'innerHTML' | 'outerHTML' | 'textContent';
};

function isElementArray(query: LabelQuery): query is Element[] {
	return Array.isArray(query) && query.length > 0 && typeof query[0] === 'object';
}

function getQueryAsElementArray(query: LabelQuery, defaultContainer: string): Array<Required<Element>> {
	if (isElementArray(query)) {
		return query.map(x => ({
			container: x.container ?? defaultContainer,
			text: x.text
		}));
	}

	if (Array.isArray(query)) {
		return [{
			container: defaultContainer,
			text: query
		}];
	}

	return [{
		container: query.container ?? defaultContainer,
		text: query.text
	}];
}

export async function pageIncludesLabels(page: Page, query: LabelQuery, options: Selector) {
	const elementQueries = getQueryAsElementArray(query, options.selector);

	const resolved = await Promise.all(elementQueries.map(async query => {
		const selector = {...options, selector: query.container};
		const contents = await extractPageContents(page, selector) ?? '';

		if (!contents) {
			return false;
		}

		logger.debug(contents);

		return includesLabels(contents, query.text);
	}));

	return resolved.includes(true);
}

export async function extractPageContents(page: Page, selector: Selector): Promise<string | null> {
	return page.evaluate((options: Selector) => {
		// eslint-disable-next-line no-undef
		const element: globalThis.HTMLElement | null = document.querySelector(options.selector);

		if (!element) {
			return null;
		}

		if (options.requireVisible && !(element.offsetWidth > 0 && element.offsetHeight > 0)) {
			return null;
		}

		switch (options.type) {
			case 'innerHTML':
				return element.innerHTML;
			case 'outerHTML':
				return element.outerHTML;
			case 'textContent':
				return element.textContent;
			default:
				return 'Error: selector.type is unknown';
		}
	}, selector);
}

/**
 * Checks if DOM has any related text.
 *
 * @param domText Complete DOM of website.
 * @param searchLabels Search labels for a match.
 */
export function includesLabels(domText: string, searchLabels: string[]): boolean {
	const domTextLowerCase = domText.toLowerCase();
	return searchLabels.some(label => domTextLowerCase.includes(label.toLowerCase()));
}

export async function cardPrice(page: Page, query: Pricing, max: number, options: Selector) {
	if (!max) {
		return null;
	}

	const selector = {...options, selector: query.container};
	const cardPrice = await extractPageContents(page, selector);

	if (cardPrice) {
		const priceSeperator = query.euroFormat ? /\./g : /,/g;
		const cardpriceNumber = Number.parseFloat(cardPrice.replace(priceSeperator, '').match(/\d+/g)!.join('.'));

		logger.debug(`Raw card price: ${cardPrice} | Limit: ${max}`);
		return cardpriceNumber > max ? cardpriceNumber : null;
	}

	return null;
}

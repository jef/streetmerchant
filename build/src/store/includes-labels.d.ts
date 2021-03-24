import { LabelQuery, Pricing } from './model';
import { Page } from 'puppeteer';
export declare type Selector = {
    requireVisible: boolean;
    selector: string;
    type: 'innerHTML' | 'outerHTML' | 'textContent';
};
export declare function pageIncludesLabels(page: Page, query: LabelQuery, options: Selector): Promise<boolean>;
export declare function extractPageContents(page: Page, selector: Selector): Promise<string | null>;
/**
 * Checks if DOM has any related text.
 *
 * @param domText Complete DOM of website.
 * @param searchLabels Search labels for a match.
 */
export declare function includesLabels(domText: string, searchLabels: string[]): boolean;
export declare function getPrice(page: Page, query: Pricing, options: Selector): Promise<number | null>;

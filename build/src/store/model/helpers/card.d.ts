/// <reference types="cheerio" />
import { Link, Model, Series } from '../store';
export interface Card {
    brand: string;
    model: Model;
}
interface LinksBuilderOptions {
    productsSelector: string;
    sitePrefix: string;
    titleAttribute?: string;
    titleSelector: string;
    urlSelector?: string;
}
export declare function getProductLinksBuilder(options: LinksBuilderOptions): (docElement: cheerio.Cheerio, series: Series) => Link[];
export declare function parseCard(name: string): Card | null;
export {};

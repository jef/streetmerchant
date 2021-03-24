import { Link } from './model';
/**
 * Returns true if the series should be checked for stock
 *
 * @param series The series of the GPU
 */
export declare function filterSeries(series: Link['series']): boolean;
/**
 * Returns true if the link should be checked for stock
 *
 * @param link The store link of the GPU
 */
export declare function filterStoreLink(link: Link): boolean;

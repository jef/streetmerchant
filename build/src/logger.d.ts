import { Link, Store } from './store/model';
import winston from 'winston';
export declare const logger: winston.Logger;
export declare const Print: {
    backoff(link: Link, store: Store, parameters: {
        delay: number;
        statusCode: number;
    }, color?: boolean | undefined): string;
    badStatusCode(link: Link, store: Store, statusCode: number, color?: boolean | undefined): string;
    bannedSeller(link: Link, store: Store, color?: boolean | undefined): string;
    captcha(link: Link, store: Store, color?: boolean | undefined): string;
    cloudflare(link: Link, store: Store, color?: boolean | undefined): string;
    inStock(link: Link, store: Store, color?: boolean | undefined, sms?: boolean | undefined): string;
    inStockWaiting(link: Link, store: Store, color?: boolean | undefined): string;
    maxPrice(link: Link, store: Store, maxPrice: number, color?: boolean | undefined): string;
    message(message: string, topic: string, store: Store, color?: boolean | undefined): string;
    noResponse(link: Link, store: Store, color?: boolean | undefined): string;
    outOfStock(link: Link, store: Store, color?: boolean | undefined): string;
    productInStock(link: Link): string;
    rateLimit(link: Link, store: Store, color?: boolean | undefined): string;
    recursionLimit(link: Link, store: Store, color?: boolean | undefined): string;
};

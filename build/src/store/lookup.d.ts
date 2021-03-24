import { Browser } from 'puppeteer';
import { Store } from './model';
export declare function tryLookupAndLoop(browser: Browser, store: Store): Promise<void>;

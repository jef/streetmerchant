import { Page } from 'puppeteer';
import { PuppeteerExtraPluginAdblocker } from 'puppeteer-extra-plugin-adblocker';
export declare const adBlocker: PuppeteerExtraPluginAdblocker;
export declare function enableBlockerInPage(page: Page): Promise<void>;
export declare function disableBlockerInPage(page: Page): Promise<void>;

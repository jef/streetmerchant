"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryLookupAndLoop = void 0;
const model_1 = require("./model");
const logger_1 = require("../logger");
const includes_labels_1 = require("./includes-labels");
const util_1 = require("../util");
const adblocker_1 = require("../adblocker");
const config_1 = require("../config");
const fetch_links_1 = require("./fetch-links");
const filter_1 = require("./filter");
const open_1 = __importDefault(require("open"));
const backoff_1 = require("./model/helpers/backoff");
const notification_1 = require("../notification");
const puppeteer_page_proxy_1 = __importDefault(require("@doridian/puppeteer-page-proxy"));
const inStock = {};
const linkBuilderLastRunTimes = {};
function nextProxy(store) {
    if (!store.proxyList) {
        return;
    }
    if (store.currentProxyIndex === undefined) {
        store.currentProxyIndex = 0;
    }
    else {
        store.currentProxyIndex++;
    }
    if (store.currentProxyIndex >= store.proxyList.length) {
        store.currentProxyIndex = 0;
    }
    logger_1.logger.debug(`ℹ [${store.name}] Next proxy index: ${store.currentProxyIndex} / Count: ${store.proxyList.length} (${store.proxyList[store.currentProxyIndex]})`);
    return store.proxyList[store.currentProxyIndex];
}
async function handleLowBandwidth(request) {
    if (!config_1.config.browser.lowBandwidth) {
        return false;
    }
    const typ = request.resourceType();
    if (typ === 'font' || typ === 'image') {
        try {
            await request.abort();
        }
        catch (_a) {
            logger_1.logger.debug('Failed to abort request.');
        }
        return true;
    }
    return false;
}
async function handleProxy(request, proxy) {
    if (!proxy) {
        return false;
    }
    try {
        await puppeteer_page_proxy_1.default(request, proxy);
    }
    catch (error) {
        logger_1.logger.error('handleProxy', error);
        try {
            await request.abort();
        }
        catch (_a) {
            logger_1.logger.debug('Failed to abort request.');
        }
    }
    return true;
}
async function handleAdBlock(request, adBlockRequestHandler) {
    if (!adBlockRequestHandler) {
        return false;
    }
    return new Promise(resolve => {
        const continueFunc = async () => {
            resolve(false);
        };
        const abortFunc = async () => {
            try {
                await request.abort();
            }
            catch (_a) {
                logger_1.logger.debug('Failed to abort request.');
            }
            resolve(true);
        };
        const respondFunc = async (response) => {
            try {
                await request.respond(response);
            }
            catch (_a) {
                logger_1.logger.debug('Failed to abort request.');
            }
            resolve(true);
        };
        const requestProxy = new Proxy(request, {
            get(target, prop, receiver) {
                if (prop === 'continue') {
                    return continueFunc;
                }
                if (prop === 'abort') {
                    return abortFunc;
                }
                if (prop === 'respond') {
                    return respondFunc;
                }
                return Reflect.get(target, prop, receiver);
            },
        });
        adBlockRequestHandler(requestProxy);
    });
}
/**
 * Responsible for looking up information about a each product within
 * a `Store`. It's important that we ignore `no-await-in-loop` here
 * because we don't want to get rate limited within the same store.
 *
 * @param browser Puppeteer browser.
 * @param store Vendor of graphics cards.
 */
async function lookup(browser, store) {
    var _a, _b;
    if (!model_1.getStores().has(store.name)) {
        return;
    }
    if (store.linksBuilder) {
        const lastRunTime = (_a = linkBuilderLastRunTimes[store.name]) !== null && _a !== void 0 ? _a : -1;
        const ttl = (_b = store.linksBuilder.ttl) !== null && _b !== void 0 ? _b : Number.MAX_SAFE_INTEGER;
        if (lastRunTime === -1 || Date.now() - lastRunTime > ttl) {
            logger_1.logger.info(`[${store.name}] Running linksBuilder...`);
            try {
                await fetch_links_1.fetchLinks(store, browser);
                linkBuilderLastRunTimes[store.name] = Date.now();
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        }
    }
    /* eslint-disable no-await-in-loop */
    for (const link of store.links) {
        if (!filter_1.filterStoreLink(link)) {
            continue;
        }
        if (config_1.config.page.inStockWaitTime && inStock[link.url]) {
            logger_1.logger.info(logger_1.Print.inStockWaiting(link, store, true));
            continue;
        }
        const proxy = nextProxy(store);
        const useAdBlock = !config_1.config.browser.lowBandwidth && !store.disableAdBlocker;
        const customContext = config_1.config.browser.isIncognito;
        const context = customContext
            ? await browser.createIncognitoBrowserContext()
            : browser.defaultBrowserContext();
        const page = await context.newPage();
        await page.setRequestInterception(true);
        page.setDefaultNavigationTimeout(config_1.config.page.timeout);
        await page.setUserAgent(await util_1.getRandomUserAgent());
        let adBlockRequestHandler;
        let pageProxy;
        if (useAdBlock) {
            const onProxyFunc = (event, handler) => {
                if (event !== 'request') {
                    page.on(event, handler);
                    return;
                }
                adBlockRequestHandler = handler;
            };
            pageProxy = new Proxy(page, {
                get(target, prop, receiver) {
                    if (prop === 'on') {
                        return onProxyFunc;
                    }
                    // Give dummy setRequestInterception to avoid AdBlock from messing with it
                    if (prop === 'setRequestInterception') {
                        return util_1.noop;
                    }
                    return Reflect.get(target, prop, receiver);
                },
            });
            await adblocker_1.enableBlockerInPage(pageProxy);
        }
        await page.setRequestInterception(true);
        page.on('request', async (request) => {
            if (await handleLowBandwidth(request)) {
                return;
            }
            if (await handleAdBlock(request, adBlockRequestHandler)) {
                return;
            }
            if (await handleProxy(request, proxy)) {
                return;
            }
            try {
                await request.continue();
            }
            catch (_a) {
                logger_1.logger.debug('Failed to continue request.');
            }
        });
        if (store.captchaDeterrent) {
            await runCaptchaDeterrent(browser, store, page);
        }
        let statusCode = 0;
        try {
            statusCode = await lookupCard(browser, store, page, link);
        }
        catch (error) {
            if (store.currentProxyIndex !== undefined && store.proxyList) {
                const proxy = `${store.currentProxyIndex + 1}/${store.proxyList.length}`;
                logger_1.logger.error(`✖ [${proxy}] [${store.name}] ${link.brand} ${link.series} ${link.model} - ${error.message}`);
            }
            else {
                logger_1.logger.error(`✖ [${store.name}] ${link.brand} ${link.series} ${link.model} - ${error.message}`);
            }
            const client = await page.target().createCDPSession();
            await client.send('Network.clearBrowserCookies');
        }
        if (pageProxy) {
            await adblocker_1.disableBlockerInPage(pageProxy);
        }
        // Must apply backoff before closing the page, e.g. if CloudFlare is
        // used to detect bot traffic, it introduces a 5 second page delay
        // before redirecting to the next page
        await backoff_1.processBackoffDelay(store, link, statusCode);
        await util_1.closePage(page);
        if (customContext) {
            await context.close();
        }
    }
    /* eslint-enable no-await-in-loop */
}
async function lookupCard(browser, store, page, link) {
    var _a;
    const givenWaitFor = store.waitUntil ? store.waitUntil : 'networkidle0';
    const response = await page.goto(link.url, {
        waitUntil: givenWaitFor,
    });
    const successStatusCodes = (_a = store.successStatusCodes) !== null && _a !== void 0 ? _a : [[0, 399]];
    const statusCode = await handleResponse(browser, store, page, link, response);
    if (!util_1.isStatusCodeInRange(statusCode, successStatusCodes)) {
        return statusCode;
    }
    if (await lookupCardInStock(store, page, link)) {
        const givenUrl = link.cartUrl && config_1.config.store.autoAddToCart ? link.cartUrl : link.url;
        logger_1.logger.info(`${logger_1.Print.inStock(link, store, true)}\n${givenUrl}`);
        if (config_1.config.browser.open) {
            await (link.openCartAction === undefined
                ? open_1.default(givenUrl)
                : link.openCartAction(browser));
        }
        notification_1.sendNotification(link, store);
        if (config_1.config.page.inStockWaitTime) {
            inStock[link.url] = true;
            setTimeout(() => {
                inStock[link.url] = false;
            }, 1000 * config_1.config.page.inStockWaitTime);
        }
        if (config_1.config.page.screenshot) {
            logger_1.logger.debug('ℹ saving screenshot');
            link.screenshot = `success-${Date.now()}.png`;
            await page.screenshot({ path: link.screenshot });
        }
    }
    return statusCode;
}
// eslint-disable-next-line max-params
async function handleResponse(browser, store, page, link, response, recursionDepth = 0) {
    var _a, _b;
    if (!response) {
        logger_1.logger.debug(logger_1.Print.noResponse(link, store, true));
    }
    const successStatusCodes = (_a = store.successStatusCodes) !== null && _a !== void 0 ? _a : [[0, 399]];
    let statusCode = (_b = response === null || response === void 0 ? void 0 : response.status()) !== null && _b !== void 0 ? _b : 0;
    if (!util_1.isStatusCodeInRange(statusCode, successStatusCodes)) {
        if (statusCode === 429) {
            logger_1.logger.warn(logger_1.Print.rateLimit(link, store, true));
        }
        else if (statusCode === 503) {
            if (await checkIsCloudflare(store, page, link)) {
                if (recursionDepth > 4) {
                    logger_1.logger.warn(logger_1.Print.recursionLimit(link, store, true));
                }
                else {
                    const response = await page.waitForNavigation({
                        waitUntil: 'networkidle0',
                    });
                    recursionDepth++;
                    statusCode = await handleResponse(browser, store, page, link, response, recursionDepth);
                }
            }
            else {
                logger_1.logger.warn(logger_1.Print.badStatusCode(link, store, statusCode, true));
            }
        }
        else {
            logger_1.logger.warn(logger_1.Print.badStatusCode(link, store, statusCode, true));
        }
    }
    return statusCode;
}
async function checkIsCloudflare(store, page, link) {
    const baseOptions = {
        requireVisible: true,
        selector: 'body',
        type: 'textContent',
    };
    const cloudflareLabel = {
        container: 'div[class="attribution"] a[rel="noopener noreferrer"]',
        text: ['Cloudflare'],
    };
    if (await includes_labels_1.pageIncludesLabels(page, cloudflareLabel, baseOptions)) {
        logger_1.logger.warn(logger_1.Print.cloudflare(link, store, true));
        return true;
    }
    return false;
}
async function lookupCardInStock(store, page, link) {
    var _a, _b;
    const baseOptions = {
        requireVisible: false,
        selector: (_a = store.labels.container) !== null && _a !== void 0 ? _a : 'body',
        type: 'textContent',
    };
    if (store.labels.captcha) {
        if (await includes_labels_1.pageIncludesLabels(page, store.labels.captcha, baseOptions)) {
            logger_1.logger.warn(logger_1.Print.captcha(link, store, true));
            await util_1.delay(util_1.getSleepTime(store));
            return false;
        }
    }
    if (store.labels.bannedSeller) {
        if (await includes_labels_1.pageIncludesLabels(page, store.labels.bannedSeller, baseOptions)) {
            logger_1.logger.warn(logger_1.Print.bannedSeller(link, store, true));
            return false;
        }
    }
    if (store.labels.outOfStock) {
        if (await includes_labels_1.pageIncludesLabels(page, store.labels.outOfStock, baseOptions)) {
            logger_1.logger.info(logger_1.Print.outOfStock(link, store, true));
            return false;
        }
    }
    if (store.labels.maxPrice) {
        const maxPrice = config_1.config.store.maxPrice.series[link.series];
        link.price = await includes_labels_1.getPrice(page, store.labels.maxPrice, baseOptions);
        if (link.price && link.price > maxPrice && maxPrice > 0) {
            logger_1.logger.info(logger_1.Print.maxPrice(link, store, maxPrice, true));
            return false;
        }
    }
    if ((_b = link.labels) === null || _b === void 0 ? void 0 : _b.inStock) {
        const options = {
            ...baseOptions,
            requireVisible: true,
            type: 'outerHTML',
        };
        if (!(await includes_labels_1.pageIncludesLabels(page, link.labels.inStock, options))) {
            logger_1.logger.info(logger_1.Print.outOfStock(link, store, true));
            return false;
        }
    }
    if (store.labels.inStock) {
        const options = {
            ...baseOptions,
            requireVisible: true,
            type: 'outerHTML',
        };
        if (!(await includes_labels_1.pageIncludesLabels(page, store.labels.inStock, options))) {
            logger_1.logger.info(logger_1.Print.outOfStock(link, store, true));
            return false;
        }
    }
    return true;
}
async function runCaptchaDeterrent(browser, store, page) {
    var _a, _b, _c, _d;
    const successStatusCodes = (_a = store.successStatusCodes) !== null && _a !== void 0 ? _a : [[0, 399]];
    let statusCode = 0;
    let deterrentLinks = [];
    logger_1.logger.debug(`[${store.name}] Navigating to random anti-captcha page...`);
    if ((_c = (_b = store.captchaDeterrent) === null || _b === void 0 ? void 0 : _b.hardLinks) === null || _c === void 0 ? void 0 : _c.length) {
        deterrentLinks = deterrentLinks.concat(store.captchaDeterrent.hardLinks);
    }
    if ((_d = store.captchaDeterrent) === null || _d === void 0 ? void 0 : _d.searchUrl) {
        if (store.captchaDeterrent.searchTerms) {
            store.captchaDeterrent.searchTerms.forEach(element => {
                var _a;
                return deterrentLinks.push(((_a = store.captchaDeterrent) === null || _a === void 0 ? void 0 : _a.searchUrl)
                    ? store.captchaDeterrent.searchUrl.replace('%%s', element)
                    : '');
            });
        }
    }
    if (deterrentLinks.length > 0) {
        const link = {
            brand: 'captcha-deterrent',
            model: 'captcha-deterrent',
            series: 'captcha-deterrent',
            url: deterrentLinks[Math.floor(Math.random() * deterrentLinks.length)],
        };
        logger_1.logger.debug(`Selected captcha-deterrent link: ${link.url}`);
        try {
            const givenWaitFor = store.waitUntil ? store.waitUntil : 'networkidle0';
            const response = await page.goto(link.url, {
                waitUntil: givenWaitFor,
            });
            statusCode = await handleResponse(browser, store, page, link, response);
            setTimeout(() => {
                // Do nothing
            }, 3000);
        }
        catch (error) {
            logger_1.logger.error(error);
        }
        if (!util_1.isStatusCodeInRange(statusCode, successStatusCodes)) {
            logger_1.logger.warn(`✖ [${store.name}] - Failed to navigate to anti-captcha target: ${link.url}`);
        }
    }
}
async function tryLookupAndLoop(browser, store) {
    if (!browser.isConnected()) {
        logger_1.logger.debug(`[${store.name}] Ending this loop as browser is disposed...`);
        return;
    }
    logger_1.logger.debug(`[${store.name}] Starting lookup...`);
    try {
        await lookup(browser, store);
    }
    catch (error) {
        logger_1.logger.error(error);
    }
    const sleepTime = util_1.getSleepTime(store);
    logger_1.logger.debug(`[${store.name}] Lookup done, next one in ${sleepTime} ms`);
    setTimeout(tryLookupAndLoop, sleepTime, browser, store);
}
exports.tryLookupAndLoop = tryLookupAndLoop;
//# sourceMappingURL=lookup.js.map
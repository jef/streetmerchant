"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomUserAgent = exports.closePage = exports.usingPage = exports.usingResponse = exports.isStatusCodeInRange = exports.noop = exports.delay = exports.getSleepTime = void 0;
const config_1 = require("./config");
const adblocker_1 = require("./adblocker");
const logger_1 = require("./logger");
const top_user_agents_1 = __importDefault(require("top-user-agents"));
function getSleepTime(store) {
    const minSleep = store.minPageSleep;
    return minSleep + Math.random() * (store.maxPageSleep - minSleep);
}
exports.getSleepTime = getSleepTime;
async function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
exports.delay = delay;
function noop() {
    // Do nothing
}
exports.noop = noop;
function isStatusCodeInRange(statusCode, range) {
    for (const value of range) {
        let min;
        let max;
        if (typeof value === 'number') {
            min = value;
            max = value;
        }
        else {
            [min, max] = value;
        }
        if (min <= statusCode && statusCode <= max) {
            return true;
        }
    }
    return false;
}
exports.isStatusCodeInRange = isStatusCodeInRange;
async function usingResponse(browser, url, cb) {
    return usingPage(browser, async (page, browser) => {
        const response = await page.goto(url, { waitUntil: 'domcontentloaded' });
        return cb(response, page, browser);
    });
}
exports.usingResponse = usingResponse;
async function usingPage(browser, cb) {
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(config_1.config.page.timeout);
    await page.setUserAgent(await getRandomUserAgent());
    try {
        return await cb(page, browser);
    }
    finally {
        try {
            await closePage(page);
        }
        catch (error) {
            logger_1.logger.error('usingPage', error);
        }
    }
}
exports.usingPage = usingPage;
async function closePage(page) {
    if (!config_1.config.browser.lowBandwidth) {
        await adblocker_1.disableBlockerInPage(page);
    }
    await page.close();
}
exports.closePage = closePage;
async function getRandomUserAgent() {
    const deprecatedUserAgent = (process.env.USER_AGENT
        ? process.env.USER_AGENT.includes('\n')
            ? process.env.USER_AGENT.split('\n')
            : process.env.USER_AGENT.split(',')
        : []).map(s => s.trim());
    if (deprecatedUserAgent.length > 0) {
        return deprecatedUserAgent[Math.floor(Math.random() * deprecatedUserAgent.length)];
    }
    const userAgent = top_user_agents_1.default[Math.floor(Math.random() * top_user_agents_1.default.length)];
    logger_1.logger.debug('user agent', { userAgent });
    return userAgent;
}
exports.getRandomUserAgent = getRandomUserAgent;
//# sourceMappingURL=util.js.map
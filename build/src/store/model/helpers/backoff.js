"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processBackoffDelay = void 0;
const logger_1 = require("../../../logger");
const util_1 = require("../../../util");
const config_1 = require("../../../config");
const stores = {};
async function processBackoffDelay(store, link, statusCode) {
    /**
     * We treat statusCode 0 as successful as some of the puppeteer plugins
     * cause side-effects resulting in an empty response object even though
     * the page renders fine and its content is accessible.
     */
    let { backoffStatusCodes } = store;
    if (!backoffStatusCodes) {
        backoffStatusCodes = [403];
    }
    const isBackoff = util_1.isStatusCodeInRange(statusCode, backoffStatusCodes);
    let backoff = stores[store.name];
    if (!backoff) {
        backoff = { count: 0, time: config_1.config.browser.minBackoff };
        stores[store.name] = backoff;
    }
    if (!isBackoff) {
        if (backoff.count > 0) {
            backoff.count--;
            backoff.time = Math.max(backoff.time / 2, config_1.config.browser.minBackoff);
        }
        return -1;
    }
    const backoffTime = backoff.time;
    logger_1.logger.debug(logger_1.Print.backoff(link, store, { delay: backoffTime, statusCode }, true));
    await util_1.delay(backoff.time);
    backoff.count++;
    backoff.time = Math.min(backoff.time * 2, config_1.config.browser.maxBackoff);
    return backoffTime;
}
exports.processBackoffDelay = processBackoffDelay;
//# sourceMappingURL=backoff.js.map
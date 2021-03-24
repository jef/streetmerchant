"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchLinks = void 0;
const logger_1 = require("../logger");
const cheerio_1 = __importDefault(require("cheerio"));
const filter_1 = require("./filter");
const util_1 = require("../util");
function addNewLinks(store, links, series) {
    if (links.length === 0) {
        logger_1.logger.debug(logger_1.Print.message('NO STORE LINKS FOUND', series, store, true));
        return;
    }
    const existingUrls = new Set(store.links.map(link => link.url));
    const newLinks = links.filter(link => !existingUrls.has(link.url));
    if (newLinks.length === 0) {
        return;
    }
    logger_1.logger.debug(logger_1.Print.message(`FOUND ${newLinks.length} STORE LINKS`, series, store, true));
    logger_1.logger.debug(JSON.stringify(newLinks, null, 2));
    store.links = store.links.concat(newLinks);
}
async function fetchLinks(store, browser) {
    if (!store.linksBuilder) {
        return;
    }
    const promises = [];
    // eslint-disable-next-line prefer-const
    for (let { series, url } of store.linksBuilder.urls) {
        if (!filter_1.filterSeries(series)) {
            continue;
        }
        logger_1.logger.debug(logger_1.Print.message('DETECTING STORE LINKS', series, store, true));
        if (!Array.isArray(url)) {
            url = [url];
        }
        url.map(x => promises.push(util_1.usingResponse(browser, x, async (response) => {
            const text = await (response === null || response === void 0 ? void 0 : response.text());
            if (!text) {
                logger_1.logger.error(logger_1.Print.message('NO RESPONSE', series, store, true));
                return;
            }
            const docElement = cheerio_1.default.load(text).root();
            const links = store.linksBuilder.builder(docElement, series);
            addNewLinks(store, links, series);
        })));
    }
    await Promise.all(promises);
}
exports.fetchLinks = fetchLinks;
//# sourceMappingURL=fetch-links.js.map
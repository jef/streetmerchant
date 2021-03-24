"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrice = exports.includesLabels = exports.extractPageContents = exports.pageIncludesLabels = void 0;
const logger_1 = require("../logger");
function isElementArray(query) {
    return (Array.isArray(query) && query.length > 0 && typeof query[0] === 'object');
}
function getQueryAsElementArray(query, defaultContainer) {
    var _a;
    if (isElementArray(query)) {
        return query.map(x => {
            var _a;
            return ({
                container: (_a = x.container) !== null && _a !== void 0 ? _a : defaultContainer,
                text: x.text,
            });
        });
    }
    if (Array.isArray(query)) {
        return [
            {
                container: defaultContainer,
                text: query,
            },
        ];
    }
    return [
        {
            container: (_a = query.container) !== null && _a !== void 0 ? _a : defaultContainer,
            text: query.text,
        },
    ];
}
async function pageIncludesLabels(page, query, options) {
    const elementQueries = getQueryAsElementArray(query, options.selector);
    const resolved = await Promise.all(elementQueries.map(async (query) => {
        var _a;
        const selector = { ...options, selector: query.container };
        const contents = (_a = (await extractPageContents(page, selector))) !== null && _a !== void 0 ? _a : '';
        if (!contents) {
            return false;
        }
        logger_1.logger.debug(contents);
        return includesLabels(contents, query.text);
    }));
    return resolved.includes(true);
}
exports.pageIncludesLabels = pageIncludesLabels;
async function extractPageContents(page, selector) {
    return page.evaluate((options) => {
        const element = document.querySelector(options.selector);
        if (!element) {
            return null;
        }
        if (options.requireVisible &&
            !(element.offsetWidth > 0 && element.offsetHeight > 0)) {
            return null;
        }
        switch (options.type) {
            case 'innerHTML':
                return element.innerHTML;
            case 'outerHTML':
                return element.outerHTML;
            case 'textContent':
                return element.textContent;
            default:
                return 'Error: selector.type is unknown';
        }
    }, selector);
}
exports.extractPageContents = extractPageContents;
/**
 * Checks if DOM has any related text.
 *
 * @param domText Complete DOM of website.
 * @param searchLabels Search labels for a match.
 */
function includesLabels(domText, searchLabels) {
    const domTextLowerCase = domText.toLowerCase();
    return searchLabels.some(label => domTextLowerCase.includes(label.toLowerCase()));
}
exports.includesLabels = includesLabels;
async function getPrice(page, query, options) {
    const selector = { ...options, selector: query.container };
    const priceString = await extractPageContents(page, selector);
    if (priceString) {
        const priceSeparator = query.euroFormat ? /\./g : /,/g;
        const price = Number.parseFloat(priceString.replace(priceSeparator, '').match(/\d+/g).join('.'));
        logger_1.logger.debug('received price', price);
        return price;
    }
    return null;
}
exports.getPrice = getPrice;
//# sourceMappingURL=includes-labels.js.map
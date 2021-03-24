"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCard = exports.getProductLinksBuilder = void 0;
const logger_1 = require("../../../logger");
const isPartialUrlRegExp = /^\/[^/]/i;
function getProductLinksBuilder(options) {
    return (docElement, series) => {
        var _a, _b, _c;
        const productElements = docElement.find(options.productsSelector);
        const links = [];
        for (let i = 0; i < productElements.length; i++) {
            const productElement = productElements.eq(i);
            const titleElement = productElement.find(options.titleSelector).first();
            const title = options.titleAttribute
                ? (_a = titleElement.attr()) === null || _a === void 0 ? void 0 : _a[options.titleAttribute]
                : (_b = titleElement.text()) === null || _b === void 0 ? void 0 : _b.replace(/\n/g, ' ').trim();
            if (!title) {
                continue;
            }
            let urlElement = titleElement;
            if (options.urlSelector) {
                urlElement = urlElement.find(options.urlSelector).first();
            }
            let url = (_c = urlElement.attr()) === null || _c === void 0 ? void 0 : _c.href;
            if (!url) {
                continue;
            }
            if (isPartialUrlRegExp.exec(url)) {
                url = options.sitePrefix + url;
            }
            const card = parseCard(title);
            if (card) {
                links.push({
                    brand: card.brand,
                    model: card.model,
                    series,
                    url,
                });
            }
            else {
                logger_1.logger.error(`Failed to parse card: ${title}`, { url });
            }
        }
        return links;
    };
}
exports.getProductLinksBuilder = getProductLinksBuilder;
function parseCard(name) {
    name = name.replace(/\w+-\w+-[^ ]+/g, '');
    name = name.replace(/\([^(]*\)/g, '');
    name = name.replace(/, .+$/, '');
    name = name.replace(/ with .+$/, '');
    name = name.replace(/pci-express/gi, '');
    name = name.replace(/ - .*$/g, '');
    // Account for incorrect titles, e.g. MSIGeforce
    name = name.replace(/geforce/i, '');
    name = name.replace(/[^\w ]+/g, '');
    name = name.replace(/\bgraphics card\b/gi, '');
    name = name.replace(/\b(?<!founders) edition\b/gi, '');
    name = name.replace(/\b(series )?bundle\b/gi, '');
    name = name.replace(/\bfan\b/gi, '');
    name = name.replace(/\s{2,}/g, ' ').trim();
    let model = name.split(' ');
    const brand = model.shift();
    if (!brand) {
        return null;
    }
    // Split non spaced TitleCase words only after extracting brand
    model = model
        .join(' ')
        .replace(/([A-Z][a-z]+)([A-Z][a-z]+)/g, '$1 $2')
        .split(' ');
    // Some vendors have oc at the beginning of the product name,
    // store whether the card contains the term "oc" and remove
    // it during filtering, then add it to the end of the name.
    let isOC = false;
    /* eslint-disable @typescript-eslint/prefer-regexp-exec */
    model = model.filter(word => {
        if (word.toLowerCase() === 'oc') {
            isOC = true;
            return false;
        }
        return (!word.match(/^(nvidia|geforce|ge|force|rtx|amp[ae]re|graphics|card|gpu|pci-?e(xpress)?|ray-?tracing|ray|tracing|core|boost|epicx)$/i) &&
            !word.match(/^(\d+(?:gb?|mhz)?|gb|mhz|g?ddr(\d+x?)?)$/i) &&
            !word.match(/^(display ?port|hdmi|vga)$/i));
    });
    /* eslint-enable @typescript-eslint/prefer-regexp-exec */
    if (isOC)
        model.push('oc');
    if (model.length === 0)
        return null;
    return {
        brand: brand.toLowerCase(),
        model: model
            .join(' ')
            .toLowerCase()
            .replace(/ gaming\b/g, '')
            .trim(),
    };
}
exports.parseCard = parseCard;
//# sourceMappingURL=card.js.map
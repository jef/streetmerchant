"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Very = void 0;
const logger_1 = require("../../logger");
const card_1 = require("./helpers/card");
exports.Very = {
    currency: '£',
    labels: {
        inStock: {
            container: '.stockMessaging .indicator',
            text: ['available', 'low stock'],
        },
        maxPrice: {
            container: '.priceNow',
            euroFormat: false, // Note: Very uses non-euroFromat as price seperator
        },
        outOfStock: {
            container: '.stockMessaging .indicator',
            text: ['pre-order'],
        },
    },
    links: [
        {
            brand: 'test:brand',
            model: 'test:model',
            series: 'test:series',
            url: 'https://www.very.co.uk/msi-geforce-gtx-1660-ti-gaming-x-6g-graphics-card/1600350984.prd',
        },
    ],
    linksBuilder: {
        builder: (docElement, series) => {
            var _a, _b;
            const productElements = docElement.find('.productList .product');
            const links = [];
            for (let i = 0; i < productElements.length; i++) {
                const productElement = productElements.eq(i);
                const titleElement = productElement.find('.productTitle').first();
                const title = (_a = titleElement.text()) === null || _a === void 0 ? void 0 : _a.replace(/\n/g, ' ').trim();
                if (!title ||
                    ['RTX', series]
                        .map(x => title.toLowerCase().includes(x.toLowerCase()))
                        .filter(x => !x).length > 0) {
                    continue;
                }
                const url = (_b = titleElement.attr()) === null || _b === void 0 ? void 0 : _b.href;
                if (!url) {
                    continue;
                }
                const card = card_1.parseCard(title);
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
        },
        ttl: 300000,
        urls: [
            {
                series: '3060ti',
                url: 'https://www.very.co.uk/electricals/pc-components/graphics-cards/e/b/118786.end?sort=newin,0&numProducts=100',
            },
            {
                series: '3070',
                url: 'https://www.very.co.uk/electricals/pc-components/graphics-cards/e/b/118786.end?sort=newin,0&numProducts=100',
            },
            {
                series: '3080',
                url: 'https://www.very.co.uk/electricals/pc-components/graphics-cards/e/b/118786.end?sort=newin,0&numProducts=100',
            },
            {
                series: '3090',
                url: 'https://www.very.co.uk/electricals/pc-components/graphics-cards/e/b/118786.end?sort=newin,0&numProducts=100',
            },
        ],
    },
    name: 'very',
};
//# sourceMappingURL=very.js.map
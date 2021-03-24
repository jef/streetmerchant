"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmazonDeWarehouse = void 0;
exports.AmazonDeWarehouse = {
    backoffStatusCodes: [403, 429, 503],
    currency: '€',
    labels: {
        captcha: {
            container: 'body',
            text: [
                'geben sie die unten angezeigten zeichen ein',
                'geben sie die zeichen unten ein',
            ],
        },
        inStock: {
            container: '#a-autoid-0-announce',
            text: ['In den Einkaufswagen'],
        },
        maxPrice: {
            container: '.olpOfferPrice',
            euroFormat: true,
        },
        outOfStock: [
            {
                container: '.a-size-medium',
                text: [
                    'Derzeit gibt es keine Verkäufer, die diesen Artikel an Ihren Standort liefern können',
                ],
            },
        ],
    },
    links: [
        {
            brand: 'test:brand',
            model: 'test:model',
            series: 'test:series',
            url: 'https://www.amazon.de/gp/offer-listing/B07PW9VBK5',
        },
        {
            brand: 'sony',
            model: 'ps5 console',
            series: 'sonyps5c',
            url: 'https://www.amazon.de/gp/offer-listing/B08H93ZRK9',
        },
        {
            brand: 'sony',
            model: 'ps5 digital',
            series: 'sonyps5de',
            url: 'https://www.amazon.de/gp/offer-listing/B08H98GVK8',
        },
        {
            brand: 'microsoft',
            model: 'xbox series s',
            series: 'xboxss',
            url: 'https://www.amazon.de/gp/offer-listing/B087VM5XC6',
        },
        {
            brand: 'microsoft',
            model: 'xbox series x',
            series: 'xboxsx',
            url: 'https://www.amazon.de/gp/offer-listing/B08H93ZRLL',
        },
    ],
    name: 'amazon-de-warehouse',
};
//# sourceMappingURL=amazon-de-warehouse.js.map
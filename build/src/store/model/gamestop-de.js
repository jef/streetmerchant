"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamestopDE = void 0;
exports.GamestopDE = {
    currency: '€',
    labels: {
        inStock: [
            {
                container: '#btnAddToCart',
                text: ['In den Warenkorb'],
            },
            {
                container: '#btnAddToCart',
                text: ['Vorbestellen'],
            },
        ],
        maxPrice: {
            container: '.buySection .prodPriceCont',
            euroFormat: true,
        },
        outOfStock: {
            container: '.megaButton',
            text: ['Nicht verfügbar'],
        },
    },
    links: [
        {
            brand: 'sony',
            model: 'ps5 console',
            series: 'sonyps5c',
            url: 'https://www.gamestop.de/PS5/Games/58665',
        },
        {
            brand: 'sony',
            model: 'ps5 digital',
            series: 'sonyps5de',
            url: 'https://www.gamestop.de/PS5/Games/60315',
        },
    ],
    name: 'gamestop-de',
    successStatusCodes: [[0, 399], 404],
};
//# sourceMappingURL=gamestop-de.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmythsToysIE = void 0;
exports.SmythsToysIE = {
    currency: '€',
    disableAdBlocker: true,
    labels: {
        inStock: {
            container: '#addToCartButton',
            text: ['add to basket'],
        },
        maxPrice: {
            container: '.price_tag',
            euroFormat: false,
        },
        outOfStock: {
            container: '.instoreMessage',
            text: ['out of stock'],
        },
    },
    links: [
        {
            brand: 'microsoft',
            model: 'xbox series x',
            series: 'xboxsx',
            url: 'https://www.smythstoys.com/ie/en-ie/video-games-and-tablets/xbox-gaming/xbox-series-x-%7c-s/xbox-series-x-%7c-s-consoles/xbox-series-x-1tb-console/p/192012',
        },
        {
            brand: 'sony',
            model: 'ps5 console',
            series: 'sonyps5c',
            url: 'https://www.smythstoys.com/ie/en-ie/video-games-and-tablets/playstation-5/playstation-5-consoles/playstation-5-console/p/191259',
        },
    ],
    name: 'smythstoys-ie',
    waitUntil: 'domcontentloaded',
};
//# sourceMappingURL=smythstoys-ie.js.map
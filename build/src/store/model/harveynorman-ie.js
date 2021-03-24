"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HarveyNormanIE = void 0;
exports.HarveyNormanIE = {
    currency: '€',
    labels: {
        inStock: {
            container: 'input.btn-action',
            text: ['add to cart'],
        },
        maxPrice: {
            container: '.price',
            euroFormat: false,
        },
        outOfStock: {
            container: '.product-highlight-text',
            text: ['SOLD OUT! WATCH THIS SPACE FOR MORE INFORMATION'],
        },
    },
    links: [
        {
            brand: 'microsoft',
            model: 'xbox series x',
            series: 'xboxsx',
            url: 'https://www.harveynorman.ie/gaming/xbox-series/microsoft-xbox-series-x-console-1tb.html',
        },
    ],
    name: 'harveynorman-ie',
    waitUntil: 'domcontentloaded',
};
//# sourceMappingURL=harveynorman-ie.js.map
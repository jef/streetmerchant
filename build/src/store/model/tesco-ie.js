"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TescoIE = void 0;
exports.TescoIE = {
    currency: '€',
    labels: {
        inStock: {
            container: 'input.submit:nth-child(5)',
            text: ['add'],
        },
        maxPrice: {
            container: '.linePriceAbbr',
        },
        outOfStock: {
            container: '.noStockTxtCentered > strong:nth-child(1)',
            text: ['Sorry, this product is currently not available'],
        },
    },
    links: [
        {
            brand: 'microsoft',
            model: 'xbox series x',
            series: 'xboxsx',
            url: 'https://secure.tesco.ie/groceries/Product/Details/?id=307835209',
        },
        {
            brand: 'sony',
            model: 'ps5 digital',
            series: 'sonyps5de',
            url: 'https://www.tesco.ie/groceries/product/details/?id=307756010',
        },
    ],
    name: 'tesco-ie',
};
//# sourceMappingURL=tesco-ie.js.map
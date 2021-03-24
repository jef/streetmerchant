"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const open_1 = __importDefault(require("open"));
const notification_1 = require("../../src/notification");
const config_1 = require("../../src/config");
const link = {
    brand: 'test:brand',
    cartUrl: 'https://www.example.com/cartUrl',
    model: 'test:model',
    price: 100,
    series: 'test:series',
    url: 'https://www.example.com/url',
};
const store = {
    currency: '',
    labels: {
        inStock: {
            container: 'test:container',
            text: ['test:text'],
        },
    },
    links: [link],
    name: 'test:name',
};
/**
 * Send test email.
 */
notification_1.sendNotification(link, store);
/**
 * Open browser.
 */
if (config_1.config.browser.open) {
    open_1.default((_a = link.cartUrl) !== null && _a !== void 0 ? _a : link.url);
    open_1.default(link.url);
}
//# sourceMappingURL=test-notification.js.map
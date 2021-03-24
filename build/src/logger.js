"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Print = exports.logger = void 0;
const chalk_1 = __importDefault(require("chalk"));
const config_1 = require("./config");
const winston_1 = __importDefault(require("winston"));
const prettyJson = winston_1.default.format.printf(info => {
    const timestamp = new Date().toLocaleTimeString();
    let out = `${chalk_1.default.grey(`[${timestamp}]`)} ${info.level} ${chalk_1.default.grey('::')} ${info.message}`;
    if (Object.keys(info.metadata).length > 0) {
        out = `${out} ${chalk_1.default.magenta(JSON.stringify(info.metadata, null, 2))}`;
    }
    return out;
});
exports.logger = winston_1.default.createLogger({
    format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.metadata({
        fillExcept: ['level', 'message', 'timestamp'],
    }), prettyJson),
    level: config_1.config.logLevel,
    transports: [new winston_1.default.transports.Console({})],
});
exports.Print = {
    backoff(link, store, parameters, color) {
        if (color) {
            return ('✖ ' +
                buildProductString(link, store, true) +
                ' :: ' +
                chalk_1.default.yellow(`BACKOFF DELAY status=${parameters.statusCode} delay=${parameters.delay}`));
        }
        return `✖ ${buildProductString(link, store)} :: BACKOFF DELAY status=${parameters.statusCode} delay=${parameters.delay}`;
    },
    badStatusCode(link, store, statusCode, color) {
        if (color) {
            return ('✖ ' +
                buildProductString(link, store, true) +
                ' :: ' +
                chalk_1.default.yellow(`STATUS CODE ERROR ${statusCode}`));
        }
        return `✖ ${buildProductString(link, store)} :: STATUS CODE ERROR ${statusCode}`;
    },
    bannedSeller(link, store, color) {
        if (color) {
            return ('✖ ' +
                buildProductString(link, store, true) +
                ' :: ' +
                chalk_1.default.yellow('BANNED SELLER'));
        }
        return `✖ ${buildProductString(link, store)} :: BANNED SELLER`;
    },
    captcha(link, store, color) {
        if (color) {
            return ('✖ ' +
                buildProductString(link, store, true) +
                ' :: ' +
                chalk_1.default.yellow('CAPTCHA'));
        }
        return `✖ ${buildProductString(link, store)} :: CAPTCHA`;
    },
    cloudflare(link, store, color) {
        if (color) {
            return ('✖ ' +
                buildProductString(link, store, true) +
                ' :: ' +
                chalk_1.default.yellow('CLOUDFLARE, WAITING'));
        }
        return `✖ ${buildProductString(link, store)} :: CLOUDFLARE, WAITING`;
    },
    inStock(link, store, color, sms) {
        const productString = `${buildProductString(link, store)} :: IN STOCK`;
        if (color) {
            return chalk_1.default.bgGreen.white.bold(`🚀🚨 ${productString} 🚨🚀`);
        }
        if (sms) {
            return productString;
        }
        return `🚀🚨 ${productString} 🚨🚀`;
    },
    inStockWaiting(link, store, color) {
        if (color) {
            return ('ℹ ' +
                buildProductString(link, store, true) +
                ' :: ' +
                chalk_1.default.yellow('IN STOCK, WAITING'));
        }
        return `ℹ ${buildProductString(link, store)} :: IN STOCK, WAITING`;
    },
    maxPrice(link, store, maxPrice, color) {
        var _a, _b;
        if (color) {
            return ('✖ ' +
                buildProductString(link, store, true) +
                ' :: ' +
                chalk_1.default.yellow(`PRICE ${(_a = link.price) !== null && _a !== void 0 ? _a : ''} EXCEEDS LIMIT ${maxPrice}`));
        }
        return `✖ ${buildProductString(link, store)} :: PRICE ${(_b = link.price) !== null && _b !== void 0 ? _b : ''} EXCEEDS LIMIT ${maxPrice}`;
    },
    message(message, topic, store, color) {
        if (color) {
            return ('✖ ' +
                buildSetupString(topic, store, true) +
                ' :: ' +
                chalk_1.default.yellow(message));
        }
        return `✖ ${buildSetupString(topic, store)} :: ${message}`;
    },
    noResponse(link, store, color) {
        if (color) {
            return ('✖ ' +
                buildProductString(link, store, true) +
                ' :: ' +
                chalk_1.default.yellow('NO RESPONSE'));
        }
        return `✖ ${buildProductString(link, store)} :: NO RESPONSE`;
    },
    outOfStock(link, store, color) {
        if (color) {
            return ('✖ ' +
                buildProductString(link, store, true) +
                ' :: ' +
                chalk_1.default.red('OUT OF STOCK'));
        }
        return `✖ ${buildProductString(link, store)} :: OUT OF STOCK`;
    },
    productInStock(link) {
        let productString = `Product Page: ${link.url}`;
        if (link.cartUrl)
            productString += `\nAdd To Cart Link: ${link.cartUrl}`;
        return productString;
    },
    rateLimit(link, store, color) {
        if (color) {
            return ('✖ ' +
                buildProductString(link, store, true) +
                ' :: ' +
                chalk_1.default.yellow('RATE LIMIT EXCEEDED'));
        }
        return `✖ ${buildProductString(link, store)} :: RATE LIMIT EXCEEDED`;
    },
    recursionLimit(link, store, color) {
        if (color) {
            return ('✖ ' +
                buildProductString(link, store, true) +
                ' :: ' +
                chalk_1.default.yellow('CLOUDFLARE RETRY LIMIT REACHED, ABORT'));
        }
        return `✖ ${buildProductString(link, store)} :: CLOUDFLARE RETRY LIMIT REACHED, ABORT`;
    },
};
function buildSetupString(topic, store, color) {
    if (color) {
        return chalk_1.default.cyan(`[${store.name}]`) + chalk_1.default.grey(` [setup (${topic})]`);
    }
    return `[${store.name}] [setup (${topic})]`;
}
function buildProductString(link, store, color) {
    if (color) {
        if (store.currentProxyIndex !== undefined && store.proxyList) {
            const proxy = `${store.currentProxyIndex + 1}/${store.proxyList.length}`;
            return (chalk_1.default.gray(`[${proxy}]`) +
                chalk_1.default.cyan(` [${store.name}]`) +
                chalk_1.default.grey(` [${link.brand} (${link.series})] ${link.model}`));
        }
        else {
            return (chalk_1.default.cyan(`[${store.name}]`) +
                chalk_1.default.grey(` [${link.brand} (${link.series})] ${link.model}`));
        }
    }
    if (store.currentProxyIndex !== undefined && store.proxyList) {
        const proxy = `${store.currentProxyIndex + 1}/${store.proxyList.length}`;
        return `[${proxy}] [${store.name}] [${link.brand} (${link.series})] ${link.model}`;
    }
    else {
        return `[${store.name}] [${link.brand} (${link.series})] ${link.model}`;
    }
}
//# sourceMappingURL=logger.js.map
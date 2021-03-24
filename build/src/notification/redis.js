"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRedis = void 0;
const redis_1 = __importDefault(require("redis"));
const config_1 = require("../config");
const logger_1 = require("../logger");
const { url } = config_1.config.notifications.redis;
let client;
function initRedis() {
    if (url) {
        client = redis_1.default.createClient({ url });
    }
    return null;
}
function updateRedis(link, store) {
    try {
        if (client) {
            const key = `${store.name}:${link.brand}:${link.model}`
                .split(' ')
                .join('-');
            const value = {
                ...link,
                labels: store.labels,
                links: store.links,
                name: store.name,
                updatedAt: new Date().toUTCString(),
            };
            const redisUpdated = client.set(key, JSON.stringify(value));
            if (redisUpdated) {
                logger_1.logger.info('✔ redis updated');
            }
            else {
                logger_1.logger.error(`✖ couldn't update redis for key (${key})`);
            }
        }
    }
    catch (error) {
        logger_1.logger.error("✖ couldn't update redis", error);
    }
}
exports.updateRedis = updateRedis;
initRedis();
//# sourceMappingURL=redis.js.map
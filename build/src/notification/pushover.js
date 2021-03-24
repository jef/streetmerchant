"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPushoverNotification = void 0;
const logger_1 = require("../logger");
const pushover_notifications_1 = __importDefault(require("pushover-notifications"));
const config_1 = require("../config");
const { pushover } = config_1.config.notifications;
function sendPushoverNotification(link, store) {
    if (pushover.token && pushover.username) {
        logger_1.logger.debug('↗ sending pushover message');
        const push = new pushover_notifications_1.default({
            token: pushover.token,
            user: pushover.username,
        });
        const message = pushover.priority < 2
            ? {
                message: link.cartUrl ? link.cartUrl : link.url,
                priority: pushover.priority,
                title: logger_1.Print.inStock(link, store),
                ...(link.screenshot && { file: `./${link.screenshot}` }),
            }
            : {
                expire: pushover.expire,
                message: link.cartUrl ? link.cartUrl : link.url,
                priority: pushover.priority,
                retry: pushover.retry,
                title: logger_1.Print.inStock(link, store),
                ...(link.screenshot && { file: `./${link.screenshot}` }),
            };
        push.send(message, (error) => {
            if (error) {
                logger_1.logger.error("✖ couldn't send pushover message", error);
            }
            else {
                logger_1.logger.info('✔ pushover message sent');
            }
        });
    }
}
exports.sendPushoverNotification = sendPushoverNotification;
//# sourceMappingURL=pushover.js.map
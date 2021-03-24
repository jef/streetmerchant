"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPushbulletNotification = void 0;
const logger_1 = require("../logger");
const pushbullet_1 = __importDefault(require("@jef/pushbullet"));
const config_1 = require("../config");
const { pushbullet } = config_1.config.notifications;
function sendPushbulletNotification(link, store) {
    if (pushbullet) {
        logger_1.logger.debug('↗ sending pushbullet message');
        const pusher = new pushbullet_1.default(pushbullet);
        pusher.note({}, logger_1.Print.inStock(link, store), link.cartUrl ? link.cartUrl : link.url, (error) => {
            if (error) {
                logger_1.logger.error("✖ couldn't send pushbullet message", error);
            }
            else {
                logger_1.logger.info('✔ pushbullet message sent');
            }
        });
    }
}
exports.sendPushbulletNotification = sendPushbulletNotification;
//# sourceMappingURL=pushbullet.js.map
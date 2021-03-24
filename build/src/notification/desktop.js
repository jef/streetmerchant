"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendDesktopNotification = void 0;
const logger_1 = require("../logger");
const config_1 = require("../config");
const path_1 = require("path");
const node_notifier_1 = __importDefault(require("node-notifier"));
const { desktop } = config_1.config.notifications;
function sendDesktopNotification(link, store) {
    if (desktop) {
        logger_1.logger.debug('↗ sending desktop notification');
        (async () => {
            node_notifier_1.default.notify({
                icon: path_1.join(__dirname, '../../../docs/assets/images/streetmerchant-logo.png'),
                message: link.cartUrl ? link.cartUrl : link.url,
                open: link.cartUrl ? link.cartUrl : link.url,
                title: logger_1.Print.inStock(link, store),
            });
            logger_1.logger.info('✔ desktop notification sent');
        })();
    }
}
exports.sendDesktopNotification = sendDesktopNotification;
//# sourceMappingURL=desktop.js.map
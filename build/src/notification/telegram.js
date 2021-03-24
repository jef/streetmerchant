"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTelegramMessage = void 0;
const logger_1 = require("../logger");
const messaging_api_telegram_1 = require("messaging-api-telegram");
const config_1 = require("../config");
const { telegram } = config_1.config.notifications;
const client = new messaging_api_telegram_1.TelegramClient({
    accessToken: telegram.accessToken,
});
function sendTelegramMessage(link, store) {
    if (telegram.accessToken && telegram.chatId) {
        logger_1.logger.debug('↗ sending telegram message');
        (async () => {
            const message = logger_1.Print.productInStock(link);
            const results = [];
            for (const chatId of telegram.chatId) {
                try {
                    results.push(client.sendMessage(chatId, `${logger_1.Print.inStock(link, store)}\n${message}`));
                    logger_1.logger.info('✔ telegram message sent');
                }
                catch (error) {
                    logger_1.logger.error("✖ couldn't send telegram message", error);
                }
            }
            await Promise.all(results);
        })();
    }
}
exports.sendTelegramMessage = sendTelegramMessage;
//# sourceMappingURL=telegram.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSlackMessage = void 0;
const logger_1 = require("../logger");
const web_api_1 = require("@slack/web-api");
const config_1 = require("../config");
const { channel, token } = config_1.config.notifications.slack;
const web = new web_api_1.WebClient(token);
function sendSlackMessage(link, store) {
    if (channel && token) {
        logger_1.logger.debug('↗ sending slack message');
        (async () => {
            const givenUrl = link.cartUrl ? link.cartUrl : link.url;
            try {
                const result = await web.chat.postMessage({
                    channel: channel.replace('#', ''),
                    text: `${logger_1.Print.inStock(link, store)}\n${givenUrl}`,
                });
                if (!result.ok) {
                    logger_1.logger.error("✖ couldn't send slack message", result);
                    return;
                }
                logger_1.logger.info('✔ slack message sent');
            }
            catch (error) {
                logger_1.logger.error("✖ couldn't send slack message", error);
            }
        })();
    }
}
exports.sendSlackMessage = sendSlackMessage;
//# sourceMappingURL=slack.js.map
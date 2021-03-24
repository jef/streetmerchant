"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTwitchMessage = void 0;
const logger_1 = require("../logger");
const twitch_auth_1 = require("twitch-auth");
const fs_1 = require("fs");
const twitch_chat_client_1 = require("twitch-chat-client");
const config_1 = require("../config");
const { twitch } = config_1.config.notifications;
const messages = [];
let alreadySaying = false;
let tokenData = {
    accessToken: twitch.accessToken,
    expiryTimestamp: 0,
    refreshToken: twitch.refreshToken,
};
if (fs_1.existsSync('./twitch.json')) {
    tokenData = {
        ...JSON.parse(fs_1.readFileSync('./twitch.json', 'utf-8')),
        ...tokenData,
    };
}
const chatClient = new twitch_chat_client_1.ChatClient(new twitch_auth_1.RefreshableAuthProvider(new twitch_auth_1.StaticAuthProvider(twitch.clientId, tokenData.accessToken), {
    clientSecret: twitch.clientSecret,
    expiry: tokenData.expiryTimestamp === null
        ? null
        : new Date(tokenData.expiryTimestamp),
    onRefresh: async ({ accessToken, refreshToken, expiryDate }) => {
        return fs_1.promises.writeFile('./twitch.json', JSON.stringify({
            accessToken,
            expiryTimestamp: expiryDate === null ? null : expiryDate.getTime(),
            refreshToken,
        }, null, 4), 'utf-8');
    },
    refreshToken: tokenData.refreshToken,
}), {
    channels: [twitch.channel],
});
chatClient.onJoin((channel, user) => {
    if (channel === `#${twitch.channel}` && user === chatClient.currentNick) {
        while (messages.length) {
            const message = messages.shift();
            if (message !== undefined) {
                try {
                    void chatClient.say(channel, message);
                    logger_1.logger.info('✔ twitch message sent');
                }
                catch (error) {
                    logger_1.logger.error("✖ couldn't send twitch message", error);
                }
            }
        }
    }
    void chatClient.quit();
});
chatClient.onDisconnect(() => {
    alreadySaying = false;
});
function sendTwitchMessage(link, store) {
    if (tokenData.accessToken &&
        twitch.channel &&
        twitch.clientId &&
        twitch.clientSecret &&
        tokenData.refreshToken) {
        logger_1.logger.debug('↗ sending twitch message');
        messages.push(`${logger_1.Print.inStock(link, store)}\n${link.cartUrl ? link.cartUrl : link.url}`);
        if (!alreadySaying) {
            alreadySaying = true;
            void chatClient.connect();
        }
    }
}
exports.sendTwitchMessage = sendTwitchMessage;
//# sourceMappingURL=twitch.js.map
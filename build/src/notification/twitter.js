"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTweet = void 0;
const logger_1 = require("../logger");
const twitter_1 = __importDefault(require("twitter"));
const config_1 = require("../config");
const { twitter } = config_1.config.notifications;
const client = new twitter_1.default({
    access_token_key: twitter.accessTokenKey,
    access_token_secret: twitter.accessTokenSecret,
    consumer_key: twitter.consumerKey,
    consumer_secret: twitter.consumerSecret,
});
function sendTweet(link, store) {
    if (twitter.accessTokenKey &&
        twitter.accessTokenSecret &&
        twitter.consumerKey &&
        twitter.consumerSecret) {
        logger_1.logger.debug('↗ sending twitter message');
        let status = `${logger_1.Print.inStock(link, store)}\n${link.cartUrl ? link.cartUrl : link.url}`;
        if (twitter.tweetTags) {
            status += `\n\n${twitter.tweetTags}`;
        }
        client.post('statuses/update', { status }, error => {
            if (error) {
                logger_1.logger.error("✖ couldn't send twitter notification", error);
            }
            else {
                logger_1.logger.info('✔ twitter notification sent');
            }
        });
    }
}
exports.sendTweet = sendTweet;
//# sourceMappingURL=twitter.js.map
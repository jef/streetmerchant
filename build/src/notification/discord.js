"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendDiscordMessage = void 0;
const discord_js_1 = __importDefault(require("discord.js"));
const config_1 = require("../config");
const logger_1 = require("../logger");
const { notifyGroup, webhooks, notifyGroupSeries } = config_1.config.notifications.discord;
function getIdAndToken(webhook) {
    const match = /.*\/webhooks\/(\d+)\/(.+)/.exec(webhook);
    if (!match) {
        throw new Error('could not get discord webhook');
    }
    return {
        id: match[1],
        token: match[2],
    };
}
function sendDiscordMessage(link, store) {
    if (webhooks.length > 0) {
        logger_1.logger.debug('↗ sending discord message');
        (async () => {
            try {
                const embed = new discord_js_1.default.MessageEmbed()
                    .setTitle('_**Stock alert!**_')
                    .setDescription('> provided by [streetmerchant](https://github.com/jef/streetmerchant) with :heart:')
                    .setThumbnail('https://raw.githubusercontent.com/jef/streetmerchant/main/docs/assets/images/streetmerchant-logo.png')
                    .setColor('#52b788')
                    .setTimestamp();
                embed.addField('Store', store.name, true);
                if (link.price)
                    embed.addField('Price', `${store.currency}${link.price}`, true);
                embed.addField('Product Page', link.url);
                if (link.cartUrl)
                    embed.addField('Add to Cart', link.cartUrl);
                embed.addField('Brand', link.brand, true);
                embed.addField('Model', link.model, true);
                embed.addField('Series', link.series, true);
                embed.setTimestamp();
                let notifyText = [];
                if (notifyGroup) {
                    notifyText = notifyText.concat(notifyGroup);
                }
                if (Object.keys(notifyGroupSeries).indexOf(link.series) !== -1) {
                    notifyText = notifyText.concat(notifyGroupSeries[link.series]);
                }
                const promises = [];
                for (const webhook of webhooks) {
                    const { id, token } = getIdAndToken(webhook);
                    const client = new discord_js_1.default.WebhookClient(id, token);
                    promises.push({
                        client,
                        message: client.send(notifyText.join(' '), {
                            embeds: [embed],
                            username: 'streetmerchant',
                        }),
                    });
                }
                (await Promise.all(promises)).forEach(({ client }) => client.destroy());
                logger_1.logger.info('✔ discord message sent');
            }
            catch (error) {
                logger_1.logger.error("✖ couldn't send discord message", error);
            }
        })();
    }
}
exports.sendDiscordMessage = sendDiscordMessage;
//# sourceMappingURL=discord.js.map
import {Link, Store} from '../store/model';
import {MessageBuilder, Webhook} from 'discord-webhook-node';
import {config} from '../config';
import {logger} from '../logger';

const discord = config.notifications.discord;
const hooks = discord.webHookUrl;
const notifyGroup = discord.notifyGroup;
const notifyGroupSeries = discord.notifyGroupSeries;

export function sendDiscordMessage(link: Link, store: Store) {
	if (discord.webHookUrl.length > 0) {
		logger.debug('↗ sending discord message');

		(async () => {
			try {
				const embed = new MessageBuilder();
				embed.setTitle('Stock Notification');
				if (link.cartUrl)
					embed.addField('Add To Cart Link', link.cartUrl, true);
				embed.addField('Product Page', link.url, true);
				embed.addField('Store', store.name, true);
				embed.addField('Brand', link.brand, true);
				embed.addField('Series', link.series, true);
				embed.addField('Model', link.model, true);

				const notifyText: string[] = [];

				if (Object.keys(notifyGroupSeries).indexOf(link.series) !== 0) {
					notifyText.concat(notifyGroupSeries[link.series]);
				} else if (notifyGroup) {
					notifyText.concat(notifyGroup); // If there is no group for the series we
				}

				if (notifyText.length > 0) {
					embed.setText(notifyText.join(' '));
				}

				embed.setColor(0x76b900);
				embed.setTimestamp();

				const promises = [];
				for (const hook of hooks) {
					promises.push(new Webhook(hook).send(embed));
				}

				await Promise.all(promises);

				logger.info('✔ discord message sent');
			} catch (error: unknown) {
				logger.error("✖ couldn't send discord message", error);
			}
		})();
	}
}

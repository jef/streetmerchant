import {Link, Store} from '../store/model';
import {MessageBuilder, Webhook} from 'discord-webhook-node';
import {config} from '../config';
import {logger} from '../logger';

const discord = config.notifications.discord;
const hooks = discord.webHookUrl;
const notifyGroup = discord.notifyGroup;

export function sendDiscordMessage(link: Link, store: Store) {
	if (discord.webHookUrl.length > 0) {
		logger.debug('↗ sending discord message');

		(async () => {
			try {
				const embed = new MessageBuilder();
				embed.setTitle('Stock Notification');
				embed.addField('URL', link.cartUrl ? link.cartUrl : link.url, true);
				embed.addField('Store', store.name, true);
				embed.addField('Brand', link.brand, true);
				embed.addField('Series', link.series, true);
				embed.addField('Model', link.model, true);

				if (notifyGroup) {
					embed.setText(notifyGroup.join(' '));
				}

				embed.setColor(0x76B900);
				embed.setTimestamp();

				const promises = [];
				for (const hook of hooks) {
					promises.push(new Webhook(hook).send(embed));
				}

				await Promise.all(promises);

				logger.info('✔ discord message sent');
			} catch (error) {
				logger.error('✖ couldn\'t send discord message', error);
			}
		})();
	}
}

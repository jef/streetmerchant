import {Link, Store} from '../store/model';
import {MessageBuilder, Webhook} from 'discord-webhook-node';
import {Config} from '../config';
import {Logger} from '../logger';

const hooks = Config.notifications.discord.webHookUrl;
const notifyGroup = Config.notifications.discord.notifyGroup;

export function sendDiscordMessage(link: Link, store: Store) {
	(async () => {
		try {
			const embed = new MessageBuilder();
			embed.setTitle('Stock Notification');
			embed.addField('URL', link.cartUrl ? link.cartUrl : link.url, true);
			embed.addField('Store', store.name, true);
			embed.addField('Brand', link.brand, true);
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

			Logger.info('✔ discord message sent');
		} catch (error) {
			Logger.error('✖ couldn\'t send discord message', error);
		}
	})();
}

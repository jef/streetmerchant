import {Link, Store} from '../store/model';
import {MessageBuilder, Webhook} from 'discord-webhook-node';
import {Config} from '../config';
import {Logger} from '../logger';

const hook = new Webhook(Config.notifications.discord.webHookUrl);
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
				embed.setText(notifyGroup);
			}

			embed.setColor(0x76B900);
			embed.setTimestamp();
			await hook.send(embed);

			Logger.info('✔ discord message sent');
		} catch (error) {
			Logger.error('✖ couldn\'t send discord message', error);
		}
	})();
}

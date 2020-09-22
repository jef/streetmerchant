import {Webhook, MessageBuilder} from 'discord-webhook-node';
import {Config} from '../config';
import {Logger} from '../logger';
import {Link} from '../store/model';

const hook = new Webhook(Config.notifications.discord.webHookUrl);
const notifyGroup = Config.notifications.discord.notifyGroup;

export function sendDiscordMessage(cartUrl: string, link: Link) {
	(async () => {
		try {
			const embed = new MessageBuilder();
			embed.setTitle('Stock Notification');
			embed.addField('URL', cartUrl, true);
			embed.addField('Brand', link.brand, true);
			embed.addField('Model', link.model, true);

			if (notifyGroup) {
				embed.setText(notifyGroup);
			}

			embed.setColor(0x76B900);
			embed.setTimestamp();
			await hook.send(embed);
			Logger.info(`↗ discord message sent: ${cartUrl}`);
		} catch (error) {
			Logger.error(error);
		}
	})();
}

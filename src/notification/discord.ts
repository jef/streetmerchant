import {Webhook,MessageBuilder} from 'discord-webhook-node';
import {Config} from '../config';
import {Logger} from '../logger';

const hook = new Webhook(Config.notifications.discord.webHookUrl);
const notifyGroup = Config.notifications.discord.notifyGroup;

export function sendDiscordMessage(text: string) {
	(async () => {
		try {
			const embed = new MessageBuilder();
			embed.setTitle("Automated Stock Notification")
			embed.addField("URL", text, true)
			if(notifyGroup != ''){
				embed.addField("Attention",notifyGroup, true)
			}
			embed.setColor(65340)
			embed.setTimestamp()
			await hook.send(embed);
			Logger.info(`✔ discord message message sent: ${text}`);
		} catch (error) {
			Logger.error(error);
		}
	})();
}

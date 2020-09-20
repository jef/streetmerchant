import {Config} from '../config';
import {Logger} from '../logger';
import {TelegramClient} from 'messaging-api-telegram';

const telegram = Config.notifications.telegram;

const client = new TelegramClient({
	accessToken: telegram.accessToken
});

export function sendTelegramMessage(text: string) {
	(async () => {
		try {
			await client.sendMessage(telegram.chatId, text);
			Logger.info(`↗ telegram message sent to '${telegram.chatId}': ${text}`);
		} catch (error) {
			Logger.error(error);
		}
	})();
}

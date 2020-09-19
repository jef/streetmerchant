import {Config} from '../config';
import {Logger} from '../logger';
import {TelegramClient} from 'messaging-api-telegram';

const chatId = Config.notifications.telegram.chatId;
const accessToken = Config.notifications.telegram.botToken;

const client = new TelegramClient({
	accessToken
});

export function sendTelegramMessage(text: string) {
	(async () => {
		try {
			await client.sendMessage(chatId, text);
			Logger.info(`✔ telegram message sent to '${chatId}': ${text}`);
		} catch (error) {
			Logger.error(error);
		}
	})();
}

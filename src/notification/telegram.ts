import {Config} from '../config';
import {Logger} from '../logger';
import {TelegramClient} from 'messaging-api-telegram';

const chat_id = Config.notifications.telegram.chatId;
const bot_token = Config.notifications.telegram.botToken;

const client = new TelegramClient({
	accessToken: bot_token
});

export function sendTelegramMessage(text: string) {
	(async () => {
		try {
			await client.sendMessage(chat_id, text);
			Logger.info(`✔ telegram message sent to '${chat_id}': ${text}`);
		} catch (error) {
			Logger.error(error);
		}
	})();
}

import {Link, Store} from '../store/model';
import {Logger, Print} from '../logger';
import {Config} from '../config';
import {TelegramClient} from 'messaging-api-telegram';

const telegram = Config.notifications.telegram;

const client = new TelegramClient({
	accessToken: telegram.accessToken
});

export function sendTelegramMessage(link: Link, store: Store) {
	(async () => {
		const givenUrl = link.cartUrl ? link.cartUrl : link.url;

		try {
			await client.sendMessage(telegram.chatId, `${Print.inStock(link, store)}\n${givenUrl}`);
			Logger.info('✔ telegram message sent');
		} catch (error) {
			Logger.error('✖ couldn\'t send telegram message', error);
		}
	})();
}

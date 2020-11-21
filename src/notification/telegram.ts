import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {TelegramClient} from 'messaging-api-telegram';
import {config} from '../config';

const telegram = config.notifications.telegram;

const client = new TelegramClient({
	accessToken: telegram.accessToken
});

export function sendTelegramMessage(link: Link, store: Store) {
	if (telegram.accessToken && telegram.chatId) {
		logger.debug('↗ sending telegram message');

		(async () => {
			const message = Print.productInStock(link);
			const results = [];

			for (const chatId of telegram.chatId) {
				try {
					results.push(
						client.sendMessage(
							chatId,
							`${Print.inStock(link, store)}\n${message}`
						)
					);
					logger.info('✔ telegram message sent');
				} catch (error: unknown) {
					logger.error("✖ couldn't send telegram message", error);
				}
			}

			await Promise.all(results);
		})();
	}
}

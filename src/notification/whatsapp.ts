import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {config} from '../config';
import fetch from 'node-fetch';

const whatsapp = config.notifications.whatsapp;

export function sendWhatsAppMessage(link: Link, store: Store) {
	const message = `${Print.inStock(link, store)}\n\n${Print.productInStock(
		link
	)}`;

	const url = `https://api.callmebot.com/whatsapp.php?phone=${
		whatsapp.phoneNumber
	}&text=${encodeURIComponent(message)}&apikey=${whatsapp.callMeBotApiKey}`;

	fetch(url, {
		method: 'GET'
	})
		.then(() => logger.info('✔ whatsapp message sent'))
		.catch((error) =>
			logger.error("✖ couldn't send whatsapp message", error)
		);
}

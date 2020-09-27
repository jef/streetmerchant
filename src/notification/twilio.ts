import {Link, Store} from '../store/model';
import {Logger, Print} from '../logger';
import {Config} from '../config';
import twilio from 'twilio';

const config = Config.notifications.twilio;

export function sendTwilioMessage(link: Link, store: Store) {
	(async () => {
		const givenUrl = link.cartUrl ? link.cartUrl : link.url;
		const message = `${Print.inStock(link, store)}\n${givenUrl}`;

		try {
			const client = twilio(config.accountSid, config.authToken);
			await client.messages.create({
				body: message,
				from: config.from,
				to: config.to
			});
			Logger.info('✔ twilio message sent');
		} catch (error) {
			Logger.error('✖ couldn\'t send twilio message', error);
		}
	})();
}

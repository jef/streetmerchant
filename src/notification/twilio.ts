import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {Twilio} from 'twilio';
import {config} from '../config';

const twilio = config.notifications.twilio;
let client: Twilio;

if (twilio.accountSid && twilio.authToken) {
	client = new Twilio(twilio.accountSid, twilio.authToken);
}

export function sendTwilioMessage(link: Link, store: Store) {
	if (client) {
		logger.debug('↗ sending twilio message');

		(async () => {
			const givenUrl = link.cartUrl ? link.cartUrl : link.url;
			const message = `${Print.inStock(link, store)}\n${givenUrl}`;
			const numbers = twilio.to.split(',');
			const results = [];
			for (const number of numbers) {
				try {
					results.push(
						client.messages.create({
							body: message,
							from: twilio.from,
							to: number
						})
					);
					logger.info('✔ twilio message sent');
				} catch (error: unknown) {
					logger.error("✖ couldn't send twilio message", error);
				}
			}

			await Promise.all(results);
		})();
	}
}

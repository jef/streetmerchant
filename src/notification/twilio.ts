import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {Twilio} from 'twilio';
import {config} from '../config';

const twilio = config.notifications.twilio;

export function sendTwilioMessage(link: Link, store: Store) {
	if (twilio.accountSid && twilio.authToken) {
		logger.debug('↗ sending twilio message');

		(async () => {
			const givenUrl = link.cartUrl ? link.cartUrl : link.url;
			const message = `${Print.inStock(link, store)}\n${givenUrl}`;

			try {
				const client = new Twilio(twilio.accountSid, twilio.authToken);
				await client.messages.create({
					body: message,
					from: twilio.from,
					to: twilio.to
				});
				logger.info('✔ twilio message sent');
			} catch (error) {
				logger.error('✖ couldn\'t send twilio message', error);
			}
		})();
	}
}

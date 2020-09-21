import {Config} from '../config';
import {Logger} from '../logger';
import twilio from 'twilio';

const client = twilio(Config.notifications.twilio.sid, Config.notifications.twilio.auth);

export function requestTwilioCall() {
	const toNumber = Config.notifications.twilio.countryCode + Config.notifications.phone.number;

	client.calls
		.create({
			twiml: '<Response><Say>Card now available. Please check other notification methods for details.</Say></Response>',
			to: toNumber,
			from: Config.notifications.twilio.fromNumber
		})
		.then(call => Logger.info(`↗ queued up number to call: ${call.toFormatted}`))
		.catch(error => {
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			Logger.error(`twilio error: ${error.message}`);
		});
}

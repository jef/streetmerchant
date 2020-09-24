import {Config} from '../config';
import {Link} from '../store/model';
import {Logger} from '../logger';
import twilio from 'twilio';

const client = twilio(Config.notifications.twilio.sid, Config.notifications.twilio.auth);

export function requestTwilioCall() {
	const toNumber = Config.notifications.twilio.countryCode + Config.notifications.phone.number;

	client.calls
		.create({
			from: Config.notifications.twilio.fromNumber,
			to: toNumber,
			twiml: '<Response><Say>Card now available. Please check other notification methods for details.</Say></Response>'
		})
		.then(call => Logger.info(`↗ queued up number to call: ${call.toFormatted}`))
		.catch(error => {
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			Logger.error(`twilio error: ${error.message}`);
		});
}

export function sendTwilioMessage(link: Link) {
	const toNumber = Config.notifications.twilio.countryCode + Config.notifications.phone.number;

	client.messages
		.create({
			body: link.url,
			from: Config.notifications.twilio.fromNumber,
			to: toNumber
		})
		.then(message => Logger.info(`↗ queued up twilio message sender to: ${message.to}`))
		.catch(error => {
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			Logger.error(`twilio error: ${error.message}`);
		});
}

import {Config} from '../config';
import sendEmail from './email';
import sendSlaskMessage from './slack';
import sendSMS from './sms';

export default function sendNotification(cartUrl: string) {
	if (Config.notifications.email) {
		sendEmail(cartUrl);
	}

	if (Config.slack.channel && Config.slack.token) {
		sendSlaskMessage(cartUrl);
	}

	if (Config.phone.number && Config.phone.carrier) {
		if (Config.availableCarriers.includes(Config.phone.carrier.toLowerCase())) {
			sendSMS(cartUrl);
		}
	}
}

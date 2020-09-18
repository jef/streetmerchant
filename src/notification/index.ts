import {Config} from '../config';
import sendEmail from './email';
import sendSlaskMessage from './slack';
import sendSMS from './sms';

export default function sendNotification(cartUrl: string) {
	if (Config.notifications.email.username && Config.notifications.email.password) {
		sendEmail(cartUrl);
	}

	if (Config.notifications.slack.channel && Config.notifications.slack.token) {
		sendSlaskMessage(cartUrl);
	}

	if (Config.notifications.phone.number && Config.notifications.phone.carrier) {
		if (Config.notifications.phone.availableCarriers.includes(Config.notifications.phone.carrier.toLowerCase())) {
			sendSMS(cartUrl);
		}
	}
}

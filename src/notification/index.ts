import {Config} from '../config';
import sendEmail from './email';
import sendSlaskMessage from './slack';
import sendSMS from './sms';
import playSound from './sound';

export default function sendNotification(cartUrl: string) {
	if (Config.notifications.email.username && Config.notifications.email.password) {
		sendEmail(cartUrl);
	}

	if (Config.notifications.slack.channel && Config.notifications.slack.token) {
		sendSlaskMessage(cartUrl);
	}

	if (Config.notifications.phone.number) {
		const carrier = Config.notifications.phone.carrier?.toLowerCase();
		if (carrier && Config.notifications.phone.availableCarriers.includes(carrier)) {
			sendSMS(cartUrl);
		}
	}

	if (Config.notifications.playSound === 'true') {
		playSound();
	}
}

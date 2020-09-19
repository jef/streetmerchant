import {Config} from '../config';
import {sendEmail} from './email';
import {sendSMS} from './sms';
import {playSound} from './sound';
import {sendSlackMessage} from './slack';

export function sendNotification(cartUrl: string) {
	if (Config.notifications.email.username && Config.notifications.email.password) {
		sendEmail(cartUrl);
	}

	if (Config.notifications.slack.channel && Config.notifications.slack.token) {
		sendSlackMessage(cartUrl);
	}

	if (Config.notifications.phone.number) {
		const carrier = Config.notifications.phone.carrier.toLowerCase();
		if (carrier && Config.notifications.phone.availableCarriers.has(carrier)) {
			sendSMS(cartUrl);
		}
	}

	if (Config.notifications.playSound) {
		playSound();
	}
}

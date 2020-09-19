import {Config} from '../config';
import {sendEmail} from './email';
import {sendSMS} from './sms';
import {playSound} from './sound';
import {sendSlackMessage} from './slack';
import {sendPushoverNotification} from './pushover';
import {sendTelegramMessage} from './telegram';

const notifications = Config.notifications;

export function sendNotification(cartUrl: string) {
	if (notifications.email.username && notifications.email.password) {
		sendEmail(cartUrl);
	}

	if (notifications.slack.channel && notifications.slack.token) {
		sendSlackMessage(cartUrl);
	}

	if (notifications.telegram.accessToken && notifications.telegram.chatId) {
		sendTelegramMessage(cartUrl);
	}

	if (notifications.phone.number) {
		const carrier = notifications.phone.carrier.toLowerCase();
		if (carrier && notifications.phone.availableCarriers.has(carrier)) {
			sendSMS(cartUrl);
		}
	}

	if (notifications.pushover.token && notifications.pushover.user) {
		sendPushoverNotification(cartUrl);
	}

	if (notifications.playSound === 'true') {
		playSound();
	}
}

import {Config} from '../config';
import {sendEmail} from './email';
import {sendSMS} from './sms';
import {playSound} from './sound';
import {sendSlackMessage} from './slack';
import sendPushoverNotification from './pushover';
import {sendTelegramMessage} from './telegram';

export function sendNotification(cartUrl: string) {
	if (Config.notifications.email.username && Config.notifications.email.password) {
		sendEmail(cartUrl);
	}

	if (Config.notifications.slack.channel && Config.notifications.slack.token) {
		sendSlackMessage(cartUrl);
	}

	if (Config.notifications.telegram.botToken && Config.notifications.telegram.chatId) {
		sendTelegramMessage(cartUrl);
	}

	if (Config.notifications.phone.number) {
		const carrier = Config.notifications.phone.carrier.toLowerCase();
		if (carrier && Config.notifications.phone.availableCarriers.has(carrier)) {
			sendSMS(cartUrl);
		}
	}

	if (Config.notifications.pushover.token && Config.notifications.pushover.user) {
		sendPushoverNotification(cartUrl);
	}

	if (Config.notifications.playSound !== 'false') {
		playSound();
	}
}

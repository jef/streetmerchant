import {Config} from '../config';
import {sendEmail} from './email';
import {sendSMS} from './sms';
import {playSound} from './sound';
import {sendSlackMessage} from './slack';
import {sendPushoverNotification} from './pushover';
import {sendTelegramMessage} from './telegram';
import {sendDiscordMessage} from './discord';
import {sendDesktopNotification} from './desktop';

import {Link} from '../store/model';

const notifications = Config.notifications;

export function sendNotification(cartUrl: string, link: Link) {
	if (notifications.email.username && notifications.email.password) {
		sendEmail(cartUrl, link);
	}

	if (notifications.slack.channel && notifications.slack.token) {
		sendSlackMessage(cartUrl);
	}

	if (notifications.telegram.accessToken && notifications.telegram.chatId) {
		sendTelegramMessage(cartUrl);
	}

	if (notifications.discord.webHookUrl) {
		sendDiscordMessage(cartUrl, link);
	}

	if (notifications.phone.number) {
		const carrier = notifications.phone.carrier.toLowerCase();
		if (carrier && notifications.phone.availableCarriers.has(carrier)) {
			sendSMS(cartUrl, link);
		}
	}

	if (notifications.pushover.token && notifications.pushover.user) {
		sendPushoverNotification(cartUrl);
	}

	if (notifications.playSound) {
		playSound();
	}

	if (notifications.desktop) {
		sendDesktopNotification(cartUrl, link);
	}
}

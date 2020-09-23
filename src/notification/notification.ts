import {Config} from '../config';
import {Link} from '../store/model';
import {playSound} from './sound';
import {sendDesktopNotification} from './desktop';
import {sendDiscordMessage} from './discord';
import {sendEmail} from './email';
import {sendPushBulletNotification} from './pushbullet';
import {sendPushoverNotification} from './pushover';
import {sendSMS} from './sms';
import {sendSlackMessage} from './slack';
import {sendTelegramMessage} from './telegram';
import {sendTweet} from './twitter';

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

	if (notifications.pushBulletApiKey) {
		sendPushBulletNotification(cartUrl, link);
	}

	if (notifications.pushover.token && notifications.pushover.username) {
		sendPushoverNotification(cartUrl);
	}

	if (notifications.playSound) {
		playSound();
	}

	if (notifications.desktop) {
		sendDesktopNotification(cartUrl, link);
	}

	if (
		notifications.twitter.accessTokenKey &&
		notifications.twitter.accessTokenSecret &&
		notifications.twitter.consumerKey &&
		notifications.twitter.consumerSecret
	) {
		sendTweet(cartUrl, link);
	}
}

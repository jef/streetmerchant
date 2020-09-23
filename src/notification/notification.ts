import {requestTwilioCall, sendTwilioMessage} from './twilio';
import {Link, Store} from '../store/model';
import {Config} from '../config';
import {Logger} from '../logger';
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

export function sendNotification(link: Link, store: Store) {
	if (notifications.email.username && notifications.email.password) {
		Logger.debug('↗ sending email');
		sendEmail(link, store);
	}

	if (notifications.playSound) {
		Logger.debug('↗ playing sound');
		playSound();
	}

	if (notifications.desktop) {
		Logger.debug('↗ sending desktop notification');
		sendDesktopNotification(link, store);
	}

	if (notifications.phone.number) {
		const carrier = notifications.phone.carrier.toLowerCase();
		if (carrier && notifications.phone.availableCarriers.has(carrier)) {
			Logger.debug('↗ sending sms');
			sendSMS(link, store);
		}

		if (notifications.twilio.sid && notifications.twilio.auth && notifications.twilio.fromNumber) {
			if (notifications.twilio.mode.includes('phone')) {
				Logger.debug('↗ calling twilio phone');
				requestTwilioCall();
			}

			if (notifications.twilio.mode.includes('sms')) {
				Logger.debug('↗ sending twilio sms');
				sendTwilioMessage(link);
			}
		}
	}
	
	if (notifications.discord.webHookUrl) {
		Logger.debug('↗ sending discord message');
		sendDiscordMessage(link, store);
	}

	if (notifications.slack.channel && notifications.slack.token) {
		Logger.debug('↗ sending slack message');
		sendSlackMessage(link, store);
	}

	if (notifications.telegram.accessToken && notifications.telegram.chatId) {
		Logger.debug('↗ sending telegram message');
		sendTelegramMessage(link, store);
	}

	if (notifications.pushBulletApiKey) {
		Logger.debug('↗ sending pushbullet message');
		sendPushBulletNotification(link, store);
	}

	if (notifications.pushover.token && notifications.pushover.username) {
		Logger.debug('↗ sending pushover message');
		sendPushoverNotification(link, store);
	}

	if (
		notifications.twitter.accessTokenKey &&
		notifications.twitter.accessTokenSecret &&
		notifications.twitter.consumerKey &&
		notifications.twitter.consumerSecret
	) {
		Logger.debug('↗ sending twitter message');
		sendTweet(link, store);
	}
}

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
import {sendTwilioMessage} from './twilio';

const notifications = Config.notifications;

export function sendNotification(link: Link, store: Store) {
	if (notifications.email.username && notifications.email.password) {
		Logger.debug('↗ sending email');
		sendEmail(link, store);
	}

	if (notifications.phone.numbers) {
		Logger.debug('↗ sending sms');

		const carriers: any[] = notifications.phone.carriers.split(',');
		const numbers: any[] = notifications.phone.numbers.split(',');

		if (carriers.length !== numbers.length) {
			Logger.error(`✖ couldn't send sms. The amount of numbers(${numbers.length}) does not match the amount of carriers(${carriers.length}). \n PHONE_NUMBER="9998887777,6665554444"\n PHONE_CARRIER="att,verizon".`);
		}

		carriers.forEach((carrier, i) => {
			const number: string = numbers[i];
			if (carrier && notifications.phone.availableCarriers.has(carrier)) {
				sendSMS(link, store, carrier, number);
			}
		});
	}

	if (notifications.playSound) {
		Logger.debug('↗ playing sound');
		playSound();
	}

	if (notifications.desktop) {
		Logger.debug('↗ sending desktop notification');
		sendDesktopNotification(link, store);
	}

	if (notifications.discord.webHookUrl.length > 0) {
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

	if (notifications.twilio.accountSid && notifications.twilio.authToken) {
		Logger.debug('↗ sending twilio message');
		sendTwilioMessage(link, store);
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

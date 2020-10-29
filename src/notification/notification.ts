import {Link, Store} from '../store/model';
import {playSound} from './sound';
import {sendDesktopNotification} from './desktop';
import {sendDiscordMessage} from './discord';
import {sendEmail} from './email';
import {sendMqttMessage} from './mqtt';
import {sendPagerDutyNotification} from './pagerduty';
import {sendPushbulletNotification} from './pushbullet';
import {sendPushoverNotification} from './pushover';
import {sendSlackMessage} from './slack';
import {sendSms} from './sms';
import {sendTelegramMessage} from './telegram';
import {sendTweet} from './twitter';
import {sendTwilioMessage} from './twilio';
import {sendTwitchMessage} from './twitch';

export function sendNotification(link: Link, store: Store) {
	// Priority
	playSound();
	sendEmail(link, store);
	sendSms(link, store);
	sendDesktopNotification(link, store);
	// Non-priority
	sendDiscordMessage(link, store);
	sendMqttMessage(link, store);
	sendPagerDutyNotification(link, store);
	sendPushbulletNotification(link, store);
	sendPushoverNotification(link, store);
	sendSlackMessage(link, store);
	sendTelegramMessage(link, store);
	sendTweet(link, store);
	sendTwilioMessage(link, store);
	sendTwitchMessage(link, store);
}

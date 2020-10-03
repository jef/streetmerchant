import {Link, Store} from '../store/model';
import {playSound} from './sound';
import {sendDesktopNotification} from './desktop';
import {sendDiscordMessage} from './discord';
import {sendEmail} from './email';
import {sendPushbulletNotification} from './pushbullet';
import {sendPushoverNotification} from './pushover';
import {sendSMS} from './sms';
import {sendSlackMessage} from './slack';
import {sendTelegramMessage} from './telegram';
import {sendTweet} from './twitter';
import {sendTwilioMessage} from './twilio';

export function sendNotification(link: Link, store: Store) {
	sendEmail(link, store);
	sendSMS(link, store);
	playSound();
	sendDesktopNotification(link, store);
	sendDiscordMessage(link, store);
	sendSlackMessage(link, store);
	sendTelegramMessage(link, store);
	sendTwilioMessage(link, store);
	sendPushbulletNotification(link, store);
	sendPushoverNotification(link, store);
	sendTweet(link, store);
}

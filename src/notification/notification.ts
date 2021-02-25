import {Link, Store} from '../store/model';
import {adjustPhilipsHueLights} from './philips-hue';
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
import {updateRedis} from './redis';
import {activateSmartthingsSwitch} from './smartthings';
import {sendStreamLabsAlert} from './streamlabs';
import {Print, logger} from '../logger';

type RequestFailed = {
  failureReason: 'request_failed';
  statusCode: number;
};
type Captcha = {failureReason: 'captcha'};
type MaxPriceExceeded = {failureReason: 'max_price'; maxPrice: number};
type OutOfStock = {failureReason: 'out_of_stock'};
type BannedSeller = {failureReason: 'banned_seller'};
type LinkPollError = {result: 'failure'} & (
  | RequestFailed
  | Captcha
  | MaxPriceExceeded
  | OutOfStock
  | BannedSeller
);
type LinkPollSuccess = {result: 'in_stock'};

export type LinkPollEvent = (LinkPollError | LinkPollSuccess) & {
  link: Link;
  store: Store;
};
export type SendNotification = (pollEvent: LinkPollEvent) => void;

function assertNever(x: never): never {
  throw new Error('Unexpected object: ' + x);
}

export function sendNotification(pollEvent: LinkPollEvent) {
  const {link, store} = pollEvent;
  if (pollEvent.result === 'failure') {
    switch (pollEvent.failureReason) {
      case 'captcha':
        logger.warn(Print.captcha(link, store, true));
        return;
      case 'banned_seller':
        logger.warn(Print.bannedSeller(link, store, true));
        return;
      case 'out_of_stock':
        logger.info(Print.outOfStock(link, store, true));
        return;
      case 'max_price':
        logger.info(Print.maxPrice(link, store, pollEvent.maxPrice, true));
        return;
      case 'request_failed':
        return;
      default:
        assertNever(pollEvent);
    }
  }
  // Priority
  playSound();
  sendDiscordMessage(link, store);
  sendDesktopNotification(link, store);
  sendEmail(link, store);
  sendSms(link, store);
  // Non-priority
  activateSmartthingsSwitch();
  adjustPhilipsHueLights();
  sendMqttMessage(link, store);
  sendPagerDutyNotification(link, store);
  sendPushbulletNotification(link, store);
  sendPushoverNotification(link, store);
  sendSlackMessage(link, store);
  sendTelegramMessage(link, store);
  sendTweet(link, store);
  sendTwilioMessage(link, store);
  sendTwitchMessage(link, store);
  updateRedis(link, store);
  sendStreamLabsAlert(link, store);
}

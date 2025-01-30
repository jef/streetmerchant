import {DMPayload} from '.';
import {Link, Store} from '../store/model';
import {sendApns} from './apns';
import {sendDesktopNotification} from './desktop';
import {sendDMAsync as sendDiscordDM, sendDiscordMessage} from './discord';
import {sendEmail} from './email';
import {sendFreeMobileAlert} from './freemobile';
import {sendGotifyNotification} from './gotify';
import {sendMqttMessage} from './mqtt';
import {sendNtfyAlert} from './ntfy';
import {sendPagerDutyNotification} from './pagerduty';
import {adjustPhilipsHueLights} from './philips-hue';
import {sendPushbulletNotification} from './pushbullet';
import {sendPushoverNotification} from './pushover';
import {updateRedis} from './redis';
import {sendDMAsync as sendSlackDM, sendSlackMessage} from './slack';
import {sendSms} from './sms';
import {playSound} from './sound';
import {sendStreamLabsAlert} from './streamlabs';
import {sendTelegramMessage} from './telegram';
import {sendTwilioMessage} from './twilio';
// import {sendTwitchMessage} from './twitch';
import {sendTweet} from './twitter';

export function sendNotification(link: Link, store: Store) {
  // Priority
  playSound();
  sendNtfyAlert(link, store);
  sendDiscordMessage(link, store);
  sendDesktopNotification(link, store);
  sendEmail(link, store);
  sendSms(link, store);
  sendApns(link, store);
  // Non-priority
  adjustPhilipsHueLights();
  sendGotifyNotification(link, store);
  sendMqttMessage(link, store);
  sendPagerDutyNotification(link, store);
  sendPushbulletNotification(link, store);
  sendPushoverNotification(link, store);
  sendSlackMessage(link, store);
  sendTelegramMessage(link, store);
  sendTweet(link, store);
  sendTwilioMessage(link, store);
  // sendTwitchMessage(link, store);
  updateRedis(link, store);
  sendStreamLabsAlert(link, store);
  sendFreeMobileAlert(link, store);
}

export async function sendDMAsync(service: string, payload: DMPayload) {
  let dmFunction = undefined;
  switch (service) {
    case 'slack':
      dmFunction = sendSlackDM;
      break;
    case 'discord':
      dmFunction = sendDiscordDM;
      break;
    default:
      dmFunction = () => void 0;
  }
  await dmFunction(payload);
}

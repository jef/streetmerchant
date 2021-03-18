import {logger} from '../logger';
import {Provider, Notification} from '@parse/node-apn';
import {config} from '../config';

const {apns} = config.notifications;
let provider: Provider;
let notification: Notification;

if (
  apns.apnsAuthKey.length > 0 &&
  apns.apnsKeyId.length > 0 &&
  apns.apnsTeamId.length > 0 &&
  apns.apnsBundleId.length > 0
) {
  provider = new Provider({
    token: {
      key: apns.apnsAuthKey,
      keyId: apns.apnsKeyId,
      teamId: apns.apnsTeamId,
    },
  });
  notification = new Notification({
    badge: 1,
    sound: 'ping.aiff',
    alert: '\uD83D\uDCE7 \u2709 You have a new message',
    payload: {label: '1'},
    topic: apns.apnsBundleId,
  });
}

export function sendApns() {
  if (!provider && !notification) return;

  provider.send(notification, apns.apnsDeviceToken).then(result => {
    if (result.sent) {
      logger.info('✔ apple push notification sent');
    } else {
      logger.error("✖ couldn't send apple push notification", result.failed);
    }
  });

  provider.shutdown();
}

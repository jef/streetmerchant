import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import * as apn from '@parse/node-apn';
import {config} from '../config';

const {apns} = config.notifications;

export function sendApns(link: Link, store: Store) {
  const options = {
    token: {
      key: apns.apnsAuthKey,
      keyId: apns.apnsKeyId,
      teamId: apns.apnsTeamId,
    },
    production: apns.apnsProduction,
  };

  if (
    options.token.key.length <= 0 ||
    options.token.keyId.length <= 0 ||
    options.token.teamId.length <= 0
  ) {
    return;
  }

  const apnProvider = new apn.Provider(options);

  const note = new apn.Notification();

  note.badge = 1;
  note.sound = 'ping.aiff';
  note.alert = '\uD83D\uDCE7 \u2709 You have a new message';
  note.payload = {label: '1'};
  note.topic = apns.apnsBundleId;

  apnProvider.send(note, apns.apnsDeviceToken).then(result => {
    // see documentation for an explanation of result
    if (result.sent) {
      logger.info('✔ push notification sent');
    } else {
      logger.error("✖ couldn't send push notification", result.failed);
    }
    apnProvider.shutdown();
  });
}

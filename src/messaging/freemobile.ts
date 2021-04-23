import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {config} from '../config';
import {URL} from 'url';
import fetch from 'node-fetch';

const {freemobile} = config.notifications;

const url = new URL('https://smsapi.free-mobile.fr/sendmsg');

if (freemobile.id && freemobile.apiKey) {
  url.searchParams.append('user', freemobile.id);
  url.searchParams.append('pass', freemobile.apiKey);
}

export function sendFreeMobileAlert(link: Link, store: Store) {
  if (freemobile.id && freemobile.apiKey) {
    logger.debug('↗ sending free mobile alert');

    (async () => {
      const color = false;
      const sms = true;

      const message = `${Print.inStock(
        link,
        store,
        color,
        sms
      )}\n${Print.productInStock(link)}`;

      url.searchParams.append('msg', message);

      try {
        const response = await fetch(url.toString(), {method: 'GET'});

        if (!response.ok) {
          logger.error("✖ couldn't send free mobile alert", response);
          return;
        }

        logger.info('✔ free mobile alert sent');
      } catch (error: unknown) {
        logger.error("✖ couldn't send free mobile alert", error);
      }
    })();
  }
}

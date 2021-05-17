import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {config} from '../config';
import fetch from 'node-fetch';
import {URLSearchParams} from 'url';

const {gotify} = config.notifications;

export function sendGotifyNotification(link: Link, store: Store) {
  if (!gotify.token || !gotify.url) return;

  (async () => {
    const params = new URLSearchParams();
    params.append('title', Print.inStock(link, store));
    params.append('message', Print.productInStock(link));
    const response = await fetch(
      `${gotify.url}/message?token=${gotify.token}`,
      {
        method: 'POST',
        body: params,
      }
    );

    const json = await response.json();

    if (json.error) {
      logger.error('✖ could not send gotify message', json.error);
    } else {
      logger.info('✔ gotify message sent');
    }
  })();
}

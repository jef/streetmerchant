import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {config} from '../config';
import {URLSearchParams} from 'url';
import fetch from 'node-fetch';

const {streamlabs} = config.notifications;
let requestParams: URLSearchParams;

if (streamlabs.accessToken && streamlabs.type) {
  requestParams = new URLSearchParams();
  requestParams.append('access_token', streamlabs.accessToken);
  requestParams.append('type', streamlabs.type);
  requestParams.append('image_href', streamlabs.imageHref);
  requestParams.append('sound_href', streamlabs.soundHref);
  requestParams.append('duration', streamlabs.duration.toString());
}

export function sendStreamLabsAlert(link: Link, store: Store) {
  if (requestParams) {
    logger.debug('↗ sending StreamLabs alert');

    (async () => {
      const message = `${Print.inStock(link, store)}`;
      requestParams.set('message', message);

      try {
        const response = await fetch('https://streamlabs.com/api/v1.0/alerts', {
          method: 'POST',
          body: requestParams,
        });

        const json = await response.json();
        if (!json.success) throw Error(JSON.stringify(json));

        logger.info('✔ StreamLabs alert sent');
      } catch (error: unknown) {
        logger.error("✖ couldn't send StreamLabs alert", error);
      }
    })();
  }
}

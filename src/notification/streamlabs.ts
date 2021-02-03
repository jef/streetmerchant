import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {config} from '../config';
import FormData from 'form-data';
import fetch from 'node-fetch';

const {streamlabs} = config.notifications;

const formdata = new FormData();
formdata.append('access_token', streamlabs.accessToken);
formdata.append('type', streamlabs.type);
formdata.append('image_href', streamlabs.imageHref);
formdata.append('sound_href', streamlabs.soundHref);
formdata.append('duration', streamlabs.duration.toString());

export function sendStreamLabsAlert(link: Link, store: Store) {
  if (streamlabs.accessToken) {
    logger.debug('↗ sending StreamLabs alert');

    (async () => {
      const message = `${Print.inStock(link, store)}`;
      formdata.append('message', message);

      try {
        const response = await fetch(
          'https://streamlabs.com/api/v1.0/alerts',
          {
            method: 'POST',
            body: formdata,
          }
        );

        const json = await response.json();
        if (!json.success) throw Error(status);

        logger.info('✔ StreamLabs alert sent');
      } catch (error: unknown) {
        logger.error("✖ couldn't send StreamLabs alert", error);
      }
    })();
  }
}

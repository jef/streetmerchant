import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {config} from '../config';
import fetch from 'node-fetch';

const {ntfy} = config.notifications;

export function sendNtfyAlert(link: Link, store: Store) {
  if (ntfy.topic) {
    logger.debug('↗ sending ntfy alert');

    (async () => {
      const message = `${Print.inStock(link, store)}`;
      const headers: Record<string, string> = {};

      if (ntfy.priority) headers['Priority'] = ntfy.priority;
      if (ntfy.tags) headers['Tags'] = ntfy.tags;
      if (ntfy.title) headers['Title'] = ntfy.title;
      if (ntfy.accessToken)
        headers['Authorization'] = `Bearer ${ntfy.accessToken}`;

      const body = {
        topic: ntfy.topic,
        message,
        actions: [
          {
            action: 'view',
            label: 'View Product',
            url: link.cartUrl ?? link.url,
          },
        ],
      };

      try {
        const response = await fetch(ntfy.url, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            ...headers,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok)
          throw new Error(`Failed to send ntfy alert: ${response.statusText}`);

        logger.info('✔ ntfy alert sent');
      } catch (error: unknown) {
        logger.error("✖ couldn't send ntfy alert", error);
      }
    })();
  }
}

import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {config} from '../config';
import {join} from 'path';
import notifier from 'node-notifier';

const {desktop} = config.notifications;

export function sendDesktopNotification(link: Link, store: Store) {
  if (desktop) {
    logger.debug('↗ sending desktop notification');
    (async () => {
      notifier.notify({
        icon: join(
          __dirname,
          '../../../docs/assets/images/streetmerchant-logo.png'
        ),
        message: link.cartUrl ? link.cartUrl : link.url,
        open: link.cartUrl ? link.cartUrl : link.url,
        title: Print.inStock(link, store),
      });

      logger.info('✔ desktop notification sent');
    })();
  }
}

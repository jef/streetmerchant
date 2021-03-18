import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {config} from '../config';
import notifier from 'node-notifier';

const {desktop} = config.notifications;

export function sendDesktopNotification(link: Link, store: Store) {
  if (desktop) {
    logger.debug('↗ sending desktop notification');
    notifier.notify({
      message: link.cartUrl ? link.cartUrl : link.url,
      open: link.cartUrl ? link.cartUrl : link.url,
      title: Print.inStock(link, store),
      wait: false,
    });

    logger.info('✔ desktop notification sent');
  }
}

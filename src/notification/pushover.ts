import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import Push, {PushoverMessage} from 'pushover-notifications';
import {config} from '../config';

const {pushover} = config.notifications;

export function sendPushoverNotification(link: Link, store: Store) {
  if (pushover.token && pushover.username) {
    logger.debug('↗ sending pushover message');

    const push = new Push({
      token: pushover.token,
      user: pushover.username,
    });

    const message: PushoverMessage =
      pushover.priority < 2
        ? {
            message: link.cartUrl ? link.cartUrl : link.url,
            priority: pushover.priority,
            sound: pushover.sound,
            title: Print.inStock(link, store),
            device: pushover.device,
            ...(link.screenshot && {file: `./${link.screenshot}`}),
          }
        : {
            expire: pushover.expire,
            message: link.cartUrl ? link.cartUrl : link.url,
            priority: pushover.priority,
            sound: pushover.sound,
            retry: pushover.retry,
            title: Print.inStock(link, store),
            device: pushover.device,
            ...(link.screenshot && {file: `./${link.screenshot}`}),
          };

    push.send(message, (error: Error) => {
      if (error) {
        logger.error("✖ couldn't send pushover message", error);
      } else {
        logger.info('✔ pushover message sent');
      }
    });
  }
}

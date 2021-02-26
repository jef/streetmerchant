import {Print, logger} from '../logger';
import {LinkPollEvent} from './link_poll_event';

function assertNever(x: never): never {
  throw new Error('Unexpected object: ' + x);
}

export function sendLogstream(pollEvent: LinkPollEvent) {
  const {link, store} = pollEvent;
  if (pollEvent.result === 'failure') {
    switch (pollEvent.failureReason) {
      case 'captcha':
        logger.warn(Print.captcha(link, store, true));
        return;
      case 'banned_seller':
        logger.warn(Print.bannedSeller(link, store, true));
        return;
      case 'out_of_stock':
        logger.info(Print.outOfStock(link, store, true));
        return;
      case 'max_price':
        logger.info(Print.maxPrice(link, store, pollEvent.maxPrice, true));
        return;
      case 'request_failed':
        return;
      default:
        assertNever(pollEvent);
    }
  }
}

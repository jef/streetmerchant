import open from 'open';
import {sendNotification} from '../../src/messaging';
import {config} from '../../src/config';
import {getTestStore} from '../util';

const store = getTestStore();
const link = store.links[0];

/**
 * Send test email.
 */
sendNotification(link, store);

/**
 * Open browser.
 */
if (!config.docker && config.browser.open) {
  open(link.cartUrl ?? link.url);
  open(link.url);
}

import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import Push, {PushoverMessage} from 'pushover-notifications';
import {config} from '../config';

const pushover = config.notifications.pushover;
const push = new Push({
	token: pushover.token,
	user: pushover.username
});

export function sendPushoverNotification(link: Link, store: Store) {
	if (pushover.token && pushover.username) {
		logger.debug('↗ sending pushover message');

		const message: PushoverMessage = {
			message: link.cartUrl ? link.cartUrl : link.url,
			priority: pushover.priority,
			title: Print.inStock(link, store)
		};

		push.send(message, (error: Error) => {
			if (error) {
				logger.error('✖ couldn\'t send pushover message', error);
			} else {
				logger.info('✔ pushover message sent');
			}
		});
	}
}

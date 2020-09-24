import {Link, Store} from '../store/model';
import {Logger, Print} from '../logger';
import {Config} from '../config';
import Push from 'pushover-notifications';

const pushover = Config.notifications.pushover;
const push = new Push({
	token: pushover.token,
	user: pushover.username
});

export function sendPushoverNotification(link: Link, store: Store) {
	const message = {
		message: link.cartUrl ? link.cartUrl : link.url,
		priority: pushover.priority,
		title: Print.inStock(link, store)
	};

	push.send(message, (error: Error) => {
		if (error) {
			Logger.error('✖ couldn\'t send pushover message', error);
		} else {
			Logger.info('✔ pushover message sent');
		}
	});
}

import Push from 'pushover-notifications';
import {Config} from '../config';
import {Logger} from '../logger';

const pushover = Config.notifications.pushover;
const push = new Push({
	user: pushover.user,
	token: pushover.token
});

export function sendPushoverNotification(cartUrl: string) {
	const message = {
		message: cartUrl
	};

	push.send(message, (err: Error, result: string) => {
		if (err) {
			Logger.error(err);
		} else {
			Logger.info(`↗ pushover notification sent: ${result}`);
		}
	});
}

import {Config} from '../config';
import {Logger} from '../logger';
import Push from 'pushover-notifications';

const pushover = Config.notifications.pushover;
const push = new Push({
	token: pushover.token,
	user: pushover.username
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

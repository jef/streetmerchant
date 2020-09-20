import Push from 'pushover-notifications';
import {Config} from '../config';
import {Logger} from '../logger';

const pushover = Config.notifications.pushover;
const push = new Push({
	user: pushover.user,
	token: pushover.token
});

export function sendPushoverNotification(text: string) {
	const message = {
		message: text
	};

	push.send(message, (err: Error, result: string) => {
		if (err) {
			Logger.error(err);
		} else {
			Logger.info(`✔ Pushover notification sent: ${result}`);
		}
	});
}

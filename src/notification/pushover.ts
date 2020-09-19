/* eslint @typescript-eslint/no-var-requires: "off" */
import {Config} from '../config';
import {Logger} from '../logger';
const Push = require('pushover-notifications');

const p = new Push({
	user: Config.notifications.pushover.user,
	token: Config.notifications.pushover.token
});

export default function sendPushoverNotification(text: string) {
	const message = {
		message: text
	};

	p.send(message, (err: Error, result: string) => {
		if (err) {
			Logger.error(err);
		} else {
			Logger.info(`✔ Pushover notification sent: ${result}`);
		}
	});
}

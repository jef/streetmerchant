import {Config} from '../config';
import {Logger} from '../logger';
import {WebClient} from '@slack/web-api';

const channel = Config.notifications.slack.channel;
const token = Config.notifications.slack.token;
const web = new WebClient(token);

export function sendSlackMessage(cartUrl: string) {
	(async () => {
		try {
			const result = await web.chat.postMessage({channel, text: cartUrl});
			if (!result.ok) {
				Logger.error(result.error);
				return;
			}

			Logger.info(`↗ slack message sent to '${channel}': ${cartUrl}`);
		} catch (error) {
			Logger.error(error);
		}
	})();
}

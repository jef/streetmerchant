import {WebClient} from '@slack/web-api';
import {Config} from '../config';
import {Logger} from '../logger';

const channel = Config.notifications.slack.channel;
const token = Config.notifications.slack.token;
const web = new WebClient(token);

export function sendSlackMessage(text: string) {
	(async () => {
		try {
			const result = await web.chat.postMessage({text, channel});
			if (!result.ok) {
				Logger.error(result.error);
				return;
			}

			Logger.info(`✔ slack message sent to '${channel}': ${text}`);
		} catch (error) {
			Logger.error(error);
		}
	})();
}

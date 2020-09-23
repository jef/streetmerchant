import {Link, Store} from '../store/model';
import {Logger, Print} from '../logger';
import {Config} from '../config';
import {WebClient} from '@slack/web-api';

const channel = Config.notifications.slack.channel;
const token = Config.notifications.slack.token;
const web = new WebClient(token);

export function sendSlackMessage(link: Link, store: Store) {
	(async () => {
		const givenUrl = link.cartUrl ? link.cartUrl : link.url;

		try {
			const result = await web.chat.postMessage({
				channel,
				text: `${Print.inStock(link, store)}\n${givenUrl}`
			});

			if (!result.ok) {
				Logger.error('✖ couldn\'t send slack message', result);
				return;
			}

			Logger.info('✔ slack message sent');
		} catch (error) {
			Logger.error('✖ couldn\'t send slack message', error);
		}
	})();
}

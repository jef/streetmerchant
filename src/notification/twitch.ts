import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {RefreshableAuthProvider, StaticAuthProvider} from 'twitch-auth';
import {existsSync, readFileSync, writeFileSync} from 'fs';
import {ChatClient} from 'twitch-chat-client';
import {config} from '../config';

const twitch = config.notifications.twitch;

let tokenData;
if (existsSync('./twitch.json')) {
	tokenData = JSON.parse(readFileSync('./twitch.json', 'utf-8'));
} else {
	tokenData = {
		accessToken: twitch.accessToken,
		expiryTimestamp: 0,
		refreshToken: twitch.refreshToken
	};
}

const chatClient: ChatClient = new ChatClient(
	new RefreshableAuthProvider(
		new StaticAuthProvider(twitch.clientId, tokenData.accessToken),
		{
			clientSecret: twitch.clientSecret,
			expiry: tokenData.expiryTimestamp === null ? null : new Date(tokenData.expiryTimestamp),
			onRefresh: async ({accessToken, refreshToken, expiryDate}) => {
				writeFileSync('./twitch.json', JSON.stringify({
					accessToken,
					expiryTimestamp: expiryDate === null ? null : expiryDate.getTime(),
					refreshToken
				}, null, 4), 'utf-8');
			},
			refreshToken: tokenData.refreshToken
		}
	),
	{
		channels: [twitch.channel]
	}
);

export function sendTwitchMessage(link: Link, store: Store) {
	if (twitch.clientId && twitch.accessToken) {
		logger.debug('↗ sending twitch message');

		const message = `${Print.inStock(link, store)}\n${link.cartUrl ? link.cartUrl : link.url}`;
		chatClient.onJoin((channel: string, user: string) => {
			if (channel === `#${twitch.channel}` && user === chatClient.currentNick) {
				try {
					chatClient.say(channel, message);
					logger.info('✔ twitch message sent');
				} catch (error) {
					logger.error('✖ couldn\'t send twitch message', error);
				}
			}

			(async () => {
				await chatClient.quit();
			})();
		});

		(async () => {
			await chatClient.connect();
		})();
	}
}

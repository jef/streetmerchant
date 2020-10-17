import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {RefreshableAuthProvider, StaticAuthProvider} from 'twitch-auth';
import {existsSync, promises, readFileSync} from 'fs';
import {ChatClient} from 'twitch-chat-client';
import {config} from '../config';

const twitch = config.notifications.twitch;

const messages: string[] = [];
let alreadySaying = false;

let tokenData = {
	accessToken: twitch.accessToken,
	expiryTimestamp: 0,
	refreshToken: twitch.refreshToken
};

if (existsSync('./twitch.json')) {
	tokenData = {...JSON.parse(readFileSync('./twitch.json', 'utf-8')), ...tokenData};
}

const chatClient: ChatClient = new ChatClient(
	new RefreshableAuthProvider(
		new StaticAuthProvider(twitch.clientId, tokenData.accessToken),
		{
			clientSecret: twitch.clientSecret,
			expiry: tokenData.expiryTimestamp === null ? null : new Date(tokenData.expiryTimestamp),
			onRefresh: async ({accessToken, refreshToken, expiryDate}) => {
				return promises.writeFile('./twitch.json', JSON.stringify({
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

chatClient.onJoin((channel: string, user: string) => {
	if (channel === `#${twitch.channel}` && user === chatClient.currentNick) {
		while (messages.length) {
			const message: string | undefined = messages.shift();

			if (message !== undefined) {
				try {
					chatClient.say(channel, message);
					logger.info('✔ twitch message sent');
				} catch (error) {
					logger.error('✖ couldn\'t send twitch message', error);
				}
			}
		}
	}

	void chatClient.quit();
});

chatClient.onDisconnect(() => {
	alreadySaying = false;
});

export function sendTwitchMessage(link: Link, store: Store) {
	if (tokenData.accessToken && twitch.channel && twitch.clientId && twitch.clientSecret && tokenData.refreshToken) {
		logger.debug('↗ sending twitch message');

		messages.push(`${Print.inStock(link, store)}\n${link.cartUrl ? link.cartUrl : link.url}`);

		if (!alreadySaying) {
			alreadySaying = true;
			void chatClient.connect();
		}
	}
}

import {Config} from '../config';
import {Link} from '../store/model';
import {Logger} from '../logger';
import Twitter from 'twitter';

const twitter = Config.notifications.twitter;

const client = new Twitter({
	access_token_key: twitter.accessTokenKey,
	access_token_secret: twitter.accessTokenSecret,
	consumer_key: twitter.consumerKey,
	consumer_secret: twitter.consumerSecret
});

export function sendTweet(cartUrl: string, link: Link) {
	let status = `🛎️ Stock Notification: ${link.brand} ${link.model}\n${cartUrl}`;

	if (twitter.tweetTags) {
		status += `\n\n${twitter.tweetTags}`;
	}

	client.post('statuses/update', {status}, err => {
		if (err) {
			Logger.error(err);
		} else {
			Logger.info(`↗ twitter notification sent: ${cartUrl}`);
		}
	});
}

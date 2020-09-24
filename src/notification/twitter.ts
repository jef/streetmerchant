import {Link, Store} from '../store/model';
import {Logger, Print} from '../logger';
import {Config} from '../config';
import Twitter from 'twitter';

const twitter = Config.notifications.twitter;

const client = new Twitter({
	access_token_key: twitter.accessTokenKey,
	access_token_secret: twitter.accessTokenSecret,
	consumer_key: twitter.consumerKey,
	consumer_secret: twitter.consumerSecret
});

export function sendTweet(link: Link, store: Store) {
	let status = `${Print.inStock(link, store)}\n${link.cartUrl ? link.cartUrl : link.url}`;

	if (twitter.tweetTags) {
		status += `\n\n${twitter.tweetTags}`;
	}

	client.post('statuses/update', {status}, error => {
		if (error) {
			Logger.error('✖ couldn\'t send twitter notification', error);
		} else {
			Logger.info('✔ twitter notification sent');
		}
	});
}

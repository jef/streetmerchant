import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import Twitter from 'twitter';
import {config} from '../config';

const twitter = config.notifications.twitter;

const client = new Twitter({
	access_token_key: twitter.accessTokenKey,
	access_token_secret: twitter.accessTokenSecret,
	consumer_key: twitter.consumerKey,
	consumer_secret: twitter.consumerSecret
});

export function sendTweet(link: Link, store: Store) {
	if (
		twitter.accessTokenKey &&
		twitter.accessTokenSecret &&
		twitter.consumerKey &&
		twitter.consumerSecret
	) {
		logger.debug('↗ sending twitter message');

		let status = `${Print.inStock(link, store)}\n${
			link.cartUrl ? link.cartUrl : link.url
		}`;

		if (twitter.tweetTags) {
			status += `\n\n${twitter.tweetTags}`;
		}

		client.post('statuses/update', {status}, (error) => {
			if (error) {
				logger.error("✖ couldn't send twitter notification", error);
			} else {
				logger.info('✔ twitter notification sent');
			}
		});
	}
}

import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import PushBullet from '@jef/pushbullet';
import {config} from '../config';

const pushbullet = config.notifications.pushbullet;

export function sendPushbulletNotification(link: Link, store: Store) {
	if (pushbullet) {
		logger.debug('↗ sending pushbullet message');

		const pusher = new PushBullet(pushbullet);

		pusher.note(
			{},
			Print.inStock(link, store),
			link.cartUrl ? link.cartUrl : link.url,
			(error: Error) => {
				if (error) {
					logger.error("✖ couldn't send pushbullet message", error);
				} else {
					logger.info('✔ pushbullet message sent');
				}
			}
		);
	}
}

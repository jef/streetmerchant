import {Link, Store} from '../store/model';
import {Logger, Print} from '../logger';
import {Config} from '../config';
import PushBullet from 'pushbullet';

const pushBulletApiKey = Config.notifications.pushBulletApiKey;

export function sendPushBulletNotification(link: Link, store: Store) {
	const pusher = new PushBullet(pushBulletApiKey);

	pusher.note(
		{},
		Print.inStock(link, store),
		link.cartUrl ? link.cartUrl : link.url,
		(error: Error) => {
			if (error) {
				Logger.error('✖ couldn\'t send pushbullet message', error);
			} else {
				Logger.info('✔ pushbullet message sent');
			}
		});
}

import {Link, Store} from '../store/model';
import {Logger, Print} from '../logger';
import notifier from 'node-notifier';

export function sendDesktopNotification(link: Link, store: Store) {
	(async () => {
		notifier.notify({
			message: link.cartUrl ? link.cartUrl : link.url,
			title: Print.inStock(link, store)
		});

		Logger.info('✔ desktop notification sent');
	})();
}

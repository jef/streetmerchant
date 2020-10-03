import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {config} from '../config';
import notifier from 'node-notifier';

const desktop = config.notifications.desktop;

export function sendDesktopNotification(link: Link, store: Store) {
	if (desktop) {
		logger.debug('↗ sending desktop notification');
		(async () => {
			notifier.notify({
				message: link.cartUrl ? link.cartUrl : link.url,
				title: Print.inStock(link, store)
			});

			logger.info('✔ desktop notification sent');
		})();
	}
}

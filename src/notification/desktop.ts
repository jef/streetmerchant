import notifier from 'node-notifier';
import {Link} from '../store/model';

export function sendDesktopNotification(cartUrl: string, link: Link) {
	(async () => {
		const title = link.brand + ' ' + link.model + ' IN STOCK';
		const message = cartUrl;

		notifier.notify({
			title,
			message
		});
	})();
}

import {Link} from '../store/model';
import notifier from 'node-notifier';

export function sendDesktopNotification(cartUrl: string, link: Link) {
	(async () => {
		const title = link.brand + ' ' + link.model + ' IN STOCK';
		const message = cartUrl;

		notifier.notify({
			message,
			title
		});
	})();
}

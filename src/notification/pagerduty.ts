import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import PDClient from 'node-pagerduty';
import {config} from '../config';

const pd = new PDClient('');

export function sendPagerDutyNotification(link: Link, store: Store) {
	if (config.notifications.pagerduty.integrationKey) {
		logger.debug('↗ sending pagerduty message');
		const links = [
			{href: link.url, text: 'Visit Store'}
		];
		if (link.cartUrl) {
			links.push({
				href: link.cartUrl, text: 'Add to Cart'
			});
		}

		pd.events.sendEvent({
			dedup_key: link.url,
			event_action: 'trigger',
			payload: {
				links,
				severity: config.notifications.pagerduty.severity,
				source: store.name,
				summary: Print.inStock(link, store)
			},
			routing_key: config.notifications.pagerduty.integrationKey
		});
	}
}

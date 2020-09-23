import {Link, Store} from '../store/model';
import {sendNotification} from '../notification';

const link: Link = {
	brand: 'test:brand',
	cartUrl: 'test:cartUrl',
	model: 'test:model',
	series: 'test:series',
	url: 'test:url'
};

const store: Store = {
	labels: {
		inStock: {
			container: 'test:container',
			text: ['test:text']
		}
	},
	links: [link],
	name: 'test:name'
};

/**
 * Send test email.
 */
sendNotification(link, store);

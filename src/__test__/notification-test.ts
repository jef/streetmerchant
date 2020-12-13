import {Link, Store} from '../store/model';
import {sendNotification} from '../notification';

const link: Link = {
	brand: 'test:brand',
	cartUrl: 'https://www.example.com/cartUrl',
	model: 'test:model',
	price: 100,
	series: 'test:series',
	url: 'https://www.example.com/url'
};

const store: Store = {
	currency: '',
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

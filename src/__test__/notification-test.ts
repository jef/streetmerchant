import {Link} from '../store/model';
import {sendNotification} from '../notification';

const link: Link = {
	brand: 'test:brand',
	series: 'test:series',
	model: 'model',
	url: 'http://example.com/',
	cartUrl: 'http://example.com/'
};

/**
 * Send test email.
 */
sendNotification(link.cartUrl ?? link.url, link);

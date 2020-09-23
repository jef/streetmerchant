import {Link} from '../store/model';
import {sendNotification} from '../notification';

const link: Link = {
	brand: 'brand',
	cartUrl: 'http://example.com/',
	model: 'model',
	series: 'debug',
	url: 'http://example.com/'
};

/**
 * Send test email.
 */
sendNotification(link.cartUrl ?? link.url, link);

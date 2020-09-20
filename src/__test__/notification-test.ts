import {Link} from '../store/model';
import {sendNotification} from '../notification';

const link: Link = {
	series: 'debug',
	brand: 'brand',
	cartUrl: 'http://example.com/',
	model: 'model',
	url: 'http://example.com/'
};

/**
 * Send test email.
 */
sendNotification(link.cartUrl ?? link.url, link);

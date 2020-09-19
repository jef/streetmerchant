import {Config} from './config';
import {Stores} from './store/model';
import {Logger} from './logger';
import {sendNotification} from './notification';
import {lookup} from './store';

/**
 * Starts the bot.
 */
async function main() {
	const results = [];
	for (const store of Stores) {
		Logger.debug(store.links);
		results.push(lookup(store));
	}

	await Promise.all(results);

	Logger.info('↗ trying stores again');
	setTimeout(main, Config.rateLimitTimeout);
}

/**
 * Send test email.
 */
if (Config.notifications.test === 'true') {
	sendNotification('test');
}

/**
 * Will continually run until user interferes.
 */
try {
	void main();
} catch (error) {
	// Ignoring errors; more than likely due to rate limits
	Logger.error(error);
	void main();
}

import {Link, Store} from '..';
import {Print, logger} from '../../../logger';
import {delay, isStatusCodeInRange} from '../../../util';
import {config} from '../../../config';

type Backoff = {
	count: number;
	time: number;
};

const stores: Record<string, Backoff> = {};

export async function processBackoffDelay(
	store: Store,
	link: Link,
	statusCode: number
): Promise<number> {
	/**
	 * We treat statusCode 0 as successful as some of the puppeteer plugins
	 * cause side-effects resulting in an empty response object even though
	 * the page renders fine and its content is accessible.
	 */

	let backoffStatusCodes = store.backoffStatusCodes;

	if (!backoffStatusCodes) {
		backoffStatusCodes = [403];
	}

	const isBackoff = isStatusCodeInRange(statusCode, backoffStatusCodes);
	let backoff = stores[store.name];

	if (!backoff) {
		backoff = {count: 0, time: config.browser.minBackoff};
		stores[store.name] = backoff;
	}

	if (!isBackoff) {
		if (backoff.count > 0) {
			backoff.count--;
			backoff.time = Math.max(backoff.time / 2, config.browser.minBackoff);
		}

		return -1;
	}

	const backoffTime = backoff.time;
	logger.debug(
		Print.backoff(link, store, {delay: backoffTime, statusCode}, true)
	);

	await delay(backoff.time);

	backoff.count++;
	backoff.time = Math.min(backoff.time * 2, config.browser.maxBackoff);

	return backoffTime;
}

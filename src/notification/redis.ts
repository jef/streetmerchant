import {Link, Store} from '../store/model';
import redis, {RedisClient} from 'redis';
import {config} from '../config';
import {logger} from '../logger';

const {url} = config.notifications.redis;
let client: RedisClient;

function initRedis(): RedisClient | null {
	if (url) {
		client = redis.createClient({url});
	}

	return null;
}

export function updateRedis(link: Link, store: Store) {
	try {
		if (client) {
			const key = `${store.name}:${link.brand}:${link.model}`
				.split(' ')
				.join('-');

			const value = {
				...link,
				labels: store.labels,
				links: store.links,
				name: store.name,
				updatedAt: new Date().toUTCString()
			};

			const redisUpdated = client.set(key, JSON.stringify(value));

			if (redisUpdated) {
				logger.info('✔ redis updated');
			} else {
				logger.error(`✖ couldn't update redis for key (${key})`);
			}
		}
	} catch (error: unknown) {
		logger.error("✖ couldn't update redis", error);
	}
}

initRedis();

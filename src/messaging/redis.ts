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
        updatedAt: new Date().toUTCString(),
      };

      const message = JSON.stringify(value);
      client.set(key, message, (error, success) => {
        if (error) {
          logger.error(`✖ couldn't update redis for key (${key})`);
        } else {
          logger.info('✔ redis updated');
        }
      });

      client.publish('streetmerchant', message, (error, success) => {
        if (error) {
          logger.error(`✖ couldn't publish to redis`);
        } else {
          logger.info('✔ redis message published');
        }
      });
    }
  } catch (error: unknown) {
    logger.error("✖ couldn't update redis", error);
  }
}

initRedis();

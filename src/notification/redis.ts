import { Link, Store } from '../store/model';
import redis, { RedisClient } from 'redis';
import { config } from '../config';
import { logger } from '../logger';

const { url, pubchannel } = config.notifications.redis;
let client: RedisClient;

export function updateRedis(link: Link, store: Store) {
  try {
    if (!url || url.trim?.().length === 0) {
      return;
    }
    if (!client) {
      client = redis.createClient({
        url,
      });
    }
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

      client.set(key, JSON.stringify(value), function (err, res) {
        if (err) {
          logger.error(`✖ couldn't update redis for key (${key})`);
          logger.error(err);
        } else {
          logger.info('✔ redis updated');
        }
      });

      if (pubchannel) {
        client.publish(pubchannel, JSON.stringify({
          link: link,
          url: link.url,
          cartUrl: link.cartUrl,
          availableAt: new Date().toUTCString(),
        }), function (err, res) {
          if (err) {
            logger.error(`✖ couldn't publish to redis channel (${pubchannel}))`);
            logger.error(err);
          } else {
            logger.info('✔ redis pubsub published');
          }
        });
      }
    }
  } catch (error: unknown) {
    logger.error("✖ couldn't update redis", error);
  }
}

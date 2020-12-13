import redis from 'redis';
import { config } from '../config';
import { logger } from '../logger';
import { Link, Store } from '../store/model';

const {url} = config.notifications.redis;

const client = redis.createClient({
    url: url
});

const updateRedis = (link: Link, store: Store) => {

    try 
    {
        if(url)
        {
            const key = `${store.name}:${link.brand}:${link.model}`;

            const value = {
                ...link,
                labels: store.labels,
                name: store.name,
                links: store.links,
                updatedAt: new Date().toUTCString()
            };

            const redisUpdated = client.set(key, JSON.stringify(value));

            if (redisUpdated) {
                logger.error("✖ couldn't update redis");
            }
            else {
                logger.info('✔ redis updated');
            }
        }
    }
    catch (error) {
        logger.error("✖ couldn't update redis", error);
    }
}

export default updateRedis;
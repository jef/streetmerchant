import {Link, Store} from '../store/model';
import {config} from '../config';
import {logger} from '../logger';
import redis from 'redis';

const {url} = config.notifications.redis;

const client = redis.createClient({
    url: url
});

const updateRedis = (link: Link, store: Store) => {

    try 
    {
        if (url)
        {
            const key = `${store.name}:${link.brand}:${link.model}`;

            const value = {
                ...link,
                labels: store.labels,
                links: store.links,
                name: store.name,
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
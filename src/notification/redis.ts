import { config } from "../config";
import {Link, Store} from '../store/model';
import redis from 'redis';
import { logger } from "../logger";

const {host, databaseId} = config.notifications.redis;

const client = redis.createClient({
    host: host,
    db: databaseId ?? 1
});

const updateRedis = (link: Link, store: Store) => {
    try {
        if(host && databaseId)
    {
        const key = `${store.name}:${link.brand}:${link.model}`;

        const value = {
            ...link,
            labels: store.labels,
            name: store.name,
            links: store.links,
            updatedAt: new Date().toUTCString()
        };

        client.set(key, JSON.stringify(value), error => {
            if (error) {
                logger.error("✖ couldn't update redis", error);
            } else {
                logger.info('✔ redis updated');
            }
        });
    }
    } catch (error) {
        logger.error("✖ couldn't update redis", error);
    }
}

export default updateRedis;
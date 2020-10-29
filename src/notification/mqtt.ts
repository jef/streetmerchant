import {Link, Store} from '../store/model';
import MqttClient, {IClientOptions, IClientPublishOptions} from 'mqtt';
import {Print, logger} from '../logger';
import {config} from '../config';

const mqtt = config.notifications.mqtt;
let client: MqttClient.Client;

if (mqtt.broker) {
	if (checkInsecureUsage(mqtt.password, mqtt.broker)) {
		logger.warn('✖ Insecure transport of password - Only use credentials with MQTT brokers on private networks.');
	} else {
		const clientOptions: IClientOptions = {
			clean: (mqtt.clientId === ''),
			clientId: mqtt.clientId === '' ? undefined : mqtt.clientId,
			password: mqtt.password === '' ? undefined : mqtt.password,
			username: mqtt.username === '' ? undefined : mqtt.username
		};
		client = MqttClient.connect(`mqtt://${mqtt.broker}:${mqtt.port}`, clientOptions);
	}
}

export function sendMqttMessage(link: Link, store: Store) {
	if (client) {
		logger.debug('↗ sending mqtt message');

		(async () => {
			const givenUrl = link.cartUrl ? link.cartUrl : link.url;
			const message = `{"msg":"${Print.inStock(link, store)}", "url":"${givenUrl}"}`;
			const topic = generateTopic(link, store, mqtt.topic);
			const pubOptions: IClientPublishOptions = {
				qos: mqtt.qos as 0 | 1 | 2,
				retain: false
			};

			try {
				client.publish(
					topic,
					message,
					pubOptions
				);
				logger.info('✔ mqtt message sent');
			} catch (error) {
				logger.error('✖ couldn\'t send mqtt message', error);
			}
		})();
	}
}

function generateTopic(link: Link, store: Store, topic: string): string {
	topic.trim();
	topic = topic.replace(/^\//, '');
	topic = topic.replace(/%series%/g, link.series)
		.replace(/%brand%/g, link.brand)
		.replace(/%model%/g, link.model)
		.replace(/%store%/g, store.name);

	return topic;
}

/**
 * Basic protection against sending credentials in the clear over public networks.
 *	- Returns 'true' if password is supplied in .env but address/URL is not part of a private network
 *	- Private networks evaluated:	Class A, B, or C private IP's or linklocal URL ("*.local")
 *	- TLS could be implemented, however, the majority of MQTT services on the internet do not require user authentication.
 *	- If you find a 'cloud' MQTT broker requiring authentication for publishing alerts, consider using another MQTT service (for now).
 *
 */
function checkInsecureUsage(pass: string, address: string): boolean {
	if (pass !== '') {
		if (isClassANet(address) ||
			isClassBNet(address) ||
			isClassCNet(address) ||
			isLinkLocal(address)) {
			logger.debug(`MQTT using private network broker: ${address}`);
		} else {
			logger.debug(`MQTT using public network broker: ${address}`);
			return true;
		}
	}

	return false;
}

function isClassANet(address: string): boolean {
	const classRegex = /^(10\.(\d|[1-9]\d|[12][0-5]{2})\.(\d|[1-9]\d|[12][0-5]{2})\.(\d|[1-9]\d|[12][0-5]{2}))$/;

	return Boolean(classRegex.exec(address));
}

function isClassBNet(address: string): boolean {
	const classRegex = /^(172\.(1[6-9]|2\d|3[01])\.(\d|[1-9]\d|[12][0-5]{2})\.(\d|[1-9]\d|[12][0-5]{2}))$/;

	return Boolean(classRegex.exec(address));
}

function isClassCNet(address: string): boolean {
	const classRegex = /^(192\.168\.(\d|[1-9]\d|[12][0-5]{2})\.(\d|[1-9]\d|[12][0-5]{2}))$/;

	return Boolean(classRegex.exec(address));
}

function isLinkLocal(address: string): boolean {
	const linkLocal = /.+\.local$/;

	return Boolean(linkLocal.exec(address));
}

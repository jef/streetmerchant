import {Link, Store} from '../store/model';
import MqttClient, {IClientOptions, IClientPublishOptions} from 'mqtt';
import {Print, logger} from '../logger';
import {config} from '../config';

const mqtt = config.notifications.mqtt;
let client: MqttClient.Client;

if (mqtt.broker) {
	if (checkInsecureUsage()) {
		logger.warn('✖ Insecure transport of password - Only use credentials with local MQTT Brokers.');
	} else {
		const clientOptions: IClientOptions = {
			clientId: mqtt.clientId,
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
			const pubOptions: IClientPublishOptions = {
				qos: mqtt.qos as 0 | 1 | 2,
				retain: false
			};

			try {
				client.publish(
					mqtt.topic,
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

/**
 * Basic protection against sending credentials in the clear over the internet.
 *   - Returns 'true' if a password is supplied in .env and address is a URL (not an IP address).
 *		^^^	Assumption is that a URL indicates 'cloud' based MQTT Service, IP indicates local network MQTT Broker. (this is NOT fool-proof).
 *   - TLS could be implemented, however, the majority of MQTT brokers on the internet do not require user authentication.
 *   - IF you find a 'cloud' MQTT Broker requiring authentication, consider using another MQTT service (for now).
 *
 */
function checkInsecureUsage(): boolean {
	if (mqtt.password) {
		return !validateIPaddress(mqtt.broker);
	}

	return false;
}

function validateIPaddress(address: string): boolean {
	const ipformat = /^(25[0-5]|2[0-4]\d|[01]?\d{1,2})\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})$/;

	return Boolean(ipformat.exec(address));
}

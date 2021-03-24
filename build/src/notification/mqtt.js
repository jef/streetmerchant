"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMqttMessage = void 0;
const mqtt_1 = __importDefault(require("mqtt"));
const logger_1 = require("../logger");
const config_1 = require("../config");
const { mqtt } = config_1.config.notifications;
let client;
if (mqtt.broker) {
    if (checkInsecureUsage(mqtt.password, mqtt.broker)) {
        logger_1.logger.warn('✖ Insecure transport of password - Only use credentials with MQTT brokers on private networks.');
    }
    else {
        const clientOptions = {
            clean: mqtt.clientId === '',
            clientId: mqtt.clientId === '' ? undefined : mqtt.clientId,
            password: mqtt.password === '' ? undefined : mqtt.password,
            username: mqtt.username === '' ? undefined : mqtt.username,
        };
        client = mqtt_1.default.connect(`mqtt://${mqtt.broker}:${mqtt.port}`, clientOptions);
    }
}
function sendMqttMessage(link, store) {
    if (client) {
        logger_1.logger.debug('↗ sending mqtt message');
        (async () => {
            const givenUrl = link.cartUrl ? link.cartUrl : link.url;
            const message = `{"msg":"${logger_1.Print.inStock(link, store)}", "url":"${givenUrl}"}`;
            const topic = generateTopic(link, store, mqtt.topic);
            const pubOptions = {
                qos: mqtt.qos,
                retain: false,
            };
            try {
                client.publish(topic, message, pubOptions);
                logger_1.logger.info('✔ mqtt message sent');
            }
            catch (error) {
                logger_1.logger.error("✖ couldn't send mqtt message", error);
            }
        })();
    }
}
exports.sendMqttMessage = sendMqttMessage;
function generateTopic(link, store, topic) {
    topic.trim();
    topic = topic.replace(/^\//, '');
    topic = topic
        .replace(/%series%/g, link.series)
        .replace(/%brand%/g, link.brand)
        .replace(/%model%/g, link.model)
        .replace(/%store%/g, store.name);
    return topic;
}
/**
 * Basic protection against sending credentials in the clear over public networks.
 *	- Returns 'true' if password is supplied in dotenv but address/URL is not part of a private network
 *	- Private networks evaluated:	Class A, B, or C private IP's or linklocal URL ("*.local")
 *	- TLS could be implemented, however, the majority of MQTT services on the internet do not require user authentication.
 *	- If you find a 'cloud' MQTT broker requiring authentication for publishing alerts, consider using another MQTT service (for now).
 *
 */
function checkInsecureUsage(pass, address) {
    if (pass !== '') {
        if (isClassANet(address) ||
            isClassBNet(address) ||
            isClassCNet(address) ||
            isLinkLocal(address)) {
            logger_1.logger.debug(`MQTT using private network broker: ${address}`);
        }
        else {
            logger_1.logger.debug(`MQTT using public network broker: ${address}`);
            return true;
        }
    }
    return false;
}
function isClassANet(address) {
    const classRegex = /^(10\.(\d|[1-9]\d|[12][0-5]{2})\.(\d|[1-9]\d|[12][0-5]{2})\.(\d|[1-9]\d|[12][0-5]{2}))$/;
    return Boolean(classRegex.exec(address));
}
function isClassBNet(address) {
    const classRegex = /^(172\.(1[6-9]|2\d|3[01])\.(\d|[1-9]\d|[12][0-5]{2})\.(\d|[1-9]\d|[12][0-5]{2}))$/;
    return Boolean(classRegex.exec(address));
}
function isClassCNet(address) {
    const classRegex = /^(192\.168\.(\d|[1-9]\d|[12][0-5]{2})\.(\d|[1-9]\d|[12][0-5]{2}))$/;
    return Boolean(classRegex.exec(address));
}
function isLinkLocal(address) {
    const linkLocal = /.+\.local$/;
    return Boolean(linkLocal.exec(address));
}
//# sourceMappingURL=mqtt.js.map
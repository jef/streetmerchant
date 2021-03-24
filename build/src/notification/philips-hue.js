"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjustPhilipsHueLights = void 0;
const config_1 = require("../config");
const node_hue_api_1 = require("node-hue-api");
const logger_1 = require("../logger");
const { LightState } = node_hue_api_1.v3.lightStates;
const { apiKey, bridgeIp, lightIds, lightColor, lightPattern, clientId, clientSecret, accessToken, refreshToken, remoteApiUsername, } = config_1.config.notifications.philips_hue;
// Default Light State
const lightState = new LightState()
    .on(true)
    .brightness(100)
    .rgb(46.27, 72.55, 0);
const adjustLightsWithAPI = (hueBridge) => {
    logger_1.logger.debug('Connected to Philips Hue bridge.');
    // Set the custom light state (COLOR and METHOD here)
    if (lightColor) {
        const rgbArray = lightColor.split(',');
        // If there's not three values, must not be RGB
        if (rgbArray.length === 3) {
            lightState.rgb(rgbArray[0], rgbArray[1], rgbArray[2]);
        }
        else {
            logger_1.logger.debug('✖ Error assigning RGB Values');
        }
    }
    // If blink is specified, then blink the lights
    if (lightPattern === 'blink') {
        lightState.alertLong();
    }
    // If we've been given light IDs, then only adjust those IDs
    if (lightIds) {
        const arrayOfIDs = lightIds.split(',');
        arrayOfIDs.forEach(light => {
            logger_1.logger.debug('adjusting specified lights');
            hueBridge.lights.setLightState(light, lightState).catch((error) => {
                logger_1.logger.error('Failed to adjust specified lights.');
                logger_1.logger.error(error);
                throw error;
            });
        });
    }
    else {
        // Adjust all light IDs
        hueBridge.lights
            .getAll()
            .then((allLights) => {
            allLights.forEach((light) => {
                logger_1.logger.debug('adjusting all hue lights');
                hueBridge.lights.setLightState(light, lightState).catch((error) => {
                    logger_1.logger.error('Failed to adjust all lights.');
                    logger_1.logger.error(error);
                    throw error;
                });
            });
        })
            .catch((error) => {
            logger_1.logger.error('Failed to get all lights.');
            logger_1.logger.error(error);
            throw error;
        });
    }
};
function adjustPhilipsHueLights() {
    // Check if the required variables have been set
    if (apiKey && bridgeIp) {
        logger_1.logger.info('↗ adjusting Philips Hue lights over LAN');
        (async () => {
            logger_1.logger.debug('Attempting to connect to Philips Hue bridge at ' + bridgeIp);
            node_hue_api_1.v3.api
                .createLocal(bridgeIp)
                .connect(apiKey)
                .then(hueBridge => {
                adjustLightsWithAPI(hueBridge);
                logger_1.logger.info('✔ adjusted Philips Hue lights over LAN');
            }, (error) => {
                logger_1.logger.error("✖ couldn't adjust hue lights.", error);
            });
        })();
    }
    else if (apiKey && clientId && clientSecret) {
        logger_1.logger.info('↗ adjusting Philips Hue lights over cloud');
        (async () => {
            logger_1.logger.debug('Attempting to connect to Philips Hue bridge over cloud');
            const remoteBootstrap = node_hue_api_1.v3.api.createRemote(clientId, clientSecret);
            if (accessToken && refreshToken) {
                remoteBootstrap
                    .connectWithTokens(accessToken, refreshToken, remoteApiUsername)
                    .then(hueBridge => {
                    adjustLightsWithAPI(hueBridge);
                    logger_1.logger.info('✔ adjusted Philips Hue lights over cloud');
                }, (error) => {
                    logger_1.logger.error('Failed to get a remote Philips Hue connection using supplied tokens.');
                    logger_1.logger.error(error);
                    throw error;
                });
            }
        })();
    }
}
exports.adjustPhilipsHueLights = adjustPhilipsHueLights;
//# sourceMappingURL=philips-hue.js.map
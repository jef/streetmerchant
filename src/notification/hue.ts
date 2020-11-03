import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {config} from '../config';

// Import the Hue API
import {v3 as hueAPI} from 'node-hue-api';
const hue = config.notifications.hue;
const apiKey = hue.apiKey;
const bridgeIp = hue.bridgeIp;
const lightIds = hue.lightIds;
const lightColor = hue.lightColor;
const lightPattern = hue.lightPattern;
const LightState = hueAPI.lightStates.LightState;

// Default Light State
const lightState = new LightState()
    .on(true)
    .brightness(100)
    .rgb(46.27, 72.55, 0);
;

export function adjustHueLights() {
    // Check if the required variables have been set
    if (config.notifications.hue.apiKey && config.notifications.hue.bridgeIp){
        logger.debug('↗ adjusting hue lights');
        (async () => {
            logger.info('Attempting to connect to Hue bridge at ' + bridgeIp)
            hueAPI.api.createLocal(bridgeIp).connect(apiKey).then(
                // Fulfilled
                (hueBridge) => {
                    logger.debug('Connected to Hue bridge.')
                    // Set the custom light state (COLOR and METHOD here)
                    if (lightColor){
                        let rgbArray = lightColor.split(",");
                        // If there's not three values, must not be RGB
                        if (rgbArray.length == 3) {
                            lightState.rgb(rgbArray[0], rgbArray[1], rgbArray[2]);
                        } else {
                            logger.debug('✖ Error assigning RGB Values');
                        }
                    }
                    // If we've been given light IDs, then only adjust those IDs
                    if (lightIds) {
                        let arrayOfIDs = lightIds.split(",");
                        arrayOfIDs.forEach(light => {
                            hueBridge.lights.setLightState(light, lightState);
                        })
                    } else {  // Adjust all light IDs
                        hueBridge.lights.getAll().then(allLights => {
                            allLights.forEach(light => {
                                hueBridge.lights.setLightState(light, lightState);
                            })
                        })
                    }
                },
                // Rejected, log the error
                (error) => {
                    logger.error('✖ couldn\'t adjust hue lights.', error);
                });

        })();
    }
    else {
        logger.error('✖ couldn\'t adjust hue lights')
    }
}
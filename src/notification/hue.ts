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
const clientId = hue.clientId;
const clientSecret = hue.clientSecret;
const accessToken  = hue.accessToken;
const refreshToken = hue.refreshToken;
const remoteApiUsername = hue.remoteApiUsername;


// Default Light State
const lightState = new hueAPI.lightStates.LightState()
    .on(true)
    .brightness(100)
    .rgb(46.27, 72.55, 0);
;


const adjustLightsWithAPI = (hueBridge: import("node-hue-api/lib/api/Api")) => {
    logger.debug('Connected to Hue bridge.');
    // Set the custom light state (COLOR and METHOD here)
    if (lightColor) {
        let rgbArray = lightColor.split(",");
        // If there's not three values, must not be RGB
        if (rgbArray.length == 3) {
            lightState.rgb(rgbArray[0], rgbArray[1], rgbArray[2]);
        } else {
            logger.debug('✖ Error assigning RGB Values');
        }
    }

    // If blink is specified, then blink the lights
    if (lightPattern == "blink") {
        lightState.alertLong();
    }

    // If we've been given light IDs, then only adjust those IDs
    if (lightIds) {
        let arrayOfIDs = lightIds.split(",");
        arrayOfIDs.forEach(light => {
            logger.debug('adjusting all hue lights')
            hueBridge.lights.setLightState(light, lightState);
        });
    } else { // Adjust all light IDs
        hueBridge.lights.getAll().then((allLights: any[]) => {
            allLights.forEach((light: any) => {
                logger.debug('adjusting specified lights')
                hueBridge.lights.setLightState(light, lightState);
            });
        });
    }
};


export function adjustHueLights() {
    // Check if the required variables have been set
    if (hue.apiKey && hue.bridgeIp){
        logger.info('↗ adjusting Hue lights over LAN');
        (async () => {
            logger.debug('Attempting to connect to Hue bridge at ' + bridgeIp)
            hueAPI.api.createLocal(bridgeIp).connect(apiKey).then(
                // Fulfilled
                (hueBridge) => {
                    adjustLightsWithAPI(hueBridge);
                    logger.info('✔ adjusted Hue lights over LAN');
                },
                // Rejected, log the error
                (error) => {
                    logger.error('✖ couldn\'t adjust hue lights.', error);
                });

        })();
    } else if (hue.remoteApiUsername && hue.clientId && hue.clientSecret){
        logger.info('↗ adjusting Hue lights over cloud');
        (async () => {
            logger.debug('Attempting to connect to Hue bridge over cloud');
            const remoteBootstrap = hueAPI.api.createRemote(clientId, clientSecret);
            if (hue.accessToken && hue.refreshToken){
                remoteBootstrap.connectWithTokens(accessToken, refreshToken, remoteApiUsername)
                    .then((hueBridge) => {
                        adjustLightsWithAPI(hueBridge);
                        logger.info('✔ adjusted Hue lights over cloud');
                    })
                    .catch(err => {
                        logger.error('Failed to get a remote Hue connection using supplied tokens.');
                        logger.error(err);
                    });
            }
        })();
    }
    else {
        logger.error('✖ couldn\'t adjust hue lights')
    }
}
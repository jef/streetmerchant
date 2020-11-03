import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {config} from '../config';

// Import the Hue API
import {v3 as hueAPI} from 'node-hue-api';
import { HelixUserApi } from 'twitch/lib/API/Helix/User/HelixUserApi';
const hue = config.notifications.hue;
const apiKey = hue.apiKey;
const bridgeIp = hue.bridgeIp;
const lightIds = hue.lightIds;
const lightColor = hue.lightColor;
const lightPattern = hue.lightPattern;
const LightState = hueAPI.lightStates.LightState;
const clientId = hue.clientId;
const clientSecret = hue.clientSecret;
const accessToken  = hue.accessToken;
const refreshToken = hue.refreshToken;
const remoteApiUsername = hue.remoteApiUsername;



// Default Light State
const lightState = new LightState()
    .on(true)
    .brightness(100)
    .rgb(46.27, 72.55, 0);
;


const adjustLights = (hueBridge: import("node-hue-api/lib/api/Api")) => {
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
                    adjustLights(hueBridge);
                    logger.info('✔ adjusted Hue lights over LAN');
                },
                // Rejected, log the error
                (error) => {
                    logger.error('✖ couldn\'t adjust hue lights.', error);
                });

        })();
    } else if (hue.clientId && hue.clientSecret){
        logger.info('↗ adjusting Hue lights over cloud');
        (async () => {
            logger.debug('Attempting to connect to Hue bridge over cloud');
            const remoteBootstrap = hueAPI.api.createRemote(clientId, clientSecret);
            if (hue.accessToken && hue.refreshToken){
                remoteBootstrap.connectWithTokens(accessToken, refreshToken, remoteApiUsername)
                    .catch(err => {
                        logger.error('Failed to get a remote Hue connection using supplied tokens.');
                        logger.error(err);
                        process.exit(1);
                    })
                    .then((hueBridge) => {
                        adjustLights(hueBridge);
                        logger.info('✔ adjusted Hue lights over cloud');
                    });
            }
        })();
    }
    else {
        logger.error('✖ couldn\'t adjust hue lights')
    }
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
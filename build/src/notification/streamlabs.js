"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendStreamLabsAlert = void 0;
const logger_1 = require("../logger");
const config_1 = require("../config");
const url_1 = require("url");
const node_fetch_1 = __importDefault(require("node-fetch"));
const { streamlabs } = config_1.config.notifications;
let requestParams;
if (streamlabs.accessToken && streamlabs.type) {
    requestParams = new url_1.URLSearchParams();
    requestParams.append('access_token', streamlabs.accessToken);
    requestParams.append('type', streamlabs.type);
    requestParams.append('image_href', streamlabs.imageHref);
    requestParams.append('sound_href', streamlabs.soundHref);
    requestParams.append('duration', streamlabs.duration.toString());
}
function sendStreamLabsAlert(link, store) {
    if (requestParams) {
        logger_1.logger.debug('↗ sending StreamLabs alert');
        (async () => {
            const message = `${logger_1.Print.inStock(link, store)}`;
            requestParams.set('message', message);
            try {
                const response = await node_fetch_1.default('https://streamlabs.com/api/v1.0/alerts', {
                    method: 'POST',
                    body: requestParams,
                });
                const json = await response.json();
                if (!json.success)
                    throw Error(JSON.stringify(json));
                logger_1.logger.info('✔ StreamLabs alert sent');
            }
            catch (error) {
                logger_1.logger.error("✖ couldn't send StreamLabs alert", error);
            }
        })();
    }
}
exports.sendStreamLabsAlert = sendStreamLabsAlert;
//# sourceMappingURL=streamlabs.js.map
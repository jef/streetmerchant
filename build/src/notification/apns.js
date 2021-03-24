"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendApns = void 0;
const logger_1 = require("../logger");
const apn = __importStar(require("@parse/node-apn"));
const config_1 = require("../config");
const { apns } = config_1.config.notifications;
function sendApns(link, store) {
    const options = {
        token: {
            key: apns.apnsAuthKey,
            keyId: apns.apnsKeyId,
            teamId: apns.apnsTeamId,
        },
        production: apns.apnsProduction,
    };
    if (options.token.key.length <= 0 ||
        options.token.keyId.length <= 0 ||
        options.token.teamId.length <= 0) {
        return;
    }
    const apnProvider = new apn.Provider(options);
    const note = new apn.Notification();
    note.badge = 1;
    note.sound = 'ping.aiff';
    note.alert = '\uD83D\uDCE7 \u2709 You have a new message';
    note.payload = { label: '1' };
    note.topic = apns.apnsBundleId;
    apnProvider.send(note, apns.apnsDeviceToken).then(result => {
        // see documentation for an explanation of result
        if (result.sent) {
            logger_1.logger.info('✔ push notification sent');
        }
        else {
            logger_1.logger.error("✖ couldn't send push notification", result.failed);
        }
        apnProvider.shutdown();
    });
}
exports.sendApns = sendApns;
//# sourceMappingURL=apns.js.map
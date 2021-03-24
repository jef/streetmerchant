"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateSmartthingsSwitch = void 0;
const samsung_smart_api_1 = require("@bridgerakol/samsung-smart-api");
const logger_1 = require("../logger");
const config_1 = require("../config");
const { smartthings } = config_1.config.notifications;
async function activateSmartthingsSwitch() {
    if (!smartthings.token || !smartthings.device) {
        return;
    }
    const st = new samsung_smart_api_1.SmartThings(smartthings.token);
    let match = false;
    try {
        await st.devices.getList().then(res => {
            res.data.items.forEach(async (item) => {
                if (smartthings.device === item.label) {
                    match = true;
                    const device_status = (await st.devices.getStatus(item.deviceId))
                        .data.components.main.switch.switch.value;
                    if (device_status !== 'on') {
                        logger_1.logger.debug(`Turning on ${smartthings.device}`);
                        st.devices.commands(item.deviceId, 'on');
                    }
                }
            });
        });
    }
    catch (TypeError) {
        logger_1.logger.warn('SmartThings : Problem getting data from hub, check SMARTTHINGS_TOKEN');
        return;
    }
    if (!match) {
        logger_1.logger.warn(`SmartThings : No switch called ${smartthings.device}, check SMARTTHINGS_SWITCH_LABEL`);
        return;
    }
}
exports.activateSmartthingsSwitch = activateSmartthingsSwitch;
//# sourceMappingURL=smartthings.js.map
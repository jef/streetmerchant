import {SmartThings} from '@bridgerakol/samsung-smart-api';
import {logger} from '../logger';
import {config} from '../config';

const {smartthings} = config.notifications;

export async function activateSmartthingsSwitch() {
  if (!smartthings.token || !smartthings.device) {
    return;
  }
  const st = new SmartThings(smartthings.token);
  let match = false;
  try {
    await st.devices.getList().then(res => {
      res.data.items.forEach(
        async (item: {label: string; deviceId: string}) => {
          if (smartthings.device === item.label) {
            match = true;
            const device_status = (await st.devices.getStatus(item.deviceId))
              .data.components.main.switch.switch.value;
            if (device_status !== 'on') {
              logger.debug(`Turning on ${smartthings.device}`);
              st.devices.commands(item.deviceId, 'on');
            }
          }
        }
      );
    });
  } catch (TypeError) {
    logger.warn(
      'SmartThings : Problem getting data from hub, check SMARTTHINGS_TOKEN'
    );
    return;
  }
  if (!match) {
    logger.warn(
      `SmartThings : No switch called ${smartthings.device}, check SMARTTHINGS_SWITCH_LABEL`
    );
    return;
  }
}

import {config} from '../config';
import fetch, {Response} from 'node-fetch';
import {logger} from '../logger';

const {smartthings} = config.notifications;

export async function activateSmartthingsSwitch() {
  if (!smartthings.token || !smartthings.device) {
    return;
  }
  const unmatchedDevices: Array<string> = [];

  const res = await fetch('https://api.smartthings.com/v1/devices', {
    headers: {Authorization: `Bearer ${smartthings.token}`},
  });
  const devices = await res.json();

  const promises: Array<Promise<Response>> = [];
  for (const {label, deviceId} of devices) {
    if (smartthings.device !== label) {
      unmatchedDevices.push(label);
    }

    promises.push(
      fetch(`https://api.smartthings.com/v1/devices/${deviceId}/commands`, {
        method: 'post',
        headers: {Authorization: `Bearer ${smartthings.token}`},
        body: JSON.stringify({
          commands: [
            {
              component: 'main',
              capability: 'switch',
              command: 'on',
            },
          ],
        }),
      })
    );
  }

  await Promise.all(promises);

  if (unmatchedDevices.length > 0) {
    logger.warn(
      `smartthings: cannot find ${unmatchedDevices.toString()}, check SMARTTHINGS_SWITCH_LABEL`
    );
  }
}

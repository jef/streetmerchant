import {config} from '../config';
import {getDiscordCaptchaInputAsync} from './discord';
import {getSlackCaptchaInputAsync} from './slack';

const {service} = config.captchaHandler;

export async function getCaptchaInputAsync(
  payload: string,
  timeout?: number
): Promise<string> {
  switch (service) {
    case 'discord':
      return await getDiscordCaptchaInputAsync(payload, timeout);
    case 'slack':
      return await getSlackCaptchaInputAsync(payload, timeout);
    default:
      return '';
  }
}

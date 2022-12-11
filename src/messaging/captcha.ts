import {config} from '../config';
import {sendDMAndGetResponseAsync as getWithDiscord} from './discord';
import {sendDMAndGetResponseAsync as getWithSlack} from './slack';
import {DMPayload} from '.';

export type CaptchaPayload = DMPayload; // for now this is a 1:1 alias

const {service} = config.captchaHandler;

/**
 * Picks the service that will handle the user interaction
 * based on configuration and sends the payload to that service
 *
 * @param payload the content to send to user
 * @param timeout timeout for response, in seconds
 * @returns response from user
 */
export async function getCaptchaInputAsync(
  payload: CaptchaPayload,
  timeout?: number
): Promise<string> {
  switch (service) {
    case 'discord':
      return await getWithDiscord(payload, timeout);
    case 'slack':
      return await getWithSlack(payload, timeout);
    default:
      return '';
  }
}

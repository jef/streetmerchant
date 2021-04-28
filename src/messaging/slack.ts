import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {WebClient} from '@slack/web-api';
import {config} from '../config';

type ClientTypes = 'service' | 'captcha';
type ClientMap<T> = {
  [clientType in ClientTypes]: T;
};

const {channel} = config.notifications.slack;
const {pollInterval, responseTimeout, userId} = config.captchaHandler;
const clients: ClientMap<WebClient | undefined> = {
  service: undefined,
  captcha: undefined,
};
const tokens: ClientMap<string> = {
  service: config.notifications.slack.token,
  captcha: config.captchaHandler.token,
};

export function sendSlackMessage(
  link: Link,
  store: Store,
  client: WebClient = getClient()
) {
  if (channel && client.token) {
    logger.debug('↗ sending slack message');

    (async () => {
      const givenUrl = link.cartUrl ? link.cartUrl : link.url;

      try {
        const result = await client.chat.postMessage({
          channel: channel.replace('#', ''),
          text: `${Print.inStock(link, store)}\n${givenUrl}`,
        });

        if (!result.ok) {
          logger.error("✖ couldn't send slack message", result);
          return;
        }

        logger.info('✔ slack message sent');
      } catch (error: unknown) {
        logger.error("✖ couldn't send slack message", error);
      }
    })();
  }
}

export async function sendDMAsync(
  payload: string,
  client: WebClient = getClient()
) {
  if (userId && client.token) {
    logger.debug('↗ sending slack DM');

    try {
      const dmResult = await client.conversations.open({
        users: `${userId}`,
        return_im: false,
      });

      if (!dmResult.ok) {
        logger.error("✖ couldn't open slack DM thread", dmResult);
        return;
      }

      const dmChannel = (dmResult as any).channel?.id.replace('#', '');
      logger.debug(`sending DM to channel id ${dmChannel}...`);
      const result = await client.chat.postMessage({
        channel: dmChannel,
        text: payload,
      });

      if (!result.ok) {
        logger.error("✖ couldn't send slack DM", result);
        return;
      }

      logger.info('✔ slack DM sent');
      return result as any;
    } catch (error: unknown) {
      logger.error("✖ couldn't send slack DM", error);
    }
  } else {
    logger.warn("✖ couldn't send slack DM, missing configuration");
  }
  return;
}

export async function getDMResponseAsync(
  botMessage: any,
  timeout: number,
  client: WebClient = getClient()
): Promise<string> {
  if (!botMessage || !client.token) return '';
  const iterations = Math.max(Math.floor(timeout / pollInterval), 1);
  let iteration = 0;
  return new Promise(resolve => {
    let response = '';
    const finish = (result: string) => {
      clearInterval(intervalId);
      resolve(result);
    };
    const intervalId = setInterval(async () => {
      try {
        iteration++;

        const threadResult = await client.conversations.replies({
          channel: botMessage.channel,
          ts: botMessage.ts,
        });

        if (!threadResult.ok) {
          logger.error("✖ couldn't open slack DM thread", threadResult);
          return finish(response);
        }

        const messages = (threadResult as any).messages;

        if (!messages.length) {
          logger.error('✖ no messages found in history');
          return finish(response);
        }

        const lastUserMessage = messages
          .filter((m: any) => !Object.keys(m).includes('bot_id'))
          .sort((a: any, b: any) => Number(b.ts) - Number(a.ts))[0];
        if (!lastUserMessage) {
          if (iteration >= iterations) {
            await client.chat.postMessage({
              channel: botMessage.channel,
              thread_ts: botMessage.ts,
              text: 'Timed out waiting for response... :crying_cat_face:',
            });
            logger.error('✖ no response from user');
            return finish(response);
          }
        } else {
          response = lastUserMessage.text;

          await client.reactions.add({
            channel: botMessage.channel,
            name: 'white_check_mark',
            timestamp: lastUserMessage.ts,
          });

          logger.info(`✔ got captcha response: ${response}`);

          return finish(response);
        }
      } catch (error: unknown) {
        logger.error("✖ couldn't get captcha response", error);

        return finish(response);
      }
    }, pollInterval * 1000);
  });
}

export async function getSlackCaptchaInputAsync(
  payload: string,
  timeout?: number
): Promise<string> {
  const captchaClient = getClient('captcha');
  const botMessage = await sendDMAsync(payload, captchaClient);
  return await getDMResponseAsync(
    botMessage,
    timeout || responseTimeout,
    captchaClient
  );
}

function getClient(clientType: ClientTypes = 'service'): WebClient {
  if (!clients[clientType]) {
    const token = tokens[clientType] || tokens['service']; // attempt to fall back to service token
    clients[clientType] = new WebClient(token);
  }
  return clients[clientType] as WebClient;
}

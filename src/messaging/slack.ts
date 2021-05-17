import {existsSync, readFileSync} from 'fs';
import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {WebClient} from '@slack/web-api';
import {config} from '../config';
import {DMPayload} from '.';

interface SlackBotMessage {
  ts: string;
  channel: never;
}

type ClientTypes = 'service' | 'dm';
type ClientMap<T> = {
  [clientType in ClientTypes]: T;
};

const {channel} = config.notifications.slack;
const {pollInterval, responseTimeout, userId} = config.captchaHandler;
const clients: ClientMap<WebClient | undefined> = {
  service: undefined,
  dm: undefined,
};
const tokens: ClientMap<string> = {
  service: config.notifications.slack.token,
  dm: config.captchaHandler.token,
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
  payload: DMPayload,
  client: WebClient = getClient()
): Promise<SlackBotMessage | undefined> {
  if (userId && client.token) {
    logger.debug('↗ sending slack DM');
    try {
      const dmResult = await client.conversations.open({
        users: `${userId}`,
        return_im: false,
      });
      logger.debug(`DM thread result: ${JSON.stringify(dmResult)}`);

      if (!dmResult.ok) {
        logger.error("✖ couldn't open slack DM thread", dmResult);
        return;
      }

      const dmChannel = (dmResult as any).channel?.id.replace('#', '');
      logger.debug(`sending DM to channel id ${dmChannel}...`);
      let result: any = undefined;
      let out: any;
      try {
        if (payload.type === 'image') {
          const image = await loadImageBuffer(payload.content);
          const uploadResult = await client.files.upload({
            channels: dmChannel,
            file: image,
          });
          if (uploadResult.ok) {
            const dmResult = await client.conversations.history({
              channel: dmChannel,
            });
            if (dmResult.ok) {
              const messages = (dmResult as any).messages;
              const lastBotMessage = messages
                .filter((m: any) => m.user !== userId)
                .sort((a: any, b: any) => Number(b.ts) - Number(a.ts))[0];
              result = {
                ts: lastBotMessage.ts,
                ok: true,
              };
            }
          }
        } else {
          result = await client.chat.postMessage({
            channel: dmChannel,
            text: payload.content,
          });
        }
        out = {ts: result.ts, channel: dmChannel};
        if (!result.ok) return;
      } catch (error: unknown) {
        logger.error("✖ couldn't send slack DM", error);
        return;
      }

      logger.info('✔ slack DM sent');
      logger.debug(`sendDM output: ${JSON.stringify(out)}`);
      return out;
    } catch (error: unknown) {
      logger.error("✖ couldn't send slack DM", error);
    }
  } else {
    logger.warn("✖ couldn't send slack DM, missing configuration");
  }
  return;
}

export async function getDMResponseAsync(
  botMessage: SlackBotMessage,
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
        logger.debug(`messages result: ${JSON.stringify(messages)}`);
        if (!messages.length) {
          logger.error('✖ no messages found in history');
          return finish(response);
        }

        const lastUserMessage = messages
          .filter(
            (m: any) => !Object.keys(m).includes('bot_id') && m.user === userId
          )
          .sort((a: any, b: any) => Number(b.ts) - Number(a.ts))[0];
        logger.debug(`lastUserMessage: ${JSON.stringify(lastUserMessage)}`);
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

export async function sendDMAndGetResponseAsync(
  payload: DMPayload,
  timeout?: number
): Promise<string> {
  let userInput = '';
  const dmClient = getClient('dm');
  const botMessage = await sendDMAsync(payload, dmClient);
  if (botMessage) {
    userInput = await getDMResponseAsync(
      botMessage,
      timeout || responseTimeout,
      dmClient
    );
  }
  return userInput;
}

function getClient(clientType: ClientTypes = 'service'): WebClient {
  if (!clients[clientType]) {
    const token = tokens[clientType] || tokens['service']; // attempt to fall back to service token
    clients[clientType] = new WebClient(token);
  }
  return clients[clientType] as WebClient;
}

async function loadImageBuffer(path: string): Promise<Buffer | undefined> {
  let buffer = undefined;
  if (existsSync(path)) {
    buffer = readFileSync(path);
  }
  return buffer;
}

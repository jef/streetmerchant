import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {WebClient} from '@slack/web-api';
import {config} from '../config';

const {channel, token} = config.notifications.slack;
const {pollInterval, responseTimeout, userId} = config.captchaHandler;
const web = new WebClient(token);

export function sendSlackMessage(link: Link, store: Store) {
  if (channel && token) {
    logger.debug('↗ sending slack message');

    (async () => {
      const givenUrl = link.cartUrl ? link.cartUrl : link.url;

      try {
        const result = await web.chat.postMessage({
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

export async function sendDMAsync(payload: string) {
  if (userId && token) {
    logger.debug('↗ sending slack DM');

    try {
      const dmResult = await web.conversations.open({
        users: `${userId}`,
        return_im: false,
      });

      if (!dmResult.ok) {
        logger.error("✖ couldn't open slack DM thread", dmResult);
        return;
      }

      const result = await web.chat.postMessage({
        channel: (dmResult as any).channel?.id.replace('#', ''),
        text: payload,
      });

      if (!result.ok) {
        logger.error("✖ couldn't send slack DM", result);
        return;
      }

      logger.info('✔ slack DM sent');

      return {ts: (result as any).ts, channel: (result as any).channel};
    } catch (error: unknown) {
      logger.error("✖ couldn't send slack DM", error);
    }
  }
  return;
}

export async function getDMResponseAsync(
  dmId: any,
  timeout: number
): Promise<string> {
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

        const threadResult = await web.conversations.replies({
          channel: dmId.channel,
          ts: dmId.ts,
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
            await web.chat.postMessage({
              channel: dmId.channel,
              thread_ts: dmId.ts,
              text: 'Timed out waiting for response... :crying_cat_face:',
            });
            logger.error('✖ no response from user');
            return finish(response);
          }
        } else {
          response = lastUserMessage.text;

          await web.reactions.add({
            channel: dmId.channel,
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
  const dmId = await sendDMAsync(payload);
  return await getDMResponseAsync(dmId, timeout || responseTimeout);
}

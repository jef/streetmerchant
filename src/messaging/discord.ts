import {Link, Store} from '../store/model';
import Discord from 'discord.js';
import {config} from '../config';
import {logger} from '../logger';
import {DMPayload} from '.';

const {notifyGroup, webhooks, notifyGroupSeries} = config.notifications.discord;
const {pollInterval, responseTimeout, token, userId} = config.captchaHandler;

function getIdAndToken(webhook: string) {
  const match = /.*\/webhooks\/(\d+)\/(.+)/.exec(webhook);

  if (!match) {
    throw new Error('could not get discord webhook');
  }

  return {
    id: match[1],
    token: match[2],
  };
}

export function sendDiscordMessage(link: Link, store: Store) {
  if (webhooks.length > 0) {
    logger.debug('↗ sending discord message');

    (async () => {
      try {
        const embed = new Discord.MessageEmbed()
          .setTitle('_**Stock alert!**_')
          .setDescription(
            '> provided by [streetmerchant](https://github.com/jef/streetmerchant) with :heart:'
          )
          .setThumbnail(
            'https://raw.githubusercontent.com/jef/streetmerchant/main/docs/assets/images/streetmerchant-logo.png'
          )
          .setColor('#52b788')
          .setTimestamp();

        embed.addField('Store', store.name, true);
        if (link.price)
          embed.addField('Price', `${store.currency}${link.price}`, true);
        embed.addField('Product Page', link.url);
        if (link.cartUrl) embed.addField('Add to Cart', link.cartUrl);
        embed.addField('Brand', link.brand, true);
        embed.addField('Model', link.model, true);
        embed.addField('Series', link.series, true);

        embed.setTimestamp();

        let notifyText: string[] = [];

        if (notifyGroup) {
          notifyText = notifyText.concat(notifyGroup);
        }

        const notifyKeys = Object.keys(notifyGroupSeries);
        const notifyIndex = notifyKeys.indexOf(link.series);
        if (notifyIndex !== -1) {
          notifyText = notifyText.concat(
            Object.values(notifyGroupSeries)[notifyIndex]
          );
        }

        const promises = [];
        for (const webhook of webhooks) {
          const {id, token} = getIdAndToken(webhook);
          const client = new Discord.WebhookClient(id, token);

          promises.push(
            new Promise((resolve, reject) => {
              client
                .send(notifyText.join(' '), {
                  embeds: [embed],
                  username: 'streetmerchant',
                })
                .then(resp => {
                  logger.info('✔ discord message sent resp.id: ' + resp.id);
                  resolve(resp);
                })
                .catch(err => reject(err))
                .finally(() => client.destroy());
            })
          );
        }

        await Promise.all(promises).catch(err =>
          logger.error("✖ couldn't send discord message", err)
        );
      } catch (error: unknown) {
        logger.error("✖ couldn't send discord message", error);
      }
    })();
  }
}

export async function sendDMAsync(
  payload: DMPayload
): Promise<Discord.Message | undefined> {
  if (userId && token) {
    logger.debug('↗ sending discord DM');
    let client = undefined;
    let dmChannel = undefined;
    try {
      client = await getDiscordClientAsync();
      dmChannel = await getDMChannelAsync(client);
      if (!dmChannel) {
        logger.error('unable to get discord DM channel');
        return;
      }
      let message: string | {} = payload;
      if (payload.type === 'image') {
        message = {
          files: [
            {
              attachment: payload.content,
              name: payload.content,
            },
          ],
        };
      }
      const result = await dmChannel.send(message);
      logger.info('✔ discord DM sent');
      return result;
    } catch (error: unknown) {
      logger.error("✖ couldn't send discord DM", error);
    } finally {
      client?.destroy();
    }
  } else {
    logger.warn("✖ couldn't send discord DM, missing configuration");
  }
  return;
}

export async function getDMResponseAsync(
  botMessage: Discord.Message | undefined,
  timeout: number
): Promise<string> {
  if (!botMessage) return '';
  const iterations = Math.max(Math.floor(timeout / pollInterval), 1);
  let iteration = 0;
  const client = await getDiscordClientAsync();
  const dmChannel = await getDMChannelAsync(client);
  if (!dmChannel) {
    logger.error('unable to get discord DM channel');
    return '';
  }
  return new Promise(resolve => {
    let response = '';
    const intervalId = setInterval(async () => {
      const finish = (result: string) => {
        client?.destroy();
        clearInterval(intervalId);
        resolve(result);
      };
      try {
        iteration++;
        const messages = await dmChannel.messages.fetch({
          after: botMessage?.id,
        });
        const lastUserMessage = messages
          .filter(message => message.reference?.messageID === botMessage?.id)
          .last();
        if (!lastUserMessage) {
          if (iteration >= iterations) {
            await dmChannel.send('Timed out waiting for response... 😿');
            logger.error('✖ no response from user');
            return finish(response);
          }
        } else {
          response = lastUserMessage.cleanContent;
          await lastUserMessage.react('✅');
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
  const message = await sendDMAsync(payload);
  const response = await getDMResponseAsync(
    message,
    timeout || responseTimeout
  );
  return response;
}

async function getDiscordClientAsync() {
  let clientInstance = undefined;
  if (token) {
    clientInstance = new Discord.Client();
    await clientInstance.login(token);
  }
  return clientInstance;
}

async function getDMChannelAsync(client?: Discord.Client) {
  let dmChannelInstance = undefined;
  if (userId && client) {
    const user = await new Discord.User(client, {
      id: userId,
    }).fetch();
    dmChannelInstance = await user.createDM();
  }
  return dmChannelInstance;
}

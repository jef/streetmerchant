import {Link, Store} from '../store/model';
import Discord from 'discord.js';
import {config} from '../config';
import {logger} from '../logger';

const {notifyGroup, webhooks, notifyGroupSeries} = config.notifications.discord;

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

import {Page} from 'playwright';
import {Brand, Link, Model, Series} from '../store';
import {logger} from '../../../logger';

export interface Card {
  brand: string;
  model: Model;
}

interface LinksBuilderOptions {
  productsSelector: string;
  sitePrefix: string;
  titleAttribute?: string;
  titleSelector: string;
  urlSelector?: string;
}

const isPartialUrlRegExp = /^\/[^/]/i;

export function getProductLinksBuilder(options: LinksBuilderOptions) {
  return async (page: Page, series: Series): Promise<Array<Link>> => {
    const productElements = await page.$$(options.productsSelector);
    const links: Array<Link> = [];
    for (let i = 0; i < productElements.length; i++) {
      const productElement = productElements[i];
      const titleElement = await productElement.$(options.titleSelector);

      const title = options.titleAttribute
        ? await titleElement?.getAttribute(options.titleAttribute)
        : (await titleElement?.innerText())?.replace(/\n/g, ' ').trim();

      if (!title) {
        continue;
      }

      let urlElement = titleElement;

      if (options.urlSelector) {
        urlElement = (await urlElement?.$(options.urlSelector)) || null;
      }

      let url = await urlElement?.getAttribute('href');

      if (!url) {
        continue;
      }

      if (isPartialUrlRegExp.exec(url)) {
        url = options.sitePrefix + url;
      }

      const card = parseCard(title);

      if (card) {
        links.push({
          brand: card.brand as Brand,
          model: card.model,
          series,
          url,
        });
      } else {
        logger.error(`Failed to parse card: ${title}`, {url});
      }
    }

    return links;
  };
}

export function parseCard(name: string): Card | null {
  name = name.replace(/\w+-\w+-[^ ]+/g, '');
  name = name.replace(/\([^(]*\)/g, '');
  name = name.replace(/, .+$/, '');
  name = name.replace(/ with .+$/, '');
  name = name.replace(/pci-express/gi, '');
  name = name.replace(/ - .*$/g, '');

  // Account for incorrect titles, e.g. MSIGeforce
  name = name.replace(/geforce/i, '');

  name = name.replace(/[^\w ]+/g, '');
  name = name.replace(/\bgraphics card\b/gi, '');
  name = name.replace(/\b(?<!founders) edition\b/gi, '');
  name = name.replace(/\b(series )?bundle\b/gi, '');
  name = name.replace(/\bfan\b/gi, '');
  name = name.replace(/\s{2,}/g, ' ').trim();

  let model = name.split(' ');
  const brand = model.shift();

  if (!brand) {
    return null;
  }

  // Split non spaced TitleCase words only after extracting brand
  model = model
    .join(' ')
    .replace(/([A-Z][a-z]+)([A-Z][a-z]+)/g, '$1 $2')
    .split(' ');

  // Some vendors have oc at the beginning of the product name,
  // store whether the card contains the term "oc" and remove
  // it during filtering, then add it to the end of the name.
  let isOC = false;

  /* eslint-disable @typescript-eslint/prefer-regexp-exec */
  model = model.filter(word => {
    if (word.toLowerCase() === 'oc') {
      isOC = true;
      return false;
    }

    return (
      !word.match(
        /^(nvidia|geforce|ge|force|rtx|amp[ae]re|graphics|card|gpu|pci-?e(xpress)?|ray-?tracing|ray|tracing|core|boost|epicx)$/i
      ) &&
      !word.match(/^(\d+(?:gb?|mhz)?|gb|mhz|g?ddr(\d+x?)?)$/i) &&
      !word.match(/^(display ?port|hdmi|vga)$/i)
    );
  });
  /* eslint-enable @typescript-eslint/prefer-regexp-exec */

  if (isOC) model.push('oc');
  if (model.length === 0) return null;

  return {
    brand: brand.toLowerCase(),
    model: model
      .join(' ')
      .toLowerCase()
      .replace(/ gaming\b/g, '')
      .trim() as Model,
  };
}

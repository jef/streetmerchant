import {Link, Series, Store} from './model';
import {Print, logger} from '../logger';
import {Browser} from 'puppeteer';
import cheerio from 'cheerio';
import {filterSeries} from './filter';
import {usingPage} from '../util';

function addNewLinks(store: Store, links: Link[], series: Series) {
  if (links.length === 0) {
    logger.debug(Print.message('NO STORE LINKS FOUND', series, store, true));

    return;
  }

  const existingUrls = new Set(store.links.map(link => link.url));
  const newLinks = links.filter(link => !existingUrls.has(link.url));

  if (newLinks.length === 0) {
    return;
  }

  logger.debug(
    Print.message(`FOUND ${newLinks.length} STORE LINKS`, series, store, true)
  );
  logger.debug(JSON.stringify(newLinks, null, 2));

  store.links = store.links.concat(newLinks);
}

export async function fetchLinks(store: Store, browser: Browser) {
  const linksBuilder = store.linksBuilder;
  if (!linksBuilder) {
    return;
  }

  const promises: Array<Promise<void>> = [];

  // eslint-disable-next-line prefer-const
  for (let {series, url} of linksBuilder.urls) {
    if (!filterSeries(series)) {
      continue;
    }

    logger.debug(Print.message('DETECTING STORE LINKS', series, store, true));

    if (!Array.isArray(url)) {
      url = [url];
    }

    url.map(x =>
      promises.push(
        usingPage(browser, async page => {
          const waitUntil = linksBuilder.waitUntil
            ? linksBuilder.waitUntil
            : 'domcontentloaded';
          await page.goto(x, {waitUntil});

          if (linksBuilder.waitForSelector) {
            await page.waitForSelector(linksBuilder.waitForSelector);
          }

          const html = await page.content();

          if (!html) {
            logger.error(Print.message('NO RESPONSE', series, store, true));
            return;
          }

          const docElement = cheerio.load(html).root();
          const links = linksBuilder.builder(docElement, series);

          addNewLinks(store, links, series);
        })
      )
    );
  }

  await Promise.all(promises);
}

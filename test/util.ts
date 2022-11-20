import {Browser, launch} from 'puppeteer';
import {config} from '../src/config';
import {logger} from '../src/logger';
import {Link, Store} from '../src/store/model';

export function getTestLink(): Link {
  const link: Link = {
    brand: 'test:brand',
    cartUrl: 'https://www.example.com/cartUrl',
    model: 'test:model',
    price: 100,
    series: 'test:series',
    url: 'https://www.example.com/url',
  };
  return link;
}

export function getCaptchaTestLink(): Link {
  const link: Link = {
    brand: 'test:brand',
    cartUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/RickRoll.png/250px-RickRoll.png',
    model: 'test:model',
    price: 100,
    series: 'test:series',
    url: 'https://en.wikipedia.org/wiki/Rickrolling',
  };
  return link;
}

export function getTestStore(): Store {
  const storeLinks = [getTestLink(), getCaptchaTestLink()];

  const store: Store = {
    currency: '',
    labels: {
      captcha: {
        container: '#firstHeading',
        text: ['Rickrolling'],
      },
      captchaHandler: {
        challenge: 'img.thumbimage',
        input: '#searchInput',
        submit: 'body',
        captureType: 'image',
      },
      inStock: {
        container: 'test:container',
        text: ['test:text'],
      },
    },
    links: storeLinks,
    name: 'test:name',
  };

  return store;
}

export async function launchTestBrowser(): Promise<Browser> {
  const args: string[] = [];

  // Skip Chromium Linux Sandbox
  // https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#setting-up-chrome-linux-sandbox
  if (config.browser.isTrusted) {
    args.push('--no-sandbox');
    args.push('--disable-setuid-sandbox');
  }

  // https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#tips
  // https://stackoverflow.com/questions/48230901/docker-alpine-with-node-js-and-chromium-headless-puppeter-failed-to-launch-c
  if (config.docker) {
    args.push('--disable-dev-shm-usage');
    args.push('--no-sandbox');
    args.push('--disable-setuid-sandbox');
    args.push('--headless');
    args.push('--disable-gpu');
    config.browser.open = false;
  }

  // Add the address of the proxy server if defined
  if (config.proxy.address) {
    args.push(
      `--proxy-server=${config.proxy.protocol}://${config.proxy.address}:${config.proxy.port}`
    );
  }

  if (args.length > 0) {
    logger.info('ℹ puppeteer config: ', args);
  }

  const browser = await launch({
    args,
    defaultViewport: {
      height: config.page.height,
      width: config.page.width,
    },
    headless: config.browser.isHeadless,
  });

  config.browser.userAgent = await browser.userAgent();

  return browser;
}

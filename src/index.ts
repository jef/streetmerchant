import * as Process from 'process';
import {config} from './config'; // Needs to be loaded first
import {startAPIServer, stopAPIServer} from './web';
import Puppeteer, {Browser} from 'puppeteer';
import {getSleepTime} from './util';
import {logger} from './logger';
import {storeList} from './store/model';
import {tryLookupAndLoop} from './store';
import {setRestartBotHandler} from './runtime-control';

let browser: Browser | undefined;
let runGeneration = 0;

function shuffleArray<T>(items: T[]): T[] {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function scheduleRestart(generation: number) {
  if (config.restartTime > 0) {
    await sleep(config.restartTime);
    if (generation !== runGeneration) {
      return;
    }

    await restartBot();
  }
}

async function startBot(startApiServer: boolean) {
  const generation = ++runGeneration;
  browser = await launchBrowser();
  void scheduleRestart(generation);

  const stores = config.page.randomizeLookupOrder
    ? shuffleArray([...storeList.values()])
    : [...storeList.values()];

  for (const store of stores) {
    logger.debug('store links', {meta: {links: store.links}});
    if (store.setupAction !== undefined) {
      store.setupAction(browser);
    }

    setTimeout(tryLookupAndLoop, getSleepTime(store), browser, store);
  }

  if (startApiServer) {
    await startAPIServer();
  }
}

async function stopBot() {
  runGeneration++;

  if (browser) {
    const browserTemporary = browser;
    browser = undefined;
    await browserTemporary.close();
  }
}

async function stop() {
  await stopAPIServer();
  await stopBot();
}

export async function restartBot() {
  logger.info('Restarting streetmerchant bot');
  await stopBot();
  await startBot(false);
}

async function stopAndExit() {
  await stop();
  Process.exit(0);
}

async function loopMain() {
  try {
    await startBot(true);
  } catch (error: unknown) {
    logger.error(
      'âœ– something bad happened, resetting streetmerchant in 5 seconds',
      error
    );
    setTimeout(loopMain, 5000);
  }
}

export async function launchBrowser(): Promise<Browser> {
  const args: string[] = [];

  if (config.browser.isTrusted) {
    args.push('--no-sandbox');
    args.push('--disable-setuid-sandbox');
  }

  if (config.docker) {
    args.push('--disable-dev-shm-usage');
    args.push('--no-sandbox');
    args.push('--disable-setuid-sandbox');
    args.push('--headless');
    args.push('--disable-gpu');
    config.browser.open = false;
  }

  if (config.proxy.address) {
    args.push(
      `--proxy-server=${config.proxy.protocol}://${config.proxy.address}:${config.proxy.port}`
    );
  }

  if (args.length > 0) {
    logger.info('â„¹ puppeteer config: ', args);
  }

  await stopBot();
  const launchedBrowser = await Puppeteer.launch({
    args,
    defaultViewport: {
      height: config.page.height,
      width: config.page.width,
    },
    headless: config.browser.isHeadless,
  });

  config.browser.userAgent = await launchedBrowser.userAgent();

  return launchedBrowser;
}

setRestartBotHandler(restartBot);

void loopMain();

process.on('SIGINT', stopAndExit);
process.on('SIGQUIT', stopAndExit);
process.on('SIGTERM', stopAndExit);

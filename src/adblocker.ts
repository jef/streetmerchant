import {Page} from 'playwright';

import {promises as fs} from 'fs';
import os from 'os';
import path from 'path';
import {PlaywrightBlocker} from '@cliqz/adblocker-playwright';
import fetch from 'node-fetch';

import pkg from '../package.json';
const engineCacheFilename = `${pkg.name}-${pkg.version}-engine.bin`;

export interface PluginOptions {
  blockTrackers: boolean;
  useCache: boolean;
  cacheDir?: string;
}

/**
 * Lifted code from https://github.com/berstend/puppeteer-extra/blob/automation-extra/packages/puppeteer-extra-plugin-adblocker/src/index.ts
 * Adapted while waiting for new plugin release
 */
class PlaywrightExtraAdblocker {
  private blocker: PlaywrightBlocker | undefined;
  private opts: Partial<PluginOptions>;

  constructor(opts: Partial<PluginOptions>) {
    this.opts = opts;
  }

  get engineCacheFile() {
    const cacheDir = this.opts.cacheDir || os.tmpdir();
    return path.join(cacheDir, engineCacheFilename);
  }

  private async persistToCache(blocker: PlaywrightBlocker): Promise<void> {
    if (!this.opts.useCache) return;
    await fs.writeFile(this.engineCacheFile, blocker.serialize());
  }

  private async loadFromCache(): Promise<PlaywrightBlocker> {
    if (!this.opts.useCache) {
      throw new Error('caching disabled');
    }
    return PlaywrightBlocker.deserialize(
      new Uint8Array(await fs.readFile(this.engineCacheFile))
    );
  }

  private async loadFromRemote(): Promise<PlaywrightBlocker> {
    if (this.opts.blockTrackers === true) {
      return PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
    } else {
      return PlaywrightBlocker.fromPrebuiltAdsOnly(fetch);
    }
  }

  async getBlocker(): Promise<PlaywrightBlocker> {
    if (this.blocker === undefined) {
      try {
        this.blocker = await this.loadFromCache();
      } catch (ex) {
        this.blocker = await this.loadFromRemote();
        await this.persistToCache(this.blocker);
      }
    }
    return this.blocker;
  }
}

const adBlocker = new PlaywrightExtraAdblocker({
  blockTrackers: true,
  useCache: true,
});

export async function enableBlockerInPage(page: Page) {
  const blockerObject = await adBlocker.getBlocker();
  if (blockerObject.isBlockingEnabled(page)) {
    return;
  }

  await blockerObject.enableBlockingInPage(page);
}

export async function disableBlockerInPage(page: Page) {
  const blockerObject = await adBlocker.getBlocker();
  if (!blockerObject.isBlockingEnabled(page)) {
    return;
  }

  await blockerObject.disableBlockingInPage(page);
}

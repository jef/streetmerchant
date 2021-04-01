import {config, defaultStoreData} from '../../config';
import {Ldlc} from './ldlc';
import {AmazonDe} from './amazon-de';
import {AmazonEs} from './amazon-es';
import {AmazonFr} from './amazon-fr';
import {AmazonIt} from './amazon-it';
import {AmazonNl} from './amazon-nl';
import {AmazonUk} from './amazon-uk';
import {AmdNl} from './amd-nl';
import {AmdDe} from './amd-de';
import {AmdIt} from './amd-it';
import {AmdUk} from './amd-uk';
import {Azerty} from './azerty';
import {Coolblue} from './coolblue';
import {Megekko} from './megekko';
import {NvidiaDE} from './nvidia-de';
import {NvidiaES} from './nvidia-es';
import {NvidiaFR} from './nvidia-fr';
import {NvidiaGB} from './nvidia-gb';
import {Notebooksbilliger} from './notebooksbilliger';
import {Otto} from "./otto"
import {Scan} from "./scan"
import {logger} from '../../logger';

export const storeList = new Map([
  [AmazonDe.name, AmazonDe],
  [AmazonEs.name, AmazonEs],
  [AmazonFr.name, AmazonFr],
  [AmazonIt.name, AmazonIt],
  [AmazonNl.name, AmazonNl],
  [AmazonUk.name, AmazonUk],
  [AmdNl.name, AmdNl],
  [AmdDe.name, AmdDe],
  [AmdIt.name, AmdIt],
  [AmdUk.name, AmdUk],
  [Azerty.name, Azerty],
  [Coolblue.name, Coolblue],
  [Megekko.name, Megekko],
  [Ldlc.name, Ldlc],
  [NvidiaDE.name, NvidiaDE],
  [NvidiaES.name, NvidiaES],
  [NvidiaFR.name, NvidiaFR],
  [NvidiaGB.name, NvidiaGB],
  [Notebooksbilliger.name, Notebooksbilliger],
  [Otto.name, Otto],
  [Scan.name, Scan],
]);

const brands = new Set();
const models = new Set();
const series = new Set();
const stores = new Map();

function filterBrandsSeriesModels() {
  brands.clear();
  series.clear();
  models.clear();

  for (const store of storeList.values()) {
    for (const link of store.links) {
      brands.add(link.brand);
      series.add(link.series);
      models.add(link.model);
    }

    if (store.minPageSleep === undefined) {
      store.minPageSleep = defaultStoreData.minPageSleep;
    }

    if (store.maxPageSleep === undefined) {
      store.maxPageSleep = defaultStoreData.maxPageSleep;
    }
  }
}

function printConfig() {
  if (config.store.stores.length > 0) {
    logger.info(
      `ℹ selected stores: ${config.store.stores
        .map(store => store.name)
        .join(', ')}`
    );
  }

  if (config.store.showOnlyBrands.length > 0) {
    logger.info(`ℹ selected brands: ${config.store.showOnlyBrands.join(', ')}`);
  }

  if (config.store.showOnlyModels.length > 0) {
    logger.info(
      `ℹ selected models: ${config.store.showOnlyModels
        .map(entry => {
          return entry.series
            ? entry.name + ' (' + entry.series + ')'
            : entry.name;
        })
        .join(', ')}`
    );
  }

  if (config.store.showOnlySeries.length > 0) {
    logger.info(`ℹ selected series: ${config.store.showOnlySeries.join(', ')}`);
  }
}

function warnIfStoreDeprecated(store: Store) {
  switch (store.name) {
    case 'evga':
      logger.warn(
        `${store.name} is deprecated since they only support queuing`
      );
      break;
    default:
  }
}

export function updateStores() {
  stores.clear();

  for (const storeData of config.store.stores) {
    const store = storeList.get(storeData.name);

    if (store) {
      warnIfStoreDeprecated(store);
      stores.set(storeData.name, store);
      store.minPageSleep = storeData.minPageSleep;
      store.maxPageSleep = storeData.maxPageSleep;
      store.proxyList = storeData.proxyList;
    } else {
      logger.warn(`No store named ${storeData.name}, skipping.`);
    }
  }

  filterBrandsSeriesModels();
  printConfig();
}

updateStores();

export function getAllBrands() {
  return [...brands];
}

export function getAllSeries() {
  return [...series];
}

export function getAllModels() {
  return [...models];
}

export function getStores() {
  return stores;
}

export * from './store';

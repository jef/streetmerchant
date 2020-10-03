import {Adorama} from './adorama';
import {Amazon} from './amazon';
import {AmazonCa} from './amazon-ca';
import {AmazonDe} from './amazon-de';
import {AmazonNl} from './amazon-nl';
import {Asus} from './asus';
import {AsusDe} from './asus-de';
import {BAndH} from './bandh';
import {BestBuy} from './bestbuy';
import {BestBuyCa} from './bestbuy-ca';
import {Evga} from './evga';
import {EvgaEu} from './evga-eu';
import {Gamestop} from './gamestop';
import {MicroCenter} from './microcenter';
import {Newegg} from './newegg';
import {NeweggCa} from './newegg-ca';
import {Nvidia} from './nvidia';
import {NvidiaApi} from './nvidia-api';
import {OfficeDepot} from './officedepot';
import {Pny} from './pny';
import {Store} from './store';
import {Zotac} from './zotac';
import {config} from '../../config';
import {logger} from '../../logger';

const masterList = new Map([
	[Adorama.name, Adorama],
	[Amazon.name, Amazon],
	[AmazonCa.name, AmazonCa],
	[AmazonDe.name, AmazonDe],
	[AmazonNl.name, AmazonNl],
	[Asus.name, Asus],
	[AsusDe.name, AsusDe],
	[BAndH.name, BAndH],
	[BestBuy.name, BestBuy],
	[BestBuyCa.name, BestBuyCa],
	[Evga.name, Evga],
	[EvgaEu.name, EvgaEu],
	[Gamestop.name, Gamestop],
	[MicroCenter.name, MicroCenter],
	[Newegg.name, Newegg],
	[NeweggCa.name, NeweggCa],
	[Nvidia.name, Nvidia],
	[NvidiaApi.name, NvidiaApi],
	[OfficeDepot.name, OfficeDepot],
	[Pny.name, Pny],
	[Zotac.name, Zotac]
]);

const list = new Map();

for (const name of config.store.stores) {
	if (masterList.has(name)) {
		list.set(name, masterList.get(name));
	} else {
		const logString = `No store named ${name}, skipping.`;
		logger.warn(logString);
	}
}

logger.info(`ℹ selected stores: ${Array.from(list.keys()).join(', ')}`);

if (config.store.showOnlyBrands.length > 0) {
	logger.info(`ℹ selected brands: ${config.store.showOnlyBrands.join(', ')}`);
}

if (config.store.showOnlyModels.length > 0) {
	logger.info(`ℹ selected models: ${config.store.showOnlyModels.join(', ')}`);
}

if (config.store.showOnlySeries.length > 0) {
	logger.info(`ℹ selected series: ${config.store.showOnlySeries.join(', ')}`);
}

export const Stores = Array.from(list.values()) as Store[];

export * from './store';

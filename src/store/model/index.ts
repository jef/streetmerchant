import {Adorama} from './adorama';
import {Amazon} from './amazon';
import {AmazonCa} from './amazon-ca';
import {AmazonDe} from './amazon-de';
import {AmazonNl} from './amazon-nl';
import {Asus} from './asus';
import {BAndH} from './bandh';
import {BestBuy} from './bestbuy';
import {BestBuyCa} from './bestbuy-ca';
import {Config} from '../../config';
import {Evga} from './evga';
import {EvgaEu} from './evga-eu';
import {Logger} from '../../logger';
import {MicroCenter} from './microcenter';
import {Newegg} from './newegg';
import {NeweggCa} from './newegg-ca';
import {Nvidia} from './nvidia';
import {NvidiaApi} from './nvidia-api';
import {OfficeDepot} from './officedepot';
import {Pny} from './pny';
import {Store} from './store';
import {Zotac} from './zotac';

const masterList = new Map([
	[Adorama.name, Adorama],
	[Amazon.name, Amazon],
	[AmazonCa.name, AmazonCa],
	[AmazonDe.name, AmazonDe],
	[AmazonNl.name, AmazonNl],
	[Asus.name, Asus],
	[BAndH.name, BAndH],
	[BestBuy.name, BestBuy],
	[BestBuyCa.name, BestBuyCa],
	[Evga.name, Evga],
	[EvgaEu.name, EvgaEu],
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

for (const name of Config.store.stores) {
	if (masterList.has(name)) {
		list.set(name, masterList.get(name));
	} else {
		const logString = `No store named ${name}, skipping.`;
		Logger.warn(logString);
	}
}

Logger.info(`ℹ selected stores: ${Array.from(list.keys()).join(', ')}`);

if (Config.store.showOnlyBrands.length > 0) {
	Logger.info(`ℹ selected brands: ${Config.store.showOnlyBrands.join(', ')}`);
}

if (Config.store.showOnlyModels.length > 0) {
	Logger.info(`ℹ selected models: ${Config.store.showOnlyModels.join(', ')}`);
}

if (Config.store.showOnlySeries.length > 0) {
	Logger.info(`ℹ selected series: ${Config.store.showOnlySeries.join(', ')}`);
}

export const Stores = Array.from(list.values()) as Store[];

export * from './store';

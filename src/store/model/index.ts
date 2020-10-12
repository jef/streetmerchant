import {Adorama} from './adorama';
import {Alternate} from './alternate';
import {Amazon} from './amazon';
import {AmazonCa} from './amazon-ca';
import {AmazonDe} from './amazon-de';
import {AmazonNl} from './amazon-nl';
import {AmazonUk} from './amazon-uk';
import {Aria} from './aria';
import {Asus} from './asus';
import {AsusDe} from './asus-de';
import {BAndH} from './bandh';
import {BestBuy} from './bestbuy';
import {BestBuyCa} from './bestbuy-ca';
import {Box} from './box';
import {Ccl} from './ccl';
import {Coolblue} from './coolblue';
import {Currys} from './currys';
import {Ebuyer} from './ebuyer';
import {Evga} from './evga';
import {EvgaEu} from './evga-eu';
import {Gamestop} from './gamestop';
import {Mediamarkt} from './mediamarkt';
import {MicroCenter} from './microcenter';
import {Newegg} from './newegg';
import {NeweggCa} from './newegg-ca';
import {Notebooksbilliger} from './notebooksbilliger';
import {Novatech} from './novatech';
import {Nvidia} from './nvidia';
import {NvidiaApi} from './nvidia-api';
import {OfficeDepot} from './officedepot';
import {Overclockers} from './overclockers';
import {Pny} from './pny';
import {Scan} from './scan';
import {Store} from './store';
import {Very} from './very';
import {Zotac} from './zotac';
import {config} from '../../config';
import {logger} from '../../logger';

const masterList = new Map([
	[Adorama.name, Adorama],
	[Alternate.name, Alternate],
	[Amazon.name, Amazon],
	[AmazonCa.name, AmazonCa],
	[AmazonDe.name, AmazonDe],
	[AmazonNl.name, AmazonNl],
	[AmazonUk.name, AmazonUk],
	[Aria.name, Aria],
	[Asus.name, Asus],
	[AsusDe.name, AsusDe],
	[BAndH.name, BAndH],
	[BestBuy.name, BestBuy],
	[BestBuyCa.name, BestBuyCa],
	[Box.name, Box],
	[Ccl.name, Ccl],
	[Coolblue.name, Coolblue],
	[Currys.name, Currys],
	[Ebuyer.name, Ebuyer],
	[Evga.name, Evga],
	[EvgaEu.name, EvgaEu],
	[Gamestop.name, Gamestop],
	[Mediamarkt.name, Mediamarkt],
	[MicroCenter.name, MicroCenter],
	[Newegg.name, Newegg],
	[NeweggCa.name, NeweggCa],
	[Notebooksbilliger.name, Notebooksbilliger],
	[Novatech.name, Novatech],
	[Nvidia.name, Nvidia],
	[NvidiaApi.name, NvidiaApi],
	[OfficeDepot.name, OfficeDepot],
	[Overclockers.name, Overclockers],
	[Pny.name, Pny],
	[Scan.name, Scan],
	[Very.name, Very],
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

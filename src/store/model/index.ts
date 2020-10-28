import {config, defaultStoreData} from '../../config';
import {Adorama} from './adorama';
import {Alternate} from './alternate';
import {AlternateNL} from './alternate-nl';
import {Amazon} from './amazon';
import {AmazonCa} from './amazon-ca';
import {AmazonDe} from './amazon-de';
import {AmazonEs} from './amazon-es';
import {AmazonNl} from './amazon-nl';
import {AmazonUk} from './amazon-uk';
import {Aria} from './aria';
import {Asus} from './asus';
import {AsusDe} from './asus-de';
import {Azerty} from './azerty';
import {BAndH} from './bandh';
import {BestBuy} from './bestbuy';
import {BestBuyCa} from './bestbuy-ca';
import {Box} from './box';
import {Caseking} from './caseking';
import {Ccl} from './ccl';
import {Computeruniverse} from './computeruniverse';
import {Coolblue} from './coolblue';
import {Coolmod} from './coolmod';
import {Currys} from './currys';
import {Cyberport} from './cyberport';
import {Ebuyer} from './ebuyer';
import {Evga} from './evga';
import {EvgaEu} from './evga-eu';
import {Gamestop} from './gamestop';
import {Mediamarkt} from './mediamarkt';
import {MicroCenter} from './microcenter';
import {Mindfactory} from './mindfactory';
import {Newegg} from './newegg';
import {NeweggCa} from './newegg-ca';
import {Notebooksbilliger} from './notebooksbilliger';
import {Novatech} from './novatech';
import {Nvidia} from './nvidia';
import {NvidiaApi} from './nvidia-api';
import {OfficeDepot} from './officedepot';
import {Overclockers} from './overclockers';
import {PCComponentes} from './pccomponentes';
import {Pny} from './pny';
import {ProshopDE} from './proshop-de';
import {ProshopDK} from './proshop-dk';
import {Saturn} from './saturn';
import {Scan} from './scan';
import {Very} from './very';
import {Zotac} from './zotac';
import {logger} from '../../logger';

export const storeList = new Map([
	[Adorama.name, Adorama],
	[Alternate.name, Alternate],
	[AlternateNL.name, AlternateNL],
	[Amazon.name, Amazon],
	[AmazonCa.name, AmazonCa],
	[AmazonDe.name, AmazonDe],
	[AmazonEs.name, AmazonEs],
	[AmazonNl.name, AmazonNl],
	[AmazonUk.name, AmazonUk],
	[Aria.name, Aria],
	[Asus.name, Asus],
	[AsusDe.name, AsusDe],
	[Azerty.name, Azerty],
	[BAndH.name, BAndH],
	[BestBuy.name, BestBuy],
	[BestBuyCa.name, BestBuyCa],
	[Box.name, Box],
	[Caseking.name, Caseking],
	[Ccl.name, Ccl],
	[Computeruniverse.name, Computeruniverse],
	[Coolblue.name, Coolblue],
	[Coolmod.name, Coolmod],
	[Currys.name, Currys],
	[Cyberport.name, Cyberport],
	[Ebuyer.name, Ebuyer],
	[Evga.name, Evga],
	[EvgaEu.name, EvgaEu],
	[Gamestop.name, Gamestop],
	[Mediamarkt.name, Mediamarkt],
	[MicroCenter.name, MicroCenter],
	[Mindfactory.name, Mindfactory],
	[Newegg.name, Newegg],
	[NeweggCa.name, NeweggCa],
	[Notebooksbilliger.name, Notebooksbilliger],
	[Novatech.name, Novatech],
	[Nvidia.name, Nvidia],
	[NvidiaApi.name, NvidiaApi],
	[OfficeDepot.name, OfficeDepot],
	[Overclockers.name, Overclockers],
	[PCComponentes.name, PCComponentes],
	[Pny.name, Pny],
	[ProshopDE.name, ProshopDE],
	[ProshopDK.name, ProshopDK],
	[Saturn.name, Saturn],
	[Scan.name, Scan],
	[Very.name, Very],
	[Zotac.name, Zotac]
]);

const brands = new Set();
const series = new Set();
const models = new Set();

for (const storeData of config.store.stores) {
	const store = storeList.get(storeData.name);
	if (store) {
		store.minPageSleep = storeData.minPageSleep;
		store.maxPageSleep = storeData.maxPageSleep;
	} else {
		logger.warn(`No store named ${storeData.name}, skipping.`);
	}
}

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

export function getAllBrands() {
	return Array.from(brands);
}

export function getAllSeries() {
	return Array.from(series);
}

export function getAllModels() {
	return Array.from(models);
}

if (config.store.stores.length > 0) {
	logger.info(`ℹ selected stores: ${config.store.stores.map(store => store.name).join(', ')}`);
}

if (config.store.showOnlyBrands.length > 0) {
	logger.info(`ℹ selected brands: ${config.store.showOnlyBrands.join(', ')}`);
}

if (config.store.showOnlyModels.length > 0) {
	logger.info(`ℹ selected models: ${config.store.showOnlyModels.map(entry => {
		return entry.series ? entry.name + ' (' + entry.series + ')' : entry.name;
	}).join(', ')}`);
}

if (config.store.showOnlySeries.length > 0) {
	logger.info(`ℹ selected series: ${config.store.showOnlySeries.join(', ')}`);
}

export * from './store';

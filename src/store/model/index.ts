import {config, defaultStoreData} from '../../config';
import {Adorama} from './adorama';
import {Alternate} from './alternate';
import {AlternateNL} from './alternate-nl';
import {Amazon} from './amazon';
import {AmazonCa} from './amazon-ca';
import {AmazonDe} from './amazon-de';
import {AmazonEs} from './amazon-es';
import {AmazonFr} from './amazon-fr';
import {AmazonIt} from './amazon-it';
import {AmazonNl} from './amazon-nl';
import {AmazonUk} from './amazon-uk';
import {Amd} from './amd';
import {AmdCa} from './amd-ca';
import {AmdDe} from './amd-de';
import {AmdIt} from './amd-it';
import {Aria} from './aria';
import {Arlt} from './arlt';
import {Asus} from './asus';
import {AsusDe} from './asus-de';
import {Azerty} from './azerty';
import {BAndH} from './bandh';
import {BestBuy} from './bestbuy';
import {BestBuyCa} from './bestbuy-ca';
import {Box} from './box';
import {CanadaComputers} from './canadacomputers';
import {Caseking} from './caseking';
import {Ccl} from './ccl';
import {Comet} from './comet';
import {Computeruniverse} from './computeruniverse';
import {Coolblue} from './coolblue';
import {Coolmod} from './coolmod';
import {Corsair} from './corsair';
import {Currys} from './currys';
import {Cyberport} from './cyberport';
import {Ebuyer} from './ebuyer';
import {Eprice} from './eprice';
import {Euronics} from './euronics';
import {Evga} from './evga';
import {EvgaEu} from './evga-eu';
import {Galaxus} from './galaxus';
import {Game} from './game';
import {Gamestop} from './gamestop';
import {Kabum} from './kabum';
import {Mediamarkt} from './mediamarkt';
import {MemoryExpress} from './memoryexpress';
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
import {PlayStation} from './playstation';
import {Pny} from './pny';
import {ProshopDE} from './proshop-de';
import {ProshopDK} from './proshop-dk';
import {Saturn} from './saturn';
import {Scan} from './scan';
import {Store} from './store';
import {Target} from './target';
import {TopAchat} from './topachat';
import {Unieuro} from './unieuro';
import {Very} from './very';
import {VsGamers} from './vsgamers';
import {Walmart} from './walmart';
import {Wipoid} from './wipoid';
import {Xbox} from './xbox';
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
	[AmazonFr.name, AmazonFr],
	[AmazonNl.name, AmazonNl],
	[AmazonUk.name, AmazonUk],
	[AmazonIt.name, AmazonIt],
	[Amd.name, Amd],
	[AmdCa.name, AmdCa],
	[AmdDe.name, AmdDe],
	[AmdIt.name, AmdIt],
	[Aria.name, Aria],
	[Arlt.name, Arlt],
	[Asus.name, Asus],
	[AsusDe.name, AsusDe],
	[Azerty.name, Azerty],
	[BAndH.name, BAndH],
	[BestBuy.name, BestBuy],
	[BestBuyCa.name, BestBuyCa],
	[Box.name, Box],
	[Caseking.name, Caseking],
	[CanadaComputers.name, CanadaComputers],
	[Ccl.name, Ccl],
	[Comet.name, Comet],
	[Computeruniverse.name, Computeruniverse],
	[Coolblue.name, Coolblue],
	[Coolmod.name, Coolmod],
	[Corsair.name, Corsair],
	[Currys.name, Currys],
	[Cyberport.name, Cyberport],
	[Ebuyer.name, Ebuyer],
	[Eprice.name, Eprice],
	[Euronics.name, Euronics],
	[Evga.name, Evga],
	[EvgaEu.name, EvgaEu],
	[Galaxus.name, Galaxus],
	[Game.name, Game],
	[Gamestop.name, Gamestop],
	[Kabum.name, Kabum],
	[Mediamarkt.name, Mediamarkt],
	[MemoryExpress.name, MemoryExpress],
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
	[PlayStation.name, PlayStation],
	[Pny.name, Pny],
	[ProshopDE.name, ProshopDE],
	[ProshopDK.name, ProshopDK],
	[Saturn.name, Saturn],
	[Scan.name, Scan],
	[Target.name, Target],
	[TopAchat.name, TopAchat],
	[Unieuro.name, Unieuro],
	[Very.name, Very],
	[VsGamers.name, VsGamers],
	[Walmart.name, Walmart],
	[Wipoid.name, Wipoid],
	[Xbox.name, Xbox],
	[Zotac.name, Zotac]
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
				.map((store) => store.name)
				.join(', ')}`
		);
	}

	if (config.store.showOnlyBrands.length > 0) {
		logger.info(`ℹ selected brands: ${config.store.showOnlyBrands.join(', ')}`);
	}

	if (config.store.showOnlyModels.length > 0) {
		logger.info(
			`ℹ selected models: ${config.store.showOnlyModels
				.map((entry) => {
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
		case 'nvidia':
		case 'nvidia-api':
			logger.warn(`${store.name} is deprecated in favor of bestbuy`);
			break;
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
		} else {
			logger.warn(`No store named ${storeData.name}, skipping.`);
		}
	}

	filterBrandsSeriesModels();
	printConfig();
}

updateStores();

export function getAllBrands() {
	return Array.from(brands);
}

export function getAllSeries() {
	return Array.from(series);
}

export function getAllModels() {
	return Array.from(models);
}

export function getStores() {
	return stores;
}

export * from './store';

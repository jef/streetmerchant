import {config, defaultStoreData} from '../../config';
import {AComPC} from './acompc';
import {Adorama} from './adorama';
import {Alternate} from './alternate';
import {AlternateNL} from './alternate-nl';
import {Amazon} from './amazon';
import {AmazonCa} from './amazon-ca';
import {AmazonDe} from './amazon-de';
import {AmazonDeWarehouse} from './amazon-de-warehouse';
import {AmazonEs} from './amazon-es';
import {AmazonFr} from './amazon-fr';
import {AmazonIt} from './amazon-it';
import {AmazonNl} from './amazon-nl';
import {AmazonUk} from './amazon-uk';
import {Amd} from './amd';
import {AmdCa} from './amd-ca';
import {AmdDe} from './amd-de';
import {AmdIt} from './amd-it';
import {AmdUk} from './amd-uk';
import {AntOnline} from './antonline';
import {Argos} from './argos';
import {ArgosIE} from './argos-ie';
import {Aria} from './aria';
import {Arlt} from './arlt';
import {Asus} from './asus';
import {AsusDe} from './asus-de';
import {Awd} from './awd';
import {Azerty} from './azerty';
import {BAndH} from './bandh';
import {BestBuy} from './bestbuy';
import {BestBuyCa} from './bestbuy-ca';
import {Box} from './box';
import {Bpctech} from './bpctech';
import {CanadaComputers} from './canadacomputers';
import {Caseking} from './caseking';
import {Ccl} from './ccl';
import {Centrecom} from './centrecom';
import {Comet} from './comet';
import {Computeruniverse} from './computeruniverse';
import {Coolblue} from './coolblue';
import {Coolmod} from './coolmod';
import {Corsair} from './corsair';
import {Cpl} from './cpl';
import {Currys} from './currys';
import {Cyberport} from './cyberport';
import {EbGames} from './ebgames';
import {Ebuyer} from './ebuyer';
import {Elcorteingles} from './elcorteingles';
import {Eprice} from './eprice';
import {Equippr} from './equippr';
import {Euronics} from './euronics';
import {EuronicsDE} from './euronics-de';
import {Evga} from './evga';
import {EvgaEu} from './evga-eu';
import {Expert} from './expert';
import {Futurex} from './futurex';
import {Galaxus} from './galaxus';
import {Game} from './game';
import {Gamestop} from './gamestop';
import {GamestopDE} from './gamestop-de';
import {GamestopIE} from './gamestop-ie';
import {HarveyNormanIE} from './harveynorman-ie';
import {JohnLewis} from './johnlewis';
import {Kabum} from './kabum';
import {Mediamarkt} from './mediamarkt';
import {Medimax} from './medimax';
import {Megekko} from './megekko';
import {MemoryExpress} from './memoryexpress';
import {MicroCenter} from './microcenter';
import {Mindfactory} from './mindfactory';
import {Mwave} from './mwave';
import {Newegg} from './newegg';
import {NeweggCa} from './newegg-ca';
import {Notebooksbilliger} from './notebooksbilliger';
import {Novatech} from './novatech';
import {Nvidia} from './nvidia';
import {NvidiaApi} from './nvidia-api';
import {OfficeDepot} from './officedepot';
import {Otto} from './otto';
import {Overclockers} from './overclockers';
import {PCComponentes} from './pccomponentes';
import {PCKing} from './pcking';
import {Pccg} from './pccg';
import {PlayStation} from './playstation';
import {Pny} from './pny';
import {ProshopDE} from './proshop-de';
import {ProshopDK} from './proshop-dk';
import {Saturn} from './saturn';
import {Scan} from './scan';
import {Scorptec} from './scorptec';
import {ShopTo} from './shopto';
import {SmythsToys} from './smythstoys';
import {SmythsToysIE} from './smythstoys-ie';
import {Spielegrotte} from './spielegrotte';
import {Store} from './store';
import {Target} from './target';
import {TescoIE} from './tesco-ie';
import {TopAchat} from './topachat';
import {ToysRUs} from './toysrus';
import {Umart} from './umart';
import {Unieuro} from './unieuro';
import {Very} from './very';
import {VsGamers} from './vsgamers';
import {Walmart} from './walmart';
import {WalmartCa} from './walmart-ca';
import {Wipoid} from './wipoid';
import {Xbox} from './xbox';
import {Zotac} from './zotac';
import {logger} from '../../logger';

export const storeList = new Map([
	[AComPC.name, AComPC],
	[Adorama.name, Adorama],
	[Alternate.name, Alternate],
	[AlternateNL.name, AlternateNL],
	[Amazon.name, Amazon],
	[AmazonCa.name, AmazonCa],
	[AmazonDe.name, AmazonDe],
	[AmazonDeWarehouse.name, AmazonDeWarehouse],
	[AmazonEs.name, AmazonEs],
	[AmazonFr.name, AmazonFr],
	[AmazonNl.name, AmazonNl],
	[AmazonUk.name, AmazonUk],
	[AmazonIt.name, AmazonIt],
	[Amd.name, Amd],
	[AmdCa.name, AmdCa],
	[AmdDe.name, AmdDe],
	[AmdIt.name, AmdIt],
	[AmdUk.name, AmdUk],
	[AntOnline.name, AntOnline],
	[Argos.name, Argos],
	[ArgosIE.name, Argos],
	[Aria.name, Aria],
	[Arlt.name, Arlt],
	[Asus.name, Asus],
	[AsusDe.name, AsusDe],
	[Awd.name, Awd],
	[Azerty.name, Azerty],
	[BAndH.name, BAndH],
	[BestBuy.name, BestBuy],
	[BestBuyCa.name, BestBuyCa],
	[Box.name, Box],
	[Bpctech.name, Bpctech],
	[Caseking.name, Caseking],
	[CanadaComputers.name, CanadaComputers],
	[Ccl.name, Ccl],
	[Centrecom.name, Centrecom],
	[Comet.name, Comet],
	[Computeruniverse.name, Computeruniverse],
	[Coolblue.name, Coolblue],
	[Coolmod.name, Coolmod],
	[Corsair.name, Corsair],
	[Cpl.name, Cpl],
	[Currys.name, Currys],
	[Cyberport.name, Cyberport],
	[EbGames.name, EbGames],
	[Ebuyer.name, Ebuyer],
	[Elcorteingles.name, Elcorteingles],
	[Eprice.name, Eprice],
	[Equippr.name, Equippr],
	[Euronics.name, Euronics],
	[EuronicsDE.name, EuronicsDE],
	[Evga.name, Evga],
	[EvgaEu.name, EvgaEu],
	[Expert.name, Expert],
	[Futurex.name, Futurex],
	[Galaxus.name, Galaxus],
	[Game.name, Game],
	[Gamestop.name, Gamestop],
	[GamestopDE.name, GamestopDE],
	[GamestopIE.name, GamestopIE],
	[HarveyNormanIE.name, HarveyNormanIE],
	[JohnLewis.name, JohnLewis],
	[Kabum.name, Kabum],
	[Mediamarkt.name, Mediamarkt],
	[Medimax.name, Medimax],
	[Megekko.name, Megekko],
	[MemoryExpress.name, MemoryExpress],
	[MicroCenter.name, MicroCenter],
	[Mindfactory.name, Mindfactory],
	[Mwave.name, Mwave],
	[Newegg.name, Newegg],
	[NeweggCa.name, NeweggCa],
	[Notebooksbilliger.name, Notebooksbilliger],
	[Novatech.name, Novatech],
	[Nvidia.name, Nvidia],
	[NvidiaApi.name, NvidiaApi],
	[OfficeDepot.name, OfficeDepot],
	[Otto.name, Otto],
	[Overclockers.name, Overclockers],
	[Pccg.name, Pccg],
	[PCKing.name, PCKing],
	[PCComponentes.name, PCComponentes],
	[PlayStation.name, PlayStation],
	[Pny.name, Pny],
	[ProshopDE.name, ProshopDE],
	[ProshopDK.name, ProshopDK],
	[Saturn.name, Saturn],
	[Scan.name, Scan],
	[Scorptec.name, Scorptec],
	[ShopTo.name, ShopTo],
	[SmythsToysIE.name, SmythsToysIE],
	[SmythsToys.name, SmythsToys],
	[Spielegrotte.name, Spielegrotte],
	[Target.name, Target],
	[TescoIE.name, TescoIE],
	[TopAchat.name, TopAchat],
	[ToysRUs.name, ToysRUs],
	[Umart.name, Umart],
	[Unieuro.name, Unieuro],
	[Very.name, Very],
	[VsGamers.name, VsGamers],
	[Walmart.name, Walmart],
	[WalmartCa.name, WalmartCa],
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
		logger.info(
			`ℹ selected brands: ${config.store.showOnlyBrands.join(', ')}`
		);
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
		logger.info(
			`ℹ selected series: ${config.store.showOnlySeries.join(', ')}`
		);
	}
}

function warnIfStoreDeprecated(store: Store) {
	switch (store.name) {
		case 'nvidia':
		case 'nvidia-api':
			if (config.store.country === 'usa')
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

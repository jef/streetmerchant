import {config, defaultStoreData} from '../../config';
import {AComPC} from './acompc';
import {Ldlc} from './ldlc';
import {Materiel} from './materiel';
import {Adorama} from './adorama';
import {Akinformatica} from './akinformatica';
import {Allneeds} from './allneeds';
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
import {AmazonSg} from './amazon-sg';
import {AmazonUk} from './amazon-uk';
import {Amd} from './amd';
import {AmdAt} from './amd-at';
import {AmdBe} from './amd-be';
import {AmdCa} from './amd-ca';
import {AmdDe} from './amd-de';
import {AmdIt} from './amd-it';
import {AmdNl} from './amd-nl';
import {AmdUk} from './amd-uk';
import {AntOnline} from './antonline';
import {AO} from './ao';
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
import {BpmPower} from './bpmpower';
import {BT} from './bt';
import {CanadaComputers} from './canadacomputers';
import {Caseking} from './caseking';
import {Ccl} from './ccl';
import {Centrecom} from './centrecom';
import {Comet} from './comet';
import {ComputerAlliance} from './computeralliance';
import {Computeruniverse} from './computeruniverse';
import {Coolblue} from './coolblue';
import {Coolmod} from './coolmod';
import {Corsair} from './corsair';
import {CorsairUK} from './corsair-uk';
import {Cpl} from './cpl';
import {Currys} from './currys';
import {Cyberport} from './cyberport';
import {CyberportAt} from './cyberport-at';
import {Dcomp} from './dcomp';
import {Drako} from './drako';
import {DustinHomeNO} from './dustinhome-no';
import {EbGames} from './ebgames';
import {Ebuyer} from './ebuyer';
import {Elcorteingles} from './elcorteingles';
import {Elkjop} from './elkjop';
import {Eprice} from './eprice';
import {Equippr} from './equippr';
import {Euronics} from './euronics';
import {EuronicsDE} from './euronics-de';
import {Evatech} from './evatech';
import {Evga} from './evga';
import {EvgaEu} from './evga-eu';
import {Expert} from './expert';
import {Futurex} from './futurex';
import {Galaxus} from './galaxus';
import {Game} from './game';
import {Gamestop} from './gamestop';
import {GamestopDE} from './gamestop-de';
import {GamestopIE} from './gamestop-ie';
import {GamestopIT} from './gamestop-it';
import {Globaldata} from './globaldata';
import {HardwarePlanet} from './hardware-planet';
import {HarrisTechnology} from './harristechnology';
import {HarveyNormanIE} from './harveynorman-ie';
import {Igamecomputer} from './igame';
import {JohnLewis} from './johnlewis';
import {Kabum} from './kabum';
import {KomplettNO} from './komplett-no';
import {LandmarkComputers} from './lmc';
import {Mediamarkt} from './mediamarkt';
import {MediamarktAt} from './mediamarkt-at';
import {Medimax} from './medimax';
import {Megekko} from './megekko';
import {MemoryExpress} from './memoryexpress';
import {MicroCenter} from './microcenter';
import {MightyApe} from './mightyape';
import {Mindfactory} from './mindfactory';
import {Msy} from './msy';
import {Multicom} from './multicom';
import {Mwave} from './mwave';
import {NetonnetNO} from './netonnet-no';
import {Newegg} from './newegg';
import {NeweggCa} from './newegg-ca';
import {NeweggSg} from './newegg-sg';
import {NoelLeeming} from './noelleeming';
import {Notebooksbilliger} from './notebooksbilliger';
import {Novatech} from './novatech';
import {NovoAtalho} from './novoatalho';
import {NvidiaDE} from './nvidia-de';
import {NvidiaES} from './nvidia-es';
import {NvidiaFR} from './nvidia-fr';
import {NvidiaGB} from './nvidia-gb';
import {OfficeDepot} from './officedepot';
import {Ollo} from './ollo';
import {Otto} from './otto';
import {Overclockers} from './overclockers';
import {PBTech} from './pbtech';
import {PCByte} from './pcbyte';
import {Pccg} from './pccg';
import {PCComponentes} from './pccomponentes';
import {PCDiga} from './pcdiga';
import {PCKing} from './pcking';
import {PlayStation} from './playstation';
import {Pny} from './pny';
import {PowerNO} from './power-no';
import {ProshopDE} from './proshop-de';
import {ProshopDK} from './proshop-dk';
import {ProshopNO} from './proshop-no';
import {Rosman} from './rosman';
import {RosmanMelb} from './rosman-melb';
import {Saturn} from './saturn';
import {SaveOnIt} from './saveonit';
import {Scan} from './scan';
import {Scorptec} from './scorptec';
import {ShopTo} from './shopto';
import {SmythsToys} from './smythstoys';
import {SmythsToysIE} from './smythstoys-ie';
import {Spielegrotte} from './spielegrotte';
import {Store} from './store';
import {StormComputers} from './storm';
import {Target} from './target';
import {TescoIE} from './tesco-ie';
import {TheWarehouse} from './thewarehouse';
import {TopAchat} from './topachat';
import {ToysRUs} from './toysrus';
import {Umart} from './umart';
import {Unieuro} from './unieuro';
import {Very} from './very';
import {VsGamers} from './vsgamers';
import {Vuugo} from './vuugo';
import {Walmart} from './walmart';
import {WalmartCa} from './walmart-ca';
import {WellsTechnology} from './wellstechnology';
import {Wipoid} from './wipoid';
import {Xbox} from './xbox';
import {Zotac} from './zotac';
import {logger} from '../../logger';
import chalk from 'chalk';

export const storeList = new Map([
  [AComPC.name, AComPC],
  [Adorama.name, Adorama],
  [Akinformatica.name, Akinformatica],
  [Allneeds.name, Allneeds],
  [Alternate.name, Alternate],
  [AlternateNL.name, AlternateNL],
  [Amazon.name, Amazon],
  [AmazonCa.name, AmazonCa],
  [AmazonDe.name, AmazonDe],
  [AmazonDeWarehouse.name, AmazonDeWarehouse],
  [AmazonEs.name, AmazonEs],
  [AmazonFr.name, AmazonFr],
  [AmazonIt.name, AmazonIt],
  [AmazonNl.name, AmazonNl],
  [AmazonSg.name, AmazonSg],
  [AmazonUk.name, AmazonUk],
  [Amd.name, Amd],
  [AmdAt.name, AmdAt],
  [AmdBe.name, AmdBe],
  [AmdCa.name, AmdCa],
  [AmdDe.name, AmdDe],
  [AmdIt.name, AmdIt],
  [AmdNl.name, AmdNl],
  [AmdUk.name, AmdUk],
  [AntOnline.name, AntOnline],
  [AO.name, AO],
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
  [BpmPower.name, BpmPower],
  [BT.name, BT],
  [CanadaComputers.name, CanadaComputers],
  [Caseking.name, Caseking],
  [Ccl.name, Ccl],
  [Centrecom.name, Centrecom],
  [Comet.name, Comet],
  [ComputerAlliance.name, ComputerAlliance],
  [Computeruniverse.name, Computeruniverse],
  [Coolblue.name, Coolblue],
  [Coolmod.name, Coolmod],
  [Corsair.name, Corsair],
  [CorsairUK.name, CorsairUK],
  [Cpl.name, Cpl],
  [Currys.name, Currys],
  [Cyberport.name, Cyberport],
  [CyberportAt.name, CyberportAt],
  [Dcomp.name, Dcomp],
  [Drako.name, Drako],
  [DustinHomeNO.name, DustinHomeNO],
  [EbGames.name, EbGames],
  [Ebuyer.name, Ebuyer],
  [Elcorteingles.name, Elcorteingles],
  [Elkjop.name, Elkjop],
  [Eprice.name, Eprice],
  [Equippr.name, Equippr],
  [Euronics.name, Euronics],
  [EuronicsDE.name, EuronicsDE],
  [Evatech.name, Evatech],
  [Evga.name, Evga],
  [EvgaEu.name, EvgaEu],
  [Expert.name, Expert],
  [Futurex.name, Futurex],
  [Galaxus.name, Galaxus],
  [Game.name, Game],
  [Gamestop.name, Gamestop],
  [GamestopDE.name, GamestopDE],
  [GamestopIE.name, GamestopIE],
  [GamestopIT.name, GamestopIT],
  [Globaldata.name, Globaldata],
  [HardwarePlanet.name, HardwarePlanet],
  [HarrisTechnology.name, HarrisTechnology],
  [HarveyNormanIE.name, HarveyNormanIE],
  [Igamecomputer.name, Igamecomputer],
  [JohnLewis.name, JohnLewis],
  [Kabum.name, Kabum],
  [KomplettNO.name, KomplettNO],
  [LandmarkComputers.name, LandmarkComputers],
  [Mediamarkt.name, Mediamarkt],
  [MediamarktAt.name, MediamarktAt],
  [Medimax.name, Medimax],
  [Megekko.name, Megekko],
  [Ldlc.name, Ldlc],
  [Materiel.name, Materiel],
  [MemoryExpress.name, MemoryExpress],
  [MicroCenter.name, MicroCenter],
  [MightyApe.name, MightyApe],
  [Mindfactory.name, Mindfactory],
  [Msy.name, Msy],
  [Multicom.name, Multicom],
  [Mwave.name, Mwave],
  [NetonnetNO.name, NetonnetNO],
  [Newegg.name, Newegg],
  [NeweggCa.name, NeweggCa],
  [NeweggSg.name, NeweggSg],
  [NoelLeeming.name, NoelLeeming],
  [Notebooksbilliger.name, Notebooksbilliger],
  [Novatech.name, Novatech],
  [NovoAtalho.name, NovoAtalho],
  [NvidiaDE.name, NvidiaDE],
  [NvidiaES.name, NvidiaES],
  [NvidiaFR.name, NvidiaFR],
  [NvidiaGB.name, NvidiaGB],
  [OfficeDepot.name, OfficeDepot],
  [Ollo.name, Ollo],
  [Otto.name, Otto],
  [Overclockers.name, Overclockers],
  [PBTech.name, PBTech],
  [PCByte.name, PCByte],
  [Pccg.name, Pccg],
  [PCComponentes.name, PCComponentes],
  [PCDiga.name, PCDiga],
  [PCKing.name, PCKing],
  [PlayStation.name, PlayStation],
  [Pny.name, Pny],
  [PowerNO.name, PowerNO],
  [ProshopDE.name, ProshopDE],
  [ProshopDK.name, ProshopDK],
  [ProshopNO.name, ProshopNO],
  [Rosman.name, Rosman],
  [RosmanMelb.name, RosmanMelb],
  [Saturn.name, Saturn],
  [SaveOnIt.name, SaveOnIt],
  [Scan.name, Scan],
  [Scorptec.name, Scorptec],
  [ShopTo.name, ShopTo],
  [SmythsToys.name, SmythsToys],
  [SmythsToysIE.name, SmythsToysIE],
  [Spielegrotte.name, Spielegrotte],
  [StormComputers.name, StormComputers],
  [Target.name, Target],
  [TescoIE.name, TescoIE],
  [TheWarehouse.name, TheWarehouse],
  [TopAchat.name, TopAchat],
  [ToysRUs.name, ToysRUs],
  [Umart.name, Umart],
  [Unieuro.name, Unieuro],
  [Very.name, Very],
  [VsGamers.name, VsGamers],
  [Vuugo.name, Vuugo],
  [Walmart.name, Walmart],
  [WalmartCa.name, WalmartCa],
  [WellsTechnology.name, WellsTechnology],
  [Wipoid.name, Wipoid],
  [Xbox.name, Xbox],
  [Zotac.name, Zotac],
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

  if (config.store.stores.length > 0) {
    const stores = darkenEmptyStores();
    logger.info(`ℹ selected stores: ${stores.names.join(', ')}`);

    if (stores.anyExcluded) {
      logger.warn(
        'ℹ some of the selected stores (grayed out) dont have what you are looking for'
      );
    }
  }
}

function darkenEmptyStores(): {names: string[]; anyExcluded: boolean} {
  let anyExcluded = false;
  const selectedStores = config.store.stores.map(store => store.name);

  const names = selectedStores.map(selected => {
    const storeConfig = storeList.get(selected);
    const hasAny =
      storeConfig?.links.some(
        l =>
          (config.store.showOnlySeries?.includes(l.series) ?? false) ||
          config.store.showOnlyBrands?.includes(l.brand ?? false) ||
          (config.store.showOnlyModels?.map(m => m.name).includes(l.model) ??
            false)
      ) ?? false;

    anyExcluded = anyExcluded || !hasAny;
    return hasAny ? selected : chalk.gray(selected);
  });
  return {names, anyExcluded};
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

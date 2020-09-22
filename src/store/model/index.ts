
import {Adorama} from './adorama';
import {Amazon} from './amazon';
import {AmazonCa} from './amazon-ca';
import {AmazonDe} from './amazon-de';
import {Asus} from './asus';
import {AsusDe} from './asus-de';
import {BestBuy} from './bestbuy';
import {BAndH} from './bandh';
import {Config} from '../../config';
import {Evga} from './evga';
import {EvgaEu} from './evga-eu';
import {MicroCenter} from './microcenter';
import {NewEgg} from './newegg';
import {NewEggCa} from './newegg-ca';
import {Nvidia} from './nvidia';
import {Store} from './store';
import {OfficeDepot} from './officedepot';

const masterList = new Map([
	[Adorama.name, Adorama],
	[Amazon.name, Amazon],
	[AmazonCa.name, AmazonCa],
	[AmazonDe.name, AmazonDe],
	[Asus.name, Asus],
	[AsusDe.name, AsusDe],
	[BestBuy.name, BestBuy],
	[BAndH.name, BAndH],
	[Evga.name, Evga],
	[EvgaEu.name, EvgaEu],
	[MicroCenter.name, MicroCenter],
	[NewEgg.name, NewEgg],
	[NewEggCa.name, NewEggCa],
	[Nvidia.name, Nvidia],
	[OfficeDepot.name, OfficeDepot]
]);

const list = new Map();

for (const name of Config.store.stores) {
	list.set(name, masterList.get(name));
}

export const Stores = Array.from(list.values()) as Store[];

export * from './store';

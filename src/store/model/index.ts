
import {Adorama} from './adorama';
import {Amazon} from './amazon';
import {AmazonCa} from './amazon-ca';
import {Asus} from './asus';
import {BAndH} from './bandh';
import {BestBuy} from './bestbuy';
import {BestBuyCa} from './bestbuy-ca';
import {Config} from '../../config';
import {Evga} from './evga';
import {EvgaEu} from './evga-eu';
import {MicroCenter} from './microcenter';
import {NewEgg} from './newegg';
import {NewEggCa} from './newegg-ca';
import {Nvidia} from './nvidia';
import {OfficeDepot} from './officedepot';
import {Store} from './store';
import {Zotac} from './zotac';

const masterList = new Map([
	[Adorama.name, Adorama],
	[Amazon.name, Amazon],
	[AmazonCa.name, AmazonCa],
	[Asus.name, Asus],
	[BAndH.name, BAndH],
	[BestBuy.name, BestBuy],
	[BestBuyCa.name, BestBuyCa],
	[Evga.name, Evga],
	[EvgaEu.name, EvgaEu],
	[MicroCenter.name, MicroCenter],
	[NewEgg.name, NewEgg],
	[NewEggCa.name, NewEggCa],
	[Nvidia.name, Nvidia],
	[OfficeDepot.name, OfficeDepot],
	[Zotac.name, Zotac]
]);

const list = new Map();

for (const name of Config.store.stores) {
	list.set(name, masterList.get(name));
}

export const Stores = Array.from(list.values()) as Store[];

export * from './store';

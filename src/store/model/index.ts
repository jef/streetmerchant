
import {Adorama} from './adorama';
import {Amazon} from './amazon';
import {AmazonCa} from './amazon-ca';
import {Asus} from './asus';
import {BestBuy} from './bestbuy';
import {BAndH} from './bandh';
import {Config} from '../../config';
import {Evga} from './evga';
import {MicroCenter} from './microcenter';
import {NewEgg} from './newegg';
import {Nvidia} from './nvidia';
import {NvidiaDe} from './nvidia-de';
import {Store} from './store';

const masterList = new Map([
	[Adorama.name, Adorama],
	[Amazon.name, Amazon],
	[AmazonCa.name, AmazonCa],
	[Asus.name, Asus],
	[BestBuy.name, BestBuy],
	[BAndH.name, BAndH],
	[Evga.name, Evga],
	[MicroCenter.name, MicroCenter],
	[NewEgg.name, NewEgg],
	[Nvidia.name, Nvidia],
	[NvidiaDe.name, NvidiaDe]
]);

const list = new Map();

for (const name of Config.store.stores) {
	list.set(name, masterList.get(name));
}

export const Stores = Array.from(list.values()) as Store[];

export * from './store';

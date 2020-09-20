import {BestBuy} from './bestbuy';
import {BAndH} from './bandh';
import {Evga} from './evga';
import {NewEgg} from './newegg';
import {Amazon} from './amazon';
import {MicroCenter} from './microcenter';
import {Config} from '../../config';
import {Nvidia} from './nvidia';
import {AmazonCa} from './amazon-ca';

const masterList = new Map([
	[Amazon.name, Amazon],
	[AmazonCa.name, AmazonCa],
	[BestBuy.name, BestBuy],
	[BAndH.name, BAndH],
	[Evga.name, Evga],
	[MicroCenter.name, MicroCenter],
	[NewEgg.name, NewEgg],
	[Nvidia.name, Nvidia]
]);

const list = new Map();

for (const name of Config.stores) {
	list.set(name, masterList.get(name));
}

export const Stores = Array.from(list.values());

export * from './store';

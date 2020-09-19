import {BestBuy} from './bestbuy';
import {BAndH} from './bandh';
import {Evga} from './evga';
import {NewEgg} from './newegg';
import {Zotac} from './zotac';
import {Nvidia} from './nvidia';
import {Amazon} from './amazon';
import {MicroCenter} from './microcenter';
import {Config} from '../config';

const masterList = new Map([
	['amazon', Amazon],
	['bestbuy', BestBuy],
	['bandh', BAndH],
	['evga', Evga],
	['microcenter', MicroCenter],
	['newegg', NewEgg],
	['zotac', Zotac],
	['nvidia', Nvidia]
]);

const list = new Map();

const storeArray = Config.stores.split(',');

for (const name of storeArray) {
	list.set(name, masterList.get(name));
}

export const Stores = Array.from(list.values());

export * from './store';

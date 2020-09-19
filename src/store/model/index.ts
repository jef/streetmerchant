import {BestBuy} from './bestbuy';
import {BAndH} from './bandh';
import {Evga} from './evga';
import {NewEgg} from './newegg';
import {Amazon} from './amazon';
import {MicroCenter} from './microcenter';
import {Config} from '../../config';
import {Nvidia} from './nvidia';
import {Store} from './store';

const masterList = new Map([
	['amazon', Amazon],
	['bestbuy', BestBuy],
	['bandh', BAndH],
	['evga', Evga],
	['microcenter', MicroCenter],
	['newegg', NewEgg],
	['nvidia', Nvidia]
]);

const list = new Map();

const storeArray = Config.stores.split(',');

for (const name of storeArray) {
	list.set(name, masterList.get(name));
}

export const Stores = Array.from(list.values()) as Store[];

export * from './store';

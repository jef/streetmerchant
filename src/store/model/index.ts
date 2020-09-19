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
	['amazon', Amazon],
	['amazonca', AmazonCa],
	['bestbuy', BestBuy],
	['bandh', BAndH],
	['evga', Evga],
	['microcenter', MicroCenter],
	['newegg', NewEgg],
	['nvidia', Nvidia]
]);

const list = new Map();

for (const name of Config.stores) {
	list.set(name, masterList.get(name));
}

export const Stores = Array.from(list.values());

export * from './store';

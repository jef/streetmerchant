import {BestBuy} from './bestbuy';
import {BAndH} from './bandh';
import {NewEgg} from './newegg';
import {Nvidia} from './nvidia';
import {Config} from '../config';

const list = new Map([
	['bestbuy', BestBuy],
	['bandh', BAndH],
	['newegg', NewEgg],
	['nvidia', Nvidia]
]);

if (!Config.stores.toLowerCase().includes('bestbuy')) {
	list.delete('bestbuy');
}

if (!Config.stores.toLowerCase().includes('bandh')) {
	list.delete('bandh');
}

if (!Config.stores.toLowerCase().includes('newegg')) {
	list.delete('newegg');
}

if (!Config.stores.toLowerCase().includes('nvidia')) {
	list.delete('nvidia');
}

export const Stores = Array.from(list.values());

export * from './store';

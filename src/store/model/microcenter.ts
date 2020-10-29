import {Link, Store} from './store';
import {config} from '../../config';
import {logger} from '../../logger';

const microCenterLocations = config.store.microCenterLocation;

const microCenterLocationToId: Map<string, string> = new Map([
	['web', '029'],
	['brooklyn', '115'],
	['brentwood', '095'],
	['cambridge', '121'],
	['chicago', '151'],
	['columbus', '141'],
	['dallas', '131'],
	['denver', '181'],
	['duluth', '065'],
	['fairfax', '081'],
	['flushing', '145'],
	['houston', '155'],
	['madison-heights', '055'],
	['marietta', '041'],
	['mayfield-heights', '051'],
	['north-jersey', '075'],
	['overland-park', '191'],
	['parkville', '125'],
	['rockville', '085'],
	['sharonville', '071'],
	['st-davids', '061'],
	['st-louis-park', '045'],
	['tustin', '101'],
	['westbury', '171'],
	['westmont', '025'],
	['yonkers', '105']
]);

let links: Link[] = [];
let storeId: string;
for (const microCenterLocation of microCenterLocations) {
	if (microCenterLocationToId.get(microCenterLocation) === undefined) {
		const logString = `No MicroCenter location named ${microCenterLocation}, skipping.`;
		logger.warn(logString);
	} else {
		storeId = microCenterLocationToId.get(microCenterLocation)!;
		links = links.concat([
			{
				brand: 'test:brand',
				model: 'test:model',
				series: 'test:series',
				url: `https://www.microcenter.com/product/618433/evga-geforce-rtx-2060-ko-ultra-overclocked-dual-fan-6gb-gddr6-pcie-30-graphics-card/?storeid=${storeId}`
			},
			{
				brand: 'evga',
				model: 'xc3 ultra',
				series: '3080',
				url: `https://www.microcenter.com/product/628344/evga-geforce-rtx-3080-xc3-ultra-gaming-triple-fan-10gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`
			},
			{
				brand: 'evga',
				model: 'ftw3 ultra',
				series: '3080',
				url: `https://www.microcenter.com/product/628346/evga-geforce-rtx-3080-ftw3-ultra-gaming-triple-fan-10gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`
			},
			{
				brand: 'msi',
				model: 'ventus 3x',
				series: '3080',
				url: `https://www.microcenter.com/product/628331/msi-geforce-rtx-3080-ventus-3x-overclocked-triple-fan-10gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`
			},
			{
				brand: 'asus',
				model: 'tuf',
				series: '3080',
				url: `https://www.microcenter.com/product/628303/asus-geforce-rtx-3080-tuf-gaming-triple-fan-10gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`
			},
			{
				brand: 'msi',
				model: 'gaming x trio',
				series: '3080',
				url: `https://www.microcenter.com/product/628330/msi-geforce-rtx-3080-gaming-x-trio-triple-fan-10gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`
			},
			{
				brand: 'evga',
				model: 'xc3 black',
				series: '3080',
				url: `https://www.microcenter.com/product/628340/evga-geforce-rtx-3080-xc3-black-triple-fan-10gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`
			},
			{
				brand: 'zotac',
				model: 'trinity',
				series: '3080',
				url: `https://www.microcenter.com/product/628607/zotac-geforce-rtx-3080-trinity-overclocked-triple-fan-10gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`
			}
		]);
	}
}

export const MicroCenter: Store = {
	labels: {
		inStock: {
			container: '#cart-options',
			text: ['in stock']
		},
		maxPrice: {
			container: 'span[id="pricing"]',
			euroFormat: false
		}
	},
	links,
	name: 'microcenter'
};

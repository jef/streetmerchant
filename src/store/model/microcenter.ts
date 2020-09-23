import {Config} from '../../config';
import {Store} from './store';

const MicroCenterLocation = Config.store.microCenterLocation;
const MicroCenterLocationToID: Map<string, string> = new Map([
	['WEB', '029'],
	['TUSTIN', '101'],
	['DENVER', '181'],
	['DULUTH', '065'],
	['MARIETTA', '041'],
	['CHICAGO', '151'],
	['WESTMONT', '025'],
	['OVERLAND PARK', '191'],
	['CAMBRIDGE', '121'],
	['ROCKVILLE', '085'],
	['PARKVILLE', '125'],
	['MADISON HEIGHTS', '055'],
	['ST. LOUIS PARK', '045'],
	['BRENTWOOD', '095'],
	['NORTH JERSEY', '075'],
	['WESTBURY', '171'],
	['BROOKLYN', '115'],
	['FLUSHING', '145'],
	['YONKERS', '105'],
	['COLUMBUS', '141'],
	['MAYFIELD HEIGHTS', '051'],
	['SHARONVILLE', '071'],
	['ST. DAVIDS', '061'],
	['HOUSTON', '155'],
	['DALLAS', '131'],
	['FAIRFAX', '081']
]);

let mcID: string;
if (MicroCenterLocationToID.get(MicroCenterLocation) === undefined) {
	mcID = '029';
} else {
	mcID = MicroCenterLocationToID.get(MicroCenterLocation)!;
}

export const MicroCenter: Store = {
	labels: {
		outOfStock: ['sold out']
	},
	links: [
		{
			brand: 'TEST',
			model: 'CARD',
			series: 'debug',
			url: `https://www.microcenter.com/product/618433/evga-geforce-rtx-2060-ko-ultra-overclocked-dual-fan-6gb-gddr6-pcie-30-graphics-card/?storeid=${mcID}`
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url: `https://www.microcenter.com/product/628344/evga-geforce-rtx-3080-xc3-ultra-gaming-triple-fan-10gb-gddr6x-pcie-40-graphics-card/?storeid=${mcID}`
		},
		{
			brand: 'msi',
			model: 'ventus 3x',
			series: '3080',
			url: `https://www.microcenter.com/product/628331/msi-geforce-rtx-3080-ventus-3x-overclocked-triple-fan-10gb-gddr6x-pcie-40-graphics-card/?storeid=${mcID}`
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: `https://www.microcenter.com/product/628303/asus-geforce-rtx-3080-tuf-gaming-triple-fan-10gb-gddr6x-pcie-40-graphics-card/?storeid=${mcID}`
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: `https://www.microcenter.com/product/628330/msi-geforce-rtx-3080-gaming-x-trio-triple-fan-10gb-gddr6x-pcie-40-graphics-card/?storeid=${mcID}`
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url: `https://www.microcenter.com/product/628340/evga-geforce-rtx-3080-xc3-black-triple-fan-10gb-gddr6x-pcie-40-graphics-card/?storeid=${mcID}`
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: `https://www.microcenter.com/product/628607/zotac-geforce-rtx-3080-trinity-overclocked-triple-fan-10gb-gddr6x-pcie-40-graphics-card/?storeid=${mcID}`
		}
	],
	name: 'microcenter'
};

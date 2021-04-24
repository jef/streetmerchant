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
  ['yonkers', '105'],
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
        url: `https://www.microcenter.com/product/618433/evga-geforce-rtx-2060-ko-ultra-overclocked-dual-fan-6gb-gddr6-pcie-30-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'msi',
        model: 'suprim x',
        series: '3090',
        url: `https://www.microcenter.com/product/631534/msi-geforce-rtx-3090-suprim-x-overclocked-triple-fan-24gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'asus',
        model: 'ekwb',
        series: '3090',
        url: `https://www.microcenter.com/product/631930/asus-nvidia-geforce-rtx-3090-ekwb-liquid-cooled-24gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'gigabyte',
        model: 'aorus master',
        series: '3090',
        url: `https://www.microcenter.com/product/631675/gigabyte-geforce-rtx-3090-aorus-master-overclocked-triple-fan-24gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'gigabyte',
        model: 'gaming oc',
        series: '3090',
        url: `https://www.microcenter.com/product/628413/gigabyte-geforce-rtx-3090-gaming-overclocked-triple-fan-24gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'asus',
        model: 'tuf',
        series: '3090',
        url: `https://www.microcenter.com/product/628319/asus-geforce-rtx-3090-tuf-gaming-triple-fan-24gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'asus',
        model: 'tuf oc',
        series: '3090',
        url: `https://www.microcenter.com/product/628321/asus-geforce-rtx-3090-tuf-gaming-overclocked-triple-fan-24gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'asus',
        model: 'strix oc',
        series: '3090',
        url: `https://www.microcenter.com/product/628685/asus-geforce-rtx-3090-strix-overclocked-triple-fan-24gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'msi',
        model: 'ventus 3x oc',
        series: '3090',
        url: `https://www.microcenter.com/product/628326/msi-geforce-rtx-3090-ventus-3x-overclocked-triple-fan-24gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'msi',
        model: 'gaming x trio',
        series: '3090',
        url: `https://www.microcenter.com/product/628320/msi-geforce-rtx-3090-gaming-x-trio-triple-fan-24gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'evga',
        model: 'ftw3 ultra',
        series: '3090',
        url: `https://www.microcenter.com/product/628738/evga-geforce-rtx-3090-ftw3-ultra-triple-fan-24gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'evga',
        model: 'xc3 ultra',
        series: '3090',
        url: `https://www.microcenter.com/product/628740/evga-geforce-rtx-3090-xc3-ultra-gaming-overclocked-triple-fan-24gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'evga',
        model: 'xc3 ultra',
        series: '3080',
        url: `https://www.microcenter.com/product/628344/evga-geforce-rtx-3080-xc3-ultra-gaming-triple-fan-10gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'evga',
        model: 'ftw3 ultra',
        series: '3080',
        url: `https://www.microcenter.com/product/628346/evga-geforce-rtx-3080-ftw3-ultra-gaming-triple-fan-10gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'msi',
        model: 'ventus 3x',
        series: '3080',
        url: `https://www.microcenter.com/product/628331/msi-geforce-rtx-3080-ventus-3x-overclocked-triple-fan-10gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'asus',
        model: 'tuf',
        series: '3080',
        url: `https://www.microcenter.com/product/628303/asus-geforce-rtx-3080-tuf-gaming-triple-fan-10gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'asus',
        model: 'strix oc',
        series: '3080',
        url: `https://www.microcenter.com/product/628686/asus-geforce-rtx-3080-strix-overclocked-triple-fan-10gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'asus',
        model: 'strix oc',
        series: '3070',
        url: `https://www.microcenter.com/product/630686/asus-geforce-rtx-3070-rog-strix-overclocked-dual-fan-8gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'asus',
        model: 'tuf oc',
        series: '3070',
        url: `https://www.microcenter.com/product/630684/asus-geforce-rtx-3070-tuf-overclocked-triple-fan-8gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'msi',
        model: 'gaming x trio',
        series: '3080',
        url: `https://www.microcenter.com/product/628330/msi-geforce-rtx-3080-gaming-x-trio-triple-fan-10gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'evga',
        model: 'xc3 black',
        series: '3080',
        url: `https://www.microcenter.com/product/628340/evga-geforce-rtx-3080-xc3-black-triple-fan-10gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'evga',
        model: 'xc3 black',
        series: '3070',
        url: `https://www.microcenter.com/product/630579/evga-geforce-rtx-3070-xc3-black-gaming-triple-fan-8gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'zotac',
        model: 'trinity',
        series: '3080',
        url: `https://www.microcenter.com/product/628607/zotac-geforce-rtx-3080-trinity-overclocked-triple-fan-10gb-gddr6x-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'nvidia',
        model: 'founders edition',
        series: '3060ti',
        url: `https://www.microcenter.com/product/631716/nvidia-geforce-rtx-3060ti-ti-founders-edition-dual-fan-8gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'msi',
        model: 'gaming x trio',
        series: '3060ti',
        url: `https://www.microcenter.com/product/631531/msi-geforce-rtx-3060ti-ti-gaming-x-trio-triple-fan-8gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'msi',
        model: 'ventus 2x oc',
        series: '3060ti',
        url: `https://www.microcenter.com/product/631532/msi-geforce-rtx-3060ti-ti-ventus-2x-overclocked-dual-fan-8gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'evga',
        model: 'ftw3 ultra',
        series: '3060ti',
        url: `https://www.microcenter.com/product/631926/evga-geforce-rtx-3060ti-ti-ftw-ultra-gaming-triple-fan-8gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'asus',
        model: 'dual oc',
        series: '3060ti',
        url: `https://www.microcenter.com/product/631473/asus-geforce-rtx-3060ti-ti-dual-overclocked-dual-fan-8gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'asus',
        model: 'tuf',
        series: '3060ti',
        url: `https://www.microcenter.com/product/631469/asus-geforce-rtx-3060ti-ti-tuf-gaming-overclocked-dual-fan-8gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'asus',
        model: 'strix oc',
        series: '3060ti',
        url: `https://www.microcenter.com/product/631283/asus-geforce-rtx-3060ti-ti-rog-strix-overclocked-triple-fan-8gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'gigabyte',
        model: 'gaming oc',
        series: '3060ti',
        url: `https://www.microcenter.com/product/631742/gigabyte-geforce-rtx-3060ti-ti-gaming-overclocked-triple-fan-8gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'gigabyte',
        model: 'eagle',
        series: '3060ti',
        url: `https://www.microcenter.com/product/631744/gigabyte-geforce-rtx-3060ti-ti-eagle-dual-fan-8gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'asus',
        model: 'tuf',
        series: '3060',
        url: `https://www.microcenter.com/product/633747/asus-nvidia-geforce-rtx-3060-tuf-gaming-overclocked-triple-fan-12gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'msi',
        model: 'gaming x',
        series: '3060',
        url: `https://www.microcenter.com/product/633838/msi-nvidia-geforce-rtx-3060-gaming-x-overclocked-dual-fan-12gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'msi',
        model: 'ventus 3x',
        series: '3060',
        url: `https://www.microcenter.com/product/633839/msi-nvidia-geforce-rtx-3060-ventus-3x-overclocked-triple-fan-12gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'msi',
        model: 'ventus 2x',
        series: '3060',
        url: `https://www.microcenter.com/product/633840/msi-nvidia-geforce-rtx-3060-ventus-2x-overclocked-dual-fan-12gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'gigabyte',
        model: 'vision',
        series: '3060',
        url: `https://www.microcenter.com/product/634291/gigabyte-nvidia-geforce-rtx-3060-vision-overclocked-triple-fan-12gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'asus',
        model: 'strix',
        series: '3060',
        url: `https://www.microcenter.com/product/633746/asus-nvidia-geforce-rtx-3060-rog-strix-overclocked-triple-fan-12gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'msi',
        model: 'gaming x trio',
        series: '3060',
        url: `https://www.microcenter.com/product/633837/msi-nvidia-geforce-rtx-3060-gaming-x-trio-overclocked-triple-fan-12gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'gigabyte',
        model: 'gaming oc',
        series: '3060',
        url: `https://www.microcenter.com/product/634290/gigabyte-nvidia-geforce-rtx-3060-gaming-overclocked-triple-fan-12gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'zotac',
        model: 'twin edge oc',
        series: '3060',
        url: `https://www.microcenter.com/product/633835/zotac-nvidia-geforce-rtx-3060-twin-edge-overclocked-dual-fan-12gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'evga',
        model: 'gaming',
        series: '3060',
        url: `https://www.microcenter.com/product/634181/evga-nvidia-geforce-rtx-3060-xc-gaming-dual-fan-12gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'amd',
        model: '5600x',
        series: 'ryzen5600',
        url: `https://www.microcenter.com/product/630285/amd-ryzen-5-5600x-vermeer-37ghz-6-core-am4-boxed-processor-with-wraith-stealth-cooler/?storeid=${storeId}`,
      },
      {
        brand: 'amd',
        model: '5800x',
        series: 'ryzen5800',
        url: `https://www.microcenter.com/product/630284/amd-ryzen-7-5800x-vermeer-38ghz-8-core-am4-boxed-processor/?storeid=${storeId}`,
      },
      {
        brand: 'amd',
        model: '5900x',
        series: 'ryzen5900',
        url: `https://www.microcenter.com/product/630283/amd-ryzen-9-5900x-vermeer-37ghz-12-core-am4-boxed-processor/?storeid=${storeId}`,
      },
      {
        brand: 'amd',
        model: '5950x',
        series: 'ryzen5950',
        url: `https://www.microcenter.com/product/630282/amd-ryzen-9-5950x-vermeer-34ghz-16-core-am4-boxed-processor/?storeid=${storeId}`,
      },
      {
        brand: 'asrock',
        model: 'amd reference',
        series: 'rx6900xt',
        url: `https://www.microcenter.com/product/632048/asrock-amd-radeon-rx-6900-xt-triple-fan-16gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'powercolor',
        model: 'amd reference',
        series: 'rx6900xt',
        url: `https://www.microcenter.com/product/632091/powercolor-amd-radeon-rx-6900-xt-triple-fan-16gb-gddr6-pcie-40-graphics-card/?storeid=${storeId}`,
      },
      {
        brand: 'asus',
        model: 'crosshair viii',
        series: 'darkhero',
        url: `https://www.microcenter.com/product/631349/asus-x570-rog-crosshair-viii-dark-hero-amd-am4-atx-motherboard/?storeid=${storeId}`,
      },
    ]);
  }
}

export const MicroCenter: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '#pnlInventory',
      text: ['in stock'],
    },
    outOfStock: {
      container: '.inventoryCnt',
      text: ['0'],
    },
    maxPrice: {
      container: 'span[id="pricing"]',
      euroFormat: false,
    },
  },
  links,
  name: 'microcenter',
};

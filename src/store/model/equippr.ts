import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Equippr: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: 'buybox--button-container',
      text: ['in den warenkorb'],
    },
    maxPrice: {
      container: '.product--price',
      euroFormat: true,
    },
    outOfStock: {
      container: '.product--buybox',
      text: ['bald verfügbar'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.equippr.de/amd-ryzen-5-2600x-6x-3-60-ghz-box-yd260xbcafbox-2000034.html',
    },
    {
      brand: 'asus',
      model: 'dual oc',
      series: '3060ti',
      url: 'https://www.equippr.de/asus-geforce-rtx-3060-ti-dual-8-gb-gddr6-retail-2066580.html',
    },
    {
      brand: 'inno3d',
      model: 'ichill x3',
      series: '3060ti',
      url: 'https://www.equippr.de/inno3d-geforce-rtx-3060-ti-ichill-x3-8-gb-gddr6-2066593.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus',
      series: '3060ti',
      url: 'https://www.equippr.de/gigabyte-geforce-rtx-3060-ti-aorus-8-gb-gddr6-retail-2066569.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3060ti',
      url: 'https://www.equippr.de/msi-geforce-rtx-3060-ti-gaming-x-trio-8-gb-gddr6-retail-2066573.html',
    },
    {
      brand: 'msi',
      model: 'ventus 2x',
      series: '3060ti',
      url: 'https://www.equippr.de/msi-geforce-rtx-3060-ti-ventus-2x-oc-8-gb-gddr6-retail-2066574.html',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3070',
      url: 'https://www.equippr.de/zotac-geforce-rtx-3070-twin-edge-oc-8-gb-gddr6-retail-2064130.html',
    },
    {
      brand: 'zotac',
      model: 'twin edge',
      series: '3070',
      url: 'https://www.equippr.de/zotac-geforce-rtx-3070-twin-edge-8-gb-gddr6-retail-2060897.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3070',
      url: 'https://www.equippr.de/gigabyte-geforce-rtx-3070-eagle-8-gb-gddr6-retail-2063884.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3070',
      url: 'https://www.equippr.de/gigabyte-geforce-rtx-3070-eagle-oc-8-gb-gddr6-retail-2063882.html',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3080',
      url: 'https://www.equippr.de/evga-geforce-rtx-3080-xc3-ultra-gaming-10-gb-gddr6x-retail-2061393.html',
    },
    {
      brand: 'evga',
      model: 'xc3',
      series: '3080',
      url: 'https://www.equippr.de/evga-geforce-rtx-3080-xc3-gaming-10-gb-gddr6x-retail-2061391.html',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: 'rx6700xt',
      url: 'https://www.equippr.de/asus-radeon-rx-6700-xt-rog-strix-oc-12-gb-gddr6-retail-2072469.html',
    },
  ],
  name: 'equippr',
  country: 'DE',
  linksBuilder: {
    builder: getProductLinksBuilder({
      productsSelector: '.product--box',
      sitePrefix: 'https://www.equippr.de/',
      titleSelector: 'a.product--title',
    }),
    ttl: 1,
    urls: [
      {
        series: '3060',
        url: 'https://www.equippr.de/computer-elektronik/pc-komponenten/grafikkarten/nvidia-geforce-rtx/?p=1&o=8&n=120&f=67374',
      },
      {
        series: '3060ti',
        url: 'https://www.equippr.de/computer-elektronik/pc-komponenten/grafikkarten/nvidia-geforce-rtx/?p=1&o=8&n=120&f=66256',
      },
      {
        series: '3070',
        url: 'https://www.equippr.de/computer-elektronik/pc-komponenten/grafikkarten/nvidia-geforce-rtx/?p=1&o=8&n=120&f=66230',
      },
      {
        series: '3070ti',
        url: 'https://www.equippr.de/computer-elektronik/pc-komponenten/grafikkarten/nvidia-geforce-rtx/?p=1&o=8&n=120&f=69119',
      },
      {
        series: '3080',
        url: 'https://www.equippr.de/computer-elektronik/pc-komponenten/grafikkarten/nvidia-geforce-rtx/?p=1&o=8&n=120&f=66221',
      },
      {
        series: '3080ti',
        url: 'https://www.equippr.de/computer-elektronik/pc-komponenten/grafikkarten/nvidia-geforce-rtx/?p=1&o=8&n=120&f=69117',
      },
      {
        series: '3090',
        url: 'https://www.equippr.de/computer-elektronik/pc-komponenten/grafikkarten/nvidia-geforce-rtx/?p=1&o=8&n=120&f=66208',
      },
    ],
  },
};

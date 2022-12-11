import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Ebuyer: Store = {
  currency: '£',
  labels: {
    inStock: {
      container: '.purchase-info__cta',
      text: ['add to basket', 'pre-order'],
    },
    maxPrice: {
      container: '.purchase-info__price .price',
      euroFormat: false, // Note: ebuyer uses non-euroFromat as price seperator
    },
    outOfStock: {
      container: '.purchase-info',
      text: ['coming soon'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.ebuyer.com/874209-gigabyte-geforce-rtx-2060-windforce-6gb-oc-graphics-card-gv-n2060wf2oc-6gd-v2',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.ebuyer.com/1133940-sony-playstation-5-console-cfi-1016a',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.ebuyer.com/1133942-sony-playstation-5-digital-edition-cfi-1016b-',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.ebuyer.com/1133948-xbox-series-x-console-rrt-00007',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.ebuyer.com/1133947-xbox-series-s-all-digital-console-rrs-00007',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.ebuyer.com/1126988-amd-ryzen-5-5600x-am4-processor-100-100000065box',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.ebuyer.com/1126987-amd-ryzen-7-5800x-am4-processor-100-100000063wof',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.ebuyer.com/1126986-amd-ryzen-9-5900x-am4-processor-100-100000061wof',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.ebuyer.com/1126985-amd-ryzen-9-5950x-am4-processor-100-100000059wof',
    },
  ],
  linksBuilder: {
    builder: getProductLinksBuilder({
      productsSelector: '#list-view .listing-product',
      sitePrefix: 'https://www.ebuyer.com',
      titleSelector: '.listing-product-title',
      urlSelector: 'a[href]',
    }),
    urls: [
      {
        series: 'rx6800',
        url: 'https://www.ebuyer.com/store/Components/cat/Graphics-Cards-AMD/subcat/AMD-RX-6800',
      },
      {
        series: 'rx6800xt',
        url: 'https://www.ebuyer.com/store/Components/cat/Graphics-Cards-AMD/subcat/AMD-RX-6800-XT',
      },
      {
        series: 'rx6900xt',
        url: 'https://www.ebuyer.com/store/Components/cat/Graphics-Cards-AMD/subcat/AMD-RX-6900-XT',
      },
      {
        series: '3060ti',
        url: 'https://www.ebuyer.com/store/Components/cat/Graphics-Cards-Nvidia/subcat/GeForce-RTX-3060-Ti',
      },
      {
        series: '3060ti',
        url: 'https://www.ebuyer.com/store/Components/cat/Graphics-Cards-Nvidia/subcat/GeForce-RTX-3060-Ti?page=2',
      },
      {
        series: '3060',
        url: 'https://www.ebuyer.com/store/Components/cat/Graphics-Cards-Nvidia/subcat/GeForce-RTX-3060',
      },
      {
        series: '3070',
        url: 'https://www.ebuyer.com/store/Components/cat/Graphics-Cards-Nvidia/subcat/GeForce-RTX-3070',
      },
      {
        series: '3080',
        url: 'https://www.ebuyer.com/store/Components/cat/Graphics-Cards-Nvidia/subcat/GeForce-RTX-3080',
      },
      {
        series: '3090',
        url: 'https://www.ebuyer.com/store/Components/cat/Graphics-Cards-Nvidia/subcat/GeForce-RTX-3090',
      },
    ],
  },
  name: 'ebuyer',
  waitUntil: 'domcontentloaded',
};

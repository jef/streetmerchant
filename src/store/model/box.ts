import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Box: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '£',
  labels: {
    inStock: {
      container: '#divBuyButton',
      text: ['add to basket'],
    },
    maxPrice: {
      container: '.p-price',
      euroFormat: false, // Note: Box uses non-euroFromat as price seperator
    },
    outOfStock: {
      container: '#divBuyButton',
      text: ['request stock alert', 'coming soon'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.box.co.uk/Gigabyte-GeForce-RTX-2080-Super-8GB-Wind_2724554.html',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.box.co.uk/CFI-1015A-Sony-Playstation-5-Console_3199689.html',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url:
        'https://www.box.co.uk/CFI-1015B-Sony-PlayStation-5-Digital-Edition-Conso_3199692.html',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.box.co.uk/RRT-00007-Xbox-Series-X-Console_3201195.html',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.box.co.uk/RRS-00007-Xbox-Series-S-Console_3201197.html',
    },
    {
      brand: 'amd',
      model: 'tuf oc',
      series: 'rx6900xt',
      url:
        'https://www.box.co.uk/90YV0GE0-M0NM00-ASUS-Radeon-RX-X6900XT-16GB-OC-Gaming-Gr_3561243.html',
    },
  ],
  linksBuilder: {
    builder: getProductLinksBuilder({
      productsSelector: '.products-right .p-list',
      sitePrefix: 'https://www.box.co.uk',
      titleSelector: '.p-list-section > h3 > a[href]',
    }),
    urls: [
      {
        series: '3060ti',
        url: 'https://www.box.co.uk/rtx-3060-ti-graphics-cards',
      },
      {
        series: '3070',
        url: 'https://www.box.co.uk/rtx-3070-graphics-cards',
      },
      {
        series: '3080',
        url: 'https://www.box.co.uk/rtx-3080-graphics-cards',
      },
      {
        series: '3090',
        url: 'https://www.box.co.uk/rtx-3090-graphics-cards',
      },
    ],
  },
  name: 'box',
  waitUntil: 'domcontentloaded',
};

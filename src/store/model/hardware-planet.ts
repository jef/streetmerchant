import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const HardwarePlanet: Store = {
  backoffStatusCodes: [404, 429, 503],
  currency: '€',
  labels: {
    inStock: {
      container: '.add >button.add-to-cart',
      text: ['Aggiungi al carrello'],
    },
    maxPrice: {
      container: '.product-price',
      euroFormat: true,
    },
    outOfStock: {
      container: '#product-availability',
      text: ['Non disponibile'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.hardware-planet.it/mouse/2929-vendita-mouse-logitech-mouse-m185-optical-swift-grey-910-002238-5099206027282.html',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.hardware-planet.it/cpu-socket-am4/74745-vendita-cpu-socket-am4-amd-cpu-am4-ryzen-5-5600x-box-wraith-stealth-cooler-100-100000065box.html',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.hardware-planet.it/cpu-socket-am4/74421-vendita-cpu-socket-am4-amd-cpu-am4-ryzen-7-5800x-4700ghz-wof-box-100-100000063wof-730143312714.html/',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.hardware-planet.it/cpu-socket-am4/74422-vendita-cpu-socket-am4-amd-cpu-am4-ryzen-9-5950x-4900-ghz-wof-box-100-100000059wof-730143312745.html',
    },
  ],
  linksBuilder: {
    builder: getProductLinksBuilder({
      productsSelector: '.js-product-miniature-wrapper',
      sitePrefix: 'https://www.hardware-planet.it',
      titleSelector: '.product-title > a',
    }),
    urls: [
      {
        series: '3060ti',
        url: 'https://www.hardware-planet.it/module/iqitsearch/searchiqit?s=rtx+3060',
      },
      {
        series: '3070',
        url: 'https://www.hardware-planet.it/module/iqitsearch/searchiqit?s=rtx+3070',
      },
      {
        series: '3080',
        url: 'https://www.hardware-planet.it/module/iqitsearch/searchiqit?s=rtx+3080',
      },
    ],
  },
  name: 'hardware-planet',
  waitUntil: 'domcontentloaded',
};

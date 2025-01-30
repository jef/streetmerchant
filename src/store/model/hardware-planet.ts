import {getProductLinksBuilder} from './helpers/card';
import {Store} from './store';

export const HardwarePlanet: Store = {
  backoffStatusCodes: [404, 429, 503],
  currency: '€',
  labels: {
    inStock: {
      container: '.add >button.add-to-cart',
      text: ['Aggiungi al carrello'],
    },
    maxPrice: {
      container: '..current-price > span',
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
      url: 'https://www.hardware-planet.it/cavi-per-ventole/74819-vendita-cavi-per-ventole-inline-cavo-alimentazione-6x-ventola-3pin-da-1x-3pin-femmina-35mainboard-supporta-6-ventole-offerta-del-mese-33436-4043718149780.html',
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
      productsSelector: '.horizontal_mode .js-product-miniature',
      sitePrefix: 'https://www.hardware-planet.it',
      titleSelector: '.product_name > a',
    }),
    urls: [
      {
        series: '3060ti',
        url: 'https://www.hardware-planet.it/55-schede-video-nvidia?q=Processore+grafico-GeForce+RTX+3060+Ti',
      },
      {
        series: '3080',
        url: 'https://www.hardware-planet.it/55-schede-video-nvidia?q=Processore+grafico-GeForce+RTX+3080',
      },
      {
        series: '3080ti',
        url: 'https://www.hardware-planet.it/55-schede-video-nvidia?q=Processore+grafico-GeForce+RTX+3080+Ti',
      },
      {
        series: '3090',
        url: 'https://www.hardware-planet.it/55-schede-video-nvidia?q=Processore+grafico-GeForce+RTX+3090',
      },
      {
        series: 'rx6700xt',
        url: 'https://www.hardware-planet.it/54-schede-video-ati-amd?q=Processore+grafico-Radeon+RX+6700+XT',
      },
      {
        series: 'rx6800xt',
        url: 'https://www.hardware-planet.it/54-schede-video-ati-amd?q=Processore+grafico-Radeon+RX+6800+XT',
      },
      {
        series: 'rx6900xt',
        url: 'https://www.hardware-planet.it/54-schede-video-ati-amd?q=Processore+grafico-Radeon+RX+6900+XT',
      },
    ],
  },
  name: 'hardware-planet',
  country: 'IT',
  waitUntil: 'domcontentloaded',
};

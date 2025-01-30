import {Store} from './store';

export const Spielegrotte: Store = {
  currency: '€',
  labels: {
    inStock: [
      {
        container:
          'html > body > table > tbody > tr > td > div > table > tbody > tr > td > center > table > tbody > tr > td > a.klein > img',
        text: [''],
      },
    ],
    maxPrice: {
      container:
        'html > body > table > tbody > tr > td > div > table > tbody > tr > td > center > table > tbody > tr > td > font > b',
      euroFormat: true,
    },
    outOfStock: {
      container:
        'html > body > table > tbody > tr > td > div > table > tbody > tr > td > center > font > b',
      text: ['Dieses Produkt ist leider neu nicht mehr verfügbar'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.spielegrotte.de/index.php?kat=100056&anr=54288',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.spielegrotte.de/index.php?kat=100100&anr=56005',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.spielegrotte.de/index.php?kat=100100&anr=56006',
    },
  ],
  name: 'spielegrotte',
  country: 'DE',
};

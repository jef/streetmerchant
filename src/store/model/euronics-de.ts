import {Store} from './store';

export const EuronicsDE: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.buy-btn--cart-text',
      text: ['Warenkorb'],
    },
    maxPrice: {
      container: '.price--content',
      euroFormat: true,
    },
    outOfStock: {
      container:
        '.product--buybox .alert.is--error.is--rounded .alert--content',
      text: [
        'Artikel steht derzeit nicht zur Verfügung',
        'Morgen im Laufe des Morgens und nur online unter',
      ],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.euronics.de/telefon-und-navigation/festnetz/schnurlose-telefone/kx-tg6721gb-schnurlostelefon-mit-anrufbeantworter-schwarz-4051168442801',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.euronics.de/spiele-und-konsolen-film-und-musik/spiele-und-konsolen/xbox-series-x/spielekonsole/xbox-series-s-512gb-konsole-4061856838076',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.euronics.de/spiele-und-konsolen-film-und-musik/spiele-und-konsolen/xbox-series-x/spielekonsole/xbox-series-x-1tb-konsole-4061856838045',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.euronics.de/spiele-und-konsolen-film-und-musik/spiele-und-konsolen/playstation-5/spielekonsole/playstation-5-digital-edition-konsole-4061856837833',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.euronics.de/spiele-und-konsolen-film-und-musik/spiele-und-konsolen/playstation-5/spielekonsole/playstation-5-konsole-4061856837826',
    },
  ],
  name: 'euronics-de',
  country: 'DE',
};

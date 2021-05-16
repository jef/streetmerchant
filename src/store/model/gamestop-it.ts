import {Store} from './store';

export const GamestopIT: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '#btnAddToCart',
      text: ['Aggiungi al Carrello'],
    },
    maxPrice: {
      container: '.buySection .prodPriceCont',
      euroFormat: true,
    },
    outOfStock: {
      container: '.megaButton .buyDisabled',
      text: ['Esaurito'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.gamestop.it/Switch/Games/134107',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.gamestop.it/XboxSeriesX/Games/132509',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.gamestop.it/XboxSeriesX/Games/128220',
    },
  ],
  name: 'gamestop-it',
};

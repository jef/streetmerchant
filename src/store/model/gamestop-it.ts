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
  country: 'IT',
};

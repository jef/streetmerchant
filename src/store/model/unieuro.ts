import {Store} from './store';

export const Unieuro: Store = {
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['Too Many Requests.'],
    },
    inStock: {
      container: '.price-container',
      text: ['Aggiungi al carrello'],
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.unieuro.it/online/Playstation-5/PlayStation-5-pidSONPS5DISC',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.unieuro.it/online/Playstation-5/PlayStation-5-Digital-Edition-pidSONPS5DIGITAL',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.unieuro.it/online/Xbox-Series/Xbox-Series-X-pidDBLRRT00008',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.unieuro.it/online/Xbox-Series/Xbox-Series-S-pidDBLRRS00008',
    },
  ],
  name: 'unieuro',
  country: 'IT',
};

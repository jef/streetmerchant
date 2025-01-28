import {Store} from './store';

export const Microsoft: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: 'button[aria-label="Checkout bundle"]',
      text: ['Checkout'],
    },
    outOfStock: {
      container: 'button[aria-label="Checkout bundle"]',
      text: ['Out of stock'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.xbox.com/en-us/configure/8WJ714N3RBTL',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.xbox.com/en-us/configure/8WJ714N3RBTL',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.xbox.com/en-us/configure/942J774TP9JN',
    },
  ],
  name: 'microsoft',
  country: 'US',
};

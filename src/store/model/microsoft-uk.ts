import {Store} from './store';

export const MicrosoftUK: Store = {
  currency: '£',
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
      url: 'https://www.xbox.com/en-gb/configure/8WJ714N3RBTL',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.xbox.com/en-gb/configure/8WJ714N3RBTL',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.xbox.com/en-gb/configure/942J774TP9JN',
    },
  ],
  name: 'microsoft-uk',
};

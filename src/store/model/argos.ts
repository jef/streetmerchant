import {Store} from './store';

export const Argos: Store = {
  currency: '£',
  labels: {
    inStock: {
      container: 'button[data-test="add-to-trolley-button-button"',
      text: ['to trolley'],
    },
    maxPrice: {
      container: 'li[itemprop="price"]',
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.argos.co.uk/product/5718469',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.argos.co.uk/product/8349000',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.argos.co.uk/product/8349024',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.argos.co.uk/product/8448262',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.argos.co.uk/product/8448248',
    },
  ],
  name: 'argos',
  country: 'UK',
};

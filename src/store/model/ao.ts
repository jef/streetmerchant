import {Store} from './store';

export const AO: Store = {
  currency: '£',
  labels: {
    outOfStock: {
      container: 'section.centred-heading-copy strong',
      text: ['currently unavailable'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://ao.com/brands/nintendo',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://ao.com/brands/playstation',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://ao.com/brands/playstation',
    },
  ],
  name: 'ao',
};

import {Store} from './store';

export const ToysRUs: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: 'li.b-product_status',
      text: ['in stock'],
    },
    maxPrice: {
      container: '.b-price-value',
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.toysrus.ca/en/Hasbro-Gaming---Operation-Game---styles-may-vary/99D52A22.html',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.toysrus.ca/en/PlayStation-5-Console/C443A89B.html',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.toysrus.ca/en/PlayStation-5-Digital-Edition/E4A019FE.html',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.toysrus.ca/en/XBOX-Series-X-Console/84D9A92D.html',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.toysrus.ca/en/XBOX-Series-S-Console/A43E2AF7.html',
    },
  ],
  name: 'toysrus',
  country: 'US',
};

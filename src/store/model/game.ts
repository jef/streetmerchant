import {Store} from './store';

export const Game: Store = {
  currency: '£',
  labels: {
    inStock: {
      container: '.buyingOptions',
      text: ['Pre-order Now', 'Buy New'],
    },
    maxPrice: {
      container: '.buyingOptions .btnPrice',
      euroFormat: false,
    },
    outOfStock: {
      container: '.buyingOptions',
      text: ['out of stock'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.game.co.uk/en/ea-sports-fifa-21-500gb-ps4-bundle-2832947',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.game.co.uk/en/playstation-5-console-2826338',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.game.co.uk/en/playstation-5-digital-edition-2826341',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.game.co.uk/en/xbox-series-x-2831406',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.game.co.uk/en/xbox-series-x-2831406',
    },
  ],
  name: 'game',
  country: 'UK',
};

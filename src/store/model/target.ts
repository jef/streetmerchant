import {Store} from './store';

export const Target: Store = {
  currency: '$',
  labels: {
    inStock: [
      {
        container: '[data-test="preorderButton"]',
        text: ['Preorder now'],
      },
      {
        container: '[data-test="shipItButton"]',
        text: ['Ship it'],
      },
    ],
    maxPrice: {
      container: '[data-test="product-price"]',
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.target.com/p/playstation-5-console/-/A-87716467',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.target.com/p/playstation-5-digital-edition-console/-/A-81114596',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.target.com/p/xbox-series-x-console/-/A-80790841',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.target.com/p/xbox-series-s-console/-/A-80790842',
    },
    {
      brand: 'nintendo',
      model: 'switch 2',
      series: 'switch2',
      url: 'https://www.target.com/p/nintendo-switch-2-console/-/A-94693225',
    },
    {
      brand: 'nintendo',
      model: 'switch 2 bundle',
      series: 'switch2',
      url: 'https://www.target.com/p/nintendo-switch-2-console-mario-kart-world-bundle/-/A-94693226',
    },
  ],
  name: 'target',
  country: 'US',
};

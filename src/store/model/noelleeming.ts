import {Store} from './store';

export const NoelLeeming: Store = {
  currency: '$',
  labels: {
    inStock: [
      {
        container:
          '#bd > div.product__hero > div > div.columns.product__info.medium-6.small-12 > div.product__price-cart.mbs.row > div:nth-child(3) > div > div.product__cta-buttons.columns.small-12 > form > button > strong',
        text: ['Buy Now'],
      },
    ],
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.noelleeming.co.nz/prod192865.html',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.noelleeming.co.nz/prod192879.html',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.noelleeming.co.nz/prod193770.html',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.noelleeming.co.nz/prod200475.html',
    },
  ],
  name: 'noelleeming',
  country: 'NZ',
};

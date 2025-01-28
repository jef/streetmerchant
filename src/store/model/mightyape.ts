import {Store} from './store';

export const MightyApe: Store = {
  currency: '$',
  labels: {
    inStock: [
      {
        container: 'div.status',
        text: [' In stock at '],
      },
    ],
    outOfStock: [
      {
        container: 'div.status',
        text: [' Unavailable '],
      },
    ],
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.mightyape.co.nz/product/sony-playstation-5-console/31675007',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.mightyape.co.nz/product/sony-playstation-5-digital-edition-console/33505481',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.mightyape.co.nz/product/xbox-series-x-console/30472387',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.mightyape.co.nz/product/xbox-series-s-all-digital-console/33856647',
    },
  ],
  name: 'mightyape',
  country: 'NZ',
};

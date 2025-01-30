import {Store} from './store';

export const GamestopIE: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '#btnAddToCart',
      text: ['add to cart!'],
    },
    maxPrice: {
      container: 'span.pricetext',
    },
  },
  links: [
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.gamestop.ie/Xbox%20Series/Games/73034/xbox-series-x-console',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.gamestop.ie/PlayStation%205/Games/72504/playstation-5-console',
    },
  ],
  name: 'gamestop-ie',
  country: 'IE',
};

import {Store} from './store';

export const ArgosIE: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.btnbuyreserve',
      text: ['buy or reserve'],
    },
    maxPrice: {
      container: '.price',
    },
    outOfStock: {
      container: '#subCopy',
      text: ["We're working hard to get more stock."],
    },
  },
  links: [
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'http://www.argos.ie/static/Product/partNumber/8448262/Trail/searchtext%3EXBOX+SERIES+X.htm',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'http://www.argos.ie/static/Product/partNumber/8349000/Trail/searchtext%3EPS5+CONSOLE.htm',
    },
  ],
  name: 'argos-ie',
  country: 'IE',
};

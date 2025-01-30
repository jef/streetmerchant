import {Store} from './store';

export const AntOnline: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.uk-button',
      text: ['Add to Cart'],
    },
    maxPrice: {
      container: '.cPrice',
      euroFormat: false,
    },
    outOfStock: {
      container: '.priceView-price .priceView-hero-price span',
      text: ['Sold Out'],
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.antonline.com/Sony/Electronics/Gaming_Devices/Gaming_Consoles/1409507',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.antonline.com/Microsoft/Electronics/Gaming_Devices/Gaming_Consoles/1414487',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.antonline.com/Microsoft/Electronics/Gaming_Devices/Gaming_Consoles/1409527',
    },
  ],
  name: 'antonline',
  country: 'US',
};

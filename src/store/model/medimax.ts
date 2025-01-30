import {Store} from './store';

export const Medimax: Store = {
  currency: '€',
  labels: {
    inStock: [
      {
        container: '.product-cart-add-to-cart-button',
        text: ['In den Warenkorb'],
      },
      {
        container: '.stock-message',
        text: ['Lieferung in'],
      },
    ],
    maxPrice: {
      container: '.priceOfProduct',
      euroFormat: true,
    },
    outOfStock: {
      container: '.content .large',
      text: ['Ihr MEDIMAX Team'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.medimax.de/p/1311642/drivesmart-51-lmt-d-ce',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.medimax.de/p/1315336/play-station-5-825gb-ssd',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.medimax.de/p/1315337/play-station-5-digital-edition-825gb-ssd',
    },
  ],
  name: 'medimax',
  country: 'DE',
};

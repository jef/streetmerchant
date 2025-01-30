import {Store} from './store';

export const Elcorteingles: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    // Captcha: {
    // 	container: 'body',
    // 	text: [
    // 		'geben sie die unten angezeigten zeichen ein',
    // 		'geben sie die zeichen unten ein'
    // 	]
    // },
    inStock: [
      {
        container: '.product_detail-purchase.mb-2.c12 .js-add-cart-text',
        text: ['a la cesta'],
      },
    ],
    maxPrice: {
      container: '.product_detail-buy-price-container .price._big',
      euroFormat: true,
    },
    outOfStock: [
      {
        container:
          '.c12.mt-2.product_detail-add_to_cart.one_click_enabled .c12.button._normal.js-buy-button._sold_out.view-page._disabled',
        text: ['Agotado'],
      },
      {
        container:
          '.product_detail-purchase.mb-2.c12 .c12.button._normal.js-buy-button._sold_out.view-page._disabled',
        text: ['No disponible'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.elcorteingles.es/moda/A26324406/',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.elcorteingles.es/videojuegos/A37046604',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.elcorteingles.es/videojuegos/A37046605',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.elcorteingles.es/videojuegos/A37047078',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.elcorteingles.es/videojuegos/A37047080',
    },
  ],
  name: 'elcorteingles',
  country: 'ES',
};

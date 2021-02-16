import {Store} from './store';

export const MediamarktES: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '#pdp-add-to-cart',
      text: ['Comprar'],
    },
    maxPrice: {
      container: '.text-price-total',
      euroFormat: true,
    },
    outOfStock: {
      container: '.product-availability',
      text: ['Producto Agotado'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.mediamarkt.es/es/product/_consola-sony-ps5-825-gb-4k-hdr-blanco-1487016.html',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.mediamarkt.es/es/product/_consola-sony-ps5-825-gb-4k-hdr-blanco-1487016.html' },
  ],
  name: 'mediamarktES',
};
,␍⏎;
,␍⏎···;

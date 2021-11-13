import {Store} from './store';

export const Zotac: Store = {
  backoffStatusCodes: [403, 503],
  currency: '$',
  labels: {
    inStock: {
      container: '#lbHeaderH2',
      text: ['You are now in line'],
    },
    maxPrice: {
      container: 'div[class="product-shop"] span[class="price"]',
      euroFormat: false,
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://zotacstore.queue-it.net/?c=zotacstore&e=zotacprod510440',
    },
   {
    brand: 'zotac',
    model: 'zotac',
    series: 'zotac',
    url:
      'https://zotacstore.com',
   },
  ],
  name: 'zotac',
};

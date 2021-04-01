import {Store} from './store';

export const AmdNl: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.btn-shopping-cart',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.product-page-description h4',
      euroFormat: true,
    },
    outOfStock: {
      container: '.btn-radeon',
      text: ['ausverkauft'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amd.com/en/direct-buy/5450881400/',
    },

    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5458374000/nl?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.amd.com/en/direct-buy/5458374000/',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5458374100/nl?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.amd.com/en/direct-buy/5458374100/',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5458374200/nl?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6900xt',
      url: 'https://www.amd.com/en/direct-buy/5458374200/',
    },
  ],
  name: 'amd-nl',
};

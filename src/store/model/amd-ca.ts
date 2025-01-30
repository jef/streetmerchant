import {Store} from './store';

export const AmdCa: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.btn-shopping-cart',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.product-page-description h4',
      euroFormat: false,
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amd.com/en/direct-buy/5458373400/ca',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5458373400/ca?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.amd.com/en/direct-buy/5458373400/ca',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5458372800/ca?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.amd.com/en/direct-buy/5458372800/ca',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5458372200/ca?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6900xt',
      url: 'https://www.amd.com/en/direct-buy/5458372200/ca',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5496921500/ca?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.amd.com/en/direct-buy/5496921500/ca',
    },
  ],
  name: 'amd-ca',
  country: 'CA',
};

import {Store} from './store';

export const AmdIt: Store = {
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
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amd.com/en/direct-buy/5450881400/it',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5450881400/it?add-to-cart=true',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.amd.com/en/direct-buy/5450881400/it',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5450881500/it?add-to-cart=true',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.amd.com/en/direct-buy/5450881500/it',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5450881600/it?add-to-cart=true',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.amd.com/en/direct-buy/5450881600/it',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5450881700/it?add-to-cart=true',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.amd.com/en/direct-buy/5450881700/it',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5458374100/it?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.amd.com/en/direct-buy/5458374100/it',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5496921500/it?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.amd.com/en/direct-buy/5496921500/it',
    },
  ],
  name: 'amd-it',
  country: 'IT',
};

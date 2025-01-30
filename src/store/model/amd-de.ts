import {Store} from './store';

export const AmdDe: Store = {
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
      url: 'https://www.amd.com/de/direct-buy/5450881400/de',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/de/direct-buy/5450881400/de?add-to-cart=true',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.amd.com/de/direct-buy/5450881400/de',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/de/direct-buy/5450881500/de?add-to-cart=true',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.amd.com/de/direct-buy/5450881500/de',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/de/direct-buy/5450881600/de?add-to-cart=true',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.amd.com/de/direct-buy/5450881600/de',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/de/direct-buy/5450881700/de?add-to-cart=true',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.amd.com/de/direct-buy/5450881700/de',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/de/direct-buy/5496921400/de?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6700xt',
      url: 'https://www.amd.com/de/direct-buy/5496921400/de',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/de/direct-buy/5458374000/de?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.amd.com/de/direct-buy/5458374000/de',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/de/direct-buy/5458374100/de?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.amd.com/de/direct-buy/5458374100/de',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/de/direct-buy/5458374200/de?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6900xt',
      url: 'https://www.amd.com/de/direct-buy/5458374200/de',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/de/direct-buy/5496921500/de?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.amd.com/de/direct-buy/5496921500/de',
    },
  ],
  name: 'amd-de',
  country: 'DE',
};

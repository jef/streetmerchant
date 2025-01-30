import {Store} from './store';

export const CorsairUK: Store = {
  currency: '£',
  labels: {
    inStock: {
      container: '#addToCartForm',
      text: ['add to cart'],
    },
    outOfStock: {
      container: '#addToCartForm',
      text: ['notify me when in stock'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.corsair.com/uk/en/Categories/Products/Power-Supply-Units/Power-Supply-Units-Advanced/SF-Series/p/CP-9020181-UK',
    },
    {
      brand: 'corsair',
      model: '750 platinum',
      series: 'sf',
      url: 'https://www.corsair.com/uk/en/Categories/Products/Power-Supply-Units/Power-Supply-Units-Advanced/SF-Series/p/CP-9020186-UK',
    },
    {
      brand: 'corsair',
      model: '600 platinum',
      series: 'sf',
      url: 'https://www.corsair.com/uk/en/Categories/Products/Power-Supply-Units/Power-Supply-Units-Advanced/SF-Series/p/CP-9020182-UK',
    },
    {
      brand: 'corsair',
      model: '600 gold',
      series: 'sf',
      url: 'https://www.corsair.com/uk/en/Categories/Products/Power-Supply-Units/SF-Series%E2%84%A2-80-PLUS-Gold-Power-Supplies/p/CP-9020105-UK',
    },
  ],
  name: 'corsair-uk',
  country: 'UK',
};

import {Store} from './store';

export const BT: Store = {
  currency: '£',
  labels: {
    outOfStock: {
      container: '#cms-component-content-panel-200124986 p',
      text: ["We've sold out of our current allocation of PlayStation 5"],
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://shop.bt.com/mini-sites/gaming',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://shop.bt.com/mini-sites/gaming',
    },
  ],
  name: 'bt',
  country: 'UK',
};

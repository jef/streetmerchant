import {Store} from './store';

export const JohnLewis: Store = {
  currency: '£',
  labels: {
    inStock: {
      container: '#button--add-to-basket',
      text: ['Add to your basket'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.johnlewis.com/sony-playstation-5-dualsense-wireless-controller-white/p5192093',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.johnlewis.com/sony-playstation-5-console-with-dualsense-controller/white/p5115192',
    },
  ],
  name: 'johnlewis',
  country: 'UK',
};

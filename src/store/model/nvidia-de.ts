import {Store} from './store';

export const NvidiaDE: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.buy',
      text: ['In den Einkaufswagen', 'JETZT KAUFEN'],
    },
    outOfStock: {
      container: '.buy',
      text: ['DERZEIT NICHT VERFÜGBAR'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.nvidia.com/de-de/geforce/graphics-cards/rtx-2060-super/',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3060ti',
      url: 'https://shop.nvidia.com/de-de/geforce/store/gpu/?page=1&limit=9&locale=de-de&category=GPU&gpu=RTX%203060%20Ti&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3070',
      url: 'https://shop.nvidia.com/de-de/geforce/store/gpu/?page=1&limit=9&locale=de-de&category=GPU&gpu=RTX%203070&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3070ti',
      url: 'https://shop.nvidia.com/de-de/geforce/store/gpu/?page=1&limit=9&locale=de-de&category=GPU&gpu=RTX%203070%20Ti&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3080',
      url: 'https://shop.nvidia.com/de-de/geforce/store/gpu/?page=1&limit=9&locale=de-de&category=GPU&gpu=RTX%203080&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3080ti',
      url: 'https://shop.nvidia.com/de-de/geforce/store/gpu/?page=1&limit=9&locale=de-de&category=GPU&gpu=RTX%203080%20Ti&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3090',
      url: 'https://shop.nvidia.com/de-de/geforce/store/gpu/?page=1&limit=9&locale=de-de&category=GPU&gpu=RTX%203090&manufacturer=NVIDIA',
    },
  ],
  name: 'nvidia-de',
  country: 'DE',
};

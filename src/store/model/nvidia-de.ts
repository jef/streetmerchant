import {Store} from './store';

export const NvidiaDE: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: 'span.buy-link-atc',
      text: ['In den Einkaufswagen', 'JETZT KAUFEN'],
    },
    outOfStock: {
      container: 'span.buy-link-atc',
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
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '5080',
      url: 'https://marketplace.nvidia.com/de-de/consumer/graphics-cards/?locale=de-de&page=1&limit=12&gpu=RTX%205080&manufacturer=NVIDIA',    
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '5090',
      url: 'https://marketplace.nvidia.com/de-de/consumer/graphics-cards/?locale=de-de&page=1&limit=12&gpu=RTX%205090&manufacturer=NVIDIA',    
    },
  ],
  name: 'nvidia-de',
  country: 'DE',
};
/* Copy Paste Template
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '',
      url: '',    
    },
*/

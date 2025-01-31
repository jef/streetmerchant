import {Store} from './store';

export const NvidiaFR: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: 'span.buy-link-atc',
      text: ['Acheter maintenant'],
    },
    outOfStock: {
      container: 'span.buy-link-atc',
      text: ['RUPTURE DE STOCK'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.nvidia.com/fr-fr/geforce/graphics-cards/rtx-2060-super/',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3060ti',
      url: 'https://shop.nvidia.com/fr-fr/geforce/store/gpu/?page=1&limit=9&locale=fr-fr&category=GPU&gpu=RTX%203060%20Ti&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3070',
      url: 'https://shop.nvidia.com/fr-fr/geforce/store/gpu/?page=1&limit=9&locale=fr-fr&category=GPU&gpu=RTX%203070&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3070ti',
      url: 'https://shop.nvidia.com/fr-fr/geforce/store/gpu/?page=1&limit=9&locale=fr-fr&category=GPU&gpu=RTX%203070%20Ti&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3080',
      url: 'https://shop.nvidia.com/fr-fr/geforce/store/gpu/?page=1&limit=9&locale=fr-fr&category=GPU&gpu=RTX%203080&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3080ti',
      url: 'https://shop.nvidia.com/fr-fr/geforce/store/gpu/?page=1&limit=9&locale=fr-fr&category=GPU&gpu=RTX%203080%20Ti&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3090',
      url: 'https://shop.nvidia.com/fr-fr/geforce/store/gpu/?page=1&limit=9&locale=fr-fr&category=GPU&gpu=RTX%203090&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '5090',
      url: 'https://marketplace.nvidia.com/fr-fr/consumer/graphics-cards/?locale=fr-fr&page=1&limit=12&gpu=RTX%204090&manufacturer=MSI',    
    },
  ],
  name: 'nvidia-fr',
  country: 'FR',
};
/* Copy Paste Template
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '',
      url: '',    
    },
*/
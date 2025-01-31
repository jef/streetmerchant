import {Store} from './store';

export const NvidiaGB: Store = {
  currency: '£',
  labels: {
    inStock: {
      container: 'span.buy-link-atc',
      text: ['Buy Now', 'Add to Cart']
    },
    outOfStock: {
      container: 'span.buy-link-atc',
      text: ['Out of Stock'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.nvidia.com/en-gb/geforce/graphics-cards/rtx-2060-super/',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3060ti',
      url: 'https://shop.nvidia.com/en-gb/geforce/store/gpu/?page=1&limit=9&locale=en-gb&category=GPU&gpu=RTX%203060%20Ti&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3070',
      url: 'https://shop.nvidia.com/en-gb/geforce/store/gpu/?page=1&limit=9&locale=en-gb&category=GPU&gpu=RTX%203070&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3070ti',
      url: 'https://shop.nvidia.com/en-gb/geforce/store/gpu/?page=1&limit=9&locale=en-gb&category=GPU&gpu=RTX%203070%20Ti&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3080',
      url: 'https://shop.nvidia.com/en-gb/geforce/store/gpu/?page=1&limit=9&locale=en-gb&category=GPU&gpu=RTX%203080&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3080ti',
      url: 'https://shop.nvidia.com/en-gb/geforce/store/gpu/?page=1&limit=9&locale=en-gb&category=GPU&gpu=RTX%203080%20Ti&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3090',
      url: 'https://shop.nvidia.com/en-gb/geforce/store/gpu/?page=1&limit=9&locale=en-gb&category=GPU&gpu=RTX%203090&manufacturer=NVIDIA',
    },
    {
      brand: 'asus',
      model: 'dual',
      series: '4070',
      url: 'https://marketplace.nvidia.com/en-gb/consumer/graphics-cards/?locale=en-gb&page=1&limit=12&manufacturer=ASUS&gpu=RTX%204070&',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '5090',
      url: 'https://marketplace.nvidia.com/en-gb/consumer/graphics-cards/?locale=en-gb&page=1&limit=12&gpu=RTX%205090&manufacturer=NVIDIA',    
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '5080',
      url: 'https://marketplace.nvidia.com/en-gb/consumer/graphics-cards/?locale=en-gb&page=1&limit=12&manufacturer=NVIDIA&gpu=RTX%205080&',    
    },
  ],
  name: 'nvidia-gb',
  country: 'UK',
};

/* Copy Paste Template
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '',
      url: '',    
    },
*/
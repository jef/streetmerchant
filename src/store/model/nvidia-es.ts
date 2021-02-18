import {Store} from './store';

export const NvidiaES: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.buy',
      text: ['Añadir al carrito', 'COMPRAR AHORA'],
    },
    outOfStock: {
      container: '.buy',
      text: ['AGOTADO'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.nvidia.com/es-es/geforce/graphics-cards/rtx-2060-super/',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3060ti',
      url:
        'https://www.nvidia.com/es-es/shop/geforce/gpu/?page=1&limit=9&locale=es-es&category=GPU&gpu=RTX%203060%20Ti&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3070',
      url:
        'https://www.nvidia.com/es-es/shop/geforce/gpu/?page=1&limit=9&locale=es-es&category=GPU&gpu=RTX%203070&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3080',
      url:
        'https://www.nvidia.com/es-es/shop/geforce/gpu/?page=1&limit=9&locale=es-es&category=GPU&gpu=RTX%203080&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3090',
      url:
        'https://www.nvidia.com/es-es/shop/geforce/gpu/?page=1&limit=9&locale=es-es&category=GPU&gpu=RTX%203090&manufacturer=NVIDIA',
    },
  ],
  name: 'nvidia-es',
};

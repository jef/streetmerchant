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
      url: 'https://www.nvidia.com/es-es/geforce/graphics-cards/rtx-2060-super/',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3060ti',
      url: 'https://www.nvidia.com/es-es/shop/geforce/gpu/?page=1&limit=9&locale=es-es&category=GPU&gpu=RTX%203060%20Ti&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3070',
      url: 'https://www.nvidia.com/es-es/shop/geforce/gpu/?page=1&limit=9&locale=es-es&category=GPU&gpu=RTX%203070&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3070ti',
      url: 'https://shop.nvidia.com/es-es/geforce/store/gpu/?page=1&limit=9&locale=es-es&category=GPU&gpu=RTX%203070%20Ti&manufacturer=NVIDIA&manufacturer_filter=NVIDIA~1,ACER~0,ASUS~0,EVGA~0,GAINWARD~0,GIGABYTE~1,HP~0,LENOVO~0,MSI~1,PALIT~1,PNY~2,ZOTAC~2',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3080',
      url: 'https://www.nvidia.com/es-es/shop/geforce/gpu/?page=1&limit=9&locale=es-es&category=GPU&gpu=RTX%203080&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3080ti',
      url: 'https://shop.nvidia.com/es-es/geforce/store/gpu/?page=1&limit=9&locale=es-es&category=GPU&gpu=RTX%203080%20Ti&manufacturer=NVIDIA&gpu_filter=RTX%203090~1,RTX%203080%20Ti~1,RTX%203080~1,RTX%203070%20Ti~1,RTX%203070~1,RTX%203060%20Ti~1,RTX%203060~0,RTX%202080%20Ti~0,RTX%202080%20SUPER~0,RTX%202080~0,RTX%202070%20SUPER~0,RTX%202070~0,RTX%202060~0,GTX%201660%20Ti~0,GTX%201660%20SUPER~0,GTX%201660~0,GTX%201650%20Ti~0,GTX%201650%20SUPER~0,GTX%201650~0',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3090',
      url: 'https://www.nvidia.com/es-es/shop/geforce/gpu/?page=1&limit=9&locale=es-es&category=GPU&gpu=RTX%203090&manufacturer=NVIDIA',
    },
  ],
  name: 'nvidia-es',
};

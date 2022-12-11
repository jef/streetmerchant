import {Store} from './store';

export const NvidiaEN: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.buy',
      text: ['Add to cart'],
    },
    outOfStock: {
      container: '.buy',
      text: ['Out of Stock'],
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
      series: '4090',
      url: 'https://store.nvidia.com/en-us/geforce/store/?page=1&limit=9&locale=en-us&gpu=RTX%204090&category=GPU,DESKTOP&manufacturer=NVIDIA&manufacturer_filter=NVIDIA~1,ACER~0,ALIENWARE~0,AORUS~0,ASUS~2,BUILD%20REDUX~0,CLX~0,CORSAIR~0,CYBERPOWER%20PC~0,DELL~0,DIGITAL%20STORM~0,EVGA~0,FALCON%20NW~0,GIGABYTE~2,HP~0,IBUYPOWER~0,LENOVO~0,LG~0,MAINGEAR~0,MSI~4,NZXT~0,ORIGIN%20PC~0,PNY~1,RAZER~0,VIEWSONIC~0,XIDAX~0,ZOTAC~2',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '4080-16g',
      url: 'https://store.nvidia.com/en-us/geforce/store/?page=1&limit=9&locale=en-us&category=GPU,DESKTOP&gpu=RTX%204080&manufacturer=NVIDIA&manufacturer_filter=NVIDIA~1,ACER~0,ALIENWARE~0,AORUS~0,ASUS~2,BUILD%20REDUX~0,CLX~0,CORSAIR~0,CYBERPOWER%20PC~0,DELL~0,DIGITAL%20STORM~0,EVGA~0,FALCON%20NW~0,GIGABYTE~4,HP~0,IBUYPOWER~0,LENOVO~0,LG~0,MAINGEAR~0,MSI~2,NZXT~0,ORIGIN%20PC~0,PNY~1,RAZER~0,VIEWSONIC~0,XIDAX~0,ZOTAC~0',
    },
   ],
  name: 'nvidia-en',
};

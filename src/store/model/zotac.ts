import {Store} from './store';

export const Zotac: Store = {
  backoffStatusCodes: [403, 503],
  currency: '$',
  labels: {
    inStock: {
      container: '.add-to-cart-wrapper',
      text: ['add to cart'],
    },
    maxPrice: {
      container: 'div[class="product-shop"] span[class="price"]',
      euroFormat: false,
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://store.zotac.com/zotac-gaming-geforce-rtx-2060-twin-fan-zt-t20600f-10m',
    },
    {
      brand: 'zotac',
      model: 'twin edge',
      series: '3060',
      url:
        //removing /us/ results in a 404 error
        'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-3060-twin-edge-zt-a30600e-10m',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3060',
      url:
        //removing /us/ results in a 404 error
        'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-3060-twin-edge-oc-zt-a30600h-10m',
    },
    {
      brand: 'zotac',
      model: 'twin edge',
      series: '3060ti',
      url: 'https://store.zotac.com/zotac-gaming-geforce-rtx-3060-ti-twin-edge-zt-a30610e-10m',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3060ti',
      url: 'https://store.zotac.com/zotac-gaming-geforce-rtx-3060-ti-twin-edge-oc-zt-a30610h-10m',
    },
    {
      brand: 'zotac',
      model: 'twin edge',
      series: '3070',
      url: 'https://store.zotac.com/zotac-gaming-geforce-rtx-3070-twin-edge-zt-a30700e-10p',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3070',
      url: 'https://store.zotac.com/zotac-gaming-geforce-rtx-3070-twin-edge-oc-zt-a30700h-10p',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3080',
      url: 'https://store.zotac.com/zotac-gaming-geforce-rtx-3080-trinity-zt-a30800d-10p',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '3080',
      url: 'https://store.zotac.com/zotac-gaming-geforce-rtx-3080-trinity-oc-zt-a30800j-10p',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3080',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-3080-amp-holo-zt-a30800f-10p',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3090',
      url: 'https://store.zotac.com/zotac-gaming-geforce-rtx-3090-trinity-zt-a30900d-10p',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '4090',
      url: 'https://www.zotac.com/product/graphics_card/zotac-gaming-geforce-rtx-4090-trinity',
    },
    {
      brand: 'zotac',
      model: 'amp extreme airo',
      series: '4090',
      url: 'https://www.zotac.com/product/graphics_card/zotac-gaming-geforce-rtx-4090-amp-extreme-airo',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '4090',
      url: 'https://www.zotac.com/product/graphics_card/zotac-gaming-geforce-rtx-4090-trinity-oc',
    },
    {
      brand: 'zotac',
      model: 'amp extreme airo',
      series: '4080-16g',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-4080-16gb-amp-extreme-airo',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '4080-16g',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-4080-16gb-trinity',
    },
    {
      brand: 'zotac',
      model: 'solid',
      series: '5090',
      url: 'https://www.zotac.com/us/product/graphics_card/zotac-gaming-geforce-rtx-5090-solid',
    },
    {
      brand: 'zotac',
      model: 'solid oc',
      series: '5090',
      url: 'https://www.zotac.com/us/product/graphics_card/zotac-gaming-geforce-rtx-5090-solid-oc',
    },
    {
      brand: 'zotac',
      model: 'amp extreme infinity',
      series: '5090',
      url: 'https://www.zotac.com/us/product/graphics_card/zotac-gaming-geforce-rtx-5090-amp-extreme-infinity',
    },
    {
      brand: 'zotac',
      model: 'solid',
      series: '5080',
      url: 'https://www.zotac.com/us/product/graphics_card/zotac-gaming-geforce-rtx-5080-solid',
    },
    {
      brand: 'zotac',
      model: 'solid oc',
      series: '5080',
      url: 'https://www.zotac.com/us/product/graphics_card/zotac-gaming-geforce-rtx-5080-solid-oc',
    },
    {
      brand: 'zotac',
      model: 'amp extreme infinity',
      series: '5080',
      url: 'https://www.zotac.com/us/product/graphics_card/zotac-gaming-geforce-rtx-5080-amp-extreme-infinity',
    },
  ],
  name: 'zotac',
  country: 'US',
};

/* Copy Paste Template
{
  brand: 'zotac',
  model: '',
  series: '',
  url: '',
},
*/

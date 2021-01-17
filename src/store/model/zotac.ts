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
      url:
        'https://store.zotac.com/zotac-gaming-geforce-rtx-2060-twin-fan-zt-t20600f-10m',
    },
    {
      brand: 'zotac',
      model: 'twin edge',
      series: '3060ti',
      url:
        'https://store.zotac.com/zotac-gaming-geforce-rtx-3060-ti-twin-edge-zt-a30610e-10m',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3060ti',
      url:
        'https://store.zotac.com/zotac-gaming-geforce-rtx-3060-ti-twin-edge-oc-zt-a30610h-10m',
    },
    {
      brand: 'zotac',
      model: 'twin edge',
      series: '3070',
      url:
        'https://store.zotac.com/zotac-gaming-geforce-rtx-3070-twin-edge-zt-a30700e-10p',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3070',
      url:
        'https://store.zotac.com/zotac-gaming-geforce-rtx-3070-twin-edge-oc-zt-a30700h-10p',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3080',
      url:
        'https://store.zotac.com/zotac-gaming-geforce-rtx-3080-trinity-zt-a30800d-10p',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '3080',
      url:
        'https://store.zotac.com/zotac-gaming-geforce-rtx-3080-trinity-oc-zt-a30800j-10p',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3080',
      url:
        'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-3080-amp-holo-zt-a30800f-10p',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3090',
      url:
        'https://store.zotac.com/zotac-gaming-geforce-rtx-3090-trinity-zt-a30900d-10p',
    },
  ],
  name: 'zotac',
};

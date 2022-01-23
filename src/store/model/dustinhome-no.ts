import {Store} from './store';

export const DustinHomeNO: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: 'kr.',
  labels: {
    inStock: {
      container:
        '#__next > div > div.c-page > div.c-product.u-bg-white > div.c-product-intro > div.container > div > div:nth-child(2) > div > div.flex-grow-1.d-flex.flex-column.justify-content-between.u-py-md-16.u-px-md-16 > div:nth-child(2) > div.u-pt-16.u-relative.d-flex > div > div > span',
      text: ['Kan sendes omgående'],
    },
    maxPrice: {
      container: '#__next > div > div.c-page > div.c-product.u-bg-white > div.c-product-intro > div.container > div > div:nth-child(2) > div > div.flex-grow-1.d-flex.flex-column.justify-content-between.u-py-md-16.u-px-md-16 > div:nth-child(1) > div > span',
    },
    outOfStock: {
      container:
        'div.c-product-main-info > div.c-product-buy-wrapper > div.u-pt-16.u-relative.d-flex > div > span',
      text: [
        'Vi venter produktet til lager, men har foreløpig ingen bekreftet leveringsdato. Vi sender produktet så snart det er på lager.',
      ],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.dustinhome.no/product/5011222168/',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3080ti',
      url: 'https://www.dustinhome.no/product/5011245150',
    },
    {
      brand: 'asus',
      model: 'gaming oc',
      series: '3060ti',
      url: 'https://www.dustinhome.no/product/5011253870',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3060',
      url: 'https://www.dustinhome.no/product/5011246558/',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.dustinhome.no/product/5011201941/',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.dustinhome.no/product/5011201940/',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.dustinhome.no/product/5011201939/',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.dustinhome.no/product/5011201937/',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: 'rx6800xt',
      url: 'https://www.dustinhome.no/product/5011201937/',
    },
  ],
  name: 'dustinhome-no',
};

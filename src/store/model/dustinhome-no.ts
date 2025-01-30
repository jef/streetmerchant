import {Store} from './store';

export const DustinHomeNO: Store = {
  currency: 'kr.',
  labels: {
    inStock: {
      container:
        'div.c-product-main-info > div.c-product-buy-wrapper > div.u-pt-16.u-relative.d-flex > div > span',
      text: ['Kan sendes omgående'],
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
      url: 'https://www.dustinhome.no/product/5011216501/',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3080',
      url: 'https://www.dustinhome.no/product/5011216707/',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.dustinhome.no/product/5011197759/',
    },
    {
      brand: 'evga',
      model: 'ftw3',
      series: '3080',
      url: 'https://www.dustinhome.no/product/5011197760/',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3080',
      url: 'https://www.dustinhome.no/product/5011197756/',
    },
    {
      brand: 'pny',
      model: 'xlr8 epic x',
      series: '3080',
      url: 'https://www.dustinhome.no/product/5011196134/',
    },
    {
      brand: 'pny',
      model: 'xlr8 epic x',
      series: '3080',
      url: 'https://www.dustinhome.no/product/5011196133/',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce wb',
      series: '3080',
      url: 'https://www.dustinhome.no/product/5011212484/',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3080',
      url: 'https://www.dustinhome.no/product/5011199977/',
    },
  ],
  name: 'dustinhome-no',
  country: 'NO',
};

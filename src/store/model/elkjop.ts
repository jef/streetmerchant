import {Store} from './store';

export const Elkjop: Store = {
  currency: 'kr.',
  labels: {
    inStock: {
      container:
        '#product-detail-wrapper > div.col.any-5-12.M-2-5.information > div.buy-button-container.align-left.any-1-1.table-btn > div > div > div.product-price-button-wrap > div > div > span > span',
      text: ['Legg i handlevogn'],
    },
    outOfStock: {
      container:
        '#product-detail-wrapper > div.col.any-5-12.M-2-5.information > div.buy-button-container.align-left.any-1-1.table-btn > div > div > div.product-price-button-wrap > div > div > span > span',
      text: ['Ikke tilgjengelig'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/218425/evga-geforce-rtx-3080-xc3-black',
    },
    {
      brand: 'pny',
      model: 'xlr8 epic x',
      series: '3090',
      url:
        'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/215370/pny-rtx-3090-24gb-xlr8-gaming-epic-x-rgb-3-fan-2-7slot',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.dustinhome.no/product/5011197759/',
    },
    {
      brand: 'evga',
      model: 'xc3',
      series: '3080',
      url:
        'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/218419/evga-geforce-rtx-3080-xc3',
    },
    {
      brand: 'evga',
      model: 'xc3 black',
      series: '3080',
      url:
        'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/218425/evga-geforce-rtx-3080-xc3-black',
    },
    {
      brand: 'evga',
      model: 'ftw3',
      series: '3080',
      url:
        'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/220655/evga-geforce-rtx-3080-ftw3',
    },
    {
      brand: 'palit',
      model: 'gaming pro oc',
      series: '3080',
      url:
        'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/222470/geforce-rtx-3080-gamingpro-oc',
    },
    {
      brand: 'gainward',
      model: 'phoenix gs',
      series: '3080',
      url:
        'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/222467/geforce-rtx-3080-phoenix-gs',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3090',
      url:
        'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/224771/evga-geforce-rtx-3090-xc3-ultra-24gb',
    },
  ],
  name: 'elkjop',
};

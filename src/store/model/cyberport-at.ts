import {Store} from './store';

export const CyberportAt: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.tooltipAvailabilityParent',
      text: ['sofort verfügbar'],
    },
    maxPrice: {
      container: '#productDetailOverview .price',
      euroFormat: true,
    },
    outOfStock: {
      container: '.tooltipAvailabilityParent',
      text: ['noch nicht verfügbar'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.cyberport.at?DEEP=2E12-3KL',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3080',
      url: 'https://www.cyberport.at?DEEP=2E07-51S',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3080',
      url: 'https://www.cyberport.at?DEEP=2E07-51T',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url: 'https://www.cyberport.at?DEEP=2E07-51L',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.cyberport.at?DEEP=2E07-51N',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3080',
      url: 'https://www.cyberport.at?DEEP=2E21-537',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.cyberport.at?DEEP=2E21-52Y',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3090',
      url: 'https://www.cyberport.at?DEEP=2e21-532',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.cyberport.at?DEEP=2E21-52Z',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.cyberport.at?DEEP=2E12-3L6',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.cyberport.at?DEEP=2E12-3L7c',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3080',
      url: 'https://www.cyberport.at?DEEP=2E13-1H4',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '3080',
      url: 'https://www.cyberport.at?DEEP=2E13-1H7',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.cyberport.at?DEEP=2001-71p',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.cyberport.at/?DEEP=2001-71n',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.cyberport.at?DEEP=2001-71m',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.cyberport.at?DEEP=2001-71l',
    },
  ],
  name: 'cyberport-at',
  country: 'AT',
};

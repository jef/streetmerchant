import {Store} from './store';

export const WellsTechnology: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container:
        '#addToCartForm-product-template > div.payment-buttons.payment-buttons--small > div > div > div > div',
      text: ['Buy it now'],
    },
    maxPrice: {
      container: '#productPrice-product-template *',
      euroFormat: false,
    },
    outOfStock: {
      container: '#addToCartText-product-template',
      text: ['Sold Out'],
    },
  },
  links: [
    {
      brand: 'evga',
      model: 'xc3',
      series: '3080',
      url: 'https://wellstechnology.com.au/products/evga-geforce-rtx3080-xc3-10gb-gddr6x?_pos=1&_sid=bcf224e44&_ss=r&variant=36272043983014',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://wellstechnology.com.au/products/evga-geforce-rtx3080-ftw3-ultra-10gb-gddr6x?_pos=2&_sid=bcf224e44&_ss=r&variant=36271898919078',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url: 'https://wellstechnology.com.au/products/gigabyte-n3080gaming-oc-10gd-rtx3080-video-card?_pos=3&_sid=bcf224e44&_ss=r&variant=36210887295142',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce wb',
      series: '3080',
      url: 'https://wellstechnology.com.au/products/gigabyte-aorus-rtx3080-xtreme-waterforce-wb?_pos=1&_sid=fd83b064b&_ss=r',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://wellstechnology.com.au/products/amd-ryzen-9-5950x-cpu?_pos=1&_sid=cc7b6903f&_ss=r&variant=37019002339494',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://wellstechnology.com.au/products/amd-ryzen-5-5900x-cpu?_pos=1&_sid=b9234b72d&_ss=r&variant=36941124337830',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://wellstechnology.com.au/products/amd-ryzen-5-5800x-cpu?_pos=1&_sid=35b306d65&_ss=r&variant=36941094387878',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://wellstechnology.com.au/products/amd-ryzen-5-5600x-cpu?_pos=1&_sid=3f4c61e03&_ss=r&variant=36941063422118',
    },
  ],
  name: 'wellstechnology',
  country: 'AU',
};

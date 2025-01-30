import {Store} from './store';

export const Centrecom: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container: '.prod_stores_stock > li:nth-child(1) > span:nth-child(2)',
      text: ['In Stock'],
    },
    maxPrice: {
      container: 'div.prod_price_current.product-price > span',
      euroFormat: false,
    },
    outOfStock: {
      container: '.prod_stores_stock > li:nth-child(1) > span:nth-child(2)',
      text: ['Sold Out'],
    },
  },
  links: [
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.centrecom.com.au/asus-geforce-rtx-3080-tuf-oc-10gb-gaming-graphics-card',
    },
    {
      brand: 'galax',
      model: 'sg oc',
      series: '3080',
      url: 'https://www.centrecom.com.au/galax-geforce-rtx-3080-sg-1-click-oc-graphics-card',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3080',
      url: 'https://www.centrecom.com.au/gigabyte-aorus-geforce-rtx-3080-master-graphics-card',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3080',
      url: 'https://www.centrecom.com.au/gigabyte-geforce-rtx-3080-aorus-extreme-10gb-gddr6x-graphics-card',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.centrecom.com.au/gigabyte-geforce-rtx-3080-eagle-oc-10g-graphics-card',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.centrecom.com.au/gigabyte-geforce-rtx-3080-gaming-oc-10g-graphics-card',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.centrecom.com.au/msi-geforce-rtx-3080-gaming-x-trio-10g-graphics-card',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3080',
      url: 'https://www.centrecom.com.au/msi-geforce-rtx-3080-suprim-x-10g-graphics-card',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.centrecom.com.au/msi-geforce-rtx-3080-ventus-3x-oc-10gb-graphics-card',
    },
  ],
  name: 'centrecom',
  country: 'AU',
};

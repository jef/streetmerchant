import {Store} from './store';

export const Evatech: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container: '.product_detail_add_to_cart > span:nth-child(2)',
      text: ['ADD TO CART'],
    },
    maxPrice: {
      container: '.product_detail_price',
      euroFormat: false,
    },
    outOfStock: {
      container: '.product_detail_add_to_cart > div:nth-child(2)',
      text: ['SOLD OUT'],
    },
  },
  links: [
    {
      brand: 'colorful',
      model: 'igame ultra oc',
      series: '3080',
      url: 'https://evatech.com.au/product/6511/colorful-igame-rtx-3080-ultra-oc-10g',
    },
    {
      brand: 'colorful',
      model: 'igame advanced oc',
      series: '3080',
      url: 'https://evatech.com.au/product/6507/colorful-igame-rtx-3080-advanced-oc-10g',
    },
    {
      brand: 'colorful',
      model: 'igame vulcan oc',
      series: '3080',
      url: 'https://evatech.com.au/product/6514/colorful-igame-rtx-3080-vulcan-oc-10g',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3080',
      url: 'https://evatech.com.au/product/6574/msi-geforce-rtx-3080-suprim-x-10g',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://evatech.com.au/product/6505/msi-rtx-3080-gamingx-trio-10g-oc',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://evatech.com.au/product/6494/msi-rtx-3080-ventus-3x-10g-oc',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3080',
      url: 'https://evatech.com.au/product/6496/zotac-rtx3080-trinity-10gb-gddr6x',
    },
    {
      brand: 'colorful',
      model: 'igame advanced oc',
      series: '3090',
      url: 'https://evatech.com.au/product/6513/colorful-igame-rtx-3090-advance-oc-24g',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3090',
      url: 'https://evatech.com.au/product/6524/msi-geforce-rtx-3090-ventus-3x-oc-24gb',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3090',
      url: 'https://evatech.com.au/product/6550/msi-rtx-3090-gaming-x-trio-24gb',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3090',
      url: 'https://evatech.com.au/product/6573/msi-geforce-rtx-3090-suprim-x-24g',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://evatech.com.au/product/6558/amd-ryzen-9-5900x-12core-24-thread-base37ghz-boost48ghz-preorder',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://evatech.com.au/product/6557/amd-ryzen-7-5800x-8core-16-thread-base38ghz-boost47ghz-preorder',
    },
  ],
  name: 'evatech',
  country: 'AU',
};

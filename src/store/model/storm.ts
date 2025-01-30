import {Store} from './store';

export const StormComputers: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container: 'div.summary.entry-summary > form > button',
      text: ['ADD TO CART'],
    },
    maxPrice: {
      container: '.price',
      euroFormat: false,
    },
    outOfStock: {
      container: 'div.summary.entry-summary > p.stock.out-of-stock',
      text: ['Out of stock', 'pre-order', 'preorder'],
    },
  },
  links: [
    {
      brand: 'colorful',
      model: 'igame ultra oc',
      series: '3080',
      url: 'https://www.stormcomputers.com.au/product/colorful-igame-rtx-3080-ultra/',
    },
    {
      brand: 'colorful',
      model: 'igame advanced oc',
      series: '3080',
      url: 'https://www.stormcomputers.com.au/product/colorful-igame-geforce-igame-rtx-3080-advanced-10gb-graphics-card/',
    },
    {
      brand: 'colorful',
      model: 'igame vulcan oc',
      series: '3080',
      url: 'https://www.stormcomputers.com.au/product/igame-geforce-rtx-3080-vulcan-oc-10g-v/',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3090',
      url: 'https://www.stormcomputers.com.au/product/asus-geforce-rtx3090-rog-strix-gaming-oc-24gb-gddr6x-rog-strix-rtx3090-o24g-gaming/',
    },
    {
      brand: 'colorful',
      model: 'battle-ax',
      series: '3090',
      url: 'https://www.stormcomputers.com.au/product/colorful-geforce-rtx-3090-nb/',
    },
    {
      brand: 'colorful',
      model: 'igame advanced oc',
      series: '3090',
      url: 'https://www.stormcomputers.com.au/product/colorful-igame-geforce-rtx-3090-advanced-oc/',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.stormcomputers.com.au/product/amd-ryzen-9-5900x-zen-3-cpu-12c-24t-tdp-105w-boost-up-to-4-8ghz-base-3-7ghz-total-cache-70mb-no-cooler/',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.stormcomputers.com.au/product/amd-ryzen-7-5800x-zen-3-cpu-8c-16t-tdp-105w-boost-up-to-4-7ghz-base-3-8ghz-total-cache-36mb-no-cooler/',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.stormcomputers.com.au/product/amd-ryzen-5-5600x-zen-3-cpu-6c-12t-tdp-65w-boost-up-to-4-6ghz-base-3-7ghz-total-cache-35mb-wraith-stealth-cooler/',
    },
  ],
  name: 'storm-computer',
  country: 'AU',
};

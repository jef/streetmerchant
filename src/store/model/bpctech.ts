import {Store} from './store';

export const Bpctech: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container: '.productStockStatus',
      text: ['in stock'],
    },
    maxPrice: {
      container: 'div.price-box.price-final_price > span > span',
      euroFormat: false,
    },
  },
  links: [
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url: 'https://www.bpctech.com.au/tuf-rtx3080-10g-gaming-asus-geforce-rtx-3080-tuf-gaming-10gb-video-card.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.bpctech.com.au/tuf-rtx3080-o10g-gaming-asus-geforce-rtx-3080-tuf-gaming-oc-10gb-video-card.html',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3080',
      url: 'https://www.bpctech.com.au/rog-strix-rtx3080-o10g-gaming-asus-geforce-rtx-3080-rog-strix-oc-10gb-video-card.html',
    },
    //		{
    //			brand: 'colorful',
    //			model: 'igame advanced oc',
    //			series: '3080',
    //			url: 'https://www.bpctech.com.au/colorful-advancedoc10g-v-colorful-igame-geforce-rtx-3080-advanced-oc-10g-v-video-card.html'
    //		},
    //		{
    //			brand: 'colorful',
    //			model: 'igame vulcan oc',
    //			series: '3080',
    //			url: 'https://www.bpctech.com.au/colorful-vulcanoc10g-v-colorful-igame-geforce-rtx-3080-vulcan-oc-10g-video-card.html'
    //		},
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.bpctech.com.au/10g-p5-3897-kr-evga-geforce-rtx-3080-ftw3-ultra-gaming-10gb-video-card.html',
    },
    {
      brand: 'evga',
      model: 'xc3 black',
      series: '3080',
      url: 'https://www.bpctech.com.au/10g-p5-3881-kr-evga-geforce-rtx-3080-xc3-black-gaming-10gb-video-card.html',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3080',
      url: 'https://www.bpctech.com.au/10g-p5-3885-kr-evga-geforce-rtx-3080-xc3-ultra-gaming-10gb-video-card.html',
    },
    {
      brand: 'galax',
      model: 'sg oc',
      series: '3080',
      url: 'https://www.bpctech.com.au/38nwm3md99nn-galax-geforce-rtx-3080-sg-1-click-oc-10gb-video-card.html',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3080',
      url: 'https://www.bpctech.com.au/gv-n3080vision-oc-10gd-gigabyte-geforce-rtx-3080-vision-oc-10gb-video-card.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.bpctech.com.au/gv-n3080gaming-oc-10gd-gigabyte-geforce-rtx-3080-gaming-oc-10gb-video-card.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3080',
      url: 'https://www.bpctech.com.au/gv-n3080aorus-m-10gd-gigabyte-geforce-rtx-3080-aorus-master-10g-video-card.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3080',
      url: 'https://www.bpctech.com.au/gv-n3080aorus-x-10gd-gigabyte-aorus-geforce-rtx-3080-xtreme-10gb-video-card.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce',
      series: '3080',
      url: 'https://www.bpctech.com.au/gv-n3080aorusx-w-10gd-gigabyte-aorus-geforce-rtx-3080-xtreme-waterforce-10gb-video-card.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.bpctech.com.au/gv-n3080eagle-oc-10gd-gigabyte-geforce-rtx-3080-eagle-oc-10gb-video-card.html',
    },
    {
      brand: 'inno3d',
      model: 'ichill x4',
      series: '3080',
      url: 'https://www.bpctech.com.au/c30804-106xx-1810va36-inno3d-geforce-rtx-3080-ichill-x4-10gb-video-card.html',
    },
    {
      brand: 'inno3d',
      model: 'ichill x3',
      series: '3080',
      url: 'https://www.bpctech.com.au/c30803-106xx-1810va37-inno3d-geforce-rtx-3080-ichill-x3-10gb-video-card.html',
    },
    {
      brand: 'inno3d',
      model: 'twin x2 oc',
      series: '3080',
      url: 'https://www.bpctech.com.au/n30802-106xx-1810va34-inno3d-geforce-rtx-3080-twin-x2-oc-10gb-video-card.html',
    },
    {
      brand: 'leadtek',
      model: 'hurricane',
      series: '3080',
      url: 'https://www.bpctech.com.au/rtx3080-hurricane-leadtek-geforce-rtx-3080-hurricane-10gb-video-card.html',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3080',
      url: 'https://www.bpctech.com.au/rtx3080-suprim-x-10g-msi-geforce-rtx-3080-suprim-x-10gb-video-card.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.bpctech.com.au/rtx3080-ventus-3x-10g-oc-msi-rtx-3080-ventus-3x-10g-oc-video-card.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.bpctech.com.au/rtx3080-gaming-x-trio-10g-msi-rtx-3080-gaming-x-trio-10g-video-card.html',
    },
  ],
  name: 'bpctech',
  country: 'AU',
};

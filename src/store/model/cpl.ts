import {Store} from './store';

export const Cpl: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container:
        'div.product-stock > table > tbody > tr:nth-child(1) > td.stock-value',
      text: ['In Stock'],
    },
    outOfStock: {
      container:
        'div.product-stock > table > tbody > tr:nth-child(1) > td.stock-value',
      text: ['Pre Order'],
    },
  },
  links: [
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3080',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/asus-rog-strix-rtx3080-10g-gaming-graphics-card.html',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/asus-tuf-rtx3080-10g-gaming-graphics-card.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/asus-tuf-rtx3080-o10g-gaming-graphics-card.html',
    },
    {
      brand: 'evga',
      model: 'ftw3',
      series: '3080',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/evga-geforce-rtx-3080-ftw3-gaming-10g-p5-3895-kr-10gb-gddr6x-icx3-technology-argb-led-metal-backplate-hdmi-dpx3.html',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/evga-geforce-rtx-3080-ftw3-ultra-gaming-10g-p5-3897-kr-10gb-gddr6x-icx3-technology-argb-led-metal-backplate-hdmi-dpx3.html',
    },
    {
      brand: 'evga',
      model: 'xc3 black',
      series: '3080',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/evga-geforce-rtx-3080-xc3-black-gaming-10g-p5-3881-kr-10gb-gddr6x-icx3-cooling-argb-led-hdmi-dpx3.html',
    },
    {
      brand: 'evga',
      model: 'xc3',
      series: '3080',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/evga-geforce-rtx-3080-xc3-gaming-10g-p5-3883-kr-10gb-gddr6x-icx3-cooling-argb-led-metal-backplate-hdmi-dpx3.html',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3080',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/evga-geforce-rtx-3080-xc3-ultra-gaming-10g-p5-3885-kr-10gb-gddr6x-icx3-cooling-argb-led-metal-backplate-hdmi-dpx3.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3080',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/gigabyte-gv-n3080aorus-m-10gd-aorus-geforce-rtx-3080-master-10gb.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3080',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/gigabyte-aorus-geforce-rtx-3080-xtreme-10g.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/gigabyte-geforce-rtx-3080-eagle-oc-10gb-graphics-card-gv-n3080eagle-oc-10gd.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/gigabyte-gv-n3080gaming-oc-10gd-graphics-card.html',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3080',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/gigabyte-gv-n3080vision-oc-10gd-geforce-rtx-3080-vision-oc-10gb.html',
    },
    {
      brand: 'inno3d',
      model: 'ichill x3',
      series: '3080',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/inno3d-c30803-106xx-1810va37-geforce-rtx-3080-ichill-x3-10g.html',
    },
    {
      brand: 'inno3d',
      model: 'ichill x4',
      series: '3080',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/inno3d-c30804-106xx-1810va36-geforce-rtx-3080-ichill-x4-10g.html',
    },
    {
      brand: 'leadtek',
      model: 'hurricane',
      series: '3080',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/leadtek-12789000110-geforce-rtx-3080-hurricane.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/msi-rtx-3080-gaming-x-trio-10g-graphics-card.html',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3080',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/msi-geforce-rtx-3080-suprim-x-10g-graphics-card.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/msi-rtx-3080-ventus-3x-10g-oc-graphics-card.html',
    },
  ],
  name: 'cpl',
  country: 'AU',
};

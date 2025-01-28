import {Store} from './store';

export const Opirata: Store = {
  currency: '€',
  labels: {
    inStock: {
      container:
        '#app > div.wrapper-container.full > div.container.list > div.row.less-gutters > div:nth-child(2) > div > div:nth-child(2) > div > form > div:nth-child(4) > div.col-12.text-right > button',
      text: ['Comprar'],
    },
    maxPrice: {
      container:
        '#app > div.wrapper-container.full > div.container.list > div.row.less-gutters > div:nth-child(2) > div > div:nth-child(2) > div > form > div.row.info-details-buy > div.col-12.col-md-6.product-price.text-right > div:nth-child(1) > div > h3',
      euroFormat: false,
    },
    outOfStock: {
      container:
        '#app > div.wrapper-container.full > div.container.list > div.row.less-gutters > div:nth-child(2) > div > div:nth-child(2) > div > form > div:nth-child(4) > div.col-12.text-right > button',
      text: ['Avísame'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.opirata.com/p/tarjeta-grafica-msi-geforce-gt-710-1gd3h-lp-1gb-ddr3',
    },
    // 3090
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3090',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-aorus-geforce-rtx-3090-master-24gb-gddr6x',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3090',
      url: 'https://www.opirata.com/p/tarjeta-grafica-evga-geforce-rtx-3090-ftw3-ultra-gaming-24gb-gddr6x',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3090',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-geforce-rtx-3090-eagle-oc-24g-24gb-gddr6x',
    },
    // 3080
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.opirata.com/p/gigabyte-vga-nvidia-rtx-3080-eagle-oc-10g-ddr6x',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.opirata.com/p/gigabyte-vga-nvidia-rtx-3080-gaming-oc-10g-ddr6x',
    },
    {
      brand: 'evga',
      model: 'xc3 black',
      series: '3080',
      url: 'https://www.opirata.com/p/tarjeta-grafica-evga-geforce-rtx-3080-xc3-black-gaming-10gb-gddr6x',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3080',
      url: 'https://www.opirata.com/p/tarjeta-grafica-evga-geforce-rtx-3080-xc3-ultra-gaming-10gb-gddr6x',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3080',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-geforce-rtx-3080-vision-oc-10gb-gddr6x',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.opirata.com/p/tarjeta-grafica-evga-geforce-rtx-3080-ftw3-ultra-gaming-10gb-gddr6x',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3080',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-geforce-rtx-3080-master-10gb-gddr6x',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3080',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-aorus-geforce-rtx-3080-xtreme-10gb-gddr6x',
    },
    {
      brand: 'evga',
      model: 'ftw3',
      series: '3080',
      url: 'https://www.opirata.com/p/tarjeta-grafica-evga-geforce-rtx-3080-ftw3-gaming-10gb-gddr6x',
    },
    // 3070
    {
      brand: 'palit',
      model: 'jetstream',
      series: '3070',
      url: 'https://www.opirata.com/p/tarjeta-grafica-palit-rtx-3070-jet-stream-8gb-gddr6',
    },
    {
      brand: 'gainward',
      model: 'phantom gs',
      series: '3070',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gainward-rtx-3070-phantom-gs-8gb-gddr6',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-geforce-rtx-3070-gaming-oc-8gb-gddr6',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3070',
      url: 'https://www.opirata.com/p/tarjeta-grafica-evga-geforce-rtx-3070-xc3-ultra-gaming-8gb-gddr6',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3070',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-geforce-rtx-3070-eagle-oc-8gb-gddr6',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3070',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-geforce-rtx-3070-vision-oc-8gb-gddr6',
    },
    {
      brand: 'pny',
      model: 'dual fan',
      series: '3070',
      url: 'https://www.pccomponentes.com/pny-geforce-rtx-3070-dual-fan-8gb-gddr6',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3070',
      url: 'https://www.opirata.com/p/gigabyte-aorus-vga-nvidia-rtx-3070-master-8g-ddr6',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3070',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-geforce-rtx-3070-eagle-8gb-gddr6',
    },
    // 3060
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3060ti',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-geforce-rtx-3060-ti-eagle-oc-8gb-gddr6',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060ti',
      url: 'https://www.opirata.com/p/gigabyte-vga-nvidia-rtx-3060-ti-gaming-oc-8gb-ddr6',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc pro',
      series: '3060ti',
      url: 'https://www.opirata.com/p/gigabyte-vga-nvidia-rtx-3060-ti-gaming-oc-pro-8gb',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3060ti',
      url: 'https://www.opirata.com/p/palit-vga-nvidia-geforce-rtx-3060-ti-gamingpro-8gb-gddr6',
    },
    {
      brand: 'evga',
      model: 'xc gaming',
      series: '3060',
      url: 'https://www.opirata.com/p/tarjeta-grafica-evga-rtx-3060-12gb-xc-gaming-gddr6',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3060ti',
      url: 'https://www.opirata.com/p/gigabyte-aorus-vga-nvidia-rtx-3060-ti-master-8gb-gddr6',
    },
    {
      brand: 'palit',
      model: 'dual',
      series: '3060ti',
      url: 'https://www.opirata.com/p/tarjeta-grafica-palit-geforce-rtx-3060-ti-dual-8gb-gddr6',
    },
    {
      brand: 'palit',
      model: 'dual oc',
      series: '3060ti',
      url: 'https://www.opirata.com/p/palit-vga-nvidia-rtx-3060-ti-dual-oc-8gb-gddr6',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-vga-nvidia-rtx-3060-gaming-oc-12gb-ddr6',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3060',
      url: 'https://www.opirata.com/p/tarjeta-grafica-gigabyte-geforce-rtx-3060-eagle-oc-12gb-gddr6',
    },
  ],
  name: 'opirata',
  country: 'ES',
};

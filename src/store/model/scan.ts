import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Scan: Store = {
  currency: '£',
  disableAdBlocker: true,
  labels: {
    captcha: [
      {
        container: '#challenge-form',
        text: ['hcaptcha_submit'],
      },
    ],
    inStock: {
      container: '.buyPanel .priceAvailability',
      text: ['add to basket', 'in stock'],
    },
    maxPrice: {
      container: '.buyPanel .price',
      euroFormat: false, // Note: Scan uses non-euroFromat as price seperator
    },
    outOfStock: {
      container: '.buyPanel .priceAvailability',
      text: ['pre order'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.scan.co.uk/products/msi-geforce-rtx-2060-ventus-xs-oc-6gb-gddr6-vr-ready-graphics-card-1920-core-1710mhz-boost',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.scan.co.uk/products/playstation-5-console',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.scan.co.uk/products/playstation-5-digital-edition',
    },
  ],
  linksBuilder: {
    builder: getProductLinksBuilder({
      productsSelector: 'div.productList ul.productColumns li.product',
      sitePrefix: 'https://www.scan.co.uk',
      titleSelector: '.details .description',
      urlSelector: 'a[href]',
    }),
    ttl: 300000,
    urls: [
      {
        series: 'rx6700xt',
        url:
          'https://www.scan.co.uk/shop/computer-hardware/gpu-amd-gaming/amd-radeon-rx-6700-xt-pcie-40-graphics-cards',
      },
      {
        series: 'rx6800',
        url:
          'https://www.scan.co.uk/shop/computer-hardware/gpu-amd/amd-radeon-rx-6800-pcie-40-graphics-cards',
      },
      {
        series: 'rx6800xt',
        url:
          'https://www.scan.co.uk/shop/computer-hardware/gpu-amd/amd-radeon-rx-6800-xt-pcie-40-graphics-cards',
      },
      {
        series: 'rx6900xt',
        url:
          'https://www.scan.co.uk/shop/computer-hardware/gpu-amd/amd-radeon-rx-6900-xt-pcie-40-graphics-cards',
      },
      {
        series: '3060',
        url:
          //3060 is in gaming section not computer-hardware
          'https://www.scan.co.uk/shop/gaming/gpu-nvidia/nvidia-geforce-rtx-3060-graphics-cards',
      },
      {
        series: '3060ti',
        url:
          'https://www.scan.co.uk/shop/computer-hardware/gpu-nvidia/geforce-rtx-3060-ti-graphics-cards',
      },
      {
        series: '3070',
        url:
          'https://www.scan.co.uk/shop/computer-hardware/gpu-nvidia/nvidia-geforce-rtx-3070-graphics-cards',
      },
      {
        series: '3080',
        url:
          'https://www.scan.co.uk/shop/computer-hardware/gpu-nvidia/nvidia-geforce-rtx-3080-graphics-cards',
      },
      {
        series: '3090',
        url:
          'https://www.scan.co.uk/shop/computer-hardware/gpu-nvidia/nvidia-geforce-rtx-3090-graphics-cards',
      },
    ],
  },
  name: 'scan',
  waitUntil: 'domcontentloaded',
};

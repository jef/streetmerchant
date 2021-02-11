import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Awd: Store = {
  currency: '£',
  labels: {
    inStock: {
      container: '.vs-stock .ty-qty-in-stock',
      text: ['item(s)'],
    },
    maxPrice: {
      container: '.ty-price',
      euroFormat: false, // Note: Awd uses non-euroFromat as price seperator
    },
    outOfStock: {
      container: '.vs-stock.ty-float-left',
      text: ['Out-of-stock'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.awd-it.co.uk/asus-nvidia-geforce-gt-710-silent-low-profile-2gb-gddr5-graphics-card-pci-e.html',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url:
        'https://www.awd-it.co.uk/amd-ryzen-5-5600x-cpu-six-core-3.7ghz-processor-socket-am4-retail.html',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url:
        'https://www.awd-it.co.uk/amd-ryzen-7-5800x-cpu-eight-core-3.8ghz-processor-socket-am4-retail.html',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url:
        'https://www.awd-it.co.uk/amd-ryzen-9-5900x-cpu-twelve-core-3.7ghz-processor-socket-am4-retail.html',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url:
        'https://www.awd-it.co.uk/amd-ryzen-9-5950x-sixteen-core-socket-am4-3.4ghz-processor.html',
    },
  ],
  linksBuilder: {
    builder: getProductLinksBuilder({
      productsSelector: '.grid-list .ty-grid-list__item',
      sitePrefix: 'https://www.awd-it.co.uk',
      titleSelector: '.product-title',
    }),
    urls: [
      {
        series: 'rx6800',
        url:
          'https://www.awd-it.co.uk/components/graphics-cards/ati/amd-radeon-6800-6800xt.html',
      },
      {
        series: '3060ti',
        url:
          'https://www.awd-it.co.uk/components/graphics-cards/nvidia/nvidia-geforce-rtx-3060ti.html',
      },
      {
        series: '3070',
        url:
          'https://www.awd-it.co.uk/components/graphics-cards/nvidia/nvidia-geforce-rtx-3070.html',
      },
      {
        series: '3080',
        url:
          'https://www.awd-it.co.uk/components/graphics-cards/nvidia/nvidia-geforce-rtx-3080.html',
      },
      {
        series: '3090',
        url:
          'https://www.awd-it.co.uk/components/graphics-cards/nvidia/nvidia-geforce-rtx-3090.html',
      },
    ],
  },
  name: 'awd',
  waitUntil: 'domcontentloaded',
};

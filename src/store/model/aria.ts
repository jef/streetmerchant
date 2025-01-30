import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Aria: Store = {
  currency: '£',
  labels: {
    inStock: {
      container: '#addQuantity',
      text: ['add to shopping basket'],
    },
    maxPrice: {
      container: '.priceBig',
      euroFormat: false, // Note: Aria uses non-euroFromat as price seperator
    },
    outOfStock: {
      container: '.fBox',
      text: ['out of stock', 'there is currently no stock of this item'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.aria.co.uk/Products/Components/Graphics+Cards/NVIDIA+GeForce/GeForce+RTX+2060+Super/Gigabyte+NVIDIA+GeForce+RTX+2060+SUPER+8GB+WINDFORCE+OC+Turing+Graphics+Card+%2B+RTX+Bundle%21?productId=71541',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.aria.co.uk/Products/Components/Processors/AMD+CPUs/Ryzen+9+-+Socket+AM4/AMD+Ryzen+9+5950X+16+Core+AM4+CPU%2FProcessor?productId=72868',
    },
  ],
  linksBuilder: {
    builder: getProductLinksBuilder({
      productsSelector: '#productListingInner .listTable .listTableTr',
      sitePrefix: 'https://www.aria.co.uk',
      titleSelector: 'strong > a[href]',
    }),
    urls: [
      {
        series: '3060',
        url: 'https://www.aria.co.uk/Products/Components/Graphics+Cards/NVIDIA+GeForce/GeForce+RTX+3060',
      },
      {
        series: '3060ti',
        url: 'https://www.aria.co.uk/Products/Components/Graphics+Cards/NVIDIA+GeForce/GeForce+RTX+3060+Ti',
      },
      {
        series: '3070',
        url: 'https://www.aria.co.uk/Products/Components/Graphics+Cards/NVIDIA+GeForce/GeForce+RTX+3070',
      },
      {
        series: '3080',
        url: 'https://www.aria.co.uk/Products/Components/Graphics+Cards/NVIDIA+GeForce/GeForce+RTX+3080',
      },
      {
        series: '3090',
        url: 'https://www.aria.co.uk/Products/Components/Graphics+Cards/NVIDIA+GeForce/GeForce+RTX+3090',
      },
    ],
  },
  name: 'aria',
  country: 'UK',
  waitUntil: 'domcontentloaded',
};

import {Store} from './store';

export const Ubiquiti: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.titleInStockBadge',
      text: ['In Stock'],
    },
    outOfStock: [
      {
        container: '.titleSoldOutBadge',
        text: ['Sold Out'],
      },
    ],
  },
  links: [
    {
      brand: 'ubiquiti',
      model: 'dream machine',
      series: 'udm-us',
      url: 'https://store.ui.com/collections/unifi-network-unifi-os-consoles/products/udm-us',
    },
  ],
  name: 'ubiquiti',
};

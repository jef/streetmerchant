import {Store} from './store';

export const Ubiquiti: Store = {
  currency: '$',
  labels: {
    inStock: [
      {
        container: '#titleInStockBadge',
        text: ['In Stock'],
      },
    ],
    outOfStock: [
      {
        container: '.titleSoldOutBadge',
        text: ['Sold Out'],
      },
      {
        container: '#titleSoldOutBadge',
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
    {
      brand: 'ubiquiti',
      model: 'dream machine pro',
      series: 'udm-pro',
      url: 'https://store.ui.com/collections/unifi-network-unifi-os-consoles/products/udm-pro',
    },
    {
      brand: 'ubiquiti',
      model: 'dream router',
      series: 'udr-us',
      url: 'https://store.ui.com/collections/unifi-network-unifi-os-consoles/products/dream-router',
    },
    {
      brand: 'ubiquiti',
      model: 'g4 doorbell pro',
      series: 'g4-doorbell-pro',
      url: 'https://store.ui.com/collections/unifi-protect/products/g4-doorbell-pro',
    },
    {
      brand: 'ubiquiti',
      model: 'network video recorder',
      series: 'unvr',
      url: 'https://store.ui.com/collections/unifi-protect/products/unvr',
    },
    {
      brand: 'ubiquiti',
      model: 'network video recorder pro',
      series: 'unvr-pro',
      url: 'https://store.ui.com/collections/unifi-protect/products/unvr-pro',
    },
  ],
  name: 'ubiquiti',
  country: 'US',
};

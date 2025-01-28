import {Store} from './store';

export const LandmarkComputers: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container: '.stock-info-message',
      text: ['In Stock', 'Low In Stock', 'Stock in warehouse'],
    },
    maxPrice: {
      container: '.product-views-price-lead',
      euroFormat: false,
    },
    outOfStock: {
      container: '.stock-info-message',
      text: ['Pre-order', 'Call for ETA'],
    },
  },
  links: [
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.lmc.com.au/msi-geforce-rtx-3080-gaming-x-trio-10g-gaming-graphics-card',
    },
    {
      brand: 'leadtek',
      model: 'hurricane',
      series: '3080',
      url: 'https://www.lmc.com.au/leadtek-geforce-rtx-3080-hurricane-12789000110-10g-gddr6x-hdmi2.1-3xdp1.4a',
    },
  ],
  name: 'landmark-computers',
  country: 'AU',
};

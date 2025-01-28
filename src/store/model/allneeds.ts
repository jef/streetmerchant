import {Store} from './store';

export const Allneeds: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container: '.amstockstatus',
      text: ['In Stock'],
    },
    maxPrice: {
      container: 'span.price',
      euroFormat: false,
    },
    outOfStock: {
      container: '.amstockstatus',
      text: ['sold out'],
    },
  },
  links: [
    {
      brand: 'asus',
      model: 'strix oc white',
      series: '3080',
      url: 'https://allneeds.com.au/asus-geforce-rtx-3080-rog-strix-gaming-oc-10gb-video-card-white-edition-limited-edition',
    },
    {
      brand: 'sapphire',
      model: 'nitro+',
      series: 'rx6900xt',
      url: 'https://allneeds.com.au/sapphire-nitro-radeon-rx-6900-xt-16gb-video-card-11308-01-20g',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://allneeds.com.au/amd-ryzen-9-5950x-processor-100-100000059wof',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://allneeds.com.au/amd-ryzen-9-5900x-processor-100-100000061wof',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://allneeds.com.au/amd-ryzen-7-5800x-processor',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://allneeds.com.au/amd-ryzen-5-5600x-with-wraith-stealth-100-100000065box',
    },
  ],
  name: 'allneeds',
  country: 'AU',
};

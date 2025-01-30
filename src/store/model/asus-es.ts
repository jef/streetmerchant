import {Store} from './store';

export const AsusEs: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '#product-addtocart-button > span',
      text: ['Añadir a la cesta'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://estore.asus.com/es/90mb1680-m0eay0-rog-strix-z590-i-gaming-wifi.html',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url: 'https://estore.asus.com/es/90yv0fb0-m0nm00-tuf-rtx3080-10g-gaming.html',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3090',
      url: 'https://estore.asus.com/es/90yv0fd0-m0nm00-tuf-rtx3090-24g-gaming.html',
    },
  ],
  name: 'asus-es',
  country: 'ES',
};

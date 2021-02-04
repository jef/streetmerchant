import { Store } from './store';

export const PCComponentesPt: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '#btnsWishAddBuy',
      text: ['Comprar'],
    },
    maxPrice: {
      container: '#precio-main',
      euroFormat: true,
    },
    outOfStock: {
      container: '#btnsWishAddBuy',
      text: ['Avisa-me'],
    },
  },
  links: [
    {
      brand: 'gigabyte',
      model: 'aorus',
      series: '3080',
      url:
        'https://www.pccomponentes.pt/gigabyte-aorus-rtx-3080-gaming-box-10gb-gddr6x',
    },
  ],
  name: 'pccomponentes-pt',
};

import { Store } from './store';

export const Worten: Store = {
  currency: '€',
  labels: {
    inStock: {
      /* FIXME: THIS IS NOT WORKING */
      container: '.qa-product-options__add-cart-linkto',
      text: ['Adicionar ao Carrinho'],
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.worten.pt/gaming/playstation/consolas/ps5/consola-ps5-825gb-7196053',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url:
        'https://www.worten.pt/gaming/playstation/consolas/ps5/consola-ps5-edicao-digital-825-gb-7196054',
    },
  ],
  name: 'worten',
};
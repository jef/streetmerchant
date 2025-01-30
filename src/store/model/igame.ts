import {Store} from './store';

export const Igamecomputer: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container:
        'div.product-form__controls-group.product-form__controls-group--submit > div > button',
      text: ['ADD TO CART'],
    },
    maxPrice: {
      container: 'div.price__pricing-group > div.price__regular > dd > span',
      euroFormat: false,
    },
    outOfStock: {
      container:
        '#product_form_6084255350971 > div.product-form__controls-group.product-form__controls-group--submit > div > button',
      text: ['SOLD OUT'],
    },
  },
  links: [
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.igamecomputer.com.au/products/a0068?_pos=5&_sid=42c0f4fc6&_ss=r',
    },
    {
      brand: 'colorful',
      model: 'igame ultra oc',
      series: '3080',
      url: 'https://www.igamecomputer.com.au/products/mc026?_pos=3&_sid=42c0f4fc6&_ss=r',
    },
    {
      brand: 'colorful',
      model: 'igame advanced',
      series: '3080',
      url: 'https://www.igamecomputer.com.au/products/mc024?_pos=4&_sid=42c0f4fc6&_ss=r',
    },
    {
      brand: 'colorful',
      model: 'igame advanced oc',
      series: '3080',
      url: 'https://www.igamecomputer.com.au/products/mc025?_pos=2&_sid=42c0f4fc6&_ss=r',
    },
    {
      brand: 'colorful',
      model: 'igame vulcan oc',
      series: '3080',
      url: 'https://www.igamecomputer.com.au/products/mc023?_pos=1&_sid=42c0f4fc6&_ss=r',
    },
    {
      brand: 'colorful',
      model: 'battle-ax',
      series: '3090',
      url: 'https://www.igamecomputer.com.au/products/mc022?_pos=1&_sid=b07af5f7e&_ss=r',
    },
    {
      brand: 'colorful',
      model: 'igame advanced oc',
      series: '3090',
      url: 'https://www.igamecomputer.com.au/products/mc021?_pos=2&_sid=b07af5f7e&_ss=r',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.igamecomputer.com.au/products/a0126?_pos=1&_psq=5900x&_ss=e&_v=1.0',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.igamecomputer.com.au/products/a0125?_pos=1&_psq=5800x&_ss=e&_v=1.0',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.igamecomputer.com.au/products/a0124?_pos=1&_psq=5600x&_ss=e&_v=1.0',
    },
  ],
  name: 'igame-computer',
  country: 'AU',
};

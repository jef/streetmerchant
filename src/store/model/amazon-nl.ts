import {Store} from './store';

export const AmazonNl: Store = {
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['voer de karakters in die u hieronder ziet'],
    },
    captchaHandler: {
      challenge: '.a-row > img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: [
      {
        container: '#add-to-cart-button',
        text: ['in winkelwagen'],
      },
      {
        container: '#buy-now-button',
        text: ['nu kopen'],
      },
    ],
    maxPrice: {
      container: '.a-text-price',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '#availability',
        text: ['tijdelijk niet'],
      },
      {
        container: '#outOfStock',
        text: ['we weten niet of en wanneer dit item weer op voorraad is'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B085K45C3S&Quantity.1=1',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.nl/dp/B085K45C3S',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08HM4M621&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.amazon.nl/dp/B08HM4M621',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08HM4V2DH&Quantity.1=1',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.amazon.nl/dp/B08HM4V2DH',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08HJ9XFNM&Quantity.1=1',
      model: 'xc3 ultra',
      series: '3080',
      url: 'https://www.amazon.nl/dp/B08HJ9XFNM',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08HH1BMQQ&Quantity.1=1',
      model: 'xc3 black',
      series: '3080',
      url: 'https://www.amazon.nl/dp/B08HH1BMQQ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08HN7VVLJ&Quantity.1=1',
      model: 'strix',
      series: '3080',
      url: 'https://www.amazon.nl/dp/B08HN7VVLJ',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08P2DQ28S&Quantity.1=1',
      model: 'ventus 2x oc',
      series: '3060ti',
      url: 'https://www.amazon.nl/dp/B08P2DQ28S',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08NW2YJB2&Quantity.1=1',
      model: 'ventus 2x oc',
      series: '3060ti',
      url: 'https://www.amazon.nl/dp/B08NW2YJB2',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08P3XJLJJ&Quantity.1=1',
      model: 'twin edge',
      series: '3060ti',
      url: 'https://www.amazon.nl/dp/B08P3XJLJJ',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08P3V572B&Quantity.1=1',
      model: 'twin edge oc',
      series: '3060ti',
      url: 'https://www.amazon.nl/dp/B08P3V572B',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08P3BJ9Y8&Quantity.1=1',
      model: 'twin edge oc',
      series: '3060ti',
      url: 'https://www.amazon.nl/dp/B08P3BJ9Y8',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08P3JPX8P&Quantity.1=1',
      model: 'eagle',
      series: '3060ti',
      url: 'https://www.amazon.nl/dp/B08P3JPX8P',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08NW2X37Z&Quantity.1=1',
      model: 'gaming oc',
      series: '3060ti',
      url: 'https://www.amazon.nl/dp/B08NW2X37Z',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08NW528S1&Quantity.1=1',
      model: 'eagle oc',
      series: '3060ti',
      url: 'https://www.amazon.nl/dp/B08NW528S1',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08NW693LG&Quantity.1=1',
      model: 'xlr8 revel',
      series: '3060ti',
      url: 'https://www.amazon.nl/dp/B08NW693LG',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B083Z5P6TX&Quantity.1=1',
      model: 'tuf oc',
      series: '3060ti',
      url: 'https://www.amazon.nl/dp/B083Z5P6TX',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08NZ4G4T2&Quantity.1=1',
      model: 'tuf oc',
      series: '3060ti',
      url: 'https://www.amazon.nl/dp/B08NZ4G4T2',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08P2HBBLX&Quantity.1=1',
      model: 'dual oc',
      series: '3060ti',
      url: 'https://www.amazon.nl/dp/B08P2HBBLX',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08PDN36R3&Quantity.1=1',
      model: 'ftw3',
      series: '3060ti',
      url: 'https://www.amazon.nl/dp/B08PDN36R3',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08PDP837W&Quantity.1=1',
      model: 'xc gaming',
      series: '3060ti',
      url: 'https://www.amazon.nl/dp/B08PDP837W',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08PDMVPZ4&Quantity.1=1',
      model: 'xc3 black',
      series: '3060ti',
      url: 'https://www.amazon.nl/dp/B08PDMVPZ4',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08166SLDF&Quantity.1=1',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.amazon.nl/dp/B08166SLDF',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B0815XFSGK&Quantity.1=1',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.amazon.nl/dp/B0815XFSGK',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B08164VTWH&Quantity.1=1',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.amazon.nl/dp/B08164VTWH',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B0815Y8J9N&Quantity.1=1',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.amazon.nl/dp/B0815Y8J9N',
    },
  ],
  name: 'amazon-nl',
  country: 'NL',
};

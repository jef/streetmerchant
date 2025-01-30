import {Store} from './store';

export const AmazonCa: Store = {
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['enter the characters you see below'],
    },
    captchaHandler: {
      challenge: 'img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: {
      container: '#desktop_buybox',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.a-color-price',
    },
    outOfStock: {
      container: '.a-color-price',
      text: ['currently unavailable.'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B07PBLD2MX&Quantity.1=1',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.ca/dp/B07PBLD2MX',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08KWN2LZG&Quantity.1=1',
      model: 'gaming x trio',
      series: '3070',
      url: 'https://www.amazon.ca/dp/B08KWN2LZG',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08KWLMZV4&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3070',
      url: 'https://www.amazon.ca/dp/B08KWLMZV4',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08LW46GH2&Quantity.1=1',
      model: 'xc3',
      series: '3070',
      url: 'https://www.amazon.ca/dp/B08LW46GH2',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08L8L71SM&Quantity.1=1',
      model: 'xc3 ultra',
      series: '3070',
      url: 'https://www.amazon.ca/dp/B08L8L71SM',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08L8L9TCZ&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3070',
      url: 'https://www.amazon.ca/dp/B08L8L9TCZ',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR7SV3M&Quantity.1=1',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HR7SV3M',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR5SXPS&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HR5SXPS',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR3DPGW&Quantity.1=1',
      model: 'ftw3',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HR3DPGW',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR3Y5GQ&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HR3Y5GQ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR55YB5&Quantity.1=1',
      model: 'xc3 ultra',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HR55YB5',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR4RJ3Q&Quantity.1=1',
      model: 'xc3',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HR4RJ3Q',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR6FMF3&Quantity.1=1',
      model: 'xc3 black',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HR6FMF3',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJTH61J&Quantity.1=1',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HJTH61J',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJS2JLJ&Quantity.1=1',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HJS2JLJ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HHDP9DW&Quantity.1=1',
      model: 'tuf',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HHDP9DW',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HH5WF97&Quantity.1=1',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HH5WF97',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJNKT3P&Quantity.1=1',
      model: 'trinity',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HJNKT3P',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJQ182D&Quantity.1=1',
      model: 'trinity',
      series: '3090',
      url: 'https://www.amazon.ca/dp/B08HJQ182D',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR9D2JS&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3090',
      url: 'https://www.amazon.ca/dp/B08HR9D2JS',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJRF2CN&Quantity.1=1',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.amazon.ca/dp/B08HJRF2CN',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJPDJTY&Quantity.1=1',
      model: 'eagle oc',
      series: '3090',
      url: 'https://www.amazon.ca/dp/B08HJPDJTY',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJGNJ81&Quantity.1=1',
      model: 'tuf',
      series: '3090',
      url: 'https://www.amazon.ca/dp/B08HJGNJ81',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJLLF7G&Quantity.1=1',
      model: 'tuf oc',
      series: '3090',
      url: 'https://www.amazon.ca/dp/B08HJLLF7G',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08166SLDF&Quantity.1=1',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.amazon.ca/dp/B08166SLDF',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0815XFSGK&Quantity.1=1',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.amazon.ca/dp/B0815XFSGK',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08164VTWH&Quantity.1=1',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.amazon.ca/dp/B08164VTWH',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0815Y8J9N&Quantity.1=1',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.amazon.ca/dp/B0815Y8J9N',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08GSC5D9G&Quantity.1=1',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.ca/dp/B08GSC5D9G',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08GS1N24H&Quantity.1=1',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.ca/dp/B08GS1N24H',
    },
    {
      brand: 'microsoft',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08H75RTZ8&Quantity.1=1',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['Xbox Series X'],
        },
      },
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.amazon.ca/dp/B08H75RTZ8',
    },
    {
      brand: 'microsoft',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08G9J44ZN&Quantity.1=1',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['Xbox Series S'],
        },
      },
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.amazon.ca/dp/B08G9J44ZN',
    },
    {
      brand: 'xfx',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08NX14LV1&Quantity.1=1',
      model: 'merc',
      series: 'rx6800xt',
      url: 'https://www.amazon.ca/dp/B08NX14LV1',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08PQ585CX&Quantity.1=1',
      model: 'pulse',
      series: 'rx6800xt',
      url: 'https://www.amazon.ca/dp/B08PQ585CX',
    },
  ],
  name: 'amazon-ca',
  country: 'CA',
};

import {Store} from './store';

export const AmazonFr: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['entrez les caractères que vous voyez ci-dessous'],
    },
    captchaHandler: {
      challenge: '.a-row > img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: {
      container: '#desktop_buybox',
      text: ['ajouter au panier'],
    },
    maxPrice: {
      container: '.a-text-price',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '#availability',
        text: ['Actuellement indisponible'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.fr/dp/B07PW9VBK5',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HR7SV3M',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HR5SXPS',
    },
    {
      brand: 'evga',
      model: 'ftw3',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HGBYWQ6',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HR3Y5GQ',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HR55YB5',
    },
    {
      brand: 'evga',
      model: 'xc3',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HR4RJ3Q',
    },
    {
      brand: 'evga',
      model: 'xc3 black',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HR6FMF3',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HJTH61J',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HJS2JLJ',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HHDP9DW',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HH5WF97',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HJNKT3P',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HJQ182D',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HR9D2JS',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HJRF2CN',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HJPDJTY',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HJGNJ81',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HJLLF7G',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.amazon.fr/dp/B08166SLDF',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.amazon.fr/dp/B0815XFSGK',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.amazon.fr/dp/B08164VTWH',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.amazon.fr/dp/B0815Y8J9N',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.fr/dp/B08H93ZRK9',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.fr/dp/B08H98GVK8',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.amazon.fr/dp/B08H93ZRLL',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.amazon.fr/dp/B087VM5XC6',
    },
  ],
  name: 'amazon-fr',
  country: 'FR',
};

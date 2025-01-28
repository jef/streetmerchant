import {Store} from './store';

export const AmazonIt: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['Inserisci i caratteri visualizzati nello spazio sottostante'],
    },
    captchaHandler: {
      challenge: 'img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: {
      container: '#desktop_buybox',
      text: ['Aggiungi al carrello'],
    },
    maxPrice: {
      container: '.a-text-price',
      euroFormat: true,
    },
  },
  links: [
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08KHFZN9P&Quantity.1=1',
      model: 'dual',
      series: '3070',
      url: 'https://www.amazon.it/dp/B08KHFZN9P',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08L8HPKR6&Quantity.1=1',
      model: 'dual',
      series: '3070',
      url: 'https://www.amazon.it/dp/B08L8HPKR6',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08L8JNTXQ&Quantity.1=1',
      model: 'strix',
      series: '3070',
      url: 'https://www.amazon.it/dp/B08L8JNTXQ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08L8KC1J7&Quantity.1=1',
      model: 'tuf',
      series: '3070',
      url: 'https://www.amazon.it/dp/B08L8KC1J7',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08KY266MG&Quantity.1=1',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.amazon.it/dp/B08KY266MG',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08KWN2LZG&Quantity.1=1',
      model: 'gaming',
      series: '3070',
      url: 'https://www.amazon.it/dp/B08KWN2LZG',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HBJB7YD&Quantity.1=1',
      model: 'xlr8 revel',
      series: '3070',
      url: 'https://www.amazon.it/dp/B08HBJB7YD',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HBF5L3K&Quantity.1=1',
      model: 'xlr8 uprising',
      series: '3070',
      url: 'https://www.amazon.it/dp/B08HBF5L3K',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08KWPDXJZ&Quantity.1=1',
      model: 'ventus 2x oc',
      series: '3070',
      url: 'https://www.amazon.it/dp/B08KWPDXJZ',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08KWLMZV4&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3070',
      url: 'https://www.amazon.it/dp/B08KWLMZV4',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08LF32LJ6&Quantity.1=1',
      model: 'gaming',
      series: '3070',
      url: 'https://www.amazon.it/dp/B08LF32LJ6',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08L8L71SM&Quantity.1=1',
      model: 'xc3 ultra',
      series: '3070',
      url: 'https://www.amazon.it/dp/B08L8L71SM',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08L8L9TCZ&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3070',
      url: 'https://www.amazon.it/dp/B08L8L9TCZ',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08KY266MG&Quantity.1=1',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.amazon.it/dp/B08KY266MG',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08M13DXSZ&Quantity.1=1',
      model: 'vision oc',
      series: '3070',
      url: 'https://www.amazon.it/dp/B08M13DXSZ',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08KXZV626&Quantity.1=1',
      model: 'eagle',
      series: '3070',
      url: 'https://www.amazon.it/dp/B08KXZV626',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HBR7QBM&Quantity.1=1',
      model: 'xlr8 revel',
      series: '3080',
      url: 'https://www.amazon.it/dp/B08HBR7QBM',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HBTJMLJ&Quantity.1=1',
      model: 'xlr8 revel',
      series: '3080',
      url: 'https://www.amazon.it/dp/B08HBTJMLJ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HR3Y5GQ&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.amazon.it/dp/B08HR3Y5GQ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HR55YB5&Quantity.1=1',
      model: 'xc3 ultra',
      series: '3080',
      url: 'https://www.amazon.it/dp/B08HR55YB5',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HR4RJ3Q&Quantity.1=1',
      model: 'xc3',
      series: '3080',
      url: 'https://www.amazon.it/dp/B08HR4RJ3Q',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HR6FMF3&Quantity.1=1',
      model: 'xc3 black',
      series: '3080',
      url: 'https://www.amazon.it/dp/B08HR6FMF3',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HJTH61J&Quantity.1=1',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.amazon.it/dp/B08HJTH61J',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HJS2JLJ&Quantity.1=1',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.amazon.it/dp/B08HJS2JLJ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HH5WF97&Quantity.1=1',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.amazon.it/dp/B08HH5WF97',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HHDP9DW&Quantity.1=1',
      model: 'tuf',
      series: '3080',
      url: 'https://www.amazon.it/dp/B08HHDP9DW',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08J6GMWCQ&Quantity.1=1',
      model: 'strix oc',
      series: '3090',
      url: 'https://www.amazon.it/dp/B08J6GMWCQ',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HR5SXPS&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.amazon.it/dp/B08HR5SXPS',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HJNKT3P&Quantity.1=1',
      model: 'trinity',
      series: '3080',
      url: 'https://www.amazon.it/dp/B08HJNKT3P',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HJQ182D&Quantity.1=1',
      model: 'trinity',
      series: '3090',
      url: 'https://www.amazon.it/dp/B08HJQ182D',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HBQWBHH&Quantity.1=1',
      model: 'xlr8 revel',
      series: '3090',
      url: 'https://www.amazon.it/dp/B08HBQWBHH',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HBVX53D&Quantity.1=1',
      model: 'xlr8 revel',
      series: '3090',
      url: 'https://www.amazon.it/dp/B08HBVX53D',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HRBW6VB&Quantity.1=1',
      model: 'gaming x trio',
      series: '3090',
      url: 'https://www.amazon.it/dp/B08HRBW6VB',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HR9D2JS&Quantity.1=1',
      model: 'ventus 3x',
      series: '3090',
      url: 'https://www.amazon.it/dp/B08HR9D2JS',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HJRF2CN&Quantity.1=1',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.amazon.it/dp/B08HJRF2CN',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HJPDJTY&Quantity.1=1',
      model: 'eagle oc',
      series: '3090',
      url: 'https://www.amazon.it/dp/B08HJPDJTY',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HJGNJ81&Quantity.1=1',
      model: 'tuf oc',
      series: '3090',
      url: 'https://www.amazon.it/dp/B08HJGNJ81',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HJLLF7G&Quantity.1=1',
      model: 'tuf oc',
      series: '3090',
      url: 'https://www.amazon.it/dp/B08HJLLF7G',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08166SLDF&Quantity.1=1',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.amazon.it/dp/B08166SLDF',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B0815XFSGK&Quantity.1=1',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.amazon.it/dp/product/B0815XFSGK',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08164VTWH&Quantity.1=1',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.amazon.it/dp/B08164VTWH',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B0815Y8J9N&Quantity.1=1',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.amazon.it/dp/B0815Y8J9N',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08MVC76SR&Quantity.1=1',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.amazon.it/dp/B08MVC76SR',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08MVCLBWK&Quantity.1=1',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.amazon.it/dp/B08MVCLBWK',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08KKJ37F7&Quantity.1=1',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.it/dp/B08KKJ37F7',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08KJF2D25&Quantity.1=1',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.it/dp/B08KJF2D25',
    },
    {
      brand: 'microsoft',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08JDSW1ZW&Quantity.1=1',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.amazon.it/dp/B08JDSW1ZW',
    },
    {
      brand: 'microsoft',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08JDTCXRG&Quantity.1=1',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.amazon.it/dp/B08JDTCXRG',
    },
    {
      brand: 'corsair',
      cartUrl:
        'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B07M63H81H&Quantity.1=1',
      model: '750 platinum',
      series: 'sf',
      url: 'https://www.amazon.it/dp/B07M63H81H',
    },
  ],
  name: 'amazon-it',
  country: 'IT',
};

import {Store} from './store';

export const AmazonEs: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['introduzca los caracteres que ve a continuación'],
    },
    captchaHandler: {
      challenge: '.a-row > img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: {
      container: '#desktop_buybox',
      text: ['añadir a la cesta'],
    },
    maxPrice: {
      container: '.a-text-price',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '#availability',
        text: ['No disponible'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B07PW9VBK5&Quantity.1=1',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.es/dp/B07PW9VBK5',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08J5F3G18&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3090',
      url: 'https://www.amazon.es/dp/B08J5F3G18/',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HGS1SXH&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3090',
      url: 'https://www.amazon.es/dp/B08HGS1SXH/',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08R5WDMZC&Quantity.1=1',
      model: 'ekwb',
      series: '3090',
      url: 'https://www.amazon.es/dp/B08R5WDMZC/',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KHJS572&Quantity.1=1',
      model: 'aorus xtreme',
      series: '3090',
      url: 'https://www.amazon.es/dp/B08KHJS572',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HBQWBHH&Quantity.1=1',
      model: 'xlr8 revel',
      series: '3090',
      url: 'https://www.amazon.es/dp/B08HBQWBHH',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HLYQ9XL&Quantity.1=1',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.amazon.es/dp/B08HLYQ9XL',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HN51T8Q&Quantity.1=1',
      model: 'strix oc',
      series: '3090',
      url: 'https://www.amazon.es/dp/B08HN51T8Q',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08R5WDMZC&Quantity.1=1',
      model: 'ekwb',
      series: '3090',
      url: 'https://www.amazon.es/dp/B08R5WDMZC',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08LTJVGYS&Quantity.1=1',
      model: 'suprim x',
      series: '3090',
      url: 'https://www.amazon.es/dp/B08LTJVGYS',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HRBW6VB&Quantity.1=1',
      model: 'gaming x trio',
      series: '3090',
      url: 'https://www.amazon.es/dp/B08HRBW6VB',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HM6D7TM&Quantity.1=1',
      model: 'gaming x trio',
      series: '3090',
      url: 'https://www.amazon.es/dp/B08HM6D7TM',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08R5J94WP&Quantity.1=1',
      model: 'aorus xtreme waterforce wb',
      series: '3090',
      url: 'https://www.amazon.es/dp/B08R5J94WP',
    },
    {
      brand: 'nvidia',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HR6ZBYJ&Quantity.1=1',
      model: 'founders edition',
      series: '3090',
      url: 'https://www.amazon.es/dp/B08HR6ZBYJ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B09622N253&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3080ti',
      url: 'https://www.amazon.es/dp/B09622N253',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B0957WCY1M&Quantity.1=1',
      model: 'suprim x',
      series: '3080ti',
      url: 'https://www.amazon.es/dp/B0957WCY1M',
    },
    {
      brand: 'inno3d',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B096MVB4KP&Quantity.1=1',
      model: 'ichill x4',
      series: '3080ti',
      url: 'https://www.amazon.es/dp/B096MVB4KP',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B0964DB2P9&Quantity.1=1',
      model: 'trinity',
      series: '3080ti',
      url: 'https://www.amazon.es/dp/B0964DB2P9',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B0957TV4YR&Quantity.1=1',
      model: 'gaming x trio',
      series: '3080ti',
      url: 'https://www.amazon.es/dp/B0957TV4YR',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B0963TJNHG&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3080ti',
      url: 'https://www.amazon.es/dp/B0963TJNHG',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B0979GYMHP&Quantity.1=1',
      model: 'xc3 ultra',
      series: '3080ti',
      url: 'https://www.amazon.es/dp/B0979GYMHP',
    },
    {
      brand: 'palit',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B096KTPQ9J&Quantity.1=1',
      model: 'gamerock',
      series: '3080ti',
      url: 'https://www.amazon.es/dp/B096KTPQ9J',
    },
    {
      brand: 'palit',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B096KVBBHQ&Quantity.1=1',
      model: 'gaming pro',
      series: '3080ti',
      url: 'https://www.amazon.es/dp/B096KVBBHQ',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B095X51RHY&Quantity.1=1',
      model: 'gaming oc',
      series: '3080ti',
      url: 'https://www.amazon.es/dp/B095X51RHY',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B095X622XV&Quantity.1=1',
      model: 'aorus master',
      series: '3080ti',
      url: 'https://www.amazon.es/dp/B095X622XV',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B095X7V2HH&Quantity.1=1',
      model: 'vision oc',
      series: '3080ti',
      url: 'https://www.amazon.es/dp/B095X7V2HH',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08D3LH86H&Quantity.1=1',
      model: 'turbo',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08D3LH86H',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B092CYHPDJ&Quantity.1=1',
      model: 'gaming z trio',
      series: '3080',
      url: 'https://www.amazon.es/dp/B092CYHPDJ',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KGVL9JQ&Quantity.1=1',
      model: 'amp holo',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08KGVL9JQ',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HVV2P4Z&Quantity.1=1',
      model: 'trinity oc',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HVV2P4Z',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08K3PDL9K&Quantity.1=1',
      model: 'trinity oc',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08K3PDL9K',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HR55YB5&Quantity.1=1',
      model: 'xc3',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HR55YB5',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08VHB7598&Quantity.1=1',
      model: 'aorus master',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08VHB7598',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08M5ZFNTT&Quantity.1=1',
      model: 'aorus xtreme',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08M5ZFNTT',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08BL4QX75&Quantity.1=1',
      model: 'strix white',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08BL4QX75',
    },
    {
      brand: 'palit',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08QZR8S24&Quantity.1=1',
      model: 'gamerock oc',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08QZR8S24',
    },
    {
      brand: 'palit',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08MKSYYZ4&Quantity.1=1',
      model: 'gamerock',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08MKSYYZ4',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08P5W32PC&Quantity.1=1',
      model: 'aorus xtreme waterforce',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08P5W32PC',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08P5YGXMG&Quantity.1=1',
      model: 'aorus xtreme waterforce wb',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08P5YGXMG',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KHLDS72&Quantity.1=1',
      model: 'aorus master',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08KHLDS72',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08LTKLG5K&Quantity.1=1',
      model: 'suprim x',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08LTKLG5K',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HM4V2DH&Quantity.1=1',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HM4V2DH',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HGYXP4C&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HGYXP4C',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HJ9XFNM&Quantity.1=1',
      model: 'xc3 ultra',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HJ9XFNM',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HGBYWQ6&Quantity.1=1',
      model: 'ftw3',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HGBYWQ6',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HGLN78Q&Quantity.1=1',
      model: 'xc3',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HGLN78Q',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HH1BMQQ&Quantity.1=1',
      model: 'xc3 black',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HH1BMQQ',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HLZXHZY&Quantity.1=1',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HLZXHZY',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HHZVZ3N&Quantity.1=1',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HHZVZ3N',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HN37VQK&Quantity.1=1',
      model: 'tuf',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HN37VQK',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HN4DSTC&Quantity.1=1',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HN4DSTC',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HN6KYS3&Quantity.1=1',
      model: 'strix oc',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HN6KYS3',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HM4M621&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HM4M621',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HR1NPPQ&Quantity.1=1',
      model: 'trinity',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HR1NPPQ',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08166SLDF&Quantity.1=1',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.amazon.es/dp/B08166SLDF',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B0815XFSGK&Quantity.1=1',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.amazon.es/dp/B0815XFSGK',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08164VTWH&Quantity.1=1',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.amazon.es/dp/B08164VTWH',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B0815Y8J9N&Quantity.1=1',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.amazon.es/dp/B0815Y8J9N',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KKJ37F7&Quantity.1=1',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.es/dp/B08KKJ37F7',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KJF2D25&Quantity.1=1',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.es/dp/B08KJF2D25',
    },
    {
      brand: 'microsoft',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08H93ZRLL&Quantity.1=1',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.amazon.es/dp/B08H93ZRLL',
    },
    {
      brand: 'microsoft',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B087VM5XC6&Quantity.1=1',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.amazon.es/dp/B087VM5XC6',
    },
  ],
  name: 'amazon-es',
  country: 'ES',
};

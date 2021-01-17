import {Link, Store} from './store';

export const AmazonUk: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '£',
  labels: {
    captcha: {
      container: 'body',
      text: ['enter the characters you see below'],
    },
    inStock: {
      container: '#availability',
      text: ['in stock'],
    },
    maxPrice: {
      container: '#priceblock_ourprice',
    },
    outOfStock: [
      {
        container: '#availability',
        text: ['out of stock', 'unavailable'],
      },
      {
        container: '#backInStock',
        text: ['unavailable'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B0753R2TWC&Quantity.1=1',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.co.uk/dp/B0753R2TWC/',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08H95Y452&Quantity.1=1',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.co.uk/dp/B08H95Y452',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08H97NYGP&Quantity.1=1',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.co.uk/dp/B08H97NYGP',
    },
    {
      brand: 'microsoft',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08H93GKNJ&Quantity.1=1',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.amazon.co.uk/dp/B08H93GKNJ',
    },
    {
      brand: 'microsoft',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08GD9MNZB&Quantity.1=1',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.amazon.co.uk/dp/B08GD9MNZB',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url:
        'https://www.amazon.co.uk/AMD-Ryzen-5600X-Processor-Cache/dp/B08166SLDF',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url:
        'https://www.amazon.co.uk/AMD-Ryzen-5800X-Processor-Cache/dp/B0815XFSGK',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url:
        'https://www.amazon.co.uk/AMD-Ryzen-5900X-Processor-Cache/dp/B08164VTWH',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url:
        'https://www.amazon.co.uk/AMD-Ryzen-5950X-Processor-Cache/dp/B0815Y8J9N',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08HN7VVLJ&Quantity.1=1',
      model: 'strix',
      series: '3080',
      url: 'https://www.amazon.co.uk/dp/B08HN7VVLJ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08HN6KYS3&Quantity.1=1',
      model: 'strix oc',
      series: '3080',
      url: 'https://www.amazon.co.uk/dp/B08HN6KYS3',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08HN37VQK&Quantity.1=1',
      model: 'tuf',
      series: '3080',
      url: 'https://www.amazon.co.uk/dp/B08HN37VQK',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08HN4DSTC&Quantity.1=1',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.amazon.co.uk/dp/B08HN4DSTC',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08HGBYWQ6&Quantity.1=1',
      model: 'ftw3',
      series: '3080',
      url: 'https://www.amazon.co.uk/dp/B08HGBYWQ6',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08HGYXP4C&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.amazon.co.uk/dp/B08HGYXP4C',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08HGLN78Q&Quantity.1=1',
      model: 'xc3',
      series: '3080',
      url: 'https://www.amazon.co.uk/dp/B08HGLN78Q',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08HH1BMQQ&Quantity.1=1',
      model: 'xc3 black',
      series: '3080',
      url: 'https://www.amazon.co.uk/dp/B08HH1BMQQ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08HJ9XFNM&Quantity.1=1',
      model: 'xc3 ultra',
      series: '3080',
      url: 'https://www.amazon.co.uk/dp/B08HJ9XFNM',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08KHLDS72&Quantity.1=1',
      model: 'aorus master',
      series: '3080',
      url: 'https://www.amazon.co.uk/dp/B08KHLDS72',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08HHZVZ3N&Quantity.1=1',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.amazon.co.uk/dp/B08HHZVZ3N',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08HLZXHZY&Quantity.1=1',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.amazon.co.uk/dp/B08HLZXHZY',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08KH7RL89&Quantity.1=1',
      model: 'vision oc',
      series: '3080',
      url: 'https://www.amazon.co.uk/dp/B08KH7RL89',
    },
    {
      brand: 'inno3d',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08JD6QPXD&Quantity.1=1',
      model: 'twin x2 oc',
      series: '3080',
      url: 'https://www.amazon.co.uk/dp/B08JD6QPXD',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08HM4V2DH&Quantity.1=1',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.amazon.co.uk/dp/B08HM4V2DH',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08HM4M621&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.amazon.co.uk/dp/B08HM4M621',
    },
    {
      brand: 'palit',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08JCVWTQY&Quantity.1=1',
      model: 'gaming pro',
      series: '3080',
      url: 'https://www.amazon.co.uk/dp/B08JCVWTQY',
    },
    {
      brand: 'palit',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08JCKYYL8&Quantity.1=1',
      model: 'gaming pro oc',
      series: '3080',
      url: 'https://www.amazon.co.uk/dp/B08JCKYYL8',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08HR1NPPQ&Quantity.1=1',
      model: 'trinity',
      series: '3080',
      url: 'https://www.amazon.co.uk/dp/B08HR1NPPQ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08KHFZN9P&Quantity.1=1',
      model: 'dual',
      series: '3070',
      url: 'https://www.amazon.co.uk/dp/B08KHFZN9P',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08L8HPKR6&Quantity.1=1',
      model: 'dual',
      series: '3070',
      url: 'https://www.amazon.co.uk/dp/B08L8HPKR6',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08L8JNTXQ&Quantity.1=1',
      model: 'strix',
      series: '3070',
      url: 'https://www.amazon.co.uk/dp/B08L8JNTXQ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08L8KC1J7&Quantity.1=1',
      model: 'tuf',
      series: '3070',
      url: 'https://www.amazon.co.uk/dp/B08L8KC1J7',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08KY266MG&Quantity.1=1',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.amazon.co.uk/dp/B08KY266MG',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08KWN2LZG&Quantity.1=1',
      model: 'gaming',
      series: '3070',
      url: 'https://www.amazon.co.uk/dp/B08KWN2LZG',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08HBJB7YD&Quantity.1=1',
      model: 'xlr8 revel',
      series: '3070',
      url: 'https://www.amazon.co.uk/dp/B08HBJB7YD',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08HBF5L3K&Quantity.1=1',
      model: 'xlr8 uprising',
      series: '3070',
      url: 'https://www.amazon.co.uk/dp/B08HBF5L3K',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08KWPDXJZ&Quantity.1=1',
      model: 'ventus 2x oc',
      series: '3070',
      url: 'https://www.amazon.co.uk/dp/B08KWPDXJZ',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08KWLMZV4&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3070',
      url: 'https://www.amazon.co.uk/dp/B08KWLMZV4',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08LF32LJ6&Quantity.1=1',
      model: 'gaming',
      series: '3070',
      url: 'https://www.amazon.co.uk/dp/B08LF32LJ6',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08L8L71SM&Quantity.1=1',
      model: 'xc3 ultra',
      series: '3070',
      url: 'https://www.amazon.co.uk/dp/B08L8L71SM',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08L8L9TCZ&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3070',
      url: 'https://www.amazon.co.uk/dp/B08L8L9TCZ',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08KY266MG&Quantity.1=1',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.amazon.co.uk/dp/B08KY266MG',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08M13DXSZ&Quantity.1=1',
      model: 'vision oc',
      series: '3070',
      url: 'https://www.amazon.co.uk/dp/B08M13DXSZ',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08KXZV626&Quantity.1=1',
      model: 'eagle',
      series: '3070',
      url: 'https://www.amazon.co.uk/dp/B08KXZV626',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08P2DQ28S&Quantity.1=1',
      model: 'ventus 2x oc',
      series: '3060ti',
      url: 'https://www.amazon.co.uk/dp/B08P2DQ28S',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08NW2YJB2&Quantity.1=1',
      model: 'ventus 2x oc',
      series: '3060ti',
      url: 'https://www.amazon.co.uk/dp/B08NW2YJB2',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08P3XJLJJ&Quantity.1=1',
      model: 'twin edge',
      series: '3060ti',
      url: 'https://www.amazon.co.uk/dp/B08P3XJLJJ',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08P3V572B&Quantity.1=1',
      model: 'twin edge oc',
      series: '3060ti',
      url: 'https://www.amazon.co.uk/dp/B08P3V572B',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08P3BJ9Y8&Quantity.1=1',
      model: 'twin edge oc',
      series: '3060ti',
      url: 'https://www.amazon.co.uk/dp/B08P3BJ9Y8',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08P3JPX8P&Quantity.1=1',
      model: 'eagle',
      series: '3060ti',
      url: 'https://www.amazon.co.uk/dp/B08P3JPX8P',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08NW2X37Z&Quantity.1=1',
      model: 'gaming oc',
      series: '3060ti',
      url: 'https://www.amazon.co.uk/dp/B08NW2X37Z',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08NW528S1&Quantity.1=1',
      model: 'eagle oc',
      series: '3060ti',
      url: 'https://www.amazon.co.uk/dp/B08NW528S1',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08NW693LG&Quantity.1=1',
      model: 'xlr8 revel',
      series: '3060ti',
      url: 'https://www.amazon.co.uk/dp/B08NW693LG',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B083Z5P6TX&Quantity.1=1',
      model: 'tuf oc',
      series: '3060ti',
      url: 'https://www.amazon.co.uk/dp/B083Z5P6TX',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08NZ4G4T2&Quantity.1=1',
      model: 'tuf oc',
      series: '3060ti',
      url: 'https://www.amazon.co.uk/dp/B08NZ4G4T2',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08P2HBBLX&Quantity.1=1',
      model: 'dual oc',
      series: '3060ti',
      url: 'https://www.amazon.co.uk/dp/B08P2HBBLX',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08PDN36R3&Quantity.1=1',
      model: 'ftw3',
      series: '3060ti',
      url: 'https://www.amazon.co.uk/dp/B08PDN36R3',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08PDP837W&Quantity.1=1',
      model: 'xc gaming',
      series: '3060ti',
      url: 'https://www.amazon.co.uk/dp/B08PDP837W',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08PDMVPZ4&Quantity.1=1',
      model: 'xc3 black',
      series: '3060ti',
      url: 'https://www.amazon.co.uk/dp/B08PDMVPZ4',
    },
  ],
  name: 'amazon-uk',
};

import {Store} from './store';

export const AmazonSg: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['enter the characters you see below'],
    },
    captchaHandler: {
      challenge: '.a-row > img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: [
      {
        container: '#add-to-cart-button',
        text: ['add to cart'],
      },
      {
        container: '#buy-now-button',
        text: ['buy now'],
      },
    ],
    maxPrice: {
      container: '.a-text-price',
    },
  },
  links: [
    {
      brand: 'test:brand',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B083248S3B&Quantity.1=1',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.sg/dp/B083248S3B',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08P2HBBLX&Quantity.1=1',
      model: 'dual',
      series: '3060ti',
      url: 'https://www.amazon.sg/dp/B08P2HBBLX',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08NYP7KG6&Quantity.1=1',
      model: 'gaming oc',
      series: '3060ti',
      url: 'https://www.amazon.sg/dp/B08NYP7KG6',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08NYPLXPJ&Quantity.1=1',
      model: 'gaming oc pro',
      series: '3060ti',
      url: 'https://www.amazon.sg/dp/B08NYPLXPJ',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08NYNJ6RC&Quantity.1=1',
      model: 'eagle',
      series: '3060ti',
      url: 'https://www.amazon.sg/dp/B08NYNJ6RC',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B083Z5P6TX&Quantity.1=1',
      model: 'tuf',
      series: '3060ti',
      url: 'https://www.amazon.sg/dp/B083Z5P6TX',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08P2D3JSG&Quantity.1=1',
      model: 'gaming x trio',
      series: '3060ti',
      url: 'https://www.amazon.sg/dp/B08P2D3JSG',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08P2DQ28S&Quantity.1=1',
      model: 'ventus 2x',
      series: '3060ti',
      url: 'https://www.amazon.sg/dp/B08P2DQ28S',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08P3XJLJJ&Quantity.1=1',
      model: 'twin edge oc',
      series: '3060ti',
      url: 'https://www.amazon.sg/dp/B08P3XJLJJ',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08P3V572B&Quantity.1=1',
      model: 'twin edge',
      series: '3060ti',
      url: 'https://www.amazon.sg/dp/B08P3V572B',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08P2D1JZZ&Quantity.1=1',
      model: 'ko',
      series: '3060ti',
      url: 'https://www.amazon.sg/dp/B08P2D1JZZ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B083Z7TR8Z&Quantity.1=1',
      model: 'strix',
      series: '3060ti',
      url: 'https://www.amazon.sg/dp/B083Z7TR8Z',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08P2H5LW2&Quantity.1=1',
      model: 'ftw3',
      series: '3060ti',
      url: 'https://www.amazon.sg/dp/B08P2H5LW2',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08NYPKW1Z&Quantity.1=1',
      model: 'eagle oc',
      series: '3060ti',
      url: 'https://www.amazon.sg/dp/B08NYPKW1Z',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08L8LG4M3&Quantity.1=1',
      model: 'dual',
      series: '3070',
      url: 'https://www.amazon.sg/dp/B08L8LG4M3',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08L8HPKR6&Quantity.1=1',
      model: 'dual',
      series: '3070',
      url: 'https://www.amazon.sg/dp/B08L8HPKR6',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08LW46GH2&Quantity.1=1',
      model: 'xc3 black',
      series: '3070',
      url: 'https://www.amazon.sg/dp/B08LW46GH2',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08L8JNTXQ&Quantity.1=1',
      model: 'strix',
      series: '3070',
      url: 'https://www.amazon.sg/dp/B08L8JNTXQ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08L8KC1J7&Quantity.1=1',
      model: 'tuf',
      series: '3070',
      url: 'https://www.amazon.sg/dp/B08L8KC1J7',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08KY266MG&Quantity.1=1',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.amazon.sg/dp/B08KY266MG',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08KWN2LZG&Quantity.1=1',
      model: 'gaming',
      series: '3070',
      url: 'https://www.amazon.sg/dp/B08KWN2LZG',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HBJB7YD&Quantity.1=1',
      model: 'xlr8 revel',
      series: '3070',
      url: 'https://www.amazon.sg/dp/B08HBJB7YD',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HBF5L3K&Quantity.1=1',
      model: 'xlr8 uprising',
      series: '3070',
      url: 'https://www.amazon.sg/dp/B08HBF5L3K',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08KWPDXJZ&Quantity.1=1',
      model: 'ventus 2x oc',
      series: '3070',
      url: 'https://www.amazon.sg/dp/B08KWPDXJZ',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08KWLMZV4&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3070',
      url: 'https://www.amazon.sg/dp/B08KWLMZV4',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08LF1CWT2&Quantity.1=1',
      model: 'twin edge oc',
      series: '3070',
      url: 'https://www.amazon.sg/dp/B08LF1CWT2',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08LF32LJ6&Quantity.1=1',
      model: 'gaming',
      series: '3070',
      url: 'https://www.amazon.sg/dp/B08LF32LJ6',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08L8L71SM&Quantity.1=1',
      model: 'xc3 ultra',
      series: '3070',
      url: 'https://www.amazon.sg/dp/B08L8L71SM',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08L8L9TCZ&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3070',
      url: 'https://www.amazon.sg/dp/B08L8L9TCZ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08LW46GH2&Quantity.1=1',
      model: 'xc3 black',
      series: '3070',
      url: 'https://www.amazon.sg/dp/B08LW46GH2',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08KY266MG&Quantity.1=1',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.amazon.sg/dp/B08KY266MG',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08M13DXSZ&Quantity.1=1',
      model: 'vision oc',
      series: '3070',
      url: 'https://www.amazon.sg/dp/B08M13DXSZ',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08M4YFNX2&Quantity.1=1',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.amazon.sg/dp/B08M4YFNX2',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08KXZV626&Quantity.1=1',
      model: 'eagle',
      series: '3070',
      url: 'https://www.amazon.sg/dp/B08KXZV626',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08KY322TH&Quantity.1=1',
      model: 'eagle oc',
      series: '3070',
      url: 'https://www.amazon.sg/dp/B08KY322TH',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HBR7QBM&Quantity.1=1',
      model: 'xlr8 revel',
      series: '3080',
      url: 'https://www.amazon.sg/dp/B08HBR7QBM',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HBTJMLJ&Quantity.1=1',
      model: 'xlr8 revel',
      series: '3080',
      url: 'https://www.amazon.sg/dp/B08HBTJMLJ',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HR7SV3M&Quantity.1=1',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.amazon.sg/dp/B08HR7SV3M',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HR3Y5GQ&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.amazon.sg/dp/B08HR3Y5GQ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HR55YB5&Quantity.1=1',
      model: 'xc3 ultra',
      series: '3080',
      url: 'https://www.amazon.sg/dp/B08HR55YB5',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HR3DPGW&Quantity.1=1',
      model: 'ftw3',
      series: '3080',
      url: 'https://www.amazon.sg/dp/B08HR3DPGW',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HR4RJ3Q&Quantity.1=1',
      model: 'xc3',
      series: '3080',
      url: 'https://www.amazon.sg/dp/B08HR4RJ3Q',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HR6FMF3&Quantity.1=1',
      model: 'xc3 black',
      series: '3080',
      url: 'https://www.amazon.sg/dp/B08HR6FMF3',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HJTH61J&Quantity.1=1',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.amazon.sg/dp/B08HJTH61J',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HJS2JLJ&Quantity.1=1',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.amazon.sg/dp/B08HJS2JLJ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HH5WF97&Quantity.1=1',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.amazon.sg/dp/B08HH5WF97',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HHDP9DW&Quantity.1=1',
      model: 'tuf',
      series: '3080',
      url: 'https://www.amazon.sg/dp/B08HHDP9DW',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08J6F174Z&Quantity.1=1',
      model: 'strix oc',
      series: '3080',
      url: 'https://www.amazon.sg/dp/B08J6F174Z',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08J6GMWCQ&Quantity.1=1',
      model: 'strix oc',
      series: '3090',
      url: 'https://www.amazon.sg/dp/B08J6GMWCQ',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HR5SXPS&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.amazon.sg/dp/B08HR5SXPS',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HJNKT3P&Quantity.1=1',
      model: 'trinity',
      series: '3080',
      url: 'https://www.amazon.sg/dp/B08HJNKT3P',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HVV2P4Z&Quantity.1=1',
      model: 'trinity oc',
      series: '3080',
      url: 'https://www.amazon.sg/dp/B08HVV2P4Z',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HJQ182D&Quantity.1=1',
      model: 'trinity',
      series: '3090',
      url: 'https://www.amazon.sg/dp/B08HJQ182D',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HBQWBHH&Quantity.1=1',
      model: 'xlr8 revel',
      series: '3090',
      url: 'https://www.amazon.sg/dp/B08HBQWBHH',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HBVX53D&Quantity.1=1',
      model: 'xlr8 revel',
      series: '3090',
      url: 'https://www.amazon.sg/dp/B08HBVX53D',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HRBW6VB&Quantity.1=1',
      model: 'gaming x trio',
      series: '3090',
      url: 'https://www.amazon.sg/dp/B08HRBW6VB',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HR9D2JS&Quantity.1=1',
      model: 'ventus 3x',
      series: '3090',
      url: 'https://www.amazon.sg/dp/B08HR9D2JS',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08J5F3G18&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3090',
      url: 'https://www.amazon.sg/dp/B08J5F3G18',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HJRF2CN&Quantity.1=1',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.amazon.sg/dp/B08HJRF2CN',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HJPDJTY&Quantity.1=1',
      model: 'eagle oc',
      series: '3090',
      url: 'https://www.amazon.sg/dp/B08HJPDJTY',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HJGNJ81&Quantity.1=1',
      model: 'tuf oc',
      series: '3090',
      url: 'https://www.amazon.sg/dp/B08HJGNJ81',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HJLLF7G&Quantity.1=1',
      model: 'tuf oc',
      series: '3090',
      url: 'https://www.amazon.sg/dp/B08HJLLF7G',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08166SLDF&Quantity.1=1',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.amazon.sg/dp/B08166SLDF',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B0815XFSGK&Quantity.1=1',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.amazon.sg/dp/product/B0815XFSGK',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08164VTWH&Quantity.1=1',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.amazon.sg/dp/B08164VTWH',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B0815Y8J9N&Quantity.1=1',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.amazon.sg/dp/B0815Y8J9N',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08PHWJC8X&Quantity.1=1',
      model: 'amd reference',
      series: 'rx6900xt',
      url: 'https://www.amazon.sg/dp/B08PHWJC8X',
    },
    {
      brand: 'xfx',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08PDQJVD9&Quantity.1=1',
      model: 'amd reference',
      series: 'rx6900xt',
      url: 'https://www.amazon.sg/dp/B08PDQJVD9',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08NS4W2ZY&Quantity.1=1',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.amazon.sg/dp/B08NS4W2ZY',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08MVC76SR&Quantity.1=1',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.amazon.sg/dp/B08MVC76SR',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08NXXT7WN&Quantity.1=1',
      model: 'nitro+',
      series: 'rx6800xt',
      url: 'https://www.amazon.sg/dp/B08NXXT7WN',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08NXYNLMR&Quantity.1=1',
      model: 'pulse',
      series: 'rx6800xt',
      url: 'https://www.amazon.sg/dp/B08NXYNLMR',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08NXVNMPQ&Quantity.1=1',
      model: 'nitro+',
      series: 'rx6800xt',
      url: 'https://www.amazon.sg/dp/B08NXVNMPQ',
    },
    {
      brand: 'xfx',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08N6ZLX9B&Quantity.1=1',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.amazon.sg/dp/B08N6ZLX9B',
    },
    {
      brand: 'xfx',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08NX14LV1&Quantity.1=1',
      model: 'merc',
      series: 'rx6800xt',
      url: 'https://www.amazon.sg/dp/B08NX14LV1',
    },
    {
      brand: 'xfx',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08NN76VJD&Quantity.1=1',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.amazon.sg/dp/B08NN76VJD',
    },
    {
      brand: 'xfx',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08P5YFZCY&Quantity.1=1',
      model: 'merc',
      series: 'rx6800',
      url: 'https://www.amazon.sg/dp/B08P5YFZCY',
    },
    {
      brand: 'powercolor',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08MNZM5TK&Quantity.1=1',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.amazon.sg/dp/B08MNZM5TK',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08MVCLBWK&Quantity.1=1',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.amazon.sg/dp/B08MVCLBWK',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08NXZSPMY&Quantity.1=1',
      model: 'nitro+',
      series: 'rx6800',
      url: 'https://www.amazon.sg/dp/B08NXZSPMY',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08NXYBVDB&Quantity.1=1',
      model: 'pulse',
      series: 'rx6800',
      url: 'https://www.amazon.sg/dp/B08NXYBVDB',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08NWJ29NB&Quantity.1=1',
      model: 'strix oc',
      series: 'rx6800',
      url: 'https://www.amazon.sg/dp/B08NWJ29NB',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08P3YT3MY&Quantity.1=1',
      model: 'tuf oc',
      series: 'rx6800',
      url: 'https://www.amazon.sg/dp/B08P3YT3MY',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08NWHKGS9&Quantity.1=1',
      model: 'strix lc',
      series: 'rx6800xt',
      url: 'https://www.amazon.sg/dp/B08NWHKGS9',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08FC5L3RG&Quantity.1=1',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.sg/dp/B08FC5L3RG',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HNRSVQP&Quantity.1=1',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.sg/dp/B08HNRSVQP',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08FC6MR62&Quantity.1=1',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.sg/dp/B08FC6MR62',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HNSWWT7&Quantity.1=1',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.sg/dp/B08HNSWWT7',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.amazon.sg/dp/B08H75RTZ8',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.amazon.sg/dp/B08G9J44ZN',
    },
    {
      brand: 'corsair',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B07M63H81H&Quantity.1=1',
      model: '750 platinum',
      series: 'sf',
      url: 'https://www.amazon.sg/dp/B07M63H81H',
    },
    {
      brand: 'corsair',
      cartUrl:
        'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B07F84FJ1G&Quantity.1=1',
      model: '600 platinum',
      series: 'sf',
      url: 'https://www.amazon.sg/dp/B07F84FJ1G',
    },
  ],
  name: 'amazon-sg',
  country: 'SG',
};

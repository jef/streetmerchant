import {Store} from './store';

export const Amazon: Store = {
  backoffStatusCodes: [403, 429, 503],
  captchaDeterrent: {
    hardLinks: [
      'https://www.amazon.com/Amazon-Video/b/?ie=UTF8&node=2858778011&ref_=nav_cs_prime_video',
      'https://www.amazon.com/alm/storefront?almBrandId=VUZHIFdob2xlIEZvb2Rz&ref_=nav_cs_whole_foods_in_region',
      'https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb',
    ],
    searchTerms: ['goober', 'dungeons+and+dragons'],
    searchUrl: 'https://www.amazon.com/s?k=%%s&i=todays-deals&ref=nb_sb_noss_2',
  },
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
      container: '.a-offscreen',
    },
  },
  links: [
    {
      brand: 'test:brand',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B089KV4YYX&Quantity.1=1',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.com/dp/B089KV4YYX',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08P2HBBLX&Quantity.1=1',
      model: 'dual',
      series: '3060ti',
      url: 'https://www.amazon.com/dp/B08P2HBBLX',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NYP7KG6&Quantity.1=1',
      model: 'gaming oc',
      series: '3060ti',
      url: 'https://www.amazon.com/dp/B08NYP7KG6',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NYPLXPJ&Quantity.1=1',
      model: 'gaming oc pro',
      series: '3060ti',
      url: 'https://www.amazon.com/dp/B08NYPLXPJ',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NYNJ6RC&Quantity.1=1',
      model: 'eagle',
      series: '3060ti',
      url: 'https://www.amazon.com/dp/B08NYNJ6RC',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B083Z5P6TX&Quantity.1=1',
      model: 'tuf',
      series: '3060ti',
      url: 'https://www.amazon.com/dp/B083Z5P6TX',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08P2D3JSG&Quantity.1=1',
      model: 'gaming x trio',
      series: '3060ti',
      url: 'https://www.amazon.com/dp/B08P2D3JSG',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08P2DQ28S&Quantity.1=1',
      model: 'ventus 2x',
      series: '3060ti',
      url: 'https://www.amazon.com/dp/B08P2DQ28S',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08P3XJLJJ&Quantity.1=1',
      model: 'twin edge oc',
      series: '3060ti',
      url: 'https://www.amazon.com/dp/B08P3XJLJJ',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08P3V572B&Quantity.1=1',
      model: 'twin edge',
      series: '3060ti',
      url: 'https://www.amazon.com/dp/B08P3V572B',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08P2D1JZZ&Quantity.1=1',
      model: 'ko',
      series: '3060ti',
      url: 'https://www.amazon.com/dp/B08P2D1JZZ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B083Z7TR8Z&Quantity.1=1',
      model: 'strix',
      series: '3060ti',
      url: 'https://www.amazon.com/dp/B083Z7TR8Z',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08P2H5LW2&Quantity.1=1',
      model: 'ftw3',
      series: '3060ti',
      url: 'https://www.amazon.com/dp/B08P2H5LW2',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NYPKW1Z&Quantity.1=1',
      model: 'eagle oc',
      series: '3060ti',
      url: 'https://www.amazon.com/dp/B08NYPKW1Z',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08L8LG4M3&Quantity.1=1',
      model: 'dual',
      series: '3070',
      url: 'https://www.amazon.com/dp/B08L8LG4M3',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08L8HPKR6&Quantity.1=1',
      model: 'dual',
      series: '3070',
      url: 'https://www.amazon.com/dp/B08L8HPKR6',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08LW46GH2&Quantity.1=1',
      model: 'xc3 black',
      series: '3070',
      url: 'https://www.amazon.com/dp/B08LW46GH2',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08L8JNTXQ&Quantity.1=1',
      model: 'strix',
      series: '3070',
      url: 'https://www.amazon.com/dp/B08L8JNTXQ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08L8KC1J7&Quantity.1=1',
      model: 'tuf',
      series: '3070',
      url: 'https://www.amazon.com/dp/B08L8KC1J7',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08KY266MG&Quantity.1=1',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.amazon.com/dp/B08KY266MG',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08KWN2LZG&Quantity.1=1',
      model: 'gaming',
      series: '3070',
      url: 'https://www.amazon.com/dp/B08KWN2LZG',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBJB7YD&Quantity.1=1',
      model: 'xlr8 revel',
      series: '3070',
      url: 'https://www.amazon.com/dp/B08HBJB7YD',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBF5L3K&Quantity.1=1',
      model: 'xlr8 uprising',
      series: '3070',
      url: 'https://www.amazon.com/dp/B08HBF5L3K',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08KWPDXJZ&Quantity.1=1',
      model: 'ventus 2x oc',
      series: '3070',
      url: 'https://www.amazon.com/dp/B08KWPDXJZ',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08KWLMZV4&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3070',
      url: 'https://www.amazon.com/dp/B08KWLMZV4',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08LF1CWT2&Quantity.1=1',
      model: 'twin edge oc',
      series: '3070',
      url: 'https://www.amazon.com/dp/B08LF1CWT2',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08LF32LJ6&Quantity.1=1',
      model: 'gaming',
      series: '3070',
      url: 'https://www.amazon.com/dp/B08LF32LJ6',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08L8L71SM&Quantity.1=1',
      model: 'xc3 ultra',
      series: '3070',
      url: 'https://www.amazon.com/dp/B08L8L71SM',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08WM28PVH&Quantity.1=1',
      model: 'xc gaming',
      series: '3060',
      url: 'https://www.amazon.com/dp/B08WM28PVH',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08L8L9TCZ&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3070',
      url: 'https://www.amazon.com/dp/B08L8L9TCZ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08LW46GH2&Quantity.1=1',
      model: 'xc3 black',
      series: '3070',
      url: 'https://www.amazon.com/dp/B08LW46GH2',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08KY266MG&Quantity.1=1',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.amazon.com/dp/B08KY266MG',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08M13DXSZ&Quantity.1=1',
      model: 'vision oc',
      series: '3070',
      url: 'https://www.amazon.com/dp/B08M13DXSZ',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08M4YFNX2&Quantity.1=1',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.amazon.com/dp/B08M4YFNX2',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08KXZV626&Quantity.1=1',
      model: 'eagle',
      series: '3070',
      url: 'https://www.amazon.com/dp/B08KXZV626',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08KY322TH&Quantity.1=1',
      model: 'eagle oc',
      series: '3070',
      url: 'https://www.amazon.com/dp/B08KY322TH',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBR7QBM&Quantity.1=1',
      model: 'xlr8 revel',
      series: '3080',
      url: 'https://www.amazon.com/dp/B08HBR7QBM',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBTJMLJ&Quantity.1=1',
      model: 'xlr8 revel',
      series: '3080',
      url: 'https://www.amazon.com/dp/B08HBTJMLJ',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR7SV3M&Quantity.1=1',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.amazon.com/dp/B08HR7SV3M',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR3Y5GQ&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.amazon.com/dp/B08HR3Y5GQ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR55YB5&Quantity.1=1',
      model: 'xc3 ultra',
      series: '3080',
      url: 'https://www.amazon.com/dp/B08HR55YB5',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR3DPGW&Quantity.1=1',
      model: 'ftw3',
      series: '3080',
      url: 'https://www.amazon.com/dp/B08HR3DPGW',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR4RJ3Q&Quantity.1=1',
      model: 'xc3',
      series: '3080',
      url: 'https://www.amazon.com/dp/B08HR4RJ3Q',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR6FMF3&Quantity.1=1',
      model: 'xc3 black',
      series: '3080',
      url: 'https://www.amazon.com/dp/B08HR6FMF3',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJTH61J&Quantity.1=1',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.amazon.com/dp/B08HJTH61J',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJS2JLJ&Quantity.1=1',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.amazon.com/dp/B08HJS2JLJ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HH5WF97&Quantity.1=1',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.amazon.com/dp/B08HH5WF97',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HHDP9DW&Quantity.1=1',
      model: 'tuf',
      series: '3080',
      url: 'https://www.amazon.com/dp/B08HHDP9DW',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08J6F174Z&Quantity.1=1',
      model: 'strix oc',
      series: '3080',
      url: 'https://www.amazon.com/dp/B08J6F174Z',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08J6GMWCQ&Quantity.1=1',
      model: 'strix oc',
      series: '3090',
      url: 'https://www.amazon.com/dp/B08J6GMWCQ',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR5SXPS&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.amazon.com/dp/B08HR5SXPS',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJNKT3P&Quantity.1=1',
      model: 'trinity',
      series: '3080',
      url: 'https://www.amazon.com/dp/B08HJNKT3P',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HVV2P4Z&Quantity.1=1',
      model: 'trinity oc',
      series: '3080',
      url: 'https://www.amazon.com/dp/B08HVV2P4Z',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJQ182D&Quantity.1=1',
      model: 'trinity',
      series: '3090',
      url: 'https://www.amazon.com/dp/B08HJQ182D',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBQWBHH&Quantity.1=1',
      model: 'xlr8 revel',
      series: '3090',
      url: 'https://www.amazon.com/dp/B08HBQWBHH',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBVX53D&Quantity.1=1',
      model: 'xlr8 revel',
      series: '3090',
      url: 'https://www.amazon.com/dp/B08HBVX53D',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HRBW6VB&Quantity.1=1',
      model: 'gaming x trio',
      series: '3090',
      url: 'https://www.amazon.com/dp/B08HRBW6VB',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR9D2JS&Quantity.1=1',
      model: 'ventus 3x',
      series: '3090',
      url: 'https://www.amazon.com/dp/B08HR9D2JS',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08J5F3G18&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3090',
      url: 'https://www.amazon.com/dp/B08J5F3G18',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJRF2CN&Quantity.1=1',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.amazon.com/dp/B08HJRF2CN',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJPDJTY&Quantity.1=1',
      model: 'eagle oc',
      series: '3090',
      url: 'https://www.amazon.com/dp/B08HJPDJTY',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJGNJ81&Quantity.1=1',
      model: 'tuf oc',
      series: '3090',
      url: 'https://www.amazon.com/dp/B08HJGNJ81',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJLLF7G&Quantity.1=1',
      model: 'tuf oc',
      series: '3090',
      url: 'https://www.amazon.com/dp/B08HJLLF7G',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08166SLDF&Quantity.1=1',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.amazon.com/dp/B08166SLDF',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0815XFSGK&Quantity.1=1',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.amazon.com/dp/product/B0815XFSGK',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08164VTWH&Quantity.1=1',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.amazon.com/dp/B08164VTWH',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0815Y8J9N&Quantity.1=1',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.amazon.com/dp/B0815Y8J9N',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08PHWJC8X&Quantity.1=1',
      model: 'amd reference',
      series: 'rx6900xt',
      url: 'https://www.amazon.com/dp/B08PHWJC8X',
    },
    {
      brand: 'xfx',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08PDQJVD9&Quantity.1=1',
      model: 'amd reference',
      series: 'rx6900xt',
      url: 'https://www.amazon.com/dp/B08PDQJVD9',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NS4W2ZY&Quantity.1=1',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.amazon.com/dp/B08NS4W2ZY',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08MVC76SR&Quantity.1=1',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.amazon.com/dp/B08MVC76SR',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NXXT7WN&Quantity.1=1',
      model: 'nitro+',
      series: 'rx6800xt',
      url: 'https://www.amazon.com/dp/B08NXXT7WN',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NXYNLMR&Quantity.1=1',
      model: 'pulse',
      series: 'rx6800xt',
      url: 'https://www.amazon.com/dp/B08NXYNLMR',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NXVNMPQ&Quantity.1=1',
      model: 'nitro+',
      series: 'rx6800xt',
      url: 'https://www.amazon.com/dp/B08NXVNMPQ',
    },
    {
      brand: 'xfx',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08N6ZLX9B&Quantity.1=1',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.amazon.com/dp/B08N6ZLX9B',
    },
    {
      brand: 'xfx',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NX14LV1&Quantity.1=1',
      model: 'merc',
      series: 'rx6800xt',
      url: 'https://www.amazon.com/dp/B08NX14LV1',
    },
    {
      brand: 'xfx',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NN76VJD&Quantity.1=1',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.amazon.com/dp/B08NN76VJD',
    },
    {
      brand: 'xfx',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08P5YFZCY&Quantity.1=1',
      model: 'merc',
      series: 'rx6800',
      url: 'https://www.amazon.com/dp/B08P5YFZCY',
    },
    {
      brand: 'powercolor',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08MNZM5TK&Quantity.1=1',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.amazon.com/dp/B08MNZM5TK',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08MVCLBWK&Quantity.1=1',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.amazon.com/dp/B08MVCLBWK',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NXZSPMY&Quantity.1=1',
      model: 'nitro+',
      series: 'rx6800',
      url: 'https://www.amazon.com/dp/B08NXZSPMY',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NXYBVDB&Quantity.1=1',
      model: 'pulse',
      series: 'rx6800',
      url: 'https://www.amazon.com/dp/B08NXYBVDB',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NWJ29NB&Quantity.1=1',
      model: 'strix oc',
      series: 'rx6800',
      url: 'https://www.amazon.com/dp/B08NWJ29NB',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08P3YT3MY&Quantity.1=1',
      model: 'tuf oc',
      series: 'rx6800',
      url: 'https://www.amazon.com/dp/B08P3YT3MY',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NWHKGS9&Quantity.1=1',
      model: 'strix lc',
      series: 'rx6800xt',
      url: 'https://www.amazon.com/dp/B08NWHKGS9',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08FC5L3RG&Quantity.1=1',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['playstation 5 console'],
        },
      },
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.com/dp/B08FC5L3RG',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08FC6MR62&Quantity.1=1',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.com/dp/B08FC6MR62',
    },
    {
      brand: 'microsoft',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['Xbox Series X'],
        },
      },
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.amazon.com/dp/B08H75RTZ8',
    },
    {
      brand: 'microsoft',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['Xbox Series S'],
        },
      },
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.amazon.com/dp/B08G9J44ZN',
    },
    {
      brand: 'corsair',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07M63H81H&Quantity.1=1',
      model: '750 platinum',
      series: 'sf',
      url: 'https://www.amazon.com/dp/B07M63H81H',
    },
    {
      brand: 'corsair',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07F84FJ1G&Quantity.1=1',
      model: '600 platinum',
      series: 'sf',
      url: 'https://www.amazon.com/dp/B07F84FJ1G',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0BGJRHX1X&Quantity.1=1',
      model: 'trinity oc',
      series: '4090',
      url: 'https://www.amazon.com/dp/B0BGJRHX1X',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B09D1VF7F8&Quantity.1=1',
      model: 'amp extreme airo',
      series: '4090',
      url: 'https://www.amazon.com/dp/B09D1VF7F8',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0BGJQBW6Z&Quantity.1=1',
      model: 'trinity',
      series: '4090',
      url: 'https://www.amazon.com/dp/B0BGJQBW6Z',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0BGT61797&Quantity.1=1',
      model: 'strix oc',
      series: '4090',
      url: 'https://www.amazon.com/dp/B0BGT61797',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0BGV6LQYR&Quantity.1=1',
      model: 'tuf oc',
      series: '4090',
      url: 'https://www.amazon.com/dp/B0BGV6LQYR',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0BGP87RQ2&Quantity.1=1',
      model: 'aorus master',
      series: '4090',
      url: 'https://www.amazon.com/dp/B0BGP87RQ2',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0BGP8FGNZ&Quantity.1=1',
      model: 'gaming oc',
      series: '4090',
      url: 'https://www.amazon.com/dp/B0BGP8FGNZ',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0BGP9X18Q&Quantity.1=1',
      model: 'windforce',
      series: '4090',
      url: 'https://www.amazon.com/dp/B0BGP9X18Q',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0BG93V9GW&Quantity.1=1',
      model: 'xlr8 verto epic x',
      series: '4090',
      url: 'https://www.amazon.com/dp/B0BG93V9GW',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0BG94BM2G&Quantity.1=1',
      model: 'suprim liquid x',
      series: '4090',
      url: 'https://www.amazon.com/dp/B0BG94BM2G',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0BG92GY61&Quantity.1=1',
      model: 'suprim',
      series: '4090',
      url: 'https://www.amazon.com/dp/B0BG92GY61',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0BG94PS2F&Quantity.1=1',
      model: 'gaming x trio',
      series: '4090',
      url: 'https://www.amazon.com/dp/B0BG94PS2F',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0BG959RCF&Quantity.1=1',
      model: 'gaming trio',
      series: '4090',
      url: 'https://www.amazon.com/dp/B0BG959RCF',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0BKK1G181&Quantity.1=1',
      model: 'trinity',
      series: '4080-16g',
      url: 'https://www.amazon.com/dp/B0BKK1G181',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0BKK371SB&Quantity.1=1',
      model: 'trinity oc',
      series: '4080-16g',
      url: 'https://www.amazon.com/dp/B0BKK371SB',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0BLGHRCLX&Quantity.1=1',
      model: 'tuf',
      series: '4080-16g',
      url: 'https://www.amazon.com/dp/B0BLGHRCLX',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0BLGQHS53&Quantity.1=1',
      model: 'tuf oc',
      series: '4080-16g',
      url: 'https://www.amazon.com/dp/B0BLGQHS53',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0BL61TNG1&Quantity.1=1',
      model: 'ventus 3x',
      series: '4080-16g',
      url: 'https://www.amazon.com/dp/B0BL61TNG1',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0BKK3RFT6&Quantity.1=1',
      model: 'amp airo',
      series: '4080-16g',
      url: 'https://www.amazon.com/dp/B0BKK3RFT6',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0BMNBJ1DF&Quantity.1=1',
      model: 'eagle oc',
      series: '4080-16g',
      url: 'https://www.amazon.com/dp/B0BMNBJ1DF',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0BL668N1X&Quantity.1=1',
      model: 'gaming x trio',
      series: '4080-16g',
      url: 'https://www.amazon.com/dp/B0BL668N1X',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0BG95T5WD&Quantity.1=1',
      model: 'xlr8 verto epic x',
      series: '4080-16g',
      url: 'https://www.amazon.com/dp/B0BG95T5WD',
    },
    {
      brand: 'lianli',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0DFS88R2L&Quantity.1=1',
      model: 'a3 matx wd',
      series: 'a3-matx',
      url: 'https://www.amazon.com/dp/B0DFS88R2L',
    },
    {
      brand: 'sparkle',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0DNMH4KQM&Quantity.1=1',
      model: 'b580',
      series: 'arc',
      url: 'https://www.amazon.com/dp/B0DNMH4KQM',
    },
    {
      brand: 'intel',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0DPM9923G&Quantity.1=1',
      model: 'b580',
      series: 'arc',
      url: 'https://www.amazon.com/dp/B0DPM9923G',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0DTJF8YT4&Quantity.1=1',
      model: 'triple fan oc',
      series: '5090',
      url: 'https://www.amazon.com/dp/B0DTJF8YT4',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0DT7L98J1&Quantity.1=1',
      model: 'gaming trio',
      series: '5090',
      url: 'https://www.amazon.com/dp/B0DT7L98J1',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0DT7GMXHB&Quantity.1=1',
      model: 'windforce oc',
      series: '5090',
      url: 'https://www.amazon.com/dp/B0DT7GMXHB',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0DS2WQZ2M&Quantity.1=1',
      model: 'astral oc',
      series: '5090',
      url: 'https://www.amazon.com/dp/B0DS2WQZ2M',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0DV6MK91R&Quantity.1=1',
      model: 'solid oc',
      series: '5090',
      url: 'https://www.amazon.com/dp/B0DV6MK91R',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0DV64SCM8&Quantity.1=1',
      model: 'amp extreme infinity',
      series: '5090',
      url: 'https://www.amazon.com/dp/B0DV64SCM8',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0DTJFSSZG&Quantity.1=1',
      model: 'epic x oc',
      series: '5090',
      url: 'https://www.amazon.com/dp/B0DTJFSSZG',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0DT7JS6BG&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '5090',
      url: 'https://www.amazon.com/dp/B0DT7JS6BG',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0DT7L992Z&Quantity.1=1',
      model: 'vanguard soc launch edition',
      series: '5090',
      url: 'https://www.amazon.com/dp/B0DT7L992Z',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0DT7KGND2&Quantity.1=1',
      model: 'vanguard soc',
      series: '5090',
      url: 'https://www.amazon.com/dp/B0DT7KGND2',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0DT7JYTXQ&Quantity.1=1',
      model: 'suprim soc',
      series: '5090',
      url: 'https://www.amazon.com/dp/B0DT7JYTXQ',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0DT7K9VV3&Quantity.1=1',
      model: 'suprim liquid soc',
      series: '5090',
      url: 'https://www.amazon.com/dp/B0DT7K9VV3',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0DT7GBNWQ&Quantity.1=1',
      model: 'windforce oc',
      series: '5090',
      url: 'https://www.amazon.com/dp/B0DT7GBNWQ',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0DVCGBPL9&Quantity.1=1',
      model: 'aorus xtreme waterforce wb',
      series: '5090',
      url: 'https://www.amazon.com/dp/B0DVCGBPL9',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0DVCF7XDF&Quantity.1=1',
      model: 'aorus xtreme waterforce',
      series: '5090',
      url: 'https://www.amazon.com/dp/B0DVCF7XDF',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0DVCH9WJH&Quantity.1=1',
      model: 'master ice',
      series: '5090',
      url: 'https://www.amazon.com/dp/B0DVCH9WJH',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0DT7GHQMD&Quantity.1=1',
      model: 'windforce',
      series: '5090',
      url: 'https://www.amazon.com/dp/B0DT7GHQMD',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0DS2X13PH&Quantity.1=1',
      model: 'tuf gaming oc',
      series: '5090',
      url: 'https://www.amazon.com/dp/B0DS2X13PH',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0DS2Z8854&Quantity.1=1',
      model: 'tuf',
      series: '5090',
      url: 'https://www.amazon.com/dp/B0DS2Z8854',
    },
  ],
  name: 'amazon',
  country: 'US',
};

/* Copy Paste Template

Copy the product id from the amazon URL.
For example if you have https://www.amazon.com/gp/product/B08M9R8HQY just copy B08M9R8HQY.
Paste it after ASIN.1= in the cartUrl and at the end of /dp/ in the url.

{
  brand: '',
  cartUrl:
    'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=&Quantity.1=1',
  model: '',
  series: '',
  url: 'https://www.amazon.com/dp/',
},
*/

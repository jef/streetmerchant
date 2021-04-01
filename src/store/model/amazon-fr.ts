import {Store} from './store';

export const AmazonFr: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['entrez les caractères que vous voyez ci-dessous'],
    },
    inStock: {
      container: '#desktop_buybox',
      text: ['ajouter au panier'],
    },
    maxPrice: {
      container: '#priceblock_ourprice',
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
      brand: 'sony',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08H93ZRK9&asin=B08H93ZRK9&quantity=1&buyNow=1',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['sony playstation 5'],
        },
      },
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.fr/dp/B08H93ZRK9',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08H98GVK8&asin=B08H98GVK8&quantity=1&buyNow=1',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['sony playstation 5'],
        },
      },
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.fr/dp/B08H98GVK8',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08WHML7GL&asin=B08WHML7GL&quantity=1&buyNow=1',
      model: 'gaming x',
      series: '3060',
      url: 'https://www.amazon.fr/dp/B08WHML7GL',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08WH4RK2C&asin=B08WH4RK2C&quantity=1&buyNow=1',
      model: 'gaming x trio',
      series: '3060',
      url: 'https://www.amazon.fr/dp/B08WH4RK2C',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08WRP83LN&asin=B08WRP83LN&quantity=1&buyNow=1',
      model: 'ventus 3x oc',
      series: '3060',
      url: 'https://www.amazon.fr/dp/B08WRP83LN',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08WHJFYM8&asin=B08WHJFYM8&quantity=1&buyNow=1',
      model: 'ventus 2x oc',
      series: '3060',
      url: 'https://www.amazon.fr/dp/B08WHJFYM8',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08WRK84PS&asin=B08WRK84PS&quantity=1&buyNow=1',
      model: 'twin edge oc',
      series: '3060',
      url: 'https://www.amazon.fr/dp/B08WRK84PS',
    },
    {
    brand: 'evga',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08XQWR62V&asin=B08XQWR62V&quantity=1&buyNow=1',
      model: 'xc gaming',
      series: '3060',
      url: 'https://www.amazon.fr/dp/B08XQWR62V',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08WHJPBFX&asin=B08WHJPBFX&quantity=1&buyNow=1',
      model: 'tuf oc',
      series: '3060',
      url: 'https://www.amazon.fr/dp/B08WHJPBFX',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08WS1R9CM&asin=B08WS1R9CM&quantity=1&buyNow=1',
      model: 'uprising',
      series: '3060',
      url: 'https://www.amazon.fr/dp/B08WS1R9CM',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08WB6R2K4&asin=B08WB6R2K4&quantity=1&buyNow=1',
      model: 'gaming oc',
      series: '3060',
      url: 'https://www.amazon.fr/dp/B08WB6R2K4',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08WBB3ZMJ&asin=B08WBB3ZMJ&quantity=1&buyNow=1',
      model: 'eagle oc',
      series: '3060',
      url: 'https://www.amazon.fr/dp/B08WBB3ZMJ',
    },
    {
      brand: 'palit',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08WRBF83Y&asin=B08WRBF83Y&quantity=1&buyNow=1',
      model: 'dual oc',
      series: '3060',
      url: 'https://www.amazon.fr/dp/B08WRBF83Y',
    },
    {
      brand: 'palit',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08WR6DRQQ&asin=B08WR6DRQQ&quantity=1&buyNow=1',
      model: 'dual',
      series: '3060',
      url: 'https://www.amazon.fr/dp/B08WR6DRQQ',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08P2DQ28S&asin=B08P2DQ28S&quantity=1&buyNow=1',
      model: 'ventus 2x oc',
      series: '3060ti',
      url: 'https://www.amazon.fr/dp/B08P2DQ28S',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08NW2YJB2&asin=B08NW2YJB2&quantity=1&buyNow=1',
      model: 'ventus 2x oc',
      series: '3060ti',
      url: 'https://www.amazon.fr/dp/B08NW2YJB2',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08VH7BD47&asin=B08VH7BD47&quantity=1&buyNow=1',
      model: 'gaming x',
      series: '3060ti',
      url: 'https://www.amazon.fr/dp/B08VH7BD47',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08NW693LG&asin=B08NW693LG&quantity=1&buyNow=1',
      model: 'xlr8 revel',
      series: '3060ti',
      url: 'https://www.amazon.fr/dp/B08NW693LG',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08NW5HNYW&asin=B08NW5HNYW&quantity=1&buyNow=1',
      model: 'uprising',
      series: '3060ti',
      url: 'https://www.amazon.fr/dp/B08NW5HNYW',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08PDMVPZ4&asin=B08PDMVPZ4&quantity=1&buyNow=1',
      model: 'xc3 black',
      series: '3060ti',
      url: 'https://www.amazon.fr/dp/B08PDMVPZ4',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08PDP837W&asin=B08PDP837W&quantity=1&buyNow=1',
      model: 'xc gaming',
      series: '3060ti',
      url: 'https://www.amazon.fr/dp/B08PDP837W',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08PDN36R3&asin=B08PDN36R3&quantity=1&buyNow=1',
      model: 'ftw3',
      series: '3060ti',
      url: 'https://www.amazon.fr/dp/B08PDN36R3',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08P3JPX8P&asin=B08P3JPX8P&quantity=1&buyNow=1',
      model: 'eagle',
      series: '3060ti',
      url: 'https://www.amazon.fr/dp/B08P3JPX8P',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08NW2X37Z&asin=B08NW2X37Z&quantity=1&buyNow=1',
      model: 'gaming oc',
      series: '3060ti',
      url: 'https://www.amazon.fr/dp/B08NW2X37Z',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08NW528S1&asin=B08NW528S1&quantity=1&buyNow=1',
      model: 'eagle oc',
      series: '3060ti',
      url: 'https://www.amazon.fr/dp/B08NW528S1',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08P3XJLJJ&asin=B08P3XJLJJ&quantity=1&buyNow=1',
      model: 'twin edge',
      series: '3060ti',
      url: 'https://www.amazon.fr/dp/B08P3XJLJJ',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08P3V572B&asin=B08P3V572B&quantity=1&buyNow=1',
      model: 'twin edge oc',
      series: '3060ti',
      url: 'https://www.amazon.fr/dp/B08P3V572B',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08P3BJ9Y8&asin=B08P3BJ9Y8&quantity=1&buyNow=1',
      model: 'twin edge oc',
      series: '3060ti',
      url: 'https://www.amazon.fr/dp/B08P3BJ9Y8',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08P2HBBLX&asin=B08P2HBBLX&quantity=1&buyNow=1',
      model: 'dual oc',
      series: '3060ti',
      url: 'https://www.amazon.fr/dp/B08P2HBBLX',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B083Z5P6TX&asin=B083Z5P6TX&quantity=1&buyNow=1',
      model: 'tuf oc',
      series: '3060ti',
      url: 'https://www.amazon.fr/dp/B083Z5P6TX',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08KWPDXJZ&asin=B08KWPDXJZ&quantity=1&buyNow=1',
      model: 'ventus 2x oc',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08KWPDXJZ',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08LNQTSCT&asin=B08LNQTSCT&quantity=1&buyNow=1',
      model: 'ventus 2x oc',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08LNQTSCT',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08KWLMZV4&asin=B08KWLMZV4&quantity=1&buyNow=1',
      model: 'ventus 3x oc',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08KWLMZV4',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08L6PCZTR&asin=B08L6PCZTR&quantity=1&buyNow=1',
      model: 'ventus 3x oc',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08L6PCZTR',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08KWN2LZG&asin=B08KWN2LZG&quantity=1&buyNow=1',
      model: 'gaming x trio',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08KWN2LZG',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08LNPPCWJ&asin=B08LNPPCWJ&quantity=1&buyNow=1',
      model: 'gaming x trio',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08LNPPCWJ',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HBJB7YD&asin=B08HBJB7YD&quantity=1&buyNow=1',
      model: 'xlr8 revel',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08HBJB7YD',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HBF5L3K&asin=B08HBF5L3K&quantity=1&buyNow=1',
      model: 'uprising',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08HBF5L3K',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08L8L71SM&asin=B08L8L71SM&quantity=1&buyNow=1',
      model: 'xc3 ultra',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08L8L71SM',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08L8L9TCZ&asin=B08L8L9TCZ&quantity=1&buyNow=1',
      model: 'ftw3 ultra',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08L8L9TCZ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08L3QCZKZ&asin=B08L3QCZKZ&quantity=1&buyNow=1',
      model: 'xc3 black',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08L3QCZKZ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08L3QZP7W&asin=B08L3QZP7W&quantity=1&buyNow=1',
      model: 'xc3',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08L3QZP7W',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08L3Q41SM&asin=B08L3Q41SM&quantity=1&buyNow=1',
      model: 'xc3 ultra',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08L3Q41SM',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08KY266MG&asin=B08KY266MG&quantity=1&buyNow=1',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08KY266MG',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08M13DXSZ&asin=B08M13DXSZ&quantity=1&buyNow=1',
      model: 'vision oc',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08M13DXSZ',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08KXZV626&asin=B08KXZV626&quantity=1&buyNow=1',
      model: 'eagle',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08KXZV626',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08KHL21CV&asin=B08KHL21CV&quantity=1&buyNow=1',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08KHL21CV',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08KHL2J5X&asin=B08KHL2J5X&quantity=1&buyNow=1',
      model: 'eagle oc',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08KHL2J5X',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08LF32LJ6&asin=B08LF32LJ6&quantity=1&buyNow=1',
      model: 'gaming',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08LF32LJ6',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HRBR7K9&asin=B08HRBR7K9&quantity=1&buyNow=1',
      model: 'twin edge',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08HRBR7K9',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08LBVNKT1&asin=B08LBVNKT1&quantity=1&buyNow=1',
      model: 'twin edge oc',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08LBVNKT1',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08KHFZN9P&asin=B08KHFZN9P&quantity=1&buyNow=1',
      model: 'dual oc',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08KHFZN9P',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08L8HPKR6&asin=B08L8HPKR6&quantity=1&buyNow=1',
      model: 'dual',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08L8HPKR6',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08L8JNTXQ&asin=B08L8JNTXQ&quantity=1&buyNow=1',
      model: 'strix',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08L8JNTXQ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08L8KC1J7&asin=B08L8KC1J7&quantity=1&buyNow=1',
      model: 'tuf',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08L8KC1J7',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HSJ1622&asin=B08HSJ1622&quantity=1&buyNow=1',
      model: 'dual',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08HSJ1622',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HT7PR9Y&asin=B08HT7PR9Y&quantity=1&buyNow=1',
      model: 'strix',
      series: '3070',
      url: 'https://www.amazon.fr/dp/B08HT7PR9Y',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HM4V2DH&asin=B08HM4V2DH&quantity=1&buyNow=1',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HM4V2DH',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HM4M621&asin=B08HM4M621&quantity=1&buyNow=1',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HM4M621',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HGBYWQ6&asin=B08HGBYWQ6&quantity=1&buyNow=1',
      model: 'ftw3',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HGBYWQ6',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HGYXP4C&asin=B08HGYXP4C&quantity=1&buyNow=1',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HGYXP4C',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HGLN78Q&asin=B08HGLN78Q&quantity=1&buyNow=1',
      model: 'xc3',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HGLN78Q',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HH1BMQQ&asin=B08HH1BMQQ&quantity=1&buyNow=1',
      model: 'xc3 black',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HH1BMQQ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HJ9XFNM&asin=B08HJ9XFNM&quantity=1&buyNow=1',
      model: 'xc3 ultra',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HJ9XFNM',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08KHLDS72&asin=B08KHLDS72&quantity=1&buyNow=1',
      model: 'aorus master',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08KHLDS72',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HHZVZ3N&asin=B08HHZVZ3N&quantity=1&buyNow=1',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HHZVZ3N',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HLZXHZY&asin=B08HLZXHZY&quantity=1&buyNow=1',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HLZXHZY',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08KH7RL89&asin=B08KH7RL89&quantity=1&buyNow=1',
      model: 'vision oc',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08KH7RL89',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HR1NPPQ&asin=B08HR1NPPQ&quantity=1&buyNow=1',
      model: 'trinity',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HR1NPPQ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HN7VVLJ&asin=B08HN7VVLJ&quantity=1&buyNow=1',
      model: 'strix',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HN7VVLJ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HN6KYS3&asin=B08HN6KYS3&quantity=1&buyNow=1',
      model: 'strix oc',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HN6KYS3',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HN37VQK&asin=B08HN37VQK&quantity=1&buyNow=1',
      model: 'tuf',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HN37VQK',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HN4DSTC&asin=B08HN4DSTC&quantity=1&buyNow=1',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HN4DSTC',
    },
    {
      brand: 'palit',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08JCVWTQY&asin=B08JCVWTQY&quantity=1&buyNow=1',
      model: 'gaming pro',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08JCVWTQY',
    },
    {
      brand: 'palit',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08JCKYYL8&asin=B08JCKYYL8&quantity=1&buyNow=1',
      model: 'gaming pro oc',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08JCKYYL8',
    },
    {
      brand: 'inno3d',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08JD6QPXD&asin=B08JD6QPXD&quantity=1&buyNow=1',
      model: 'twin x2 oc',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08JD6QPXD',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HRBW6VB&asin=B08HRBW6VB&quantity=1&buyNow=1',
      model: 'gaming x trio',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HRBW6VB',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HM661YM&asin=B08HM661YM&quantity=1&buyNow=1',
      model: 'ventus 3x oc',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HM661YM',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HGFNPJQ&asin=B08HGFNPJQ&quantity=1&buyNow=1',
      model: 'ftw3',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HGFNPJQ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08J5NMDP7&asin=B08J5NMDP7&quantity=1&buyNow=1',
      model: 'ftw3',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08J5NMDP7',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HGS1SXH&asin=B08HGS1SXH&quantity=1&buyNow=1',
      model: 'ftw3 ultra',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HGS1SXH',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HGZ4XSZ&asin=B08HGZ4XSZ&quantity=1&buyNow=1',
      model: 'xc3',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HGZ4XSZ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HGKQ527&asin=B08HGKQ527&quantity=1&buyNow=1',
      model: 'xc3 black',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HGKQ527',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HGTNDL4&asin=B08HGTNDL4&quantity=1&buyNow=1',
      model: 'xc3 ultra',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HGTNDL4',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08KH7R4FQ&asin=B08KH7R4FQ&quantity=1&buyNow=1',
      model: 'aorus master',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08KH7R4FQ',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HJPDJTY&B08HJPDJTYasin=&quantity=1&buyNow=1',
      model: 'eagle oc',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HJPDJTY',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08KHKDTSJ&asin=B08KHKDTSJ&quantity=1&buyNow=1',
      model: 'turbo',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08KHKDTSJ',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HJRF2CN&asin=B08HJRF2CN&quantity=1&buyNow=1',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HJRF2CN',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HJQ182D&asin=B08HJQ182D&quantity=1&buyNow=1',
      model: 'trinity',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HJQ182D',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HN642LY&asin=B08HN642LY&quantity=1&buyNow=1',
      model: 'strix',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HN642LY',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HN51T8Q&asin=B08HN51T8Q&quantity=1&buyNow=1',
      model: 'strix oc',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HN51T8Q',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HN4FLFJ&asin=B08HN4FLFJ&quantity=1&buyNow=1',
      model: 'tuf',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HN4FLFJ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HN5B8FJ&asin=B08HN5B8FJ&quantity=1&buyNow=1',
      model: 'tuf oc',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HN5B8FJ',
    },
    {
      brand: 'palit',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08JQQ1VD1&asin=B08JQQ1VD1&quantity=1&buyNow=1',
      model: 'gaming pro',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08JQQ1VD1',
    },
    {
      brand: 'nvidia',
      cartUrl:
        'https://www.amazon.fr/gp/checkoutportal/enter-checkout.html/?discoveredAsins.1=B08HR6ZBYJ&asin=B08HR6ZBYJ&quantity=1&buyNow=1',
      model: 'founders edition',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HR6ZBYJ',
    },
  ],
  name: 'amazon-fr',
};

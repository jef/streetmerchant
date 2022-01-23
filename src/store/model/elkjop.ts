import {Store} from './store';

export const Elkjop: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: 'kr.',
  labels: {
    inStock: {
      container:
        '#product-detail-wrapper > div.col.any-5-12.M-2-5.information > div.buy-button-container.align-left.any-1-1.table-btn > div > div > div.product-price-button-wrap > div > div > span > span',
      text: ['Legg i handlevogn'],
    },
    maxPrice: {
      container: '.product-price-container > span:nth-child(1)',
    },
    outOfStock: {
      container:
        '#product-detail-wrapper > div.col.any-5-12.M-2-5.information > div.buy-button-container.align-left.any-1-1.table-btn > div > div > div.product-price-button-wrap > div > div > span > span',
      text: ['Ikke tilgjengelig'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=218425&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/mobil-og-gps/mobiltelefon/296618/oneplus-9-pro-5g-smarttelefon-12256gb-stellar-black',
    },
    {
      brand: 'pny',
      model: 'xlr8 epic x',
      series: '3090',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=215370&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/215370/pny-rtx-3090-24gb-xlr8-gaming-epic-x-rgb-3-fan-2-7slot',
    },
    {
      brand: 'evga',
      model: 'xc3',
      series: '3080',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=218419&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/218419/evga-geforce-rtx-3080-xc3',
    },
    {
      brand: 'evga',
      model: 'xc3 black',
      series: '3080',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=218425&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/218425/evga-geforce-rtx-3080-xc3-black',
    },
    {
      brand: 'evga',
      model: 'ftw3',
      series: '3080',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=220655&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/220655/evga-geforce-rtx-3080-ftw3',
    },
    {
      brand: 'palit',
      model: 'gaming pro oc',
      series: '3080',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=222470&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/222470/geforce-rtx-3080-gamingpro-oc',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=215364&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/215364/asus-geforce-rtx-3080-10gb-gddr6x-tuf-gaming',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=216109&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/216109/gigabyte-geforce-rtx-3080-10gb-eagle-oc',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=216111&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/216111/gigabyte-geforce-rtx-3080-10gb-gaming-oc',
    },
    {
      brand: 'gainward',
      model: 'phoenix gs',
      series: '3080',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=222467&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/222467/geforce-rtx-3080-phoenix-gs',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3080',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=220656&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/220656/evga-geforce-rtx-3080-ftw3-ultra',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3090',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=224760&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/224760/evga-geforce-rtx-3090-ftw3-ultra-24gb',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3090',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=224771&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/224771/evga-geforce-rtx-3090-xc3-ultra-24gb',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3060ti',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=255553&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/255553/asus-geforce-rtx-3060-ti-rog-strix-oc-8gb-gddr6-grafikkort',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3060ti',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=255555&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/255555/asus-geforce-rtx-3060-ti-8gb-gddr6-tuf-oc-grafikkort',
    },
    {
      brand: 'pny',
      model: 'xlr8 gaming',
      series: '3060',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=292394&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/292394/pny-vcg306012sfxppb-video-card',
    },
    {
      brand: 'pny',
      model: 'xlr8 epic x',
      series: '3070',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=215360&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/215360/pny-rtx-3070-8gb-xlr8-gaming-epic-x-rgb-3-fan-2-7slot',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3070',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=243900&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/243900/evga-geforce-rtx-3070-xc3-ultra',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3070',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=228205&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/228205/asus-geforce-rtx-3070-8gb-gddr6-rog-strix-oc-gaming',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3070',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=228206&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/228206/asus-tuf-gaming-geforce-rtx-3070-oc-edition-8gb-gddr6',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3090',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=215362&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/215362/asus-geforce-rtx-3090-24gb-gddr6x-tuf-oc-gaming',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3080',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=275719&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/275719/msi-geforce-rtx-3080-suprim-x-10-gb-grafikkort',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3060',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=293925&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/293925/msi-rtx-3060-gaming-x-trio-12gb-graphics-card',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3070',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=275718&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/275718/msi-geforce-rtx-3070-suprim-x-8-gb-grafikkort',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3090',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=216110&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/216110/gigabyte-geforce-rtx-3090-24gb-gaming-oc',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3070',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=252773&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/252773/gigabyte-geforce-rtx-3070-vision-oc-8gb',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3070',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=252824&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/252824/gigabyte-geforce-rtx-3070-aorus-master-8gb',
    },
    {
      brand: 'gainward',
      model: 'phantom gs',
      series: '3090',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=266679&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/266679/geforce-rtx-3090-phantom gs',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3060',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=293922&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/293922/asus-geforce-rtx-3060-tuf-12gb-graphics-card',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=228244&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/prosessor-cpu/228244/amd-ryzen-9-5950x-prosessor-boks',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=228245&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/prosessor-cpu/228245/amd-ryzen-7-5800x-prosessor-boks',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=345102&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/gaming/spillkonsoll/playstation-konsoller/345102/playstation-5-digital-edition-2021',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=345097&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/gaming/spillkonsoll/playstation-konsoller/345097/playstation-5-2021',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=218668&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/gaming/spillkonsoll/xbox-konsoller/218668/xbox-series-s-512gb-hvit',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=218667&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/gaming/spillkonsoll/xbox-konsoller/218667/xbox-series-x-1-tb-sort',
    },
  ],
  name: 'elkjop',
};

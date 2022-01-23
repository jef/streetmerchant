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
//3060ti
//3060
    {
      brand: 'pny',
      model: 'uprising',
      series: '3060',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=278391&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/278391/pny-geforce-rtx-3060-12gb-uprising-dual-fan-edition-grafikkort',
    },
//3070

//3070ti
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3070ti',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=326826&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/326826/msi-geforce-rtx-3070-ti-gaming-x-trio-8g-grafikkort',
    },

//3080

//3080ti
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3080ti',
      cartUrl:
        'https://www.elkjop.no/INTERSHOP/web/WFS/store-elkjop-Site/no_NO/-/NOK/ViewCart-AddProductByAjax?SKU=325858&Quantity=1&AddToCart=true',
      url: 'https://www.elkjop.no/product/data/pc-komponenter/grafikkort/325858/evga-geforce-rtx-3080-ti-ftw3-ultra-grafikkort-12-gb',
    },
    //CPU
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
    //console
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

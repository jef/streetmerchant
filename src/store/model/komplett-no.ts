import {Store} from './store';

export const KomplettNO: Store = {
  currency: 'kr.',
  labels: {

    inStock: [
      {
        container:
        '#MainContent > div.no-bs-center.maincontent-container.container.main-body.ignore-gutter-xs.product-page-boxes > div.responsive-content-wrapper > div.product-page > section > div > section > div > div.stockStatus-completeGrid > div > div',
      text: ['På lager'],
      },
      {
        container: '#MainContent > div.no-bs-center.maincontent-container.container.main-body.ignore-gutter-xs.product-page-boxes > div.responsive-content-wrapper > div.product-page > section > div > section > div > div.stockStatus-completeGrid > div > div',
        text: ['instock'],
      },
    ],
    maxPrice: {
      container: '#MainContent > div.no-bs-center.maincontent-container.container.main-body.ignore-gutter-xs.product-page-boxes > div.responsive-content-wrapper > div.product-page > section > div > section > div > div.priceFreight-completeGrid > div.product-price > span',
    },
    outOfStock: {
      container:
        '#MainContent > div.no-bs-center.maincontent-container.container.main-body.ignore-gutter-xs.product-page-boxes > div.responsive-content-wrapper > div.product-page > section > div > section > div > div.stockStatus-completeGrid > div > div > span',
      text: ['Ikke på lager.'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.komplett.no/product/1168415/',
    },
    {
      brand: 'gainward',
      model: 'phantom gs',
      series: '3080',
      url: 'https://www.komplett.no/product/1171801/',
    },
    {
      brand: 'palit',
      model: 'gaming pro oc',
      series: '3080',
      url: 'https://www.komplett.no/product/1168425/',
    },
    {
      brand: 'palit',
      model: 'gamerock oc',
      series: '3080',
      url: 'https://www.komplett.no/product/1171797/',
    },
    {
      brand: 'palit',
      model: 'gamerock',
      series: '3080',
      url: 'https://www.komplett.no/product/1171800/',
    },
// 3080ti
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3080ti',
      url: 'https://www.komplett.no/product/1185413',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080ti',
      url: 'https://www.komplett.no/product/1187631',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080ti',
      url: 'https://www.komplett.no/product/1186665',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3080ti',
      url: 'https://www.komplett.no/product/1186666',
    },
    {
      brand: 'palit',
      model: 'gamerock oc',
      series: '3080ti',
      url: 'https://www.komplett.no/product/1187973',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '3080ti',
      url: 'https://www.komplett.no/product/1186872',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3080ti',
      url: 'https://www.komplett.no/product/1186871',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3080ti',
      url: 'https://www.komplett.no/product/1187967',
    },
    //3090
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce',
      series: '3090',
      url: 'https://www.komplett.no/product/1175706/',
    },
    {
      brand: 'gainward',
      model: 'phantom gs',
      series: '3090',
      url: 'https://www.komplett.no/product/1171799/',
    },
    {
      brand: 'gainward',
      model: 'phoenix gs',
      series: '3090',
      url: 'https://www.komplett.no/product/1168420/',
    },
    {
      brand: 'gainward',
      model: 'phoenix',
      series: '3090',
      url: 'https://www.komplett.no/product/1168126/',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3090',
      url: 'https://www.komplett.no/product/1168378/',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3090',
      url: 'https://www.komplett.no/product/1168127/',
    },
    {
      brand: 'palit',
      model: 'gamerock oc',
      series: '3090',
      url: 'https://www.komplett.no/product/1171795/',
    },
    {
      brand: 'palit',
      model: 'gamerock oc',
      series: '3090',
      url: 'https://www.komplett.no/product/1171795/',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3090',
      url: 'https://www.komplett.no/product/1168412',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.komplett.no/product/1168414',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3090',
      url: 'https://www.komplett.no/product/1168438',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3090',
      url: 'https://www.komplett.no/product/1168437',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3090',
      url: 'https://www.komplett.no/product/1168359',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3060',
      url: 'https://www.komplett.no/product/1178869/',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3060',
      url: 'https://www.komplett.no/product/1178866/',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3060',
      url: 'https://www.komplett.no/product/1179439/',
    },
    {
      brand: 'msi',
      model: 'ventus 2x oc',
      series: '3060',
      url: 'https://www.komplett.no/product/1179437/',
    },
    {
      brand: 'msi',
      model: 'ventus 2x',
      series: '3060',
      url: 'https://www.komplett.no/product/1179436/',
    },
    {
      brand: 'msi',
      model: 'ventus 3x',
      series: '3060',
      url: 'https://www.komplett.no/product/1179440/',
    },
    {
      brand: 'zotac',
      model: 'twin edge',
      series: '3060',
      url: 'https://www.komplett.no/product/1178552/',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060',
      url: 'https://www.komplett.no/product/1180868/',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3060',
      url: 'https://www.komplett.no/product/1180869/',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3060',
      url: 'https://www.komplett.no/product/1178553/',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3060',
      url: 'https://www.komplett.no/product/1180406/',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3060',
      url: 'https://www.komplett.no/product/1180407/',
    },
    {
      brand: 'gainward',
      model: 'phoenix',
      series: '3060',
      url: 'https://www.komplett.no/product/1180411/',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3060',
      url: 'https://www.komplett.no/product/1178867/',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3060',
      url: 'https://www.komplett.no/product/1178870/',
    },
    {
      brand: 'palit',
      model: 'dual oc',
      series: '3060',
      url: 'https://www.komplett.no/product/1180408/',
    },
    {
      brand: 'gainward',
      model: 'phoenix',
      series: '3060',
      url: 'https://www.komplett.no/product/1180413/',
    },
    {
      brand: 'gainward',
      model: 'phantom gs',
      series: '3060',
      url: 'https://www.komplett.no/product/1180412/',
    },
    {
      brand: 'asus',
      model: 'dual',
      series: '3070',
      url: 'https://www.komplett.no/product/1168752/',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3070',
      url: 'https://www.komplett.no/product/1171368/',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3070',
      url: 'https://www.komplett.no/product/1177553/',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc white',
      series: '3070',
      url: 'https://www.komplett.no/product/1175619/',
    },
    {
      brand: 'asus',
      model: 'strix oc white',
      series: '3070',
      url: 'https://www.komplett.no/product/1176244/',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3070',
      url: 'https://www.komplett.no/product/1173939/',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3070',
      url: 'https://www.komplett.no/product/1173938/',
    },
    {
      brand: 'gainward',
      model: 'phoenix gs',
      series: '3070',
      url: 'https://www.komplett.no/product/1171796/',
    },
    {
      brand: 'palit',
      model: 'gaming pro oc',
      series: '3070',
      url: 'https://www.komplett.no/product/1172252/',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3070',
      url: 'https://www.komplett.no/product/1175239/',
    },
    {
      brand: 'msi',
      model: 'suprim',
      series: '3070',
      url: 'https://www.komplett.no/product/1176458/',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3070',
      url: 'https://www.komplett.no/product/1171385/',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3070',
      url: 'https://www.komplett.no/product/1176459/',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3070',
      url: 'https://www.komplett.no/product/1168375/',
    },
    {
      brand: 'msi',
      model: 'ventus 2x oc',
      series: '3070',
      url: 'https://www.komplett.no/product/1168376/',
    },
    {
      brand: 'zotac',
      model: 'twin edge',
      series: '3070',
      url: 'https://www.komplett.no/product/1168399/',
    },
    {
      brand: 'asus',
      model: 'strix white',
      series: '3070',
      url: 'https://www.komplett.no/product/1176246/',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3070',
      url: 'https://www.komplett.no/product/1174190/',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3070',
      url: 'https://www.komplett.no/product/1171367/',
    },
    {
      brand: 'gainward',
      model: 'phantom gs',
      series: '3070',
      url: 'https://www.komplett.no/product/1174400/',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.komplett.no/product/1171366/',
    },
    {
      brand: 'asus',
      model: 'ekwb',
      series: '3070',
      url: 'https://www.komplett.no/product/1176557/',
    },
    {
      brand: 'palit',
      model: 'gamerock oc',
      series: '3070',
      url: 'https://www.komplett.no/product/1174399/',
    },
    {
      brand: 'gainward',
      model: 'phantom gs',
      series: '3070',
      url: 'https://www.komplett.no/product/1174397/',
    },
    {
      brand: 'palit',
      model: 'gamerock',
      series: '3070',
      url: 'https://www.komplett.no/product/1174396/',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3070',
      url: 'https://www.komplett.no/product/1170422/',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3070',
      url: 'https://www.komplett.no/product/1168754/',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1174210/',
    },
    {
      brand: 'msi',
      model: 'gaming x',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1178723/',
    },
    {
      brand: 'gainward',
      model: 'phoenix gs',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1174392/',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1174509/',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1174206/',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1174508/',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1174275/',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1174511/',
    },
    {
      brand: 'zotac',
      model: 'twin edge',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1174276/',
    },
    {
      brand: 'gainward',
      model: 'ghost oc',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1174403/',
    },
    {
      brand: 'asus',
      model: 'dual oc',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1174211/',
    },
    {
      brand: 'palit',
      model: 'dual',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1174401/',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1175541/',
    },
    {
      brand: 'asus',
      model: 'dual oc',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1177556/',
    },
    {
      brand: 'msi',
      model: 'ventus 2x',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1176385/',
    },
    {
      brand: 'asus',
      model: 'dual',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1177557/',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1174395/',
    },
    {
      brand: 'palit',
      model: 'dual oc',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1174394/',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1174208/',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1174209/',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc pro',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1174510/',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1174512/',
    },
    {
      brand: 'asus',
      model: 'dual',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1174207/',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1175535/',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3060',
      url: 'https://www.komplett.no/product/1182236/',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3060',
      url: 'https://www.komplett.no/product/1180870/',
    },
    {
      brand: 'msi',
      model: 'gaming x',
      series: '3060',
      url: 'https://www.komplett.no/product/1179438/',
    },
    {
      brand: 'msi',
      model: 'dual',
      series: '3060',
      url: 'https://www.komplett.no/product/1179340/',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.komplett.no/product/1172141/',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.komplett.no/product/1172139/',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.komplett.no/product/1161553/',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.komplett.no/product/1111557/',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.komplett.no/product/1168808/',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.komplett.no/product/1132588',
    },
  ],
  name: 'komplett-no',
};

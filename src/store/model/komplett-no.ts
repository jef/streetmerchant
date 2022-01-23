import {Store} from './store';

export const KomplettNO: Store = {
  backoffStatusCodes: [403, 429, 503],
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
    //3080
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
    //3060
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
      brand: 'palit',
      model: 'gaming pro',
      series: '3060',
      url: 'https://www.komplett.no/product/1180406/',
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
      model: 'phantom gs',
      series: '3060',
      url: 'https://www.komplett.no/product/1180412/',
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
    //3060ti
    {
      brand: 'gainward',
      model: 'phoenix gs',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1174392/',
    },
    {
      brand: 'gainward',
      model: 'ghost oc',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1174403/',
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
      brand: 'msi',
      model: 'gaming z trio',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1188601/',
    },
    {
      brand: 'asus',
      model: 'dual oc',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1189236/',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1188582/',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc pro',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1191614/',
    },
    {
      brand: 'asus',
      model: 'dual mini oc',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1188489/',
    },
    {
      brand: 'msi',
      model: 'gaming x',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1188597/',
    },
    {
      brand: 'zotac',
      model: 'amp white',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1192350/',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1189235/',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1188488/',
    },
    {
      brand: 'asus',
      model: 'dual mini',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1188483/',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1191608/',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1191611/',
    },
    {
      brand: 'msi',
      model: 'ventus 2x',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1192799/',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1189238/',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060ti',
      url: 'https://www.komplett.no/product/1191604/',
    },
    //3070
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
      brand: 'gainward',
      model: 'phantom gs',
      series: '3070',
      url: 'https://www.komplett.no/product/1174400/',
    },
    {
      brand: 'palit',
      model: 'gamerock oc',
      series: '3070',
      url: 'https://www.komplett.no/product/1174399/',
    },
    {
      brand: 'palit',
      model: 'gamerock',
      series: '3070',
      url: 'https://www.komplett.no/product/1174396/',
    },
    //rx6800xt
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: 'rx6800xt',
      url: 'https://www.komplett.no/product/1175823/',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: 'rx6800xt',
      url: 'https://www.komplett.no/product/1175705/',
    },
    {
      brand: 'xfx',
      model: 'merc',
      series: 'rx6800xt',
      url: 'https://www.komplett.no/product/1178543/',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: 'rx6800xt',
      url: 'https://www.komplett.no/product/1174514/',
    },
    {
      brand: 'asus',
      model: 'strix oc lc',
      series: 'rx6800xt',
      url: 'https://www.komplett.no/product/1174515/',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: 'rx6800xt',
      url: 'https://www.komplett.no/product/1191691/',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: 'rx6800xt',
      url: 'https://www.komplett.no/product/1180986/',
    },
    {
      brand: 'asrock',
      model: 'taichi x oc',
      series: 'rx6800xt',
      url: 'https://www.komplett.no/product/1182665/',
    },
    {
      brand: 'asrock',
      model: 'phantom gaming oc',
      series: 'rx6800xt',
      url: 'https://www.komplett.no/product/1182670/',
    },
    //cpu
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
    //console
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

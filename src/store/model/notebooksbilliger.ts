import {Store} from './store';

export const Notebooksbilliger: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.warehouse',
      text: [
        'sofort ab lager',
        'verfügbarkeit: ca. 2-4 werktage',
        'verfügbarkeit: ca. 5-10 werktage',
      ],
    },
    maxPrice: {
      container:
        'form[name="cart_quantity"]  span[class*="product-price__regular"]',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.warehouse',
        text: ['liefertermin noch unbestimmt'],
      },
      {
        container: '.soldOut',
        text: ['dieses produkt ist leider ausverkauft.'],
      },
      {
        container: '.just_inStore',
        text: [
          'dieses Produkt kann nur in unseren unten genannten Stores gekauft werden.',
        ],
      },
      {
        container: '#product_error_text',
        text: ['leider ist dieser artikel nicht mehr verfügbar.'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.notebooksbilliger.de/gainward+geforce+rtx+2070+super+phoenix+v1+grafikkarte+656238',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3060',
      url: 'https://www.notebooksbilliger.de/asus+rog+strix+geforce+rtx+3060+oc+12g+grafikkarte+702541',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060',
      url: 'https://www.notebooksbilliger.de/gigabyte+geforce+rtx+3060+gaming+oc+12gb+gddr6+grafikkarte+700421',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3060',
      url: 'https://www.notebooksbilliger.de/gigabyte+geforce+rtx+3060+eagle+oc+12gb+gddr6+grafikkarte+700422',
    },
    {
      brand: 'inno3d',
      model: 'twin x2 oc',
      series: '3060',
      url: 'https://www.notebooksbilliger.de/inno3d+geforce+rtx+3060+12gb+twin+x2+oc+701384',
    },
    {
      brand: 'inno3d',
      model: 'ichill x3',
      series: '3060',
      url: 'https://www.notebooksbilliger.de/inno3d+geforce+rtx+3060+12gb+ichill+x3+red+701383?',
    },
    {
      brand: 'palit',
      model: 'dual',
      series: '3060',
      url: 'https://www.notebooksbilliger.de/palit+geforce+rtx+3060+12gb+dual+702252',
    },
    {
      brand: 'palit',
      model: 'dual oc',
      series: '3060',
      url: 'https://www.notebooksbilliger.de/palit+geforce+rtx+3060+12gb+dual+oc+gddr6+702251',
    },
    {
      brand: 'pny',
      model: 'xlr8 gaming',
      series: '3060',
      url: 'https://www.notebooksbilliger.de/pny+geforce+rtx+3060+12gb+xlr8+gaming+revel+epic+x+rgb+single+701885',
    },
    {
      brand: 'zotac',
      model: 'amp white',
      series: '3060',
      url: 'https://www.notebooksbilliger.de/zotac+geforce+rtx+3060+amp+white+12gb+gddr6+grafikkarte+701867',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3060',
      url: 'https://www.notebooksbilliger.de/zotac+gaming+geforce+rtx+3060+twin+edge+oc+12gb+grafikkarte+700378',
    },
    {
      brand: 'inno3d',
      model: 'ichill x3',
      series: '3070',
      url: 'https://www.notebooksbilliger.de/inno3d+geforce+rtx+3070+ichill+x3+grafikkarte+684162',
    },
    {
      brand: 'inno3d',
      model: 'twin x2',
      series: '3070',
      url: 'https://www.notebooksbilliger.de/inno3d+geforce+rtx+3070+twin+x2+grafikkarte+685496',
    },
    {
      brand: 'inno3d',
      model: 'twin x2 oc',
      series: '3070',
      url: 'https://www.notebooksbilliger.de/inno3d+geforce+rtx+3070+twin+x2+oc+grafikkarte+685500',
    },
    {
      brand: 'gainward',
      model: 'phoenix',
      series: '3070',
      url: 'https://www.notebooksbilliger.de/gainward+geforce+rtx+3070+phoenix+8gb+gddr6+grafikkarte+685073',
    },
    {
      brand: 'gainward',
      model: 'phoenix gs',
      series: '3070',
      url: 'https://www.notebooksbilliger.de/gainward+geforce+rtx+3070+phoenix+gs+8gb+gddr6+grafikkarte+681575',
    },
    {
      brand: 'pny',
      model: 'uprising',
      series: '3070',
      url: 'https://www.notebooksbilliger.de/pny+geforce+rtx+3070+8gb+uprising+dual+fan+edition+grafikkarte+685520',
    },
    {
      brand: 'pny',
      model: 'xlr8 revel',
      series: '3070',
      url: 'https://www.notebooksbilliger.de/pny+geforce+rtx+3070+8gb+xlr8+gaming+revel+epic+x+rgb+685560',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3070',
      url: 'https://www.notebooksbilliger.de/asus+tuf+gaming+geforce+rtx+3070+8gb+grafikkarte+685524',
    },
    {
      brand: 'zotac',
      model: 'twin edge',
      series: '3070',
      url: 'https://www.notebooksbilliger.de/zotac+gaming+geforce+rtx+3070+twin+edge+8gb+gddr6+grafikkarte+677561',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3070',
      url: 'https://www.notebooksbilliger.de/zotac+gaming+geforce+rtx+3070+twin+edge+oc+8gb+gddr6+grafikkarte+684216',
    },
    {
      brand: 'gainward',
      model: 'phoenix gs',
      series: '3080',
      url: 'https://www.notebooksbilliger.de/gainward+geforce+rtx+3080+phoenix+gs+10gb+gddr6x+grafikkarte+677618',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.notebooksbilliger.de/gigabyte+geforce+rtx+3080+eagle+oc+10gb+gddr6x+grafikkarte+677501',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.notebooksbilliger.de/gigabyte+geforce+rtx+3080+gaming+oc+10gb+gddr6x+grafikkarte+677499',
    },
    {
      brand: 'inno3d',
      model: 'ichill x3',
      series: '3080',
      url: 'https://www.notebooksbilliger.de/inno3d+geforce+rtx+3080+ichill+x3+grafikkarte+678588',
    },
    {
      brand: 'inno3d',
      model: 'twin x2 oc',
      series: '3080',
      url: 'https://www.notebooksbilliger.de/inno3d+geforce+rtx+3080+twin+x2+oc+grafikkarte+679190',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.notebooksbilliger.de/msi+geforce+rtx+3080+gaming+x+trio+10g+grafikkarte+678527',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3080',
      url: 'https://www.notebooksbilliger.de/palit+geforce+rtx+3080+gamingpro+10gb+gddr6x+grafikkarte+677609',
    },
    {
      brand: 'palit',
      model: 'gaming pro oc',
      series: '3080',
      url: 'https://www.notebooksbilliger.de/palit+geforce+rtx+3080+gamingpro+oc+10gb+gddr6x+grafikkarte+677606',
    },
    {
      brand: 'pny',
      model: 'xlr8 revel',
      series: '3080',
      url: 'https://www.notebooksbilliger.de/pny+geforce+rtx+3080+xlr8+gaming+10gb+gddr6x+grafikkarte+677407',
    },
    {
      brand: 'pny',
      model: 'xlr8 revel',
      series: '3080',
      url: 'https://www.notebooksbilliger.de/pny+geforce+rtx+3080+10gb+xlr8+gaming+revel+epic+x+grafikkarte+677412',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3090',
      url: 'https://www.notebooksbilliger.de/asus+rog+strix+geforce+rtx+3090+24gb+gddr6x+grafikkarte+677343',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3090',
      url: 'https://www.notebooksbilliger.de/asus+rog+strix+geforce+rtx+3090+oc+24gb+gddr6x+grafikkarte+677308',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3090',
      url: 'https://www.notebooksbilliger.de/gigabyte+geforce+rtx+3090+master+24gb+gddr6x+grafikkarte+683868',
    },
    {
      brand: 'palit',
      model: 'gaming pro oc',
      series: '3090',
      url: 'https://www.notebooksbilliger.de/palit+geforce+rtx+3090+gamingpro+oc+24gb+gddr6x+grafikkarte+677599',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3090',
      url: 'https://www.notebooksbilliger.de/zotac+gaming+geforce+rtx+3090+trinity+24gb+gddr6x+grafikkarte+677550',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.notebooksbilliger.de/amd+ryzen+5+5600x+cpu+684022',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.notebooksbilliger.de/amd+ryzen+ryzen+7+5800x+cpu+684018',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.notebooksbilliger.de/amd+ryzen+9+5900x+cpu+684032',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.notebooksbilliger.de/amd+ryzen+9+5950x+cpu+684033',
    },
  ],
  name: 'notebooksbilliger',
  country: 'DE',
};

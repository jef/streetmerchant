import {Store} from './store';

export const AlternateFr: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '#add-to-cart-form > div:nth-child(2) > div > span > b',
      text: ['En stock'],
    },
    maxPrice: {
      container: '.price > span:nth-child(1)',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '#product-top-right > div:nth-child(4) > div > div',
        text: ['Momentanément indisponible'],
      },
      {
        container: '#content > div:nth-child(1) > div > h1',
        text: ["L'article·n'est·pas·disponible·pour·le·moment."],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.alternate.fr/html/product/1679012',
    },
    {
      brand: 'gigabyte',
      model: 'aorus elite',
      series: '3060',
      url: 'https://www.alternate.fr/html/product/1757856',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060',
      url: 'https://www.alternate.fr/html/product/1723538',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3060',
      url: 'https://www.alternate.fr/html/product/1763772',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3060',
      url: 'https://www.alternate.fr/html/product/1726410',
    },
    {
      brand: 'zotac',
      model: 'amp white',
      series: '3060',
      url: 'https://www.alternate.fr/html/product/1715300',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3070ti',
      url: 'https://www.alternate.fr/html/product/1756202',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3070ti',
      url: 'https://www.alternate.fr/html/product/1762622',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3070',
      url: 'https://www.alternate.fr/html/product/1688810',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3070ti',
      url: 'https://www.alternate.fr/html/product/1759465',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3070',
      url: 'https://www.alternate.fr/html/product/1688819',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3070ti',
      url: 'https://www.alternate.fr/html/product/1761662',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3070',
      url: 'https://www.alternate.fr/html/product/1702466',
    },
    {
      brand: 'msi',
      model: 'gaming z trio',
      series: '3080',
      url: 'https://www.alternate.fr/html/product/1758119',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3080ti',
      url: 'https://www.alternate.fr/html/product/1752971',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3080ti',
      url: 'https://www.alternate.fr/html/product/1752975',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce',
      series: '3090',
      url: 'https://www.alternate.fr/html/product/1694043',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.alternate.fr/html/product/1672749',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3090',
      url: 'https://www.alternate.fr/html/product/1691159',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3090',
      url: 'https://www.alternate.fr/html/product/1672341',
    },
    {
      brand: 'palit',
      model: 'gamerock',
      series: '3090',
      url: 'https://www.alternate.fr/html/product/1688678',
    },
    {
      brand: 'xfx',
      model: 'qick',
      series: 'rx6700xt',
      url: 'https://www.alternate.fr/html/product/1746956',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: 'rx6700xt',
      url: 'https://www.alternate.fr/html/product/1723391',
    },
    {
      brand: 'gigabyte',
      model: 'aorus',
      series: 'rx6700xt',
      url: 'https://www.alternate.fr/html/product/17411817',
    },
    {
      brand: 'xfx',
      model: 'merc',
      series: 'rx6700xt',
      url: 'https://www.alternate.fr/html/product/1730305',
    },
    {
      brand: 'msi',
      model: 'gaming x',
      series: 'rx6700xt',
      url: 'https://www.alternate.fr/html/product/1730741',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: 'rx6800xt',
      url: 'https://www.alternate.fr/html/product/1705712',
    },
    {
      brand: 'xfx',
      model: 'merc',
      series: 'rx6900xt',
      url: 'https://www.alternate.fr/html/product/1759745',
    },
    {
      brand: 'xfx',
      model: 'merc',
      series: 'rx6900xt',
      url: 'https://www.alternate.fr/html/product/1713052',
    },
    {
      brand: 'msi',
      model: 'gaming trio',
      series: 'rx6900xt',
      url: 'https://www.alternate.fr/html/product/1751166',
    },
  ],
  name: 'alternate-fr',
  country: 'FR',
};

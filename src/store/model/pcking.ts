import {Store} from './store';

export const PCKing: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.es_order_box-article_detail',
      text: ['sofort lieferbar [Versand]', 'abholbereit [PC-KING]'],
    },
    maxPrice: {
      container: 'div.es_product_price-article_detail > b',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.es_order_box-article_detail',
        text: ['nicht lieferbar'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=12608766&s_supplier_aid=12608766',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3080',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=14794745',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3080',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=10&s_supplier_aid=14794746',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=14794754',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=14794753',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3080',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=14796022',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=14794747',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=14794750',
    },
    {
      brand: 'inno3d',
      model: 'ichill x3',
      series: '3080',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=14772705',
    },
    {
      brand: 'inno3d',
      model: 'ichill x4',
      series: '3080',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=14772706',
    },
    {
      brand: 'inno3d',
      model: 'twin x2 oc',
      series: '3080',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=14794752',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=14794720',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3080',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=14794721',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3090',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=15140741',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3090',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=15140740',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3090',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=15125015',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3090',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=15140739',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3090',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=15152168',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3090',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=15140898',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=15140899',
    },
    {
      brand: 'gigabyte',
      model: 'turbo',
      series: '3090',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=15145820',
    },
    {
      brand: 'inno3d',
      model: 'ichill x3',
      series: '3090',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=14796780',
    },
    {
      brand: 'inno3d',
      model: 'ichill x4',
      series: '3090',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=15121636',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3090',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=14753078',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=15188115',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=15188116',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=15188118',
    },
  ],
  name: 'pcking',
};

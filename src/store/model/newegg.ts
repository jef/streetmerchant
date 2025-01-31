import fetch from 'node-fetch';
import {Store} from './store';

export const Newegg: Store = {
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['are you a human?'],
    },
    inStock: [
      {
        container: '.product-buy',
        text: ['add to cart'],
      },
      {
        container: '.loading-text',
        text: ['add to cart'],
      },
    ],
    maxPrice: {
      container: '.price-current',
    },
    outOfStock: [
      {
        container: '.product-inventory',
        text: [' out of stock.'],
      },
      {
        container: '.product-flag',
        text: ['out of stock '],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.newegg.com/western-digital-blue-500gb/p/N82E16820250087?Item=N82E16820250087',
      itemNumber: '20-250-087',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137601',
      itemNumber: '14-137-601',
      model: 'ventus 3x oc',
      series: '3070',
      url: 'https://www.newegg.com/msi-geforce-rtx-3070-rtx-3070-ventus-3x-oc/p/N82E16814137601',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137602',
      itemNumber: '14-137-602',
      model: 'ventus 2x oc',
      series: '3070',
      url: 'https://www.newegg.com/msi-geforce-rtx-3070-rtx-3070-ventus-2x-oc/p/N82E16814137602',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137603',
      itemNumber: '14-137-603',
      model: 'gaming x trio',
      series: '3070',
      url: 'https://www.newegg.com/msi-geforce-rtx-3070-rtx-3070-gaming-x-trio/p/N82E16814137603',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137605',
      itemNumber: '14-137-605',
      model: 'ventus 2x',
      series: '3070',
      url: 'https://www.newegg.com/msi-geforce-rtx-3070-rtx-3070-gaming-x-trio/p/N82E16814137605',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932360',
      itemNumber: '14-932-360',
      model: 'vision oc',
      series: '3070',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3070-gv-n3070vision-oc-8gd/p/N82E16814932360',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126459',
      itemNumber: '14-126-459',
      model: 'dual oc',
      series: '3070',
      url: 'https://www.newegg.com/asus-geforce-rtx-3070-dual-rtx3070-o8g/p/N82E16814126459',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126458',
      itemNumber: '14-126-458',
      model: 'strix',
      series: '3070',
      url: 'https://www.newegg.com/asus-geforce-rtx-3070-rog-strix-rtx3070-o8g-gaming/p/N82E16814126458',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500501',
      itemNumber: '14-500-501',
      model: 'twin edge',
      series: '3070',
      url: 'https://www.newegg.com/zotac-geforce-rtx-3070-zt-a30700e-10p/p/N82E16814500501',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500505',
      itemNumber: '14-500-505',
      model: 'twin edge oc',
      series: '3070',
      url: 'https://www.newegg.com/zotac-geforce-rtx-3070-zt-a30700h-10p/p/N82E16814500505',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932342',
      itemNumber: '14-932-342',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3070-gv-n3070gaming-oc-8gd/p/N82E16814932342',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487532',
      itemNumber: '14-487-532',
      model: 'ftw3 ultra',
      series: '3070',
      url: 'https://www.newegg.com/evga-geforce-rtx-3070-08g-p5-3767-kr/p/N82E16814487532',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487530',
      itemNumber: '14-487-530',
      model: 'xc3 ultra',
      series: '3070',
      url: 'https://www.newegg.com/evga-geforce-rtx-3070-08g-p5-3755-kr/p/N82E16814487530',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487528',
      itemNumber: '14-487-528',
      model: 'xc3 black',
      series: '3070',
      url: 'https://www.newegg.com/evga-geforce-rtx-3070-08g-p5-3751-kr/p/N82E16814487528',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932343',
      itemNumber: '14-932-343',
      model: 'eagle oc',
      series: '3070',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3070-gv-n3070eagle-oc-8gd/p/N82E16814932343',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932344',
      itemNumber: '14-932-344',
      model: 'eagle',
      series: '3070',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3070-gv-n3070eagle-8gd/p/N82E16814932344',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487529',
      itemNumber: '14-487-529',
      model: 'xc3',
      series: '3070',
      url: 'https://www.newegg.com/evga-geforce-rtx-3070-08g-p5-3753-kr/p/N82E16814487529',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126460',
      itemNumber: '14-126-460',
      model: 'dual',
      series: '3070',
      url: 'https://www.newegg.com/asus-geforce-rtx-3070-dual-rtx3070-8g/p/N82E16814126460',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126466',
      itemNumber: '14-126-466',
      model: 'gaming',
      series: '3070',
      url: 'https://www.newegg.com/asus-geforce-rtx-3070-ko-rtx3070-o8g-gamin/p/N82E16814126466',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932359',
      itemNumber: '14-932-359',
      model: 'aorus master',
      series: '3070',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3070-gv-n3070aorus-m-8gd/p/N82E16814932359',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487531',
      itemNumber: '14-487-531',
      model: 'ftw3',
      series: '3070',
      url: 'https://www.newegg.com/evga-geforce-rtx-3070-08g-p5-3765-kr/p/N82E16814487531',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126461',
      itemNumber: '14-126-461',
      model: 'tuf oc',
      series: '3070',
      url: 'https://www.newegg.com/asus-geforce-rtx-3070-tuf-rtx3070-o8g-gaming/p/N82E16814126461',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814133811',
      itemNumber: '14-133-811',
      model: 'gaming',
      series: '3070',
      url: 'https://www.newegg.com/pny-geforce-rtx-3070-vcg30708tfxppb/p/N82E16814133811',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126453',
      itemNumber: '14-126-453',
      model: 'tuf',
      series: '3080',
      url: 'https://www.newegg.com/asus-geforce-rtx-3080-tuf-rtx3080-10g-gaming/p/N82E16814126453',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487518',
      itemNumber: '14-487-518',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3897-kr/p/N82E16814487518',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487519',
      itemNumber: '14-487-519',
      model: 'ftw3',
      series: '3080',
      url: 'https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3895-kr/p/N82E16814487519',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487522',
      itemNumber: '14-487-522',
      model: 'xc3 black',
      series: '3080',
      url: 'https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3881-kr/p/N82E16814487522',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487521',
      itemNumber: '14-487-521',
      model: 'xc3',
      series: '3080',
      url: 'https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3883-kr/p/N82E16814487521',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137600',
      itemNumber: '14-137-600',
      model: 'ventus 3x',
      series: '3080',
      url: 'https://www.newegg.com/msi-geforce-rtx-3080-rtx-3080-ventus-3x-10g/p/N82E16814137600',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137598',
      itemNumber: '14-137-598',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.newegg.com/msi-geforce-rtx-3080-rtx-3080-ventus-3x-10g-oc/p/N82E16814137598',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137597',
      itemNumber: '14-137-597',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.newegg.com/msi-geforce-rtx-3080-rtx-3080-gaming-x-trio-10g/p/N82E16814137597',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932329',
      itemNumber: '149-32-329',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080gaming-oc-10gd/p/N82E16814932329',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932330',
      itemNumber: '149-32-330',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080eagle-oc-10gd/p/N82E16814932330',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932336',
      itemNumber: '14-932-336',
      model: 'aorus master',
      series: '3080',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080aorus-m-10gd/p/N82E16814932336',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500502',
      itemNumber: '14-950-502',
      model: 'trinity',
      series: '3080',
      url: 'https://www.newegg.com/zotac-geforce-rtx-3080-zt-a30800d-10p/p/N82E16814500502',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126457',
      itemNumber: '14-126-457',
      model: 'strix',
      series: '3080',
      url: 'https://www.newegg.com/asus-geforce-rtx-3080-rog-strix-rtx3080-o10g-gaming/p/N82E16814126457',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126452',
      itemNumber: '14-126-452',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.newegg.com/asus-geforce-rtx-3080-tuf-rtx3080-o10g-gaming/p/N82E16814126452',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500504',
      itemNumber: '14-500-504',
      model: 'trinity oc',
      series: '3080',
      url: 'https://www.newegg.com/zotac-geforce-rtx-3080-zt-t30800j-10p/p/N82E16814500504',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814133809',
      itemNumber: '14-133-809',
      model: 'xlr8 revel',
      series: '3080',
      url: 'https://www.newegg.com/pny-geforce-rtx-3080-vcg308010tfxppb/p/N82E16814133809',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932337',
      itemNumber: '14-932-337',
      model: 'vision oc',
      series: '3080',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080vision-oc-10gd/p/N82E16814932337',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126455',
      itemNumber: '14-126-455',
      model: 'tuf',
      series: '3090',
      url: 'https://www.newegg.com/asus-geforce-rtx-3090-tuf-rtx3090-24g-gaming/p/N82E16814126455',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126456',
      itemNumber: '14-126-456',
      model: 'strix',
      series: '3090',
      url: 'https://www.newegg.com/asus-geforce-rtx-3090-rog-strix-rtx3090-o24g-gaming/p/N82E16814126456',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137595',
      itemNumber: '14-137-595',
      model: 'gaming x trio',
      series: '3090',
      url: 'https://www.newegg.com/msi-geforce-rtx-3090-rtx-3090-gaming-x-trio-24g/p/N82E16814137595',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137596',
      itemNumber: '14-137-596',
      model: 'ventus 3x oc',
      series: '3090',
      url: 'https://www.newegg.com/msi-geforce-rtx-3090-rtx-3090-ventus-3x-24g-oc/p/N82E16814137596',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500503',
      itemNumber: '14-500-503',
      model: 'trinity',
      series: '3090',
      url: 'https://www.newegg.com/zotac-geforce-rtx-3090-zt-a30900d-10p/p/N82E16814500503',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137599',
      itemNumber: '14-137-599',
      model: 'ventus 3x',
      series: '3090',
      url: 'https://www.newegg.com/msi-geforce-rtx-3090-rtx-3090-ventus-3x-24g/p/N82E16814137599',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487525',
      itemNumber: '14-487-525',
      model: 'ftw3',
      series: '3090',
      url: 'https://www.newegg.com/evga-geforce-rtx-3090-24g-p5-3985-kr/p/N82E16814487525',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487524',
      itemNumber: '14-487-524',
      model: 'xc3 ultra',
      series: '3090',
      url: 'https://www.newegg.com/evga-geforce-rtx-3090-24g-p5-3975-kr/p/N82E16814487524',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487526',
      itemNumber: '14-487-526',
      model: 'ftw3 ultra',
      series: '3090',
      url: 'https://www.newegg.com/evga-geforce-rtx-3090-24g-p5-3987-kr/p/N82E16814487526',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487527',
      itemNumber: '14-487-527',
      model: 'xc3 black',
      series: '3090',
      url: 'https://www.newegg.com/evga-geforce-rtx-3090-24g-p5-3971-kr/p/N82E16814487527',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487523',
      itemNumber: '14-487-523',
      model: 'xc3',
      series: '3090',
      url: 'https://www.newegg.com/evga-geforce-rtx-3090-24g-p5-3973-kr/p/N82E16814487523',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932327',
      itemNumber: '14-932-327',
      model: 'gaming',
      series: '3090',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3090-gv-n3090gaming-oc-24gd/p/N82E16814932327',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932328',
      itemNumber: '14-932-328',
      model: 'eagle',
      series: '3090',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3090-gv-n3090eagle-oc-24gd/p/N82E16814932328',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932555',
      itemNumber: 'N82E16814932555',
      model: 'aorus master 24g',
      series: '4090',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-4090-gv-n4090aorus-m-24gd/p/N82E16814932555',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932556',
      itemNumber: 'N82E16814932556',
      model: 'aorus xtreme waterforce 24g',
      series: '4090',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-4090-gv-n4090aorusx-w-24gd/p/N82E16814932556',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932550',
      itemNumber: 'N82E16814932550',
      model: 'gaming oc',
      series: '4090',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814932550',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932554',
      itemNumber: 'N82E16814932554',
      model: 'windforce',
      series: '4090',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-4090-gv-n4090wf3-24gd/p/N82E16814932554',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137761',
      itemNumber: 'N82E16814137761',
      model: 'gaming x trio',
      series: '4090',
      url: 'https://www.newegg.com/msi-geforce-rtx-4090-rtx-4090-gaming-x-trio-24g/p/N82E16814137761',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137762',
      itemNumber: 'N82E16814137762',
      model: 'gaming trio',
      series: '4090',
      url: 'https://www.newegg.com/msi-geforce-rtx-4090-rtx-4090-gaming-trio-24g/p/N82E16814137762',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137759',
      itemNumber: 'N82E16814137759',
      model: 'suprim',
      series: '4090',
      url: 'https://www.newegg.com/msi-geforce-rtx-4090-rtx-4090-suprim-liquid-x-24g/p/N82E16814137759',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137760',
      itemNumber: 'N82E16814137760',
      model: 'suprim x',
      series: '4090',
      url: 'https://www.newegg.com/msi-geforce-rtx-4090-rtx-4090-suprim-liquid-x-24g/p/N82E16814137760',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126600',
      itemNumber: 'N82E16814126600',
      model: 'strix',
      series: '4090',
      url: 'https://www.newegg.com/asus-geforce-rtx-4090-rog-strix-rtx4090-24g-gaming/p/N82E16814126600',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126593',
      itemNumber: 'N82E16814126593',
      model: 'strix oc',
      series: '4090',
      url: 'https://www.newegg.com/asus-geforce-rtx-4090-rog-strix-rtx4090-o24g-gaming/p/N82E16814126593',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126596',
      itemNumber: 'N82E16814126596',
      model: 'tuf',
      series: '4090',
      url: 'https://www.newegg.com/asus-geforce-rtx-4090-tuf-rtx4090-24g-gaming/p/N82E16814126596',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126594',
      itemNumber: 'N82E16814126594',
      model: 'tuf oc',
      series: '4090',
      url: 'https://www.newegg.com/asus-geforce-rtx-4090-tuf-rtx4090-o24g-gaming/p/N82E16814126594',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500539',
      itemNumber: 'N82E16814500539',
      model: 'trinity',
      series: '4090',
      url: 'https://www.newegg.com/zotac-geforce-rtx-4090-zt-d40900d-10p/p/N82E16814500539',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500538',
      itemNumber: 'N82E16814500538',
      model: 'amp extreme airo',
      series: '4090',
      url: 'https://www.newegg.com/zotac-geforce-rtx-4090-zt-d40900b-10p/p/N82E16814500538',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16819113663',
      itemNumber: '19-113-663',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.newegg.com/amd-ryzen-9-5950x/p/N82E16819113663',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16819113664',
      itemNumber: '19-113-664',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.newegg.com/amd-ryzen-9-5900x/p/N82E16819113664',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16819113665',
      itemNumber: '19-113-665',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.newegg.com/amd-ryzen-7-5800x/p/N82E16819113665',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16819113666',
      itemNumber: '19-113-666',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.newegg.com/amd-ryzen-5-5600x/p/N82E16819113666',
    },
    {
      brand: 'microsoft',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16868105273',
      itemNumber: '68-105-273',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.newegg.com/p/N82E16868105273',
    },
    {
      brand: 'microsoft',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16868105274',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.newegg.com/p/N82E16868105274',
      itemNumber: '68-105-274',
    },
    {
      brand: 'asrock',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930051',
      model: 'amd reference',
      series: 'rx6900xt',
      url: 'https://www.newegg.com/asrock-radeon-rx-6900-xt-rx6900xt-16g/p/N82E16814930051',
      itemNumber: '14-930-051',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932384',
      model: 'amd reference',
      series: 'rx6900xt',
      url: 'https://www.newegg.com/gigabyte-radeon-rx-6900-xt-gv-r69xt-16gc-b/p/N82E16814932384',
      itemNumber: '14-932-384',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137618',
      model: 'amd reference',
      series: 'rx6900xt',
      url: 'https://www.newegg.com/msi-radeon-rx-6900-xt-rx-6900-xt-16g/p/N82E16814137618',
      itemNumber: '14-137-618',
    },
    {
      brand: 'powercolor',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814131774',
      model: 'amd reference',
      series: 'rx6900xt',
      url: 'https://www.newegg.com/powercolor-radeon-rx-6900-xt-axrx-6900xt-16gbd6-m2dhc/p/N82E16814131774',
      itemNumber: '14-131-774',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202393',
      model: 'amd reference',
      series: 'rx6900xt',
      url: 'https://www.newegg.com/sapphire-radeon-rx-6900-xt-21308-01-20g/p/N82E16814202393',
      itemNumber: '14-202-393',
    },
    {
      brand: 'asrock',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930052',
      model: 'phantom gaming',
      series: 'rx6900xt',
      url: 'https://www.newegg.com/asrock-radeon-rx-6800-xt-rx6900xt-pgd-16g/p/N82E16814930052',
      itemNumber: '14-930-052',
    },
    {
      brand: 'xfx',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814150846',
      model: 'merc',
      series: 'rx6900xt',
      url: 'https://www.newegg.com/xfx-radeon-rx-6900-xt-rx-69xtacud9/p/N82E16814150846',
      itemNumber: '14-150-846',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932373',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.newegg.com/gigabyte-radeon-rx-6800-xt-gv-r68xt-16gc-b/p/N82E16814932373',
      itemNumber: '14-932-373',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932381',
      model: 'gaming oc',
      series: 'rx6800xt',
      url: 'https://www.newegg.com/gigabyte-radeon-rx-6800-xt-gv-r68xtgaming-oc-16gd/p/N82E16814932381',
      itemNumber: '14-932-381',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202394',
      model: 'pulse',
      series: 'rx6800',
      url: 'https://www.newegg.com/sapphire-radeon-rx-6800-11305-02-20g/p/N82E16814202394',
      itemNumber: '14-202-394',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137607',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.newegg.com/msi-radeon-rx-6800-xt-rx-6800-xt-16g/p/N82E16814137607',
      itemNumber: '14-137-607',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202388',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.newegg.com/sapphire-radeon-rx-6800-xt-21304-01-20g/p/N82E16814202388',
      itemNumber: '14-202-388',
    },
    {
      brand: 'asrock',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930045',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.newegg.com/asrock-radeon-rx-6800-xt-rx-6800-xt-16g/p/N82E16814930045',
      itemNumber: '14-930-045',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126472',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.newegg.com/asus-radeon-rx-6800-xt-rx6800xt-16g/p/N82E16814126472',
      itemNumber: '14-126-472',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126473',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.newegg.com/asus-radeon-rx-6800-rx6800-16g/p/N82E16814126473',
      itemNumber: '14-126-473',
    },
    {
      brand: 'asrock',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930046',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.newegg.com/asrock-radeon-rx-6800-rx-6800-16g/p/N82E16814930046',
      itemNumber: '14-930-046',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932374',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.newegg.com/gigabyte-radeon-rx-6800-gv-r68-16gc-b/p/N82E16814932374',
      itemNumber: '14-932-374',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202389',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.newegg.com/sapphire-radeon-rx-6800-21305-01-20g/p/N82E16814202389',
      itemNumber: '14-202-389',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137608',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.newegg.com/msi-radeon-rx-6800-rx-6800-16g/p/N82E16814137608',
      itemNumber: '14-137-608',
    },
    {
      brand: 'asrock',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930047',
      model: 'challenger',
      series: 'rx6800',
      url: 'https://www.newegg.com/asrock-radeon-rx-6800-rx6800-clp-16go/p/N82E16814930047',
      itemNumber: '14-930-047',
    },
    {
      brand: 'asrock',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930048',
      model: 'phantom gaming',
      series: 'rx6800',
      url: 'https://www.newegg.com/asrock-radeon-rx-6800-rx6800-pgd-16go/p/N82E16814930048',
      itemNumber: '14-930-048',
    },
    {
      brand: 'asrock',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930049',
      model: 'phantom gaming',
      series: 'rx6800xt',
      url: 'https://www.newegg.com/asrock-radeon-rx-6800-xt-rx6800xt-pgd-16go/p/N82E16814930049',
      itemNumber: '14-930-049',
    },
    {
      brand: 'asrock',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930050',
      model: 'taichi',
      series: 'rx6800xt',
      url: 'https://www.newegg.com/asrock-radeon-rx-6800-xt-rx6800xt-tcx-16go/p/N82E16814930050',
      itemNumber: '14-930-050',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126478',
      model: 'tuf',
      series: 'rx6800',
      url: 'https://www.newegg.com/asus-radeon-rx-6800-tuf-rx6800-o16g-gaming/p/N82E16814126478',
      itemNumber: '14-126-478',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126476',
      model: 'tuf',
      series: 'rx6800xt',
      url: 'https://www.newegg.com/asus-radeon-rx-6800-xt-tuf-rx6800xt-o16g-gaming/p/N82E16814126476',
      itemNumber: '14-126-476',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126477',
      model: 'strix',
      series: 'rx6800',
      url: 'https://www.newegg.com/asus-radeon-rx-6800-rog-strix-rx6800-o16g-gaming/p/N82E16814126477',
      itemNumber: '14-126-477',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126475',
      model: 'strix lc',
      series: 'rx6800xt',
      url: 'https://www.newegg.com/asus-radeon-rx-6800-xt-rog-strix-lc-rx6800xt-o16g-gaming/p/N82E16814126475',
      itemNumber: '14-126-475',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202391',
      model: 'nitro+',
      series: 'rx6800xt',
      url: 'https://www.newegg.com/sapphire-radeon-rx-6800-xt-11304-02-20g/p/N82E16814202391',
      itemNumber: '14-202-391',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202390',
      model: 'nitro+ se',
      series: 'rx6800xt',
      url: 'https://www.newegg.com/sapphire-radeon-rx-6800-xt-11304-01-20g/p/N82E16814202390',
      itemNumber: '14-202-390',
    },
    {
      brand: 'xfx',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814150844',
      model: 'merc',
      series: 'rx6800xt',
      url: 'https://www.newegg.com/xfx-radeon-rx-6800-xt-rx-68xtacbd9/p/N82E16814150844',
      itemNumber: '14-150-844',
    },
    {
      brand: 'corsair',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16817139080',
      model: '750 platinum',
      series: 'sf',
      url: 'https://www.newegg.com/corsair-sf750-cp-9020186-na-750w/p/N82E16817139080',
      itemNumber: '17-139-080',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932401',
      model: 'vision oc',
      series: '3060',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3060-gv-n3060vision-oc-12gd/p/N82E16814932401',
      itemNumber: '14-932-401',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932399',
      model: 'eagle',
      series: '3060',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3060-gv-n3060eagle-12gd/p/N82E16814932399',
      itemNumber: '14-932-399',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932399',
      model: 'eagle',
      series: '3060',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3060-gv-n3060eagle-12gd/p/N82E16814932399',
      itemNumber: '14-932-399',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932400',
      model: 'aorus',
      series: '3060',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3060-gv-n3060aorus-e-12gd/p/N82E16814932400',
      itemNumber: '14-932-400',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932403',
      model: 'eagle oc',
      series: '3060',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3060-gv-n3060eagle-oc-12gd/p/N82E16814932403',
      itemNumber: '14-932-403',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487538',
      model: 'xc black',
      series: '3060',
      url: 'https://www.newegg.com/evga-geforce-rtx-3060-12g-p5-3655-kr/p/N82E16814487538',
      itemNumber: '14-487-538',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487539',
      model: 'xc gaming',
      series: '3060',
      url: 'https://www.newegg.com/evga-geforce-rtx-3060-12g-p5-3657-kr/p/N82E16814487539',
      itemNumber: '14-487-539',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137629',
      model: 'gaming x trio',
      series: '3060',
      url: 'https://www.newegg.com/msi-geforce-rtx-3060-rtx-3060-gaming-x-trio-12g/p/N82E16814137629',
      itemNumber: '14-137-629',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137630',
      model: 'gaming x',
      series: '3060',
      url: 'https://www.newegg.com/msi-geforce-rtx-3060-rtx-3060-gaming-x-12g/p/N82E16814137630',
      itemNumber: '14-137-630',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137631',
      model: 'ventus 3x',
      series: '3060',
      url: 'https://www.newegg.com/msi-geforce-rtx-3060-rtx-3060-ventus-3x-12g-oc/p/N82E16814137631',
      itemNumber: '14-137-631',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137632',
      model: 'ventus 2x oc',
      series: '3060',
      url: 'https://www.newegg.com/msi-geforce-rtx-3060-rtx-3060-ventus-2x-12g-oc/p/N82E16814137632',
      itemNumber: '14-137-632',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137638',
      model: 'ventus 2x',
      series: '3060',
      url: 'https://www.newegg.com/msi-geforce-rtx-3060-rtx-3060-ventus-2x-12g/p/N82E16814137638',
      itemNumber: '14-137-638',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126491',
      model: 'tuf oc',
      series: '3060',
      url: 'https://www.newegg.com/asus-geforce-rtx-3060-tuf-rtx3060-o12g-gaming/p/N82E16814126491',
      itemNumber: '14-126-491',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126492',
      model: 'strix oc',
      series: '3060',
      url: 'https://www.newegg.com/asus-geforce-rtx-3060-rog-strix-rtx3060-o12g-gaming/p/N82E16814126492',
      itemNumber: '14-126-492',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126493',
      model: 'dual',
      series: '3060',
      url: 'https://www.newegg.com/asus-geforce-rtx-3060-dual-rtx3060-12g/p/N82E16814126493',
      itemNumber: '14-126-493',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500508',
      model: 'twin edge oc',
      series: '3060',
      url: 'https://www.newegg.com/zotac-geforce-rtx-3060-zt-a30600h-10m/p/N82E16814500508',
      itemNumber: '14-500-508',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500509',
      model: 'twin edge',
      series: '3060',
      url: 'https://www.newegg.com/zotac-geforce-rtx-3060-zt-a30600e-10m/p/N82E16814500509',
      itemNumber: '14-500-509',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500509',
      model: 'twin edge',
      series: '3060',
      url: 'https://www.newegg.com/zotac-geforce-rtx-3060-zt-a30600e-10m/p/N82E16814500509',
      itemNumber: '14-500-509',
    },
    {
      brand: 'corsair',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16817139242',
      model: '600 platinum',
      series: 'sf',
      url: 'https://www.newegg.com/corsair-sf-series-sf600-cp-9020182-na-600w/p/N82E16817139242',
      itemNumber: '17-139-242',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126470',
      model: 'strix',
      series: '3060ti',
      url: 'https://www.newegg.com/asus-geforce-rtx-3060-ti-rog-strix-rtx3060ti-o8g-gaming/p/N82E16814126470',
      itemNumber: '14-126-470',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137611',
      model: 'gaming x trio',
      series: '3060ti',
      url: 'https://www.newegg.com/msi-geforce-rtx-3060-ti-rtx-3060-ti-gaming-x-trio/p/N82E16814137611',
      itemNumber: '14-137-611',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500507',
      model: 'twin edge oc',
      series: '3060ti',
      url: 'https://www.newegg.com/zotac-geforce-rtx-3060-ti-zt-a30610h-10m/p/N82E16814500507',
      itemNumber: '14-500-507',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126471',
      model: 'tuf',
      series: '3060ti',
      url: 'https://www.newegg.com/asus-geforce-rtx-3060-ti-tuf-rtx3060ti-o8g-gaming/p/N82E16814126471',
      itemNumber: '14-126-471',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487535',
      model: 'xc3',
      series: '3060ti',
      url: 'https://www.newegg.com/evga-geforce-rtx-3060-ti-08g-p5-3663-kr/p/N82E16814487535',
      itemNumber: '14-487-535',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126468',
      model: 'dual',
      series: '3060ti',
      url: 'https://www.newegg.com/asus-geforce-rtx-3060-ti-dual-rtx3060ti-o8g/p/N82E16814126468',
      itemNumber: '14-126-468',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137612',
      model: 'ventus 2x oc',
      series: '3060ti',
      url: 'https://www.newegg.com/msi-geforce-rtx-3060-ti-rtx-3060-ti-ventus-2x-oc/p/N82E16814137612',
      itemNumber: '14-137-612',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814487537',
      model: 'ftw3 ultra',
      series: '3060ti',
      url: 'https://www.newegg.com/evga-geforce-rtx-3060-ti-08g-p5-3667-kr/p/N82E16814487537',
      itemNumber: '14-487-537',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932375',
      model: 'aorus',
      series: '3060ti',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3060-ti-gv-n306taorus-m-8gd/p/N82E16814932375',
      itemNumber: '14-932-375',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932376',
      model: 'gaming oc',
      series: '3060ti',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3060-ti-gv-n306tgamingoc-pro-8gd/p/N82E16814932376',
      itemNumber: '14-932-376',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932379',
      model: 'eagle',
      series: '3060ti',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3060-ti-gv-n306teagle-8gd/p/N82E16814932379',
      itemNumber: '14-932-379',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932377',
      model: 'gaming oc',
      series: '3060ti',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3060-ti-gv-n306tgaming-oc-8gd/p/N82E16814932377',
      itemNumber: '14-932-377',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500506',
      model: 'twin edge',
      series: '3060ti',
      url: 'https://www.newegg.com/zotac-geforce-rtx-3060-ti-zt-a30610e-10m/p/N82E16814500506',
      itemNumber: '14-500-506',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932378',
      model: 'eagle',
      series: '3060ti',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3060-ti-gv-n306teagle-oc-8gd/p/N82E16814932378',
      itemNumber: '14-932-378',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126474',
      model: 'gaming',
      series: '3060ti',
      url: 'https://www.newegg.com/asus-geforce-rtx-3060-ti-ko-rtx3060ti-o8g-gaming/p/N82E16814126474',
      itemNumber: '14-126-474',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126480',
      model: 'dual',
      series: '3060ti',
      url: 'https://www.newegg.com/asus-geforce-rtx-3060-ti-dual-rtx3060ti-8g/p/N82E16814126480',
      itemNumber: '14-126-480',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137620',
      model: 'suprim x',
      series: '3070',
      url: 'https://www.newegg.com/msi-geforce-rtx-3070-rtx-3070-suprim-x-8g/p/N82E16814137620',
      itemNumber: '14-137-620',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137623',
      model: 'suprim',
      series: '3070',
      url: 'https://www.newegg.com/msi-geforce-rtx-3070-rtx-3070-suprim-8g/p/N82E16814137623',
      itemNumber: '14-137-623',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932345',
      model: 'aorus xtreme',
      series: '3080',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080aorus-x-10gd/p/N82E16814932345',
      itemNumber: '14-932-345',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932372',
      model: 'aorus xtreme waterforce',
      series: '3080',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080aorusx-w-10gd/p/N82E16814932372',
      itemNumber: '14-932-372',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932371',
      model: 'aorus xtreme waterforce wb',
      series: '3080',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080aorusx-wb-10gd/p/N82E16814932371',
      itemNumber: '14-932-371',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126483',
      model: 'strix white',
      series: '3080',
      url: 'https://www.newegg.com/asus-geforce-rtx-3080-rog-strix-rtx3080-o10g-white/p/N82E16814126483',
      itemNumber: '14-126-483',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137609',
      model: 'suprim x',
      series: '3080',
      url: 'https://www.newegg.com/msi-geforce-rtx-3080-rtx3080-suprim-x-10g/p/N82E16814137609',
      itemNumber: '14-137-609',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932367',
      model: 'eagle',
      series: '3080',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080eagle-10gd/p/N82E16814932367',
      itemNumber: '14-932-367',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126485',
      model: 'ekwb',
      series: '3090',
      url: 'https://www.newegg.com/asus-geforce-rtx-3090-rtx3090-24g-ek/p/N82E16814126485',
      itemNumber: '14-126-485',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932341',
      model: 'aorus master',
      series: '3090',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3090-gv-n3090aorus-m-24gd/p/N82E16814932341',
      itemNumber: '14-932-341',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932387',
      model: 'aorus xtreme waterforce',
      series: '3090',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3090-gv-n3090aorusx-w-24gd/p/N82E16814932387',
      itemNumber: '14-932-387',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126454',
      model: 'tuf oc',
      series: '3090',
      url: 'https://www.newegg.com/asus-geforce-rtx-3090-tuf-rtx3090-o24g-gaming/p/N82E16814126454',
      itemNumber: '14-126-454',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932386',
      model: 'aorus xtreme waterforce wb',
      series: '3090',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3090-gv-n3090aorusx-wb-24gd/p/N82E16814932386',
      itemNumber: '14-932-386',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932340',
      model: 'aorus xtreme',
      series: '3090',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3090-gv-n3090aorus-x-24gd/p/N82E16814932340',
      itemNumber: '14-932-340',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932365',
      model: 'vision oc',
      series: '3090',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3090-gv-n3090vision-oc-24gd/p/N82E16814932365',
      itemNumber: '14-932-365',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126482',
      model: 'strix white',
      series: '3090',
      url: 'https://www.newegg.com/asus-geforce-rtx-3090-rog-strix-rtx3090-o24g-white/p/N82E16814126482',
      itemNumber: '14-126-482',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137610',
      model: 'suprim x',
      series: '3090',
      url: 'https://www.newegg.com/msi-geforce-rtx-3090-rtx3090-suprim-x-24g/p/N82E16814137610',
      itemNumber: '14-137-610',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932366',
      model: 'eagle',
      series: '3090',
      url: 'https://www.newegg.com/gigabyte-geforce-rtx-3090-gv-n3090eagle-24gd/p/N82E16814932366',
      itemNumber: '14-932-366',
    },
    {
      brand: 'powercolor',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814131767',
      model: 'red devil',
      series: 'rx6800xt',
      url: 'https://www.newegg.com/powercolor-radeon-rx-6800-xt-axrx-6800xt-16gbd6-2dhce-oc/p/N82E16814131767',
      itemNumber: '14-131-767',
    },
    {
      brand: 'powercolor',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814131770',
      model: 'red devil',
      series: 'rx6800',
      url: 'https://www.newegg.com/powercolor-radeon-rx-6800-axrx-6800-16gbd6-2dhce-oc/p/N82E16814131770',
      itemNumber: '14-131-770',
    },
    {
      brand: 'powercolor',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814131773',
      model: 'red dragon',
      series: 'rx6800',
      url: 'https://www.newegg.com/powercolor-radeon-rx-6800-axrx-6800-16gbd6-3dhr-oc/p/N82E16814131773',
      itemNumber: '14-131-773',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16813119362',
      model: 'crosshair viii',
      series: 'darkhero',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16813119362',
      itemNumber: '13-119-362',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=9SIA4RRJPT6655',
      model: 'tuf oc',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/9SIA4RRJPT6655',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=9SIB6NDJBU7977',
      model: 'suprim x',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/9SIB6NDJBU7977',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=9SIA4REJPN0959',
      model: 'master',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/9SIA4REJPN0959',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=9SIA4REJPN0233',
      model: 'ventus 3x',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/9SIA4REJPN0233',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=9SIA4REJPN0307',
      model: 'aero oc',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/9SIA4REJPN0307',
    },
    {
      brand: 'ax',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=9SIA4REJPN0954',
      model: 'x3w',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/9SIA4REJPN0954',
    },
    {
      brand: 'inno3d',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=9SIBDCAJBT4674',
      model: 'ice dragon super',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/9SIBDCAJBT4674',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=9SIAXMKJPP1243',
      model: 'tuf',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/9SIAXMKJPP1243',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932561',
      model: 'gaming oc',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814932561',
      itemNumber: '14-932-561',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932562',
      model: 'eagle oc',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814932562',
      itemNumber: '14-932-562',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137766',
      model: 'gaming x trio',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814137766',
      itemNumber: '14-137-766',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137765',
      model: 'ventus 3x oc',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814137765',
      itemNumber: '14-137-765',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126597',
      model: 'strix oc',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814126597',
      itemNumber: '14-126-597',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814133843',
      model: 'xlr8 verto',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814133843',
      itemNumber: '14-133-843',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814133844',
      model: 'xlr8 verto oc',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814133844',
      itemNumber: '14-133-844',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932559',
      model: 'aorus',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814932559',
      itemNumber: '14-932-559',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932560',
      model: 'aero oc',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814932560',
      itemNumber: '14-932-560',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500541',
      model: 'amp extreme airo',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814500541',
      itemNumber: '14-500-541',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932558',
      model: 'aorus w',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814932558',
      itemNumber: '14-932-558',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500542',
      model: 'trinity',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814500542',
      itemNumber: '14-500-542',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137768',
      model: 'ventus 3x',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814137768',
      itemNumber: '14-137-768',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137767',
      model: 'suprim x',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814137767',
      itemNumber: '14-137-767',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932557',
      model: 'aorus x wb',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814932557',
      itemNumber: '14-932-557',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500543',
      model: 'trinity oc',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814500543',
      itemNumber: '14-500-543',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126601',
      model: 'strix',
      series: '4080-16g',
      url: 'https://www.newegg.com/asus-rog-crosshair-viii-dark-hero/p/N82E16814126601',
      itemNumber: '14-126-601',
    },
    {
      brand: 'sparkle',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814993013',
      model: 'b580',
      series: 'arc',
      url: 'https://www.newegg.com/sparkle-intel-arc-b580-titan-oc-12gb-gddr6/p/N82E16814993013',
      itemNumber: '14-993-013',
    },
    {
      brand: 'lianli',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=2AM-000Z-000E0',
      model: 'a3 matx wd',
      series: 'a3-matx',
      url: 'https://www.newegg.com/p/2AM-000Z-000E0',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137920',
      model: 'ventus 3x oc',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814137920',
      itemNumber: '14-137-920',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137916',
      model: 'suprim liquid soc',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814137916',
      itemNumber: '14-137-916',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137915',
      model: 'suprim soc',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814137915',
      itemNumber: '14-137-915',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137918',
      model: 'vanguard soc',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814137918',
      itemNumber: '14-137-918',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137919',
      model: 'gaming trio oc',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814137919',
      itemNumber: '14-137-919',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137917',
      model: 'vanguard soc launch edition',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814137917',
      itemNumber: '14-137-917',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500593',
      model: 'amp extreme infinity',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814500593',
      itemNumber: '14-500-593',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932756',
      model: 'aero oc',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814932756',
      itemNumber: '14-932-756',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932755',
      model: 'aorus',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814932755',
      itemNumber: '14-932-755',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137910',
      model: 'gaming trio oc',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814137910',
      itemNumber: '14-137-910',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137913',
      model: 'ventus 3x oc plus',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814137913',
      itemNumber: '14-137-913',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137909',
      model: 'gaming trio oc white',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814137909',
      itemNumber: '14-137-909',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137908',
      model: 'vanguard soc',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814137908',
      itemNumber: '14-137-908',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137906',
      model: 'suprim soc',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814137906',
      itemNumber: '14-137-906',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137907',
      model: 'vanguard soc launch edition',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814137907',
      itemNumber: '14-137-907',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137905',
      model: 'suprim liquid soc',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814137905',
      itemNumber: '14-137-905',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126752',
      model: 'tuf',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814126752',
      itemNumber: '14-126-752',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126753',
      model: 'tuf oc',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814126753',
      itemNumber: '14-126-753',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932754',
      model: 'windforce oc',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814932754',
      itemNumber: '14-932-754',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126751',
      model: 'astral oc',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814126751',
      itemNumber: '14-126-751',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932753',
      model: 'gaming oc',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814932753',
      itemNumber: '14-932-753',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126750',
      model: 'astral',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814126750',
      itemNumber: '14-126-750',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126743',
      model: 'tuf oc',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814126743',
      itemNumber: '14-126-743',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126744',
      model: 'prime oc',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814126744',
      itemNumber: '14-126-744',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126742',
      model: 'astral oc',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814126742',
      itemNumber: '14-126-742',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932765',
      model: 'master ice',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814932765',
      itemNumber: '14-932-765',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500597',
      model: 'solid',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814500597',
      itemNumber: '14-500-597',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932761',
      model: 'gaming oc',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814932761',
      itemNumber: '14-932-761',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932762',
      model: 'windforce oc',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814932762',
      itemNumber: '14-932-762',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932760',
      model: 'master',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814932760',
      itemNumber: '14-932-760',
    },

    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137946',
      model: 'ventus 3x',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814137946',
      itemNumber: '14-137-946',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932764',
      model: 'aorus xtreme waterforce wb',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814932764',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932763',
      model: 'aorus xtreme waterforce',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814932763',
      itemNumber: '14-932-763',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932757',
      model: 'master ice',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814932757',
      itemNumber: '14-932-757',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137930',
      model: 'ventus 3x oc',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814137930',
      itemNumber: '14-137-930',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137911',
      model: 'inspire 3x oc',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814137911',
      itemNumber: '14-137-911',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137912',
      model: 'ventus 3x oc white',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814137912',
      itemNumber: '14-137-912',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814133898',
      model: 'epic x',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814133898',
      itemNumber: '14-133-898',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500596',
      model: 'solid',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814500596',
      itemNumber: '14-500-596',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500594',
      model: 'solid oc',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814500594',
      itemNumber: '14-500-594',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932758',
      model: 'aorus xtreme waterforce wb',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814932758',
      itemNumber: '14-932-758',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137945',
      model: 'ventus 3x',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814137945',
      itemNumber: '14-137-945',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932759',
      model: 'aorus xtreme waterforce',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814932759',
      itemNumber: '14-932-759',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814133899',
      model: 'triple fan oc',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814133899',
      itemNumber: '14-133-899',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500595',
      model: 'amp extreme infinity',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814500595',
      itemNumber: '14-500-595',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137914',
      model: 'shadow 3x oc',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814137914',
      itemNumber: '14-137-914',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126776',
      model: 'prime',
      series: '5080',
      url: 'https://www.newegg.com/p/N82E16814126776',
      itemNumber: '14-126-776',
    },
  ],
  name: 'newegg',
  country: 'US',
  realTimeInventoryLookup: async (itemNumber: string) => {
    const request_url =
      'https://www.newegg.com/product/api/ProductRealtime?ItemNumber=' +
      itemNumber;
    const response = await fetch(request_url);
    const response_json = await response.json();
    return (
      response_json.MainItem !== undefined &&
      response_json.MainItem.Instock === true
    );
  },
};

/* Copy Paste Template

Copy and paste the item number to the end of each link.
https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=itemNumber
https://www.newegg.com/p/itemNumber

{
  brand: '',
  cartUrl:
    'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=',
  model: '',
  series: '',
  url: 'https://www.newegg.com/p/',
  itemNumber: 'XX-XXX-XXX'
},
*/

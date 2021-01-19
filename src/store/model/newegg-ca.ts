import {Store} from './store';
import fetch from 'node-fetch';

export const NeweggCa: Store = {
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['are you a human?'],
    },
    inStock: {
      container: 'div#ProductBuy .btn-primary',
      text: ['add to cart'],
    },
    maxPrice: {
      container: 'div#app div.product-price > ul > li.price-current > strong',
      euroFormat: false,
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
      url:
        'https://www.newegg.ca/p/N82E16824475043?Item=N82E16824475043&cm_sp=Homepage_MKPL-_-P3_24-475-043-_-12302020',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-453',
      model: 'tuf',
      series: '3080',
      url:
        'https://www.newegg.ca/asus-geforce-rtx-3080-tuf-rtx3080-10g-gaming/p/N82E16814126453',
    },
    {
      brand: 'evga',
      itemNumber: '14-487-519',
      model: 'ftw3',
      series: '3080',
      url:
        'https://www.newegg.ca/evga-geforce-rtx-3080-10g-p5-3895-kr/p/N82E16814487519',
    },
    {
      brand: 'evga',
      itemNumber: '14-487-518',
      model: 'ftw3 ultra',
      series: '3080',
      url:
        'https://www.newegg.ca/evga-geforce-rtx-3080-10g-p5-3897-kr/p/N82E16814487518',
    },
    {
      brand: 'evga',
      itemNumber: '14-487-522',
      model: 'xc3 black',
      series: '3080',
      url:
        'https://www.newegg.ca/evga-geforce-rtx-3080-10g-p5-3881-kr/p/N82E16814487522',
    },
    {
      brand: 'evga',
      itemNumber: '14-487-521',
      model: 'xc3',
      series: '3080',
      url:
        'https://www.newegg.ca/evga-geforce-rtx-3080-10g-p5-3883-kr/p/N82E16814487521',
    },
    {
      brand: 'evga',
      itemNumber: '14-487-520',
      model: 'xc3 ultra',
      series: '3080',
      url:
        'https://www.newegg.ca/evga-geforce-rtx-3080-10g-p5-3885-kr/p/N82E16814487520',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-600',
      model: 'ventus 3x',
      series: '3080',
      url:
        'https://www.newegg.ca/msi-geforce-rtx-3080-rtx-3080-ventus-3x-10g/p/N82E16814137600',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-598',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'https://www.newegg.ca/msi-geforce-rtx-3080-rtx-3080-ventus-3x-10g-oc/p/N82E16814137598',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-597',
      model: 'gaming x trio',
      series: '3080',
      url:
        'https://www.newegg.ca/msi-geforce-rtx-3080-rtx-3080-gaming-x-trio-10g/p/N82E16814137597',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3080',
      url:
        'https://www.newegg.ca/msi-geforce-rtx-3080-rtx3080-suprim-x-10g/p/N82E16814137609',
    },
    {
      brand: 'gigabyte',
      itemNumber: '149-32-329',
      model: 'gaming oc',
      series: '3080',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3080-gv-n3080gaming-oc-10gd/p/N82E16814932329',
    },
    {
      brand: 'gigabyte',
      itemNumber: '149-32-330',
      model: 'eagle oc',
      series: '3080',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3080-gv-n3080eagle-oc-10gd/p/N82E16814932330',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3080',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3080-gv-n3080eagle-10gd/p/N82E16814932367',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-336',
      model: 'aorus master',
      series: '3080',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3080-gv-n3080aorus-m-10gd/p/N82E16814932336',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3080',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3080-gv-n3080aorus-x-10gd/p/N82E16814932345',
    },
    {
      brand: 'zotac',
      itemNumber: '14-950-502',
      model: 'trinity',
      series: '3080',
      url:
        'https://www.newegg.ca/zotac-geforce-rtx-3080-zt-a30800d-10p/p/N82E16814500502',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-457',
      model: 'strix oc',
      series: '3080',
      url:
        'https://www.newegg.ca/asus-geforce-rtx-3080-rog-strix-rtx3080-o10g-gaming/p/N82E16814126457',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-452',
      model: 'tuf oc',
      series: '3080',
      url:
        'https://www.newegg.ca/asus-geforce-rtx-3080-tuf-rtx3080-o10g-gaming/p/N82E16814126452',
    },
    {
      brand: 'zotac',
      itemNumber: '14-500-504',
      model: 'trinity oc',
      series: '3080',
      url:
        'https://www.newegg.ca/zotac-geforce-rtx-3080-zt-t30800j-10p/p/N82E16814500504',
    },
    {
      brand: 'pny',
      itemNumber: '14-133-809',
      model: 'xlr8 revel',
      series: '3080',
      url:
        'https://www.newegg.ca/pny-geforce-rtx-3080-vcg308010tfxppb/p/N82E16814133809',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-337',
      model: 'vision oc',
      series: '3080',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3080-gv-n3080vision-oc-10gd/p/N82E16814932337',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-595',
      model: 'gaming x trio',
      series: '3090',
      url:
        'https://www.newegg.ca/msi-geforce-rtx-3090-rtx-3090-gaming-x-trio-24g/p/N82E16814137595',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-327',
      model: 'gaming oc',
      series: '3090',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3090-gv-n3090gaming-oc-24gd/p/N82E16814932327',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3090',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3090-gv-n3090aorus-m-24gd/p/N82E16814932341',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-596',
      model: 'ventus 3x oc',
      series: '3090',
      url:
        'https://www.newegg.ca/msi-geforce-rtx-3090-rtx-3090-ventus-3x-24g-oc/p/N82E16814137596',
    },
    {
      brand: 'msi',
      model: 'ventus 3x',
      series: '3090',
      url:
        'https://www.newegg.ca/msi-geforce-rtx-3090-rtx-3090-ventus-3x-24g/p/N82E16814137599',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3090',
      url:
        'https://www.newegg.ca/msi-geforce-rtx-3090-rtx3090-suprim-x-24g/p/N82E16814137610',
    },
    {
      brand: 'zotac',
      itemNumber: '14-500-503',
      model: 'trinity',
      series: '3090',
      url:
        'https://www.newegg.ca/zotac-geforce-rtx-3090-zt-a30900d-10p/p/N82E16814500503',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-454',
      model: 'tuf oc',
      series: '3090',
      url:
        'https://www.newegg.ca/asus-geforce-rtx-3090-tuf-rtx3090-o24g-gaming/p/N82E16814126454',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3090',
      url:
        'https://www.newegg.ca/asus-geforce-rtx-3090-tuf-rtx3090-24g-gaming/p/N82E16814126455',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-456',
      model: 'strix oc',
      series: '3090',
      url:
        'https://www.newegg.ca/asus-geforce-rtx-3090-rog-strix-rtx3090-o24g-gaming/p/N82E16814126456',
    },
    {
      brand: 'evga',
      itemNumber: '14-487-524',
      model: 'xc3 ultra',
      series: '3090',
      url:
        'https://www.newegg.ca/evga-geforce-rtx-3090-24g-p5-3975-kr/p/N82E16814487524',
    },
    {
      brand: 'evga',
      itemNumber: '14-487-523',
      model: 'xc3',
      series: '3090',
      url:
        'https://www.newegg.ca/evga-geforce-rtx-3090-24g-p5-3973-kr/p/N82E16814487523',
    },
    {
      brand: 'evga',
      itemNumber: '14-487-526',
      model: 'ftw3 ultra',
      series: '3090',
      url:
        'https://www.newegg.ca/evga-geforce-rtx-3090-24g-p5-3987-kr/p/N82E16814487526',
    },
    {
      brand: 'evga',
      itemNumber: '14-487-525',
      model: 'ftw3',
      series: '3090',
      url:
        'https://www.newegg.ca/evga-geforce-rtx-3090-24g-p5-3985-kr/p/N82E16814487525',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-602',
      model: 'ventus 2x oc',
      series: '3070',
      url:
        'https://www.newegg.ca/msi-geforce-rtx-3070-rtx-3070-ventus-2x-oc/p/N82E16814137602',
    },
    {
      brand: 'msi',
      model: 'ventus 2x',
      series: '3070',
      url:
        'https://www.newegg.ca/msi-geforce-rtx-3070-rtx-3070-ventus-2x/p/N82E16814137605',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-601',
      model: 'ventus 3x oc',
      series: '3070',
      url:
        'https://www.newegg.ca/msi-geforce-rtx-3070-rtx-3070-ventus-3x-oc/p/N82E16814137601',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-603',
      model: 'gaming x trio',
      series: '3070',
      url:
        'https://www.newegg.ca/msi-geforce-rtx-3070-rtx-3070-gaming-x-trio/p/N82E16814137603',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3070',
      url:
        'https://www.newegg.ca/msi-geforce-rtx-3070-rtx-3070-suprim-x-8g/p/N82E16814137620',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-460',
      model: 'dual',
      series: '3070',
      url:
        'https://www.newegg.ca/asus-geforce-rtx-3070-dual-rtx3070-8g/p/N82E16814126460',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-459',
      model: 'dual oc',
      series: '3070',
      url:
        'https://www.newegg.ca/asus-geforce-rtx-3070-dual-rtx3070-o8g/p/N82E16814126459',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-342',
      model: 'gaming oc',
      series: '3070',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070gaming-oc-8gd/p/N82E16814932342',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-458',
      model: 'strix oc',
      series: '3070',
      url:
        'https://www.newegg.ca/asus-geforce-rtx-3070-rog-strix-rtx3070-o8g-gaming/p/N82E16814126458',
    },
    {
      brand: 'asus',
      model: 'ko',
      series: '3070',
      url:
        'https://www.newegg.ca/asus-geforce-rtx-3070-ko-rtx3070-o8g-gamin/p/N82E16814126466',
    },
    {
      brand: 'zotac',
      itemNumber: '14-500-501',
      model: 'twin edge',
      series: '3070',
      url:
        'https://www.newegg.ca/zotac-geforce-rtx-3070-zt-a30700e-10p/p/N82E16814500501',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-344',
      model: 'eagle',
      series: '3070',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070eagle-8gd/p/N82E16814932344',
    },
    {
      brand: 'evga',
      itemNumber: '14-487-528',
      model: 'xc3 black',
      series: '3070',
      url:
        'https://www.newegg.ca/evga-geforce-rtx-3070-08g-p5-3751-kr/p/N82E16814487528',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-360',
      model: 'vision oc',
      series: '3070',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070vision-oc-8gd/p/N82E16814932360',
    },
    {
      brand: 'zotac',
      itemNumber: '14-500-505',
      model: 'twin edge oc',
      series: '3070',
      url:
        'https://www.newegg.ca/zotac-geforce-rtx-3070-zt-a30700h-10p/p/N82E16814500505',
    },
    {
      brand: 'pny',
      itemNumber: '14-133-812',
      model: 'uprising',
      series: '3070',
      url:
        'https://www.newegg.ca/pny-geforce-rtx-3070-vcg30708dfmpb/p/N82E16814133812',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-461',
      model: 'tuf',
      series: '3070',
      url:
        'https://www.newegg.ca/asus-geforce-rtx-3070-tuf-rtx3070-o8g-gaming/p/N82E16814126461',
    },
    {
      brand: 'evga',
      itemNumber: '14-487-531',
      model: 'ftw3',
      series: '3070',
      url:
        'https://www.newegg.ca/evga-geforce-rtx-3070-08g-p5-3765-kr/p/N82E16814487531',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-359',
      model: 'aorus master',
      series: '3070',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070aorus-m-8gd/p/N82E16814932359',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-343',
      model: 'eagle oc',
      series: '3070',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070eagle-oc-8gd/p/N82E16814932343',
    },
    {
      brand: 'evga',
      itemNumber: '14-487-530',
      model: 'xc3 ultra',
      series: '3070',
      url:
        'https://www.newegg.ca/evga-geforce-rtx-3070-08g-p5-3755-kr/p/N82E16814487530',
    },
    {
      brand: 'evga',
      itemNumber: '14-487-532',
      model: 'ftw3 ultra',
      series: '3070',
      url:
        'https://www.newegg.ca/evga-geforce-rtx-3070-08g-p5-3767-kr/p/N82E16814487532',
    },
    {
      brand: 'pny',
      itemNumber: '14-133-811',
      model: 'xlr8 revel',
      series: '3070',
      url:
        'https://www.newegg.ca/pny-geforce-rtx-3070-vcg30708tfxppb/p/N82E16814133811',
    },
    {
      brand: 'evga',
      itemNumber: '14-487-529',
      model: 'xc3',
      series: '3070',
      url:
        'https://www.newegg.ca/evga-geforce-rtx-3070-08g-p5-3753-kr/p/N82E16814487529',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-471',
      model: 'tuf oc',
      series: '3060ti',
      url:
        'https://www.newegg.ca/asus-geforce-rtx-3060-ti-tuf-rtx3060ti-o8g-gaming/p/N82E16814126471',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-377',
      model: 'gaming oc',
      series: '3060ti',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3060-ti-gv-n306tgaming-oc-8gd/p/N82E16814932377',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-375',
      model: 'aorus master',
      series: '3060ti',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3060-ti-gv-n306taorus-m-8gd/p/N82E16814932375',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-468',
      model: 'dual oc',
      series: '3060ti',
      url:
        'https://www.newegg.ca/asus-geforce-rtx-3060-ti-dual-rtx3060ti-o8g/p/N82E16814126468',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-470',
      model: 'strix oc',
      series: '3060ti',
      url:
        'https://www.newegg.ca/asus-geforce-rtx-3060-ti-rog-strix-rtx3060ti-o8g-gaming/p/N82E16814126470',
    },
    {
      brand: 'evga',
      itemNumber: '14-487-535',
      model: 'xc gaming',
      series: '3060ti',
      url:
        'https://www.newegg.ca/evga-geforce-rtx-3060-ti-08g-p5-3663-kr/p/N82E16814487535',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-376',
      model: 'gaming oc pro',
      series: '3060ti',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3060-ti-gv-n306tgamingoc-pro-8gd/p/N82E16814932376',
    },
    {
      brand: 'evga',
      itemNumber: '14-487-537',
      model: 'ftw3 ultra',
      series: '3060ti',
      url:
        'https://www.newegg.ca/evga-geforce-rtx-3060-ti-08g-p5-3667-kr/p/N82E16814487537',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-612',
      model: 'ventus 2x oc',
      series: '3060ti',
      url:
        'https://www.newegg.ca/msi-geforce-rtx-3060-ti-rtx-3060-ti-ventus-2x-oc/p/N82E16814137612',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-474',
      model: 'ko',
      series: '3060ti',
      url:
        'https://www.newegg.ca/asus-geforce-rtx-3060-ti-ko-rtx3060ti-o8g-gaming/p/N82E16814126474',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-611',
      model: 'gaming x trio',
      series: '3060ti',
      url:
        'https://www.newegg.ca/msi-geforce-rtx-3060-ti-rtx-3060-ti-gaming-x-trio/p/N82E16814137611',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-378',
      model: 'eagle oc',
      series: '3060ti',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3060-ti-gv-n306teagle-oc-8gd/p/N82E16814932378',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-379',
      model: 'eagle',
      series: '3060ti',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3060-ti-gv-n306teagle-8gd/p/N82E16814932379',
    },
    {
      brand: 'zotac',
      itemNumber: '14-500-506',
      model: 'twin edge',
      series: '3060ti',
      url:
        'https://www.newegg.ca/zotac-geforce-rtx-3060-ti-zt-a30610e-10m/p/N82E16814500506',
    },
    {
      brand: 'zotac',
      itemNumber: '14-500-507',
      model: 'twin edge oc',
      series: '3060ti',
      url:
        'https://www.newegg.ca/zotac-geforce-rtx-3060-ti-zt-a30610h-10m/p/N82E16814500507',
    },
    {
      brand: 'asus',
      model: 'dual',
      series: '3060ti',
      url:
        'https://www.newegg.ca/asus-geforce-rtx-3060-ti-dual-rtx3060ti-8g/p/N82E16814126480',
    },
    {
      brand: 'msi',
      model: 'suprim',
      series: '3070',
      url:
        'https://www.newegg.ca/msi-geforce-rtx-3070-rtx-3070-suprim-8g/p/N82E16814137623',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce',
      series: '3080',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3080-gv-n3080aorusx-w-10gd/p/N82E16814932372',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce wb',
      series: '3080',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3080-gv-n3080aorusx-wb-10gd/p/N82E16814932371',
    },
    {
      brand: 'asus',
      model: 'strix white',
      series: '3080',
      url:
        'https://www.newegg.ca/asus-geforce-rtx-3080-rog-strix-rtx3080-o10g-white/p/N82E16814126483',
    },
    {
      brand: 'asus',
      model: 'ekwb',
      series: '3090',
      url:
        'https://www.newegg.ca/asus-geforce-rtx-3090-rtx3090-24g-ek/p/N82E16814126485',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce',
      series: '3090',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3090-gv-n3090aorusx-w-24gd/p/N82E16814932387',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce wb',
      series: '3090',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3090-gv-n3090aorusx-wb-24gd/p/N82E16814932386',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3090',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3090-gv-n3090aorus-x-24gd/p/N82E16814932340',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3090',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3090-gv-n3090vision-oc-24gd/p/N82E16814932365',
    },
    {
      brand: 'asus',
      model: 'strix white',
      series: '3090',
      url:
        'https://www.newegg.ca/asus-geforce-rtx-3090-rog-strix-rtx3090-o24g-white/p/N82E16814126482',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3090',
      url:
        'https://www.newegg.ca/gigabyte-geforce-rtx-3090-gv-n3090eagle-24gd/p/N82E16814932366',
    },
    {
      brand: 'amd',
      itemNumber: '19-113-663',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.newegg.ca/amd-ryzen-9-5950x/p/N82E16819113663',
    },
    {
      brand: 'amd',
      itemNumber: '19-113-664',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.newegg.ca/amd-ryzen-9-5900x/p/N82E16819113664',
    },
    {
      brand: 'amd',
      itemNumber: '19-113-665',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.newegg.ca/amd-ryzen-7-5800x/p/N82E16819113665',
    },
    {
      brand: 'amd',
      itemNumber: '19-113-666',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.newegg.ca/amd-ryzen-5-5600x/p/N82E16819113666',
    },
    {
      brand: 'msi',
      model: 'amd reference',
      series: 'rx6800xt',
      url:
        'https://www.newegg.ca/msi-radeon-rx-6800-xt-rx-6800-xt-16g/p/N82E16814137607',
    },
    {
      brand: 'msi',
      model: 'amd reference',
      series: 'rx6800',
      url:
        'https://www.newegg.ca/msi-radeon-rx-6800-rx-6800-16g/p/N82E16814137608',
    },
    {
      brand: 'asus',
      model: 'amd reference',
      series: 'rx6800xt',
      url:
        'https://www.newegg.ca/asus-radeon-rx-6800-xt-rx6800xt-16g/p/N82E16814126472',
    },
    {
      brand: 'asus',
      model: 'amd reference',
      series: 'rx6800',
      url:
        'https://www.newegg.ca/asus-radeon-rx-6800-rx6800-16g/p/N82E16814126473',
    },
    {
      brand: 'asrock',
      model: 'amd reference',
      series: 'rx6800xt',
      url:
        'https://www.newegg.ca/asrock-radeon-rx-6800-xt-rx-6800-xt-16g/p/N82E16814930045',
    },
    {
      brand: 'asrock',
      model: 'amd reference',
      series: 'rx6800',
      url:
        'https://www.newegg.ca/asrock-radeon-rx-6800-rx-6800-16g/p/N82E16814930046',
    },
    {
      brand: 'gigabyte',
      model: 'amd reference',
      series: 'rx6800xt',
      url:
        'https://www.newegg.ca/gigabyte-radeon-rx-6800-xt-gv-r68xt-16gc-b/p/N82E16814932373',
    },
    {
      brand: 'gigabyte',
      model: 'amd reference',
      series: 'rx6800',
      url:
        'https://www.newegg.ca/gigabyte-radeon-rx-6800-gv-r68-16gc-b/p/N82E16814932374',
    },
    {
      brand: 'sapphire',
      model: 'amd reference',
      series: 'rx6800xt',
      url:
        'https://www.newegg.ca/sapphire-radeon-rx-6800-xt-21304-01-20g/p/N82E16814202388',
    },
    {
      brand: 'sapphire',
      model: 'amd reference',
      series: 'rx6800',
      url:
        'https://www.newegg.ca/sapphire-radeon-rx-6800-21305-01-20g/p/N82E16814202389',
    },
    {
      brand: 'gigabyte',
      model: 'amd reference',
      series: 'rx6800xt',
      url:
        'https://www.newegg.com/gigabyte-radeon-rx-6800-xt-gv-r68xt-16gc-b/p/N82E16814932373',
    },
    {
      brand: 'sapphire',
      model: 'nitro+',
      series: 'rx6800',
      url:
        'https://www.newegg.ca/sapphire-radeon-rx-6800-11305-01-20g/p/N82E16814202392',
    },
    {
      brand: 'asrock',
      model: 'phantom gaming',
      series: 'rx6800xt',
      url:
        'https://www.newegg.ca/asrock-radeon-rx-6800-xt-rx6800xt-pgd-16go/p/N82E16814930049',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: 'rx6800xt',
      url:
        'https://www.newegg.ca/asus-radeon-rx-6800-xt-tuf-rx6800xt-o16g-gaming/p/N82E16814126476',
    },
    {
      brand: 'xfx',
      model: 'merc',
      series: 'rx6800xt',
      url:
        'https://www.newegg.ca/xfx-radeon-rx-6800-xt-rx-68xtacbd9/p/N82E16814150844',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: 'rx6800',
      url:
        'https://www.newegg.ca/asus-radeon-rx-6800-rog-strix-rx6800-o16g-gaming/p/N82E16814126477',
    },
    {
      brand: 'asrock',
      model: 'challenger',
      series: 'rx6800',
      url:
        'https://www.newegg.ca/asrock-radeon-rx-6800-rx6800-clp-16go/p/N82E16814930047',
    },
    {
      brand: 'sapphire',
      model: 'nitro+ se',
      series: 'rx6800xt',
      url:
        'https://www.newegg.ca/sapphire-radeon-rx-6800-xt-11304-01-20g/p/N82E16814202390',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: 'rx6800xt',
      url:
        'https://www.newegg.ca/asus-radeon-rx-6800-xt-rog-strix-lc-rx6800xt-o16g-gaming/p/N82E16814126475',
    },
    {
      brand: 'powercolor',
      model: 'red devil',
      series: 'rx6800xt',
      url:
        'https://www.newegg.ca/powercolor-radeon-rx-6800-xt-axrx-6800xt-16gbd6-2dhce-oc/p/N82E16814131767',
    },
    {
      brand: 'sapphire',
      model: 'nitro+',
      series: 'rx6800xt',
      url:
        'https://www.newegg.ca/sapphire-radeon-rx-6800-xt-11304-02-20g/p/N82E16814202391',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: 'rx6800',
      url:
        'https://www.newegg.ca/asus-radeon-rx-6800-tuf-rx6800-o16g-gaming/p/N82E16814126478',
    },
    {
      brand: 'asrock',
      model: 'taichi',
      series: 'rx6800xt',
      url:
        'https://www.newegg.ca/asrock-radeon-rx-6800-xt-rx6800xt-tcx-16go/p/N82E16814930050',
    },
    {
      brand: 'asrock',
      model: 'phantom gaming',
      series: 'rx6800',
      url:
        'https://www.newegg.ca/asrock-radeon-rx-6800-rx6800-pgd-16go/p/N82E16814930048',
    },
    {
      brand: 'sapphire',
      model: 'amd reference',
      series: 'rx6900xt',
      url:
        'https://www.newegg.ca/sapphire-radeon-rx-6900-xt-21308-01-20g/p/N82E16814202393',
    },
    {
      brand: 'asrock',
      model: 'amd reference',
      series: 'rx6900xt',
      url:
        'https://www.newegg.ca/asrock-radeon-rx-6900-xt-rx6900xt-16g/p/N82E16814930051',
    },
    {
      brand: 'gigabyte',
      model: 'amd reference',
      series: 'rx6900xt',
      url:
        'https://www.newegg.ca/gigabyte-radeon-rx-6900-xt-gv-r69xt-16gc-b/p/N82E16814932384',
    },
    {
      brand: 'msi',
      model: 'amd reference',
      series: 'rx6900xt',
      url:
        'https://www.newegg.ca/msi-radeon-rx-6900-xt-rx-6900-xt-16g/p/N82E16814137618',
    },
    {
      brand: 'powercolor',
      model: 'amd reference',
      series: 'rx6900xt',
      url:
        'https://www.newegg.ca/powercolor-radeon-rx-6900-xt-axrx-6900xt-16gbd6-m2dhc/p/N82E16814131774',
    },
    {
      brand: 'sapphire',
      model: 'nitro+',
      series: 'rx6900xt',
      url:
        'https://www.newegg.ca/sapphire-radeon-rx-6900-xt-11308-01-20g/p/N82E16814202395',
    },
  ],
  name: 'newegg-ca',
  realTimeInventoryLookup: async (itemNumber: string) => {
    const request_url =
      'https://www.newegg.ca/product/api/ProductRealtime?ItemNumber=' +
      itemNumber;
    const response = await fetch(request_url);
    const response_json = await response.json();
    return (
      response_json.MainItem !== undefined &&
      response_json.MainItem.Instock === true
    );
  },
};

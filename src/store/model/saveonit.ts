import {Store} from './store';

export const SaveOnIt: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container: '.supplier',
      text: ['In Stock', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    maxPrice: {
      container: '.money',
      euroFormat: false,
    },
    outOfStock: {
      container: '.supplier',
      text: ['Pre-Order', 'On Order'],
    },
  },
  links: [
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url: 'https://www.saveonit.com.au/products/productdetails/65165506',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.saveonit.com.au/products/productdetails/65165507',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3080',
      url: 'https://www.saveonit.com.au/products/productdetails/65165536',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.saveonit.com.au/products/productdetails/65165879',
    },
    {
      brand: 'galax',
      model: 'sg oc',
      series: '3080',
      url: 'https://www.saveonit.com.au/products/productdetails/65165599',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.saveonit.com.au/products/productdetails/65165501',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.saveonit.com.au/products/productdetails/65165504',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3080',
      url: 'https://www.saveonit.com.au/products/productdetails/65165520',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3080',
      url: 'https://www.saveonit.com.au/products/productdetails/65165519',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3080',
      url: 'https://www.saveonit.com.au/products/productdetails/65165578',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce',
      series: '3080',
      url: 'https://www.saveonit.com.au/products/productdetails/65165691',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce wb',
      series: '3080',
      url: 'https://www.saveonit.com.au/products/productdetails/65165692',
    },
    {
      brand: 'inno3d',
      model: 'ichill x4',
      series: '3080',
      url: 'https://www.saveonit.com.au/products/productdetails/65165575',
    },
    {
      brand: 'inno3d',
      model: 'ichill x3',
      series: '3080',
      url: 'https://www.saveonit.com.au/products/productdetails/65165564',
    },
    {
      brand: 'inno3d',
      model: 'twin x2 oc',
      series: '3080',
      url: 'https://www.saveonit.com.au/products/productdetails/65165576',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3080',
      url: 'https://www.saveonit.com.au/products/productdetails/65165827',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.saveonit.com.au/products/productdetails/65165514',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.saveonit.com.au/products/productdetails/65165505',
    },
    {
      brand: 'asrock',
      model: 'phantom gaming',
      series: 'rx6900xt',
      url: 'https://www.saveonit.com.au/product/asrock-rx6900xt-pgd-16go-rx6900xt-16g-phantom-gaming-d',
    },
    {
      brand: 'gigabyte',
      model: 'amd reference',
      series: 'rx6900xt',
      url: 'https://www.saveonit.com.au/product/gigabyte-gv-r69xt-16gc-b-rx6900xt-16gb-video-card',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.saveonit.com.au/product/amd-ryzen-9-5950x-16-core-3-4-ghz-cpu-100-100000059wof',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.saveonit.com.au/product/amd-ryzen-9-5900x-12-core-3-7-ghz-cpu-100-100000061wof',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.saveonit.com.au/product/amd-ryzen-7-5800x-8-core-3-8ghz-cpu-100-100000063wof',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.saveonit.com.au/product/amd-ryzen-5-5600x-6-core-3-7-ghz-cpu-100-100000065box',
    },
  ],
  name: 'saveonit',
  country: 'AU',
};

import {Store} from './store';

export const RosmanMelb: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container:
        '#Availability > div > table > tbody > tr:nth-child(2) > td:nth-child(1)',
      text: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    maxPrice: {
      container: 'span.price.price--withTax.price--main',
      euroFormat: false,
    },
    outOfStock: {
      container:
        '#Availability > div > table > tbody > tr:nth-child(2) > td:nth-child(1)',
      text: ['ETA', 'Call Us'],
    },
  },
  links: [
    {
      brand: 'asus',
      model: 'tuf',
      series: '3090',
      url: 'https://rosmancomputers.com.au/gigabyte-nvidia-gv-n3090turbo-24gd1/',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url: 'https://rosmancomputers.com.au/asus-nvidia-geforce-rtx-3080-10gb-2100mhz-core-clock-4750mhz-memory-clock/',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url: 'https://rosmancomputers.com.au/asus-nvidia-tuf-gaming-geforce-rtx-3080-10gb-buffed-up-design-with-chart-topping-thermal-performance/',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3080',
      url: 'https://rosmancomputers.com.au/asus-nvidia-rog-strix-geforce-rtx-3080-buffed-up-design-with-chart-topping-thermal-performance/',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080',
      url: 'https://rosmancomputers.com.au/gigabyte-geforce-rtx-3080-eagle-oc-10gb/',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3080',
      url: 'https://rosmancomputers.com.au/gigabyte-nvidia-gv-n3080aorusm-10gd1/',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3080',
      url: 'https://rosmancomputers.com.au/aorus-geforce-rtx-3080-xtreme-10g/',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce wb',
      series: '3080',
      url: 'https://rosmancomputers.com.au/gigabyte-aorus-geforce-rtx-3080-xtreme-waterforce-10gb-video-card/',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce wb',
      series: '3080',
      url: 'https://rosmancomputers.com.au/gigabyte-gv-n3080aorusx-wb-10gd-nvidia/',
    },
    {
      brand: 'inno3d',
      model: 'ichill x4',
      series: '3080',
      url: 'https://rosmancomputers.com.au/inno3d-nvidia-rtx-3080-ichill-x4-mhz-10gb-gddr6x-3xdp-1xhdmi-atx-4xfans-750w-3-years-warranty/',
    },
    {
      brand: 'inno3d',
      model: 'ichill x3',
      series: '3080',
      url: 'https://rosmancomputers.com.au/inno3d-nvidia-rtx-3080-ichill-x3-mhz-10gb-gddr6x-3xdp-1xhdmi-atx-3xfans-750w-3-years-warranty/',
    },
    {
      brand: 'inno3d',
      model: 'twin x2 oc',
      series: '3080',
      url: 'https://rosmancomputers.com.au/inno3d-nvidia-rtx-3080-twin-x2-oc-mhz-10gb-gddr6x-3xdp-1xhdmi-atx-3xfans-750w-3-years-warranty/',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://rosmancomputers.com.au/amd-ryzen-9-5950x-16-core-32-threads-max-freq-4-9ghz-72mb-cache-socket-am4-105w-without-cooler/',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://rosmancomputers.com.au/amd-ryzen-9-5900x-12-core-24-threads-max-freq-4-8ghz-70mb-cache-socket-am4-105w-without-cooler-100-100000061wo/',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://rosmancomputers.com.au/amd-ryzen-5-5600x-6-core-12-threads-max-freq-4-6ghz-35mb-cache-socket-am4-105w-with-wraith-stealth-cooler/',
    },
  ],
  name: 'rosman-melb',
  country: 'AU',
};

import {Store} from './store';

export const Futurex: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.productPriceInner',
      text: ['Auf Lager'],
    },
    maxPrice: {
      container: '.price',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.notavail',
        text: ['Aktuell nicht verfügbar'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.future-x.de/corsair-vengeance-lpx-ddr4-32-gb%3A-2-x-16-gb-dimm-288-pin-3200-mhz-pc4-25600-cl16-135-v-ungepuffert-nicht-ecc-schwarz-p-494897',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.future-x.de/asus-vga-10gb-rtx3080-tuf-gaming-oc-3xdp-2xhdmi-geforce-rtx-3080-grafikkarte-pci-express-10240-mb-displayport-eingang-p-8649614',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3080',
      url: 'https://www.future-x.de/asus-rog-strix-geforce-rtx-3080-10gb-grafikkarte-pci-express-10240-mb-displayport-eingang-p-8649611',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.future-x.de/msi-geforce-rtx-3080-gaming-x-tr-grafikkarte-10240-mb-p-8649610',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.future-x.de/msi-geforce-rtx-3080ventus-3x10g-oc-grafikkarte-10240-mb-p-8649609',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3080',
      url: 'https://www.future-x.de/zotac-gaming-geforce-rtx-3080-amp-holo-memory-10gb-gddr6x-320-bit-p-8649625',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3080',
      url: 'https://www.equippr.de/zotac-geforce-rtx-3080-trinity-10-gb-gddr6x-retail-2060389.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus elite',
      series: 'rx6700xt',
      url: 'https://www.future-x.de/gigabyte-radeon-rx6700xt-aorus-elite-12gb-gddr6-2xhdmi-2xd-12288-mb-p-8808313',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: 'rx6700xt',
      url: 'https://www.future-x.de/gigabyte-radeon-rx-6700-xt-gaming-oc-12gb-gddr6-2xdp-1xhdmi-grafikkarte-12288-mb-p-8787855/',
    },
    {
      brand: 'sapphire',
      model: 'nitro+',
      series: 'rx6700xt',
      url: 'https://www.future-x.de/sapphire-amd-radeon-rx-6700-xt-gaming-oc-12gb-gddr6-hdmi-12288-mb-p-8808436/',
    },
  ],
  name: 'futurex',
  country: 'DE',
};

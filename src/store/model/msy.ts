import {Store} from './store';

export const Msy: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container:
        '.product-collateral > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > b:nth-child(1)',
      text: ['In Stock'],
    },
    maxPrice: {
      container:
        '#product-details-form > div > div.product-essential > div.overview > div.prices > div > span',
      euroFormat: false,
    },
    outOfStock: {
      container: 'td.spec-name:nth-child(2)',
      text: ['Out of Stock'],
    },
  },
  links: [
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url: 'https://www.msy.com.au/asus-nvidia-tuf-rtx3080-10g-gaming-10gb-rtx-3080-tuf-gaming',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.msy.com.au/asus-nvidia-tuf-rtx3080-o10g-gaming-10gb-rtx-3080-tuf-gaming-vga-card',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3080',
      url: 'https://www.msy.com.au/asus-nvidia-geforce-rog-strix-rtx3080-o10g-gaming-10gb-rtx-3080-rog-strix-vga-card',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3080',
      url: 'https://www.msy.com.au/gigabyte-nvidia-n3080eagle-oc-10gd-10gb-rtx-3080-eagle-oc-pci-e-vga-card',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.msy.com.au/gigabyte-nvidia-n3080gaming-oc-10gd-10gb-rtx-3080-gaming-oc-pci-e-vga-card',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3080',
      url: 'https://www.msy.com.au/gigabyte-nvidia-geforce-n3080vision-oc-10gd-10gb-rtx-3080-vision-oc-pci-e-vga-card',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3080',
      url: 'https://www.msy.com.au/msi-nvidia-geforce-rtx-3080-suprim-x-10g-10gb-rtx-3080-suprim-x-pci-e-vga-card',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.msy.com.au/msi-nvidia-geforce-rtx-3080-gaming-x-trio-10g-10gb-rtx-3080-gaming-x-trio-pci-e-vga-card',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.msy.com.au/msi-nvidia-geforce-rtx-3080-ventus-3x-10g-oc-10gb-rtx-3080-ventus-3x-oc-pci-e-vga-card',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3090',
      url: 'https://www.msy.com.au/asus-nvidia-geforce-tuf-rtx3090-o24g-gaming-24gb-rtx-3090-tuf-gaming-oc-pci-e-vga-card',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3090',
      url: 'https://www.msy.com.au/gigabyte-nvidia-geforce-n3090aorus-m-24gd-24gb-rtx-3090-aorus-master-pci-e-vga-card',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3090',
      url: 'https://www.msy.com.au/gigabyte-nvidia-geforce-n3090aorus-x-24gd-24gb-rtx-3090-aorus-xtreme-pci-e-vga-card',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3090',
      url: 'https://www.msy.com.au/gigabyte-nvidia-n3090eagle-oc-24gd-24gb-rtx-3090-eagle-oc-pci-e-vga-card',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.msy.com.au/gigabyte-nvidia-n3090gaming-oc-24gd-24gb-rtx-3090-gaming-oc-pci-e-vga-card',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3090',
      url: 'https://www.msy.com.au/gigabyte-nvidia-geforce-n3090vision-oc-24gd-24gb-rtx-3090-vision-oc-vga-card',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3090',
      url: 'https://www.msy.com.au/msi-nvidia-geforce-rtx-3090-ventus-3x-24g-oc-24gb-rtx-3090-ventus-3x-oc-pci-e-vga-card',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3090',
      url: 'https://www.msy.com.au/msi-nvidia-geforce-rtx-3090-gaming-x-trio-24g-24gb-rtx-3090-gaming-x-trio-pci-e-vga-card',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3090',
      url: 'https://www.msy.com.au/msi-nvidia-geforce-rtx-3090-suprim-x-24g-24gb-rtx-3090-suprim-x-pci-e-vga-card',
    },
    {
      brand: 'asrock',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.msy.com.au/asrock-radeon-radeon-rx6800-16g-16gb-rx-6800-pci-e-vga-card',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: 'rx6800',
      url: 'https://www.msy.com.au/msi-radeon-rx-6800-gaming-x-trio-16g-16gb-rx-6800-pci-e-vga-card',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.msy.com.au/amd-ryzen-9-5950x-100-100000059wof-up-to-49ghz-base-clock-34ghzam416-cores32-threads8mb105w-unlocked-boxed-cpu-without-cpu-cooler',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.msy.com.au/amd-ryzen-9-5900x-100-100000061wof-up-to-48ghz-base-clock-37ghzam412-cores24-threads64mb105w-unlocked-boxed-cpu-without-cpu-cooler',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.msy.com.au/amd-ryzen-7-5800x-100-100000063wof-up-to-47ghz-base-clock-38ghzam48-cores16-threads32mb105w-unlocked-boxed-cpu-without-cpu-cooler',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.msy.com.au/amd-ryzen-5-5600x-100-100000065box-up-to-46ghz-base-clock-37ghzam46-cores12-threads32mb65w-unlocked-boxed-cpu-without-cpu-cooler',
    },
  ],
  name: 'msy',
  country: 'AU',
};

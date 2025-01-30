import {Store} from './store';

export const HarrisTechnology: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container:
        '#content_tab-description > div.desc2 > p.product-availability',
      text: ['in stock'],
    },
    outOfStock: {
      container:
        '#content_tab-description > div.desc2 > p.product-availability',
      text: ['Please call or e-mail us for availability'],
    },
  },
  links: [
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.ht.com.au/part/BY216-Gigabyte-GeForce-RTX-3080-GAMING-OC-10GB-Video-Card/detail.hts',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3080',
      url: 'https://www.ht.com.au/part/BZ284-Gigabyte-nVidia-GeForce-RTX-3080-VISION-OC-10G-GDDR6X-1800-MHz-PCIE4.0x16-7680x432060Hz-3xDP-2xHDMI/detail.hts',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3080',
      url: 'https://www.ht.com.au/part/BZ346-Gigabyte-nVidia-GeForce-RTX-3080-MASTER-AORUS-10G-GDDR6X-1845-MHz-3xDP-3xHDMI/detail.hts',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.ht.com.au/part/BY193-MSI-GeForce-RTX-3080-GAMING-X-TRIO-10GB-Video-Card/detail.hts',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.ht.com.au/part/CA093-AMD-Ryzen-5-5600X-6-Core-3.7-GHz-Desktop-Processor-with-AM4-Socket-65W-Thermal-Design-Power/detail.hts',
    },
  ],
  name: 'harristechnology',
  country: 'AU',
};

import {Store} from './store';

export const GameES: Store = {
  currency: '€',
  labels: {
    inStock: {
      container:
        '#body > div.main.container > div > div > section.right-side.product-quick-actions > div > h4 > span',
      text: ['Comprar'],
    },
    maxPrice: {
      container:
        '#body > div.main.container > div > div > section.right-side.product-quick-actions > div > div',
      euroFormat: true,
    },
    outOfStock: {
      container:
        '#body > div.main.container > div > div > section.right-side.product-quick-actions > div > h4 > span',
      text: ['Agotado'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.game.es/COMPONENTES/MEMORIA/PC-GAMING/KINGSTON-TECHNOLOGY-VALUERAM-KCP426ND8-16-MODULO-DE-MEMORIA-16-GB-1-X-16-GB-DDR4-2666-MHZ/V00A4K',
    },
    // 3090
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3090-GAMING-OC-24G-TARJETA-GRAFICA-GAMING/187999',
    },
    {
      brand: 'pny',
      model: 'xlr8 revel',
      series: '3090',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/PNY-GEFORCE-RTX-3090-24GB-XLR8-EPIC-X-RGB-TRIPLE-FAN-TARJETA-GRAFICA-GAMING/V0P2XH',
    },
    {
      brand: 'palit',
      model: 'gaming pro oc',
      series: '3090',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/PALIT-RTX-3090-GAMING-PRO-OC-24GB-GDDR6X-TARJETA-GRAFICA/185004',
    },
    // 3080
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3080',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3080-MASTER-10GB-GDDR6X-TARJETA-GRAFICA-GAMING/184796',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3080',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/PALIT-RTX-3080-GAMING-PRO-10GB-GDDR6X-TARJETA-GRAFICA/185006',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3080-GAMING-OC-10GB-GDDR6X-TARJETA-GRAFICA-GAMING/184792',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3080',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-AOURUS-GEFORCE-RTX-3080-VISION-OC-10GB-GDDR6X-TARJETA-GRAFICA-GAMING/184797',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/MSI-RTX-3080-GAMING-X-TRIO-10G-TARJETA-GRAFICA-NVIDIA-GEFORCE-RTX-3080-10-GB-GDDR6X/V0P9YG',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3080-EAGLE-OC-10GB-GDDR6X-TARJETA-GRAFICA-GAMING/184791',
    },
    // 3070
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3070-GAMING-OC-8GB-GDDR6-TARJETA-GRAFICA-GAMING/184794',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3070',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3070-EAGLE-OC-8GB-GDDR6-TARJETA-GRAFICA-GAMING/184793',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc white',
      series: '3070',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/ZOTAC-GAMING-GEFORCE-RTX-3070-TWIN-EDGE-OC-WHITE-EDITION-NVIDIA-8-GB-GDDR6/V0PBLE',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3070',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3070-VISION-OC-8GB-GDDR6-TARJETA-GRAFICA-GAMING/184795',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3070',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/PALIT-RTX-3070-GAMING-PRO-8GB-GDDR6-TARJETA-GRAFICA/185005',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3070',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/MSI-RTX3070-GAMING-X-TRIO-NVIDIA-GEFORCE-RTX-3070-8-GB-GDDR6/V0PA1K',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3070',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/MSI-RTX3070-VENTUS-3X-OC-NVIDIA-GEFORCE-RTX-3070-8-GB-GDDR6/V0PA1J',
    },
    // 3060ti
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3060ti',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-AORUS-GEFORCE-RTX-3060TI-MASTER-8GB-DDR6X-TARJETA-GRAFICA/185822',
    },
    // 3060
    {
      brand: 'pny',
      model: 'xlr8 revel epic x',
      series: '3060',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-AORUS-GEFORCE-RTX-3060TI-MASTER-8GB-DDR6X-TARJETA-GRAFICA/185822',
    },
    {
      brand: 'gainward',
      model: 'ghost',
      series: '3060',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GAINWARD-GEFORCE-RTX-3060-GHOST-12GB-TARJETA-GRAFICA-GAMING/188176',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3060',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3060-WINDFORCE-VISION-OC-12GB-GDDR6-RGB-TARJETA-GRAFICA-GAMING/187676',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3060-WINDFORCE-GAMING-OC-12GB-GDDR6-RGB-TARJETA-GRAFICA-GAMING/187675',
    },
    {
      brand: 'pny',
      model: 'uprising',
      series: '3060',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/PNY-GEFORCE-RTX3060-12GB-UPRISING-DUAL-FAN-EDITION-TARJETA-GRAFICA-GAMING/V0Q1DK',
    },
  ],
  name: 'game-es',
  country: 'ES',
};

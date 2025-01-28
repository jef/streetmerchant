import {Store} from './store';

export const Arlt: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.articleDesc .shippingtext',
      text: ['auf Lager', 'Lieferzeit 2-3 Werktage', 'Ware im Zulauf'],
    },
    maxPrice: {
      container: '.articleprice .price',
      euroFormat: true,
    },
    outOfStock: {
      container: '.articleDesc .shippingtext',
      text: ['Neuer Artikel in Kürze verfügbar', 'Liefertermin unbekannt'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.arlt.com/ASUS-GeForce-GTX1650-Super-TUF-GTX1650S-O4G-GAMING.html',
    },
    {
      brand: 'asus',
      model: 'dual',
      series: '3070',
      url: 'https://www.arlt.com/Gaming/Gaming-Hardware/Grafikkarten/ASUS-Dual-GeForce-RTX-3070.html',
    },
    {
      brand: 'asus',
      model: 'dual oc',
      series: '3070',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Grafikkarten/NVIDIA/ASUS-Dual-GeForce-RTX-3070-OC.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3070',
      url: 'https://www.arlt.com/Gaming/Gaming-Hardware/Grafikkarten/ASUS-TUF-Gaming-GeForce-RTX-3070-OC.html',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3070',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Grafikkarten/NVIDIA/GeForce-RTX/RTX-3070/ASUS-ROG-Strix-GeForce-RTX-3070.html',
    },
    {
      brand: 'msi',
      model: 'ventus 2x oc',
      series: '3070',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Grafikkarten/NVIDIA/GeForce-RTX/RTX-3070/MSI-GeForce-RTX-3070-Ventus-2X-OC.html',
    },
    {
      brand: 'gainward',
      model: 'phoenix',
      series: '3070',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Grafikkarten/NVIDIA/GeForce-RTX/Gainward-GeForce-RTX-3070-Phoenix.html',
    },
    {
      brand: 'gainward',
      model: 'phoenix gs',
      series: '3070',
      url: 'https://www.arlt.com/Gaming/Gaming-Hardware/Gainward-GeForce-RTX-3070-Phoenix-GS.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Grafikkarten/ASUS-TUF-Gaming-GeForce-RTX-3080-OC.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Grafikkarten/NVIDIA/GeForce-RTX/RTX-3080/MSI-GeForce-RTX-3080-Ventus-3X-OC.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3090',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Grafikkarten/NVIDIA/GeForce-RTX/RTX-3090/ASUS-TUF-Gaming-GeForce-RTX-3090-OC.html',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3090',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Grafikkarten/NVIDIA/GeForce-RTX/RTX-3090/ASUS-ROG-Strix-GeForce-RTX-3090-OC.html',
    },
    {
      brand: 'gainward',
      model: 'phoenix gs',
      series: '3090',
      url: 'https://www.arlt.com/Gaming/Gaming-Hardware/Gainward-GeForce-RTX-3090-Phoenix-GS.html',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Prozessoren-arlt/AMD-Ryzen-5-5600X-boxed.html',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Prozessoren-arlt/AMD-Ryzen-7-5800X-boxed.html',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Prozessoren-arlt/AMD-Ryzen-9-5900X-boxed.html',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Prozessoren-arlt/AMD-Ryzen-9-5950X-boxed.html',
    },
    {
      brand: 'asus',
      model: 'dual',
      series: 'rx6700xt',
      url: 'https://www.arlt.com/Gaming/Gaming-Hardware/Grafikkarten/ASUS-Radeon-RX-6700-XT-Dual.html',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: 'rx6700xt',
      url: 'https://www.arlt.com/Gaming/Gaming-Hardware/Grafikkarten/ASUS-ROG-Strix-Radeon-RX-6700-XT-OC.html',
    },
    {
      brand: 'sapphire',
      model: 'nitro+',
      series: 'rx6700xt',
      url: 'https://www.arlt.com/Gaming/Gaming-Hardware/Grafikkarten/Sapphire-Nitro-Radeon-RX-6700-XT.html',
    },
  ],
  name: 'arlt',
  country: 'DE',
};

import {Store} from './store';

export const NovoAtalho: Store = {
  currency: '€',
  labels: {
    inStock: {
      container:
        'div.line > div.pull-left > div.stockpadding > span.stock > b > a',
      text: ['DISPONÍVEL', 'POUCAS UNIDADES'],
    },
    outOfStock: {
      container:
        'div.line > div.pull-left > div.stockpadding > span.stock > b > a',
      text: ['INDISPONÍVEL'],
    },
    maxPrice: {
      container:
        'div.line > div.pull-right > div.text-right > span.product-price',
      euroFormat: true,
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.novoatalho.pt/pt-PT/produto/27318/Cabo-HDMI-p-MiniHDMI-Gembird-1-8Mtr/CC-HDMI4C-6.html',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3090',
      url: 'https://www.novoatalho.pt/pt-PT/produto/44484/Placa-Grafica-Asus-GeForce-RTX-3090-ROG-STRIX-24GB/90YV0F90-M0NM00.html',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3090',
      url: 'https://www.novoatalho.pt/pt-PT/produto/44485/Placa-Grafica-Asus-GeForce-RTX-3090-ROG-STRIX-OC-24GB/90YV0F93-M0NM00.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3090',
      url: 'https://www.novoatalho.pt/pt-PT/produto/44319/Placa-Grafica-Asus-GeForce-RTX-3090-TUF-GAMING-OC-24GB/90YV0FD1-M0NM00.html',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3090',
      url: 'https://www.novoatalho.pt/pt-PT/produto/45582/Placa-Grafica-EVGA-GeForce-RTX-3090-FTW3-ULTRA-GAMING-24GB/24G-P5-3987-KR.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3090',
      url: 'https://www.novoatalho.pt/pt-PT/produto/44316/Placa-Grafica-MSI-GeForce-RTX-3090-GAMING-X-TRIO-24GB/912-V388-011.html',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3090',
      url: 'https://www.novoatalho.pt/pt-PT/produto/45819/Placa-Grafica-MSI-GeForce-RTX-3090-SUPRIM-X-24GB/912-V388-010.html',
    },
    {
      brand: 'asus',
      model: 'dual oc',
      series: '3070',
      url: 'https://www.novoatalho.pt/pt-PT/produto/45331/Placa-Grafica-Asus-GeForce-RTX-3070-DUAL-OC-8GB/90YV0FQ0-M0NA00.html',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3070',
      url: 'https://www.novoatalho.pt/pt-PT/produto/45750/Placa-Grafica-Asus-GeForce-RTX-3070-TUF-GAMING-OC-8GB/90YV0FQ6-M0NA00.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.novoatalho.pt/pt-PT/produto/45862/Placa-Grafica-Gigabyte-GeForce-RTX-3070-Gaming-OC-8GB/GV-N3070GAM-OC-8G.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3070',
      url: 'https://www.novoatalho.pt/pt-PT/produto/45334/Placa-Grafica-MSI-GeForce-RTX-3070-GAMING-X-TRIO-8GB/912-V390-006.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x',
      series: '3060',
      url: 'https://www.novoatalho.pt/pt-PT/produto/47052/Placa-Grafica-MSI-GeForce-RTX-3060-VENTUS-3X-OC-12G/912-V397-038.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3060',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46883/Placa-Grafica-MSI-GeForce-RTX-3060-GAMING-X-TRIO-OC-12GB/912-V390-081.html',
    },
    {
      brand: 'msi',
      model: 'gaming x',
      series: '3060',
      url: 'https://www.novoatalho.pt/pt-PT/produto/47050/Placa-Grafica-MSI-GeForce-RTX-3060-GAMING-X-12G/912-V397-037.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46920/Placa-Grafica-Gigabyte-GeForce-RTX-3060-Gaming-OC-12GB/GVN3060GO-00-10.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3060',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46702/Placa-Grafica-Asus-GeForce-RTX-3060-TUF-GAMING-OC-12GB/90YV0GC0-M0NA00.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3060ti',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46783/Placa-Grafica-Asus-GeForce-RTX-3060-Ti-TUF-GAMING-OC-8GB/90YV0G10-M0NA00.html',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3060',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46701/Placa-Grafica-Asus-GeForce-RTX-3060-ROG-STRIX-OC-12GB/90YV0GC2-M0NA00.html',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: 'rx6800',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46281/Placa-Grafica-Asus-Radeon-RX-6800-ROG-STRIX-OC-16GB/90YV0FM0-M0NA00.html',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: 'rx6800xt',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46785/Placa-Grafica-Asus-Radeon-RX-6800-XT-ROG-STRIX-OC-LC-16GB/90YV0FL0-M0NM00.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: 'rx6800xt',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46784/Placa-Grafica-Asus-Radeon-RX-6800-XT-TUF-GAMING-OC-16GB/90YV0FL1-M0NM00.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: 'rx6800',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46280/Placa-Grafica-MSI-Radeon-RX-6800-GAMING-X-TRIO-16GB/V396-002R.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: 'rx6800xt',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46279/Placa-Grafica-MSI-Radeon-RX-6800-XT-GAMING-X-TRIO-16GB/912-V395-001.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: 'rx6900xt',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46700/Placa-Grafica-Asus-Radeon-RX-6900-XT-TUF-GAMING-OC-16GB/90YV0GE0-M0NM00.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: 'rx6900xt',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46649/Placa-Grafica-MSI-Radeon-RX-6900-XT-GAMING-X-TRIO-16GB/912-V395-007.html',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.novoatalho.pt/pt-PT/produto/45058/Processador-AMD-Ryzen-5-5600X-3-7Ghz-6-Core-SktAM4/100-100000065BOX.html',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.novoatalho.pt/pt-PT/produto/45059/Processador-AMD-Ryzen-7-5800X-3-8Ghz-OctaCore-SktAM4/100-100000063WOF.html',
    },
  ],
  name: 'novoatalho',
  country: 'PT',
  waitUntil: 'domcontentloaded',
};

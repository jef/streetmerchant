import {Store} from './store';

export const Eletronicamente: Store = {
  currency: '€',
  labels: {
    inStock: [
      {
        container: '.sistock',
        text: ['en stock'],
      },
    ],
    maxPrice: {
      container: '.our_price_display',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.nostock',
        text: ['Producto sujeto a disponibilidad de fabricante'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.electronicamente.com/memorias-pc/36710-ddr4-16gb-bus-3200-adata-xpg-spectrix-d-50-cl20-kit-2x8gb-ax4u320016g16a-dt50.html',
    },
    // 3090
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/36367-tarjeta-grafica-pcie-nvidia-gf-rtx-3090-gaming-24gb-ddr6-3xdp-2xhdmi-gv-n3090gaming-oc-24.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming',
      series: '3090',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34166-tarjeta-grafica-pcie-nvidia-gf-rtx-3090-gaming-24gb-ddr6-3xdp-2xhdmi-gvn3090go-00-g.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3090',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34875-tarjeta-grafica-pcie-nvidia-gf-rtx-3090-master-24gb-ddr6-3xdp-3xhdmi-gv-n3090aorus-m-24gd.html',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3090',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34165-tarjeta-grafica-pcie-nvidia-gf-rtx-3090-24gb-ddr6-3xdp-2xhdmi-90yv0f93-m0nm00.html',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3090',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34167-tarjeta-grafica-pcie-nvidia-gf-rtx-3090-trinity-24gb-ddr6-3xdp-hdmi-zt-a30900d-10p.html',
    },
    // 3080
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34250-tarjeta-grafica-pcie-nvidia-gf-rtx-3080-tuf-gaming-10gb-ddr6-3xdp-2xhdmi-90yv0fb0-m0nm00.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34248-tarjeta-grafica-pcie-nvidia-gf-rtx-3080-oc-tuf-gaming-10gb-ddr6-3xdp-2xhdmi-90yv0fb1-m0nm00.html',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3080',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34249-tarjeta-grafica-pcie-nvidia-gf-rtx-3080-rog-strix-gaming-10gb-ddr6-3xdp-2xhdmi-90yv0fa0-m0nm00.html',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3080',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34247-tarjeta-grafica-pcie-nvidia-gf-rtx-3080-oc-rog-strix-gaming-10gb-ddr6-3xdp-2xhdmi-90yv0fa1-m0nm00.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3080',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34883-tarjeta-grafica-pcie-nvidia-gf-rtx-3080-xtrem-10gb-ddr6-3xdp-3xhdmi-gv-n3080aorus-x-10gd.html',
    },
    {
      brand: 'pny',
      model: 'xlr8 uprising',
      series: '3080',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34246-tarjeta-grafica-pcie-nvidia-gf-rtx-3080-gaming-10gb-ddr6-4xdp-vcg308010tfxmpb.html',
    },
    {
      brand: 'pny',
      model: 'xlr8 revel',
      series: '3080',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34245-tarjeta-grafica-pcie-nvidia-gf-rtx-3080-gaming-10gb-ddr6-3xdp-hdmi-vcg308010tfxppb.html',
    },
    // 3070
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3070',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34874-tarjeta-grafica-pcie-nvidia-gf-rtx-3070-master-8gb-ddr6-3xdp-3xhdmi-gv-n3070aorus-m-8gd.html',
    },
    {
      brand: 'msi',
      model: 'ventus 2x oc',
      series: '3070',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/35402-tarjeta-grafica-pcie-nvidia-gf-rtx-3070-ventus-2x-oc-8gb-ddr6-hdmi-3xdp-912-v390-008.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x',
      series: '3070',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/35403-tarjeta-grafica-pcie-nvidia-gf-rtx-3070-ventus-3x-8gb-ddr6-hdmi-3xdp-912-v390-007.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34853-tarjeta-grafica-pcie-nvidia-gf-rtx-3070-gaming-oc-8gb-ddr6-2xdp-2xhdmi-gv-n3070gaming-oc-8g.html',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3070',
      url: 'https://www.electronicamente.com/comprar-tarjetas-graficas/34924-tarjeta-grafica-pcie-nvidia-gf-rtx-3070-vision-oc-8gb-ddr6-2xdp-2xhdmi-gv-n3070vision-oc-8g.html',
    },
  ],
  name: 'eletronicamente',
  country: 'ES',
};

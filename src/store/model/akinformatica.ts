import {Store} from './store';

export const Akinformatica: Store = {
  currency: '€',
  labels: {
    inStock: [
      {
        container: '#dispOnLine .available',
        text: ['Disponibile Online'],
      },
      {
        container: '#addCartLinkButton',
        text: ['Aggiungi al carrello'],
      },
    ],
    maxPrice: {
      container: '#PrezzoListinoIvatoLabel',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '#dispOnLine .available .disabled',
        text: ['Disponibile Online'],
      },
      {
        container: '#preOrderPanel > label',
        text: ['PRE-ORDINI APERTI'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://shop.akinformatica.it/catalogo/adata-xpg/mouse-gaming-adata-xpg-primer---wired--rgb_4710273777139.aspx',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3070',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3070/vga-palit-geforce-rtx3070-gamingpro-oc-8gb-gddr6x_4710562242089.aspx',
    },
    {
      brand: 'zotac',
      model: 'twin edge',
      series: '3070',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3070/vga-zotac-gaming-geforce-rtx-3070-twin-edge-8g_4895173622472.aspx',
    },
    {
      brand: 'msi',
      model: 'ventus 2x oc',
      series: '3070',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3070/vga-msi-geforce-rtx-3070-ventus-2x-oc-8g_4719072763091.aspx',
    },
    {
      brand: 'asus',
      model: 'dual',
      series: '3070',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3070/vga-asus-geforce-rtx-3070-dual-o8g-8g_4718017927864.aspx',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3070',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3070/vga-gigabyte-geforce-rtx-3070-eagle-8gb_4719331307738.aspx',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3070',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3070/vga-msi-geforce-rtx-3070-ventus-3x-oc-8g_4719072763084.aspx',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3070',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3070/vga-msi-geforce-rtx-3070-gaming-x-trio-8g_4719072763053.aspx',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3070',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3070/vga-zotac-gaming-geforce-rtx-3070-twin-edge-oc-8g_4895173622489.aspx',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3070',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3070/vga-gigabyte-geforce-rtx-3070-eagle-oc-8gb_4719331307677.aspx',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3070',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3070/vga-asus-geforce-rtx-3070-tuf-o8g-8g_4718017948678.aspx',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3070',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3070/vga-gigabyte-geforce-rtx-3070-gaming-oc-8gb_4719331307691.aspx',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3070',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3070/vga-asus-geforce-rtx-3070-rog-strix-gaming-oc-8g_4718017938150.aspx',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3090',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3090/vga-msi-geforce-rtx-3090-gaming-x-trio-24g_4719072762506.aspx',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3090',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3090/vga-zotac-geforce-rtx-3090-trinity-24g_4895173622427.aspx',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3090',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3090/vga-msi-geforce-rtx-3090-suprim-x-24g_4719072762490.aspx',
    },
    {
      brand: 'pny',
      model: 'xlr8 epic x',
      series: '3090',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3090/vga-pny-geforce-rtx-3090-epic-x-xlr8-gaming-24g_0751492639536.aspx',
    },
    {
      brand: 'msi',
      model: 'ventus 3x',
      series: '3090',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3090/vga-msi-geforce-rtx-3090-ventus-3x-24g-oc--consegne-da-marzo_4719072762476.aspx',
    },
    {
      brand: 'palit',
      model: 'gamerock',
      series: '3090',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3090/vga-palit-geforce-rtx3090-gamerock-24gb-gddr6x_4710562242041.aspx',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3090',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3090/vga-palit-geforce-rtx3090-gamingpro-24gb-gddr6x_4710562241969.aspx',
    },
    {
      brand: 'palit',
      model: 'gamerock oc',
      series: '3090',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3090/vga-palit-geforce-rtx3090-gamerock-oc-24gb-gddr6x_4710562242065.aspx',
    },
    {
      brand: 'palit',
      model: 'gaming pro oc',
      series: '3090',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3090/vga-palit-geforce-rtx3090-gamingpro-oc-24gb-gddr6x_4710562242027.aspx',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url:
        'https://shop.akinformatica.it/catalogo/amd-am4/cpu-amd-ryzen-5-5600x---6-core--max-boost-4-60-ghz--socket-am4_0730143312042.aspx',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url:
        'https://shop.akinformatica.it/catalogo/amd-am4/cpu-amd-ryzen-7-5800x---8-core--max-boost-4-70-ghz--socket-am4_0730143312714.aspx',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url:
        'https://shop.akinformatica.it/catalogo/amd-am4/cpu-amd-ryzen-9-5950x---16-core--max-boost-4-90-ghz--socket-am4_0730143312745.aspx',
    },
    {
      brand: 'sapphire',
      model: 'nitro+ se',
      series: 'rx6800',
      url:
        'https://shop.akinformatica.it/catalogo/amd-rx-6800-6800-xt/vga-sapphire-radeon-rx-6800-xt-nitro--oc-se-16g_4895106289901.aspx',
    },
    {
      brand: 'sapphire',
      model: 'nitro+',
      series: 'rx6800',
      url:
        'https://shop.akinformatica.it/catalogo/amd-rx-6800-6800-xt/vga-sapphire-radeon-rx-6800-xt-nitro--16g_4895106289925.aspx',
    },
    {
      brand: 'sapphire',
      model: 'amd reference',
      series: 'rx6900xt',
      url:
        'https://shop.akinformatica.it/catalogo/amd-rx-6900-xt/vga-sapphire-radeon-rx-6900-xt-16g_4895106290136.aspx',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3080/vga-msi-geforce-rtx-3080-ventus-3x-10g-oc--consegne-da-marzo_4719072762520.aspx',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3080',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3080/vga-zotac-geforce-rtx-3080-trinity-10g_4895173622403.aspx',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3080',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3080/vga-asus-geforce-rtx-3080-rog-strix-gaming-oc-10g_4718017928786.aspx',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3080/vga-msi-geforce-rtx-3080-gaming-x-trio-10g_4719072762544.aspx',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3080',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3080/vga-asus-geforce-rtx-3080-rog-strix-gaming-10g_4718017909150.aspx',
    },
    {
      brand: 'pny',
      model: 'xlr8 epic x',
      series: '3080',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3080/vga-pny-geforce-rtx-3080-epic-x-xlr8-gaming-10g_0751492639567.aspx',
    },
    {
      brand: 'pny',
      model: 'xlr8 epic x',
      series: '3080',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3080/vga-pny-geforce-rtx-3080-epic-x-xlr8-gaming-10g_0751492639550.aspx',
    },
    {
      brand: 'palit',
      model: 'gaming pro oc',
      series: '3080',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3080/vga-palit-geforce-rtx3080-gamingpro-oc-10gb-gddr6x_4710562242003.aspx',
    },
    {
      brand: 'msi',
      model: 'ventus 2x oc',
      series: '3060ti',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3060ti/vga-msi-geforce-rtx-3060ti-ventus-2x-oc-8g-_4719072763121.aspx',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3060ti',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3060ti/vga-msi-geforce-rtx-3060ti-gaming-x-trio-8g-_4719072763145.aspx',
    },
    {
      brand: 'palit',
      model: 'dual oc',
      series: '3060ti',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3060ti/vga-palit-geforce-rtx-3060ti-dual-oc-8g-gddr6-256bit-3xdp--hdmi-_4710562242287.aspx',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3060ti',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3060ti/vga-msi-geforce-rtx-3060ti-ventus-3x-oc-8g_4719072763152.aspx',
    },
    {
      brand: 'zotac',
      model: 'twin edge',
      series: '3060ti',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3060ti/vga-zotac-gaming-geforce-rtx-3060ti-twin-edge-8g_4895173622502.aspx',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3060ti',
      url:
        'https://shop.akinformatica.it/catalogo/nvidia-rtx-3060ti/vga-zotac-gaming-geforce-rtx-3060ti-twin-edge-oc-8g_4895173622519.aspx',
    },
  ],
  name: 'akinformatica',
  successStatusCodes: [[0, 399], 404],
};

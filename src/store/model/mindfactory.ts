import {Store} from './store';

export const Mindfactory: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.pshipping',
      text: ['lagernd', 'verfügbar'],
    },
    maxPrice: {
      container: 'div[class="pprice"]',
      euroFormat: true,
    },
    outOfStock: {
      container: '.pshipping',
      text: ['ohne liefertermin'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.mindfactory.de/product_info.php/8GB-MSI-GeForce-RTX2070Super-GAMING-X-DDR6--Retail-_1329683.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3080',
      url: 'https://www.mindfactory.de/product_info.php/10GB-Gigabyte-RTX3080-AORUS-MASTER-GDDR6X-3xHDMI-3xDP--Retail-_1378681.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3080',
      url: 'https://www.mindfactory.de/product_info.php/10GB-Gigabyte-RTX3080-AORUS-XTREME-GDDR6X-3xHDMI-3xDP--Retail-_1380484.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.mindfactory.de/product_info.php/10GB-Gigabyte-GeForce-RTX-3080-Gaming-OC-3xDP-2x-HDMI--Retail-_1376263.html',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3080',
      url: 'https://www.mindfactory.de/product_info.php/10GB-Gigabyte-RTX3080-VISION-OC-GDDR6X-2xHDMI-3xDP--Retail-_1378682.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.mindfactory.de/product_info.php/10GB-MSI-GeForce-RTX-3080-Gaming-X-TRIO--Retail-_1376481.html',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3080',
      url: 'https://www.mindfactory.de/product_info.php/10GB-Palit-GeForce-RTX-3080-GamingPro--Retail-_1376483.html',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '3080',
      url: 'https://www.mindfactory.de/product_info.php/10GB-Zotac-GeForce-RTX-3080-TRINITY-OC--GDDR6X-_1377143.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.mindfactory.de/product_info.php/24GB-Gigabyte-GeForce-3090-Gaming-OC--Retail-_1377265.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x',
      series: '3090',
      url: 'https://www.mindfactory.de/product_info.php/24GB-MSI-GeForce-RTX-3090-VENTUS-3X-DDR6--Retail-_1377475.html',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3090',
      url: 'https://www.mindfactory.de/product_info.php/24GB-Palit-GeForce-RTX-3090-GamingPro-DDR6--Retail-_1377233.html',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.mindfactory.de/product_info.php/AMD-Ryzen-5-5600X-6x-3-70GHz-So-AM4-BOX_1380726.html',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.mindfactory.de/product_info.php/AMD-Ryzen-7-5800X-8x-3-80GHz-So-AM4-WOF_1380727.html',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.mindfactory.de/product_info.php/AMD-Ryzen-9-5900X-12x-3-70GHz-So-AM4-WOF_1380728.html',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.mindfactory.de/product_info.php/AMD-Ryzen-9-5950X-16x-3-40GHz-So-AM4-WOF_1380729.html',
    },
    // #region 6700xt
    {
      brand: 'asrock',
      model: 'challenger',
      series: 'rx6700xt',
      url: 'https://www.mindfactory.de/product_info.php/12GB-ASRock-Radeon-RX-6700-XT-Challenger-12G--Retail-_1402343.html',
    },
    {
      brand: 'asrock',
      model: 'phantom gaming',
      series: 'rx6700xt',
      url: 'https://www.mindfactory.de/product_info.php/12GB-ASRock-Radeon-RX-6700-XT-PHANTOM-GAMING-DDR6--Retail-_1404253.html',
    },
    {
      brand: 'asrock',
      model: 'challenger oc',
      series: 'rx6700xt',
      url: 'https://www.mindfactory.de/product_info.php/12GB-ASRock-Radeon-RX-6700-XT-Challenger-D-OC--Retail-_1416036.html',
    },
    {
      brand: 'msi',
      model: 'mech 2x oc',
      series: 'rx6700xt',
      url: 'https://www.mindfactory.de/product_info.php/12GB-MSI-Radeon-RX-6700-XT-MECH-2X-OC-DDR6-3xDP--Retail-_1401817.html',
    },
    {
      brand: 'powercolor',
      model: 'fighter',
      series: 'rx6700xt',
      url: 'https://www.mindfactory.de/product_info.php/12GB-Powercolor-Radeon-RX-6700XT-Fighter-DDR6--Retail-_1402737.html',
    },
    {
      brand: 'powercolor',
      model: 'hellhound',
      series: 'rx6700xt',
      url: 'https://www.mindfactory.de/product_info.php/12GB-PowerColor-Radeon-RX-6700-XT-Hellhound--Retail-_1402054.html',
    },
    {
      brand: 'powercolor',
      model: 'red devil',
      series: 'rx6700xt',
      url: 'https://www.mindfactory.de/product_info.php/12GB-PowerColor-Radeon-RX-6700-XT-Red-Devil-12GB-GDDR6-HDMI-3xDP_1402329.html',
    },
    {
      brand: 'xfx',
      model: 'merc',
      series: 'rx6700xt',
      url: 'https://www.mindfactory.de/product_info.php/12GB-XFX-Radeon-RX-6700-XT-MERC319-Black-GAMING--Retail-_1402055.html',
    },
    {
      brand: 'xfx',
      model: 'qick',
      series: 'rx6700xt',
      url: 'https://www.mindfactory.de/product_info.php/12GB-XFX-Radeon-RX-6700-XT-QICK319-DDR6-Black-Gaming-3xDP--Retail-_1405679.html',
    },

    // #endregion
    // #region 6800
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: 'rx6800',
      url: 'https://www.mindfactory.de/product_info.php/16GB-Gigabyte-Radeon-RX-6800-GAMING-OC-16G_1387544.html',
    },
    {
      brand: 'gigabyte',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.mindfactory.de/product_info.php/16GB-Gigabyte-Radeon-RX-6800--Retail-_1387542.html',
    },
    {
      brand: 'powercolor',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.mindfactory.de/product_info.php/16GB-Powercolor-Radeon-RX-6800-Fighter-DDR6-Drei-Luefter-256bit--Retail_1388356.html',
    },
    {
      brand: 'powercolor',
      model: 'red dragon',
      series: 'rx6800',
      url: 'https://www.mindfactory.de/product_info.php/16GB-PowerColor-Radeon-RX-6800-Red-Dragon-DDR6-retail_1387556.html',
    },
    {
      brand: 'sapphire',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.mindfactory.de/product_info.php/16GB-Sapphire-Radeon-RX-6800-GDDR6-HDMI-DUAL-DP-USB-C--Retail-_1383029.html',
    },
    {
      brand: 'sapphire',
      model: 'nitro oc',
      series: 'rx6800',
      url: 'https://www.mindfactory.de/product_info.php/16GB-Sapphire-Radeon-RX-6800-NITRO--OC-HDMI-3xDP_1388341.html',
    },
    {
      brand: 'xfx',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.mindfactory.de/product_info.php/16GB-XFX-Radeon-RX-6800-Drei-Luefter-256bit-DDR6--Retail-_1388348.html',
    },
    {
      brand: 'xfx',
      model: 'merc',
      series: 'rx6800',
      url: 'https://www.mindfactory.de/product_info.php/16GB-XFX-Radeon-RX-6800-Speedster-MERC319-DDR6-Black-Gaming_1386624.html',
    },
    // #endregion
    // #region 6800xt
    {
      brand: 'asrock',
      model: 'phantom gaming',
      series: 'rx6800xt',
      url: 'https://www.mindfactory.de/product_info.php/16GB-ASRock-Radeon-RX-6800-XT-PHANTOM-GAMING-DDR6_1386619.html',
    },
    {
      brand: 'sapphire',
      model: 'nitro oc',
      series: 'rx6800xt',
      url: 'https://www.mindfactory.de/product_info.php/16GB-Sapphire-Radeon-RX-6800-XT-NITRO--OC-HDMI-3xDP_1388340.html',
    },
    {
      brand: 'xfx',
      model: 'merc',
      series: 'rx6800xt',
      url: 'https://www.mindfactory.de/product_info.php/16GB-XFX-Radeon-RX-6800-XT-Speedster-MERC319-DDR6-Black-Gaming-retail_1386623.html',
    },
    // #endregion
    // #region 6900xt
    {
      brand: 'asrock',
      model: 'amd reference',
      series: 'rx6900xt',
      url: 'https://www.mindfactory.de/product_info.php/16GB-ASRock-Radeon-6900-XT--Retail-_1388342.html',
    },
    {
      brand: 'msi',
      model: 'amd reference',
      series: 'rx6900xt',
      url: 'https://www.mindfactory.de/product_info.php/16GB-MSI-Radeon-6900-XT--Retail-_1388361.html',
    },
    {
      brand: 'powercolor',
      model: 'amd reference',
      series: 'rx6900xt',
      url: 'https://www.mindfactory.de/product_info.php/16GB-PowerColor-Radeon-RX-6900XT-DDR6-Drei-Luefter-256bit--Retail-_1388355.html',
    },
    {
      brand: 'xfx',
      model: 'amd reference',
      series: 'rx6900xt',
      url: 'https://www.mindfactory.de/product_info.php/16GB-XFX-Radeon-RX-6900-XT-DDR6-Drei-Luefter-256bit_1388333.html',
    },
    // #endregion
  ],
  name: 'mindfactory',
  country: 'DE',
};

import {Store} from './store';

export const NetonnetNO: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: 'kr.',
  labels: {
    inStock: {
      container: '[id^="BuyButton_ProductPageStandard_"]',
      text: ['Legg i handlevogn'],
    },
    maxPrice: {
      container: '.price-big',
    },
    outOfStock: {
      container: '[id^="BuyButton_ProductPageStandard_"]',
      text: ['Overvåk produktet'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/kfa2-geforce-rtx-3090-hall-of-fame/1016867.11111/',
    },
    //3060
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3060',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3060-vision-oc-lhr/1019423.11111/',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3060',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3060-strix-gaming-oc-v2-lhr/1018824.11111/',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3060-gaming-oc-12g-2-0-lhr/1019988.11111/',
    },
    //3060ti
    {
      brand: 'msi',
      model: 'gaming x',
      series: '3060ti',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/msi-geforce-rtx-3060-ti-gaming-x-8g-lhr/1018895.11111/',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3060ti',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3060-ti-eagle-oc-8g-2-0lhr/1020665.11111/',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3060ti',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3060-ti-vision-oc-8g-2-0-lhr/1022259.11111/',
    },
    {
      brand: 'gigabyte',
      model: 'aorus elite',
      series: '3060ti',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3060-ti-aorus-elite-8g-2-0-lhr/1020633.11111/',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3060ti',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3060-ti-tuf-gaming-oc-v2-lhr/1018821.11111/',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060ti',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3060-ti-gaming-oc-8g-2-0-lhr/1020635.11111/',
    },
    {
      brand: 'msi',
      model: 'gaming z trio',
      series: '3060ti',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/msi-geforce-rtx-3060-ti-gaming-z-trio-8g-lhr/1018893.11111/',
    },
    {
      brand: 'asus',
      model: 'dual mini oc',
      series: '3060ti',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3060-ti-dual-mini-oc-8gb-v2lhr/1021719.11111/',
    },
    {
      brand: 'msi',
      model: 'ventus 2x',
      series: '3060ti',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/msi-geforce-rtx3060-ti-ventus-2x-8g-ocv1-lhr/1020015.11111/',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3060ti',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3060-ti-rog-strix-gaming-oc-8gb-v2lhr/1020240.11111/',
    },
    {
      brand: 'asus',
      model: 'dual mini',
      series: '3060ti',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3060-ti-dual-mini-8gb-v2lhr/1021720.11111/',
    },

    //3070
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3070',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3070-tuf-gaming-oc-v2-lhr/1018818.11111/',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3070',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3070-vision-oc-8g-2-0-lhr/1020111.11111/',
    },
    {
      brand: 'kfa2',
      model: '1-click oc',
      series: '3070',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/kfa2-geforce-rtx-3070-1-click-oc-lhr/1020983.11111/',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3070',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/msi-geforce-rtx-3070-suprim-x-8g-lhr/1018880.11111/',
    },
    {
      brand: 'asus',
      model: 'dual oc',
      series: '3070',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3070-dual-oc-8gb-v2lhr/1019348.11111/',
    },
    {
      brand: 'msi',
      model: 'gaming z trio',
      series: '3070',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/msi-geforce-rtx-3070-gaming-z-trio-8g-lhr/1018881.11111/',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3070-gaming-oc-8gb-2-0-lhr/1020188.11111/',
    },

    //3070ti
    {
      brand: 'asus',
      model: 'tuf',
      series: '3070ti',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3070-ti-tuf-gaming-8gb/1020245.11111/',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3070ti',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3070-ti-rog-strix-gaming-oc-8gb/1018796.11111/',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3070ti',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3070-ti-gaming-oc-8g/1018778.11111/',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3070ti',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3070-ti-tuf-gaming-oc-8gb/1020243.11111/',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3070ti',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/msi-geforce-rtx-3070-ti-suprim-x-8g/1018591.11111/',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3070ti',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3070-ti-vision-oc-8g/1020002.11111/',
    },
    //3080
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3080-tuf-gaming-oc-v2lhr/1019995.11111/',
    },
    {
      brand: 'msi',
      model: 'gaming z trio',
      series: '3080',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/msi-geforce-rtx-3080-gaming-z-trio-10g-lhr/1018878.11111/',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3080',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3080-vision-oc-10g-2-0-lhr/1019976.11111/',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3080-gaming-oc-10g-2-0-lhr/1019975.11111/',
    },
    {
      brand: 'kfa2',
      model: 'sg',
      series: '3080',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/kfa2-geforce-rtx-3080-sg-lhr/1020061.11111/',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3080',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/msi-geforce-rtx-3080-suprim-x-10g-lhr/1018876.11111/',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3080',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3080-eagle-10g-2-0-lhr/1019986.11111/',
    },
    //3080ti
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3080ti',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3080-ti-vision-oc-12g/1019974.11111/',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080ti',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3080-ti-12gb-gaming-oc/1019387.11111/',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3080ti',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/msi-geforce-rtx-3080-ti-suprim-x-12g/1018588.11111/',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080ti',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/msi-geforce-rtx-3080-ti-gaming-x-trio-12g/1018589.11111/',
    },

    //3090
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3090',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/msi-geforce-rtx-3090-ventus-3x-24g-oc/1014376.11111/',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3090-gaming-oc-24g/1014378.11111/',
    },
    {
      brand: 'asus',
      model: 'strix oc white',
      series: '3090',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3090-rog-strix-gaming-white-oc-24gb/1016447.11111/',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3090',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3090-rog-strix-gaming-24g/1014393.11111/',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3090',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/msi-geforce-rtx-3090-gaming-x-trio-24g/1014375.11111/',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3090',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3090-tuf-gaming-24g/1014355.11111/',
    },
    {
      brand: 'kfa2',
      model: 'ex gamer',
      series: '3090',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/kfa2-geforce-rtx-3090-ex-gamer/1022103.11111/',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3090',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3090-tuf-gaming-oc-24gb/1015669.11111/',
    },
    //rx6800xt
    {
      brand: 'xfx',
      model: 'merc',
      series: 'rx6800xt',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/amd/xfx-radeon-rx6800xt-merc-319/1017513.11110/',
    },
    //rx6900xt
    {
      brand: 'xfx',
      model: 'swft',
      series: 'rx6900xt',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/amd/xfx-radeon-rx-6900-xt-speedster-swft-319-core/1021832.11110/',
    },
    {
      brand: 'sapphire',
      model: 'gaming oc',
      series: 'rx6900xt',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/amd/sapphire-radeon-rx-6900-xt-gaming-oc-toxic-limited-edition/1019278.11110/',
    },
    {
      brand: 'xfx',
      model: 'merc',
      series: 'rx6900xt',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/amd/xfx-radeon-rx-6900xt-merc-319-black-3xdp-16gb/1022632.11110/',
    },
    //cpu
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.netonnet.no/art/datakomponenter/prosessor/amdsocketam4/amd-ryzen-9-5950x-3-4-ghz/1015003.13682/',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.netonnet.no/art/datakomponenter/prosessor/amdsocketam4/amd-ryzen-7-5800x-3-8-ghz/1015001.13682/',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.netonnet.no/art/gaming/spillogkonsoll/xbox/xbox-konsoll/microsoft-xbox-series-s/1012885.15694/',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.netonnet.no/art/gaming/spillogkonsoll/xbox/xbox-konsoll/microsoft-xbox-series-x/1011151.15694/',
    },
  ],
  name: 'netonnet-no',
};

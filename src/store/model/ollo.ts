import {Store} from './store';

export const Ollo: Store = {
  currency: '€',
  labels: {
    inStock: [
      {
        container:
          'div.product-availability:nth-child(2) > div:nth-child(1) > span:nth-child(1)',
        text: ['Disponibile'],
      },
    ],
    maxPrice: {
      container: '.main-product-price',
      euroFormat: true,
    },
    outOfStock: {
      container:
        'div.product-availability:nth-child(2) > div:nth-child(1) > span:nth-child(1)',
      text: ['Attualmente non disponibile', 'In Pre-ordine'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.ollo.it/trevi-dr-437-sa-lettore-mp3-8-gb-grigio/p_811410',
    },
    {
      brand: 'gainward',
      model: 'phoenix',
      series: '3080',
      url: 'https://www.ollo.it/palit-ned3080019ia-132aa-nvidia-geforce-rtx-3080-10-gb-gddr6x/p_805886',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3080',
      url: 'https://www.ollo.it/gainward-geforce-rtx-3080-phoenix-nvidia-10-gb-gddr6x/p_813151',
    },
    {
      brand: 'palit',
      model: 'gamerock oc',
      series: '3090',
      url: 'https://www.ollo.it/palit-rtx3090-game-rock-oc-nvidia-geforce-rtx-3090-24-gb-gddr6x/p_813155',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '3080',
      url: 'https://www.ollo.it/zotac-zt-a30800j-10p-nvidia-geforce-rtx-3080-10-gb-gddr6x/p_811027',
    },
    {
      brand: 'pny',
      model: 'xlr8 gaming',
      series: '3080',
      url: 'https://www.ollo.it/pny-vcg308010tfxmpb-nvidia-geforce-rtx-3080-10-gb-gddr6x/p_805892',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3080',
      url: 'https://www.ollo.it/zotac-geforce-rtx-3080-trinity-10gb-gddr6x/p_805602',
    },
    {
      brand: 'pny',
      model: 'xlr8 uprising',
      series: '3090',
      url: 'https://www.ollo.it/pny-geforce-rtx-3090-24gb-xlr8-gaming-uprising-epic-x-rgb-triple-fan-edition/p_811356',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3090',
      url: 'https://www.ollo.it/zotac-geforce-rtx-3090-trinity-24gb-gddr6x/p_809667',
    },
    {
      brand: 'msi',
      model: 'ventus 2x oc',
      series: '3060ti',
      url: 'https://www.ollo.it/msi-geforce-rtx-3060-ti-ventus-2x-oc/p_810399',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3090',
      url: 'https://www.ollo.it/msi-nvidia-geforce-rtx-3090-ventus-3x-24g-oc/p_803924',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3090',
      url: 'https://www.ollo.it/asus-nvidia-geforce-rtx-3090-24g-tuf-rtx3090-o24g-gaming/p_805889',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3060ti',
      url: 'https://www.ollo.it/msi-geforce-rtx-3060-ti-gaming-x-trio/p_810397',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.ollo.it/asus-tuf-gaming-nvidia-geforce-rtx-3080-oc-10gb-gddr6x/p_805890',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3090',
      url: 'https://www.ollo.it/msi-nvidia-geforce-rtx-3090-gaming-x-trio-24g/p_803923',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3060ti',
      url: 'https://www.ollo.it/msi-geforce-rtx-3060-ti-ventus-3x-oc/p_810398',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.ollo.it/msi-nvidia-geforce-rtx-3080-ventus-3x-10g-oc/p_803926',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url: 'https://www.ollo.it/asus-geforce-rtx-3080-10g-tuf-rtx3080-10g-gaming/p_805601',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.ollo.it/msi-geforce-rtx-3080-gaming-x-trio-10g/p_803925',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3080',
      url: 'https://www.ollo.it/asus-rog-strix-rtx-3080-o10g-gaming-geforce-rtx-3080-oc-10gb-gddr6x/p_805698',
    },
  ],
  name: 'ollo',
  country: 'IT',
};

import {Store} from './store';

export const BpmPower: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.dispoSiProd >span',
      text: ['Disponibile'],
    },
    maxPrice: {
      container: 'p.prezzoScheda:nth-child(1)',
      euroFormat: true,
    },
    outOfStock: {
      container: '.dispoSiProd >span',
      text: ['Esaurito'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.bpm-power.com/it/online/audio/auricolari-audio/apple-airpods-2-2019-b1492931',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3070',
      url: 'https://www.bpm-power.com/it/online/componenti-pc/schede-video/nvidia-msi-rtx-3070-b1710142',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.bpm-power.com/it/online/componenti-pc/processori/cpu-amd-ryzen-7-b1710075',
    },
  ],
  name: 'bpm-power',
  country: 'IT',
};

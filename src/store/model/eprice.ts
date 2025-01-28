import {Store} from './store';

export const Eprice: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.topSideDx',
      text: ['disponibile', 'pochi pezzi'],
    },
    maxPrice: {
      container: '#PrezzoClasic span[class*="big"]',
      euroFormat: true,
    },
    outOfStock: {
      container: '.dispo',
      text: ['ESAURITO O FUORI PROD.'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.eprice.it/cuffie-con-microfono-APPLE/d-9030906',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3070',
      url: 'https://www.eprice.it/schede-video-MSI/d-14039974',
    },
    {
      brand: 'asus',
      model: 'dual',
      series: '3070',
      url: 'https://www.eprice.it/schede-video-ASUS/d-14042082',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3070',
      url: 'https://www.eprice.it/schede-video-ASUS/d-14039878',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3070',
      url: 'https://www.eprice.it/schede-video-ASUS/d-14039876',
    },
    {
      brand: 'msi',
      model: 'gaming',
      series: '3070',
      url: 'https://www.eprice.it/schede-video-MSI/d-14039972',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3070',
      url: 'https://www.eprice.it/schede-video-MSI/d-14039974',
    },
    {
      brand: 'msi',
      model: 'ventus 2x oc',
      series: '3070',
      url: 'https://www.eprice.it/schede-video-MSI/d-14039973',
    },
    {
      brand: 'zotac',
      model: 'gaming',
      series: '3070',
      url: 'https://www.eprice.it/schede-video-ZOTAC/d-13979806',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.eprice.it/playstation-5-SONY/d-13981612',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.eprice.it/playstation-5-SONY/d-13981613',
    },
  ],
  name: 'eprice',
  country: 'IT',
};

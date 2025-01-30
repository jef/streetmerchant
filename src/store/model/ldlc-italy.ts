import {getProductLinksBuilder} from './helpers/card';
import {Store} from './store';

export const LDLCItaly: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.stock',
      text: ['Disponibile'],
    },
    maxPrice: {
      container: '.price',
      euroFormat: true,
    },
    outOfStock: {
      container: '.stock',
      text: ['Rottura'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.ldlc.com/it-it/scheda/PB00098129.html',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.ldlc.com/it-it/scheda/PB00390450.html',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.ldlc.com/it-it/scheda/PB00390458.html',
    },
  ],
  linksBuilder: {
    builder: getProductLinksBuilder({
      productsSelector: '.pdt-item',
      sitePrefix: 'https://www.ldlc.com',
      titleSelector: '.title-3 > a[href]',
    }),
    urls: [
      {
        series: '3060',
        url: 'https://www.ldlc.com/it-it/informatica/componenti/scheda-video/c4684/+fv1026-5801+fv121-19509.html',
      },
      {
        series: '3060ti',
        url: 'https://www.ldlc.com/it-it/informatica/componenti/scheda-video/c4684/+fv1026-5801+fv121-19365.html',
      },
      {
        series: '3070',
        url: 'https://www.ldlc.com/it-it/informatica/componenti/scheda-video/c4684/+fv1026-5801+fv121-19184.html',
      },
      {
        series: '3080',
        url: 'https://www.ldlc.com/it-it/informatica/componenti/scheda-video/c4684/+fv1026-5801+fv121-19183.html',
      },
      {
        series: '3090',
        url: 'https://www.ldlc.com/it-it/informatica/componenti/scheda-video/c4684/+fv1026-5801+fv121-19185.html',
      },
      {
        series: 'rx6800',
        url: 'https://www.ldlc.com/it-it/informatica/componenti/scheda-video/c4684/+fv1026-5800+fv121-19339.html',
      },
      {
        series: 'rx6800xt',
        url: 'https://www.ldlc.com/it-it/informatica/componenti/scheda-video/c4684/+fv1026-5800+fv121-19340.html',
      },
      {
        series: 'rx6900xt',
        url: 'https://www.ldlc.com/it-it/informatica/componenti/scheda-video/c4684/+fv1026-5800+fv121-19367.html',
      },
    ],
  },
  name: 'ldlc-it',
  country: 'IT',
};

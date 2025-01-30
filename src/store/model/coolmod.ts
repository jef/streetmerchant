import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Coolmod: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '#productBuyButtons',
      text: ['COMPRAR'],
    },
    maxPrice: {
      container: '#normalpricenumber',
      euroFormat: true,
    },
    outOfStock: {
      container: '#productBuyButtons',
      text: ['NO DISPONIBLE'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.coolmod.com/kfa2-geforce-rtx-2060-super-1-click-oc-8gb-gddr6-tarjeta-grafica-precio',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.coolmod.com/amd-ryzen-5-5600x-46ghz-socket-am4-boxed-procesador-precio',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.coolmod.com/amd-ryzen-7-5800x-47ghz-socket-am4-boxed-procesador-precio',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.coolmod.com/amd-ryzen-9-5900x-48ghz-socket-am4-boxed-procesador-precio',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.coolmod.com/amd-ryzen-9-5950x-49ghz-socket-am4-boxed-procesador-precio',
    },
  ],
  name: 'coolmod',
  country: 'ES',
  linksBuilder: {
    builder: getProductLinksBuilder({
      productsSelector: '.productInfo.itemFiltered',
      sitePrefix: 'https://www.coolmod.com/',
      titleSelector: '.productName a',
    }),
    ttl: 1,
    waitForSelector: '.productInfo.itemFiltered',
    urls: [
      {
        series: '3060',
        url: 'https://www.coolmod.com/tarjetas-graficas/appliedfilters/9678',
      },
      {
        series: '3060ti',
        url: 'https://www.coolmod.com/tarjetas-graficas/appliedfilters/9674',
      },
      {
        series: '3070',
        url: 'https://www.coolmod.com/tarjetas-graficas/appliedfilters/9675',
      },
      {
        series: '3070ti',
        url: 'https://www.coolmod.com/tarjetas-graficas/appliedfilters/9727',
      },
      {
        series: '3080',
        url: 'https://www.coolmod.com/tarjetas-graficas/appliedfilters/9676',
      },
      {
        series: '3080ti',
        url: 'https://www.coolmod.com/tarjetas-graficas/appliedfilters/9728',
      },
      {
        series: '3090',
        url: 'https://www.coolmod.com/tarjetas-graficas/appliedfilters/8557',
      },
    ],
  },
};

import {Store} from './store';

export const WalmartCa: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '[data-automation="cta-button"]',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '[data-automation="buybox-price"]',
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.walmart.ca/en/ip/sandisk-64g-ultra-sdxc-uhs-1-memory-card-80mbs-c10-u1-full-hd-sd-card-sdsdunc-064g-cw6in/6000200452075',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.walmart.ca/en/ip/playstation5-console/6000202198562',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.walmart.ca/en/ip/playstation5-digital-edition/6000202198823',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.walmart.ca/en/ip/xbox-series-x/6000201786332',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.walmart.ca/en/ip/xbox-series-s/6000201790919',
    },
    {
      brand: 'corsair',
      model: '600 platinum',
      series: 'sf',
      url: 'https://www.walmart.ca/en/ip/Corsair-SF-Series-SF600-600-Watt-80-PLUS-Gold-Certified-High-Performance-SFX-PSU/PRD6VH8WNKHD36Q',
    },
  ],
  name: 'walmart-ca',
  country: 'CA',
};

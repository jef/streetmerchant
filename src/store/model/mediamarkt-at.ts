import {Store} from './store';

export const MediamarktAt: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'p',
      text: ['Das ging uns leider zu schnell.'],
    },
    maxPrice: {
      container: 'span[font-family="price"]',
      euroFormat: false,
    },
    outOfStock: [
      {
        container: '#root',
        text: ['Dieser Artikel ist aktuell nicht verfügbar.'],
      },
      {
        container: '#root',
        text: ['Leider keine Lieferung möglich'],
      },
      {
        container: '#root',
        text: ['Nicht verfügbar'],
      },
      {
        container: '#root',
        text: ['Dieser Artikel ist dauerhaft ausverkauft'],
      },
      {
        container: '#root',
        text: ['Dieser Artikel ist bald wieder für Sie verfügbar'],
      },
      {
        container: '#root',
        text: ['Dieser Artikel ist bald wieder verfügbar'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.mediamarkt.at/de/product/-1759580.html',
    },
    {
      brand: 'gainward',
      model: 'phoenix',
      series: '3060ti',
      url: 'https://www.mediamarkt.at/de/product/-1815563.html',
    },
    {
      brand: 'gainward',
      model: 'phantom gaming',
      series: '3080',
      url: 'https://www.mediamarkt.at/de/product/-1817678.html',
    },
    {
      brand: 'asus',
      model: 'dual',
      series: '3060ti',
      url: 'https://www.mediamarkt.at/de/product/-1812392.html',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3080',
      url: 'https://www.mediamarkt.at/de/product/-1803318.html',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url: 'https://www.mediamarkt.at/de/product/-1799192.html',
    },
    {
      brand: 'msi',
      model: 'ventus 2x',
      series: '3070',
      url: 'https://www.mediamarkt.at/de/product/-1812232.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3070',
      url: 'https://www.mediamarkt.at/de/product/-1812223.html',
    },
  ],
  name: 'mediamarkt-at',
  country: 'AT',
};

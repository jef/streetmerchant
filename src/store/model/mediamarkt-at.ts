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
      url:
        'https://www.mediamarkt.at/de/product/_gainward-grafikkarte-geforce-rtx-3060-ti-phoenix-golden-sample-8gb-ga-3060rtx-ti-ph-gs-1815563.html',
    },
    {
      brand: 'gainward',
      model: 'phantom gaming',
      series: '3080',
      url:
        'https://www.mediamarkt.at/de/product/_gainward-grafikkarte-geforce-rtx-3080-phantom-10gb-ga-3080rtx-ph-1817678.html',
    },
    {
      brand: 'asus',
      model: 'dual',
      series: '3060ti',
      url:
        'https://www.mediamarkt.at/de/product/_asus-grafikkarte-tuf-gaming-geforce-rtx-3060-ti-oc-8gb-tuf-rtx3060ti-o8g-gaming-1812392.html',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3080',
      url:
        'https://www.mediamarkt.at/de/product/_zotac-grafikkarte-geforce-rtx-3080-trinity-oc-10gb-zt-a30800j-10p-1803318.html',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url:
        'https://www.mediamarkt.at/de/product/_asus-grafikkarte-tuf-gaming-geforce%C2%AE-rtx-3080-tuf-rtx3080-10g-gaming-10gb-gddr6x-90yv0fb0-m0nm00-1799192.html',
    },
    {
      brand: 'msi',
      model: 'ventus 2x',
      series: '3070',
      url:
        'https://www.mediamarkt.at/de/product/_msi-grafikkarte-geforce-rtx%E2%84%A2-3070-ventus-2x-oc-8gb-v390-008r-1812232.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3070',
      url:
        'https://www.mediamarkt.at/de/product/_msi-grafikkarte-geforce-rtx%E2%84%A2-3070-gaming-x-trio-8gb-v390-006r-1812223.html',
    },
  ],
  name: 'mediamarkt-at',
};

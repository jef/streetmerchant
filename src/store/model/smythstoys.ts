import {Store} from './store';

export const SmythsToys: Store = {
  currency: '£',
  labels: {
    inStock: {
      container: '#addToCartButton',
      text: ['add to basket'],
    },
    maxPrice: {
      container: '.price_tag',
      euroFormat: false,
    },
    outOfStock: {
      container: '.instoreMessage',
      text: ['out of stock'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.smythstoys.com/uk/en-gb/video-games-and-tablets/video-games/call-of-duty-video-games/call-of-duty-black-ops-cold-war/call-of-duty-black-ops-cold-war-ps5/p/191951',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.smythstoys.com/uk/en-gb/video-games-and-tablets/playstation-5/playstation-5-consoles/playstation-5-console/p/191259',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url:
        'https://www.smythstoys.com/uk/en-gb/video-games-and-tablets/playstation-5/playstation-5-consoles/playstation-5-digital-edition-console/p/191430',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url:
        'https://www.smythstoys.com/uk/en-gb/video-games-and-tablets/xbox-gaming/xbox-series-x-%7c-s/xbox-series-x-%7c-s-consoles/xbox-series-x-1tb-console/p/192012',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url:
        'https://www.smythstoys.com/uk/en-gb/video-games-and-tablets/xbox-gaming/xbox-series-x-%7c-s/xbox-series-x-%7c-s-consoles/xbox-series-x-1tb-console/p/192012',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url:
        'https://www.smythstoys.com/uk/en-gb/video-games-and-tablets/xbox-gaming/xbox-series-x-%7c-s/xbox-series-x-%7c-s-consoles/xbox-series-x-console-and-extra-white-controller-bundle/b/800549',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url:
        'https://www.smythstoys.com/uk/en-gb/video-games-and-tablets/xbox-gaming/xbox-series-x-%7c-s/xbox-series-x-%7c-s-consoles/xbox-series-x-console-and-second-black-controller-bundle/b/800548',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url:
        'https://www.smythstoys.com/uk/en-gb/video-games-and-tablets/xbox-gaming/xbox-series-x-%7c-s/xbox-series-x-%7c-s-consoles/xbox-series-x-console-and-select-game-bundle/b/800555',
    },
  ],
  name: 'smythstoys',
};

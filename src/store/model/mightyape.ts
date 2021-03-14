import {Store} from './store';

export const MightyApe: Store = {
  currency: '$',
  labels: {
    inStock: [
      {
        container:
          'body > div.page-container > div.page.listing.details.not-in-trolley.category.category-games.category-controllers > div > main > section.product-summary-top > div > div > div.product-summary > div.trolley-button-and-product-options > div.trolley-button-section > div.purchase-options > form > div > button',
        text: ['Add to Trolley'],
      },
    ],
    outOfStock: [
      {
        container:
          'body > div.page-container > div.page.listing.details.not-in-trolley.category.category-games.category-ps5-consoles > div > main > section.product-summary-top > div > div > div.product-summary.unavailable > div.pricing-stock > div > div.status',
        text: [' Unavailable '],
      },
    ],
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.mightyape.co.nz/product/sony-playstation-5-console/31675007',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url:
        'https://www.mightyape.co.nz/product/sony-playstation-5-digital-edition-console/33505481',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.mightyape.co.nz/product/xbox-series-x-console/30472387',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url:
        'https://www.mightyape.co.nz/product/xbox-series-s-all-digital-console/33856647',
    },
  ],
  name: 'mightyape',
};

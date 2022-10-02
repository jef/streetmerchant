import {Store} from './store';

export const TheWarehouse: Store = {
  currency: '$',
  labels: {
    inStock: {
      container:
        '#maincontent > div.container.product-detail.product-wrapper.pb-xl.pb-lg-xxxl > div > div:nth-child(2) > div.col-12.col-md-6.col-lg-5 > div > div.product-buying-box > div.cart-and-ipay.mt-md > div > div > button > span',
      text: ['Add to Cart', 'Find in Store'],
    },
    outOfStock: [
      {
        container:
          '#maincontent > div.container.product-detail.product-wrapper.pb-xl.pb-lg-xxxl > div > div:nth-child(2) > div.col-12.col-md-6.col-lg-5 > div > div.product-buying-box > div.cart-and-ipay.mt-md > div > div > button > span',
        text: ['Out of Stock'],
      },
      {
        container:
          '#maincontent > div.container.product-detail.product-wrapper.pb-xl.pb-lg-xxxl > div > div:nth-child(2) > div.col-12.col-md-6.col-lg-5 > div > div.product-buying-box > div.cart-and-ipay.mt-md > div > div > div > div',
        text: ['Out of Stock'],
      },
    ],
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.thewarehouse.co.nz/R2695122.html',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.thewarehouse.co.nz/R2695123.html',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.thewarehouse.co.nz/R2708605.html',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.thewarehouse.co.nz/R2708604.html',
    },
  ],
  name: 'thewarehouse',
};

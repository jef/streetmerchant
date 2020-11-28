import {Store} from './store';

export const AmazonJpEN: Store = {
    backoffStatusCodes: [403, 429, 503],
    labels: {
        captcha: {
            container: 'body',
            text: ['enter the characters you see below']
        },
        inStock: {
            container: '#combinedBuyBox',
            text: ['add to cart']
        },
        maxPrice: {
            container: 'span[class*="PriceString"]'
        }
    },
    links: [
        {
            brand: 'test:brand',
            model: 'test:model',
            series: 'test:series',
            url: 'https://www.amazon.co.jp/-/en/Truitt-Angela/dp/B08NDT3LGC'
        },
        {
            brand: 'sony',
            cartUrl:
                'https://www.amazon.co.jp/gp/aws/cart/add.html?ASIN.1=B08GGGBKRQ&Quantity.1=1',
            model: 'ps5 console',
            series: 'sonyps5c',
            url: 'https://www.amazon.co.jp/-/en/dp/B08GGGBKRQ'
        },  
        {
            brand: 'sony',
            cartUrl:
                'https://www.amazon.co.jp/gp/aws/cart/add.html?ASIN.1=B08GGCGS39&Quantity.1=1',
            model: 'ps5 digital',
            series: 'sonyps5de',
            url: 'https://www.amazon.co.jp/gp/product/B08GGCGS39'
        }
    ],
    name: 'amazon-jp-en'
};

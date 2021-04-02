import {Store} from './store';
import fetch from 'node-fetch';

export const Asus: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '$',
  labels: {
    inStock: {
      container: '#item_add_cart',
      text: ['add to cart'],
    },
    outOfStock: {
      container: '#off_sale',
      text: ['sold out'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      itemNumber: '202006AM260000003',
      model: 'test:model',
      series: 'test:series',
      url: 'https://store.asus.com/us/item/202006AM260000003',
    },
    {
      brand: 'asus',
      itemNumber: '202012AM030000004',
      model: 'tuf oc',
      series: '3060ti',
      url: 'https://store.asus.com/us/item/202012AM030000004',
    },
    {
      brand: 'asus',
      itemNumber: '202012AM030000003',
      model: 'dual',
      series: '3060ti',
      url: 'https://store.asus.com/us/item/202012AM030000003',
    },
    {
      brand: 'asus',
      itemNumber: '202012AM030000005',
      model: 'strix oc',
      series: '3060ti',
      url: 'https://store.asus.com/us/item/202012AM030000005',
    },
    {
      brand: 'asus',
      itemNumber: '202012AM030000002',
      model: 'ko',
      series: '3060ti',
      url: 'https://store.asus.com/us/item/202012AM030000002',
    },
    {
      brand: 'asus',
      itemNumber: '202010AM310000002',
      model: 'tuf oc',
      series: '3070',
      url: 'https://store.asus.com/us/item/202010AM310000002',
    },
    {
      brand: 'asus',
      itemNumber: '202011AM240000001',
      model: 'dual',
      series: '3070',
      url: 'https://store.asus.com/us/item/202011AM240000001',
    },
    {
      brand: 'asus',
      itemNumber: '202010AM310000003',
      model: 'dual',
      series: '3070',
      url: 'https://store.asus.com/us/item/202010AM310000003',
    },
    {
      brand: 'asus',
      itemNumber: '202011AM070000002',
      model: 'ko oc',
      series: '3070',
      url: 'https://store.asus.com/us/item/202011AM070000002',
    },
    {
      brand: 'asus',
      itemNumber: '202011AM070000003',
      model: 'dual',
      series: '3070',
      url: 'https://store.asus.com/us/item/202011AM070000003',
    },
    {
      brand: 'asus',
      itemNumber: '202101AM070000001',
      model: 'strix oc',
      series: '3070',
      url: 'https://store.asus.com/us/item/202101AM070000001',
    },
    {
      brand: 'asus',
      itemNumber: '202009AM290000002',
      model: 'strix',
      series: '3080',
      url: 'https://store.asus.com/us/item/202009AM290000002',
    },
    {
      brand: 'asus',
      itemNumber: '202009AM160000001',
      model: 'tuf oc',
      series: '3080',
      url: 'https://store.asus.com/us/item/202009AM160000001',
    },
    {
      brand: 'asus',
      itemNumber: '202012AM220000002',
      model: 'strix oc',
      series: '3080',
      url: 'https://store.asus.com/us/item/202012AM220000002',
    },
    {
      brand: 'asus',
      itemNumber: '202009AM150000004',
      model: 'tuf',
      series: '3080',
      url: 'https://store.asus.com/us/item/202009AM150000004',
    },
    {
      brand: 'asus',
      itemNumber: '202101AM070000002',
      model: 'ekwb',
      series: '3080',
      url: 'https://store.asus.com/us/item/202101AM070000002',
    },
    {
      brand: 'asus',
      itemNumber: '202009AM150000001',
      model: 'tuf oc',
      series: '3090',
      url: 'https://store.asus.com/us/item/202009AM150000001',
    },
    {
      brand: 'asus',
      itemNumber: '202009AM150000003',
      model: 'tuf',
      series: '3090',
      url: 'https://store.asus.com/us/item/202009AM150000003',
    },
    {
      brand: 'asus',
      itemNumber: '202012AM220000001',
      model: 'strix oc',
      series: '3090',
      url: 'https://store.asus.com/us/item/202012AM220000001',
    },
    {
      brand: 'asus',
      itemNumber: '202011AM200000003',
      model: 'crosshair viii',
      series: 'darkhero',
      url: 'https://store.asus.com/us/item/202011AM200000003',
    },
  ],
  name: 'asus',
  realTimeInventoryLookup: async (itemNumber: string) => {
    const request_url = 'https://store.asus.com/us/category/get_real_time_data';
    const response = await fetch(request_url, {
      body: 'sm_seq_list%5B%5D=' + itemNumber,
      headers: {
        'accept-language': 'en-US,en;q=0.9',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      method: 'POST',
    });
    const response_json = await response.json();

    if (response_json.data[itemNumber] !== undefined) {
      const item_info = response_json.data[itemNumber].market_info;
      if (item_info.buy === true || item_info.quantity > 0) {
        return true;
      }
    }

    return false;
  },
  successStatusCodes: [[0, 399], 404],
};

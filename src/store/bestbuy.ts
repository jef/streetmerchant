import {Store} from './store';

export const BestBuy: Store = {
	cartUrl: '',
	links: [
		{
			brand: 'nvidia',
			model: 'founder edition',
			url: 'https://www.bestbuy.com/site/nvidia-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card-titanium-and-black/6429440.p?skuId=6429440',
			oosLabels: ['sold out']
		},
		{
			brand: 'gigabyte',
			model: 'black',
			url: 'https://www.bestbuy.com/site/gigabyte-geforce-rtx-3080-10g-gddr6x-pci-express-4-0-graphics-card-black/6430620.p?acampID=0&cmp=RMX&loc=Hatch&ref=198&skuId=6430620',
			oosLabels: ['sold out']
		}
	],
	name: 'bestbuy'
};

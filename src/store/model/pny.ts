import {Store} from './store';

export const Pny: Store = {
	labels: {
		inStock: {
			container: '#ctl01_lbtnAddToCart',
			text: ['add to cart']
		},
		maxPrice: {
			container: 'span[itemprop="price"]',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.pny.com/pny-geforce-gtx-1660-super-gaming-oc-sf'
		},
		{
			brand: 'pny',
			model: 'dual fan',
			series: '3070',
			url: 'https://www.pny.com/pny-geforce-rtx-3070-8gb-df'
		},
		{
			brand: 'pny',
			model: 'xlr8 revel',
			series: '3070',
			url:
				'https://www.pny.com/geforce-rtx-3070-xlr8-gaming-epic-x-rgb-triple-fan'
		},
		{
			brand: 'pny',
			model: 'xlr8 revel',
			series: '3080',
			url:
				'https://www.pny.com/geforce-rtx-3080-xlr8-gaming-epic-x-rgb-triple-fan-m'
		},
		{
			brand: 'pny',
			model: 'xlr8 revel',
			series: '3080',
			url:
				'https://www.pny.com/geforce-rtx-3080-xlr8-gaming-epic-x-rgb-triple-fan-p'
		},
		{
			brand: 'pny',
			model: 'xlr8 revel',
			series: '3090',
			url:
				'https://www.pny.com/geforce-rtx-3090-xlr8-gaming-epic-x-rgb-triple-fan-m'
		},
		{
			brand: 'pny',
			model: 'xlr8 revel',
			series: '3090',
			url:
				'https://www.pny.com/geforce-rtx-3090-xlr8-gaming-epic-x-rgb-triple-fan-p'
		}
	],
	name: 'pny'
};

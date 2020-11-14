import {Store} from './store';

export const antonline: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['please verify you are a human']
		},
		inStock: {
			container: '.buy-section.purchase',
			text: ['Add to Cart']
		},
		maxPrice: {
			container: '.your-price',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.antonline.com/AMD/Computers/Electronic_Components/Microprocessors/1399825'
		},
		{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen5950',
			url: 'https://www.antonline.com/AMD/Computers/Electronic_Components/Microprocessors/1411788'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://www.antonline.com/AMD/Computers/Electronic_Components/Microprocessors/1411789'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url: 'https://www.antonline.com/AMD/Computers/Electronic_Components/Microprocessors/1411790'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://www.antonline.com/AMD/Computers/Electronic_Components/Microprocessors/1411791'
		}
	],		
	name: 'antonline'
};

import {Store} from './store';

export const Nvidia: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['are you a human?']
		},
		inStock: {
			container: '.main-container',
			text: ['add to cart']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.newegg.com/evga-geforce-rtx-2060-06g-p4-2066-kr/p/N82E16814487488'
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			series: '3080',
			url: 'https://www.nvidia.com/en-us/shop/geforce/gpu/?page=1&limit=9&locale=en-us&gpu=RTX%203080&category=GPU&manufacturer=NVIDIA&gpu_filter=RTX%203090~1,RTX%203080~1,RTX%203070~0,TITAN%20RTX~0,RTX%202080%20Ti~0,RTX%202070%20SUPER~0,RTX%202060%20SUPER~0,RTX%202060~0,GTX%201660%20Ti~0,GTX%201660%20SUPER~0,GTX%201660~0,GTX%201650%20SUPER~0,GTX%201650~0'
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			series: '3090',
			url: 'https://www.nvidia.com/en-us/shop/geforce/gpu/?page=1&limit=9&locale=en-us&gpu=RTX%203090&category=GPU&manufacturer=NVIDIA&gpu_filter=RTX%203090~1,RTX%203080~1,RTX%203070~0,TITAN%20RTX~0,RTX%202080%20Ti~0,RTX%202070%20SUPER~0,RTX%202060%20SUPER~0,RTX%202060~0,GTX%201660%20Ti~0,GTX%201660%20SUPER~0,GTX%201660~0,GTX%201650%20SUPER~0,GTX%201650~0'
		}
	],
	name: 'nvidia'
};

import {Store} from './store';
import {Page} from 'puppeteer';

export const Nvidia: Store = {
	links: [
		{
			brand: 'nvidia',
			model: 'founders edition',
			url: 'https://api.digitalriver.com/v1/shoppers/me/products/5438481700/inventory-status?apiKey=9485fa7b159e42edb08a83bde0d83dia',
			oosLabels: ['product_inventory_out_of_stock', 'rate limit exceeded'],
			openCartAction: (page: Page) => {
				// https://github.com/jef/nvidia-snatcher/issues/38#issuecomment-695091964
				//
				// You use the access_token from https://store.nvidia.com/store/nvidia/SessionToken?format=json&callback=jQuery3510013225370692239835_1600463566842&locale=en_us&apiKey=9485fa7b159e42edb08a83bde0d83dia&currency=USD&_=1600463566843
				//
				// to make this one: https://api.digitalriver.com/v1/shoppers/me/carts/active/line-items?callback=jQuery351024446555583743956_1600463465706&format=json&method=delete&token=0ac25d414f09b4dd1db4698972d82ce53d794652ff500cdd9a182a24101aebab64a37f11167f6436507a994ea9af4f98a9bd3156f155ab1025eac7ff1231bb0f92a32f9ec4ecf882e4d9d3854d423b08&_=1600463465708
				//
				// that adds to a cart
				//
				// then open this https://api.digitalriver.com/v1/shoppers/me/carts/active/web-checkout?token=0ac25d414f09b4dd1db4698972d82ce53d794652ff500cdd9a182a24101aebab64a37f11167f6436507a994ea9af4f98a9bd3156f155ab1025eac7ff1231bb0f92a32f9ec4ecf882e4d9d3854d423b08
				// and that redirects you to the nvidia page with the item in the cart
			}
		}
	],
	name: 'nvidia'
};

import {Store} from './store';

export const Nvidia: Store = {
	links: [
		{
			brand: 'TEST',
			model: 'CARD',
			url: 'https://api.digitalriver.com/v1/shoppers/me/carts/active/line-items?format=json&method=post&productId=5379432500&quantity=1&token=0ac25d414f09b4dd1db4698972d82ce53d794652ff500cdd9a182a24101aebab1fd306023069c48d362b82d01913e920a9bd3156f155ab1025eac7ff1231bb0f92a32f9ec4ecf882e4d9d3854d423b08'
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			url: 'https://api.digitalriver.com/v1/shoppers/me/carts/active/line-items?format=json&method=post&productId=5438481700&quantity=1&token=0ac25d414f09b4dd1db4698972d82ce53d794652ff500cdd9a182a24101aebab1fd306023069c48d362b82d01913e920a9bd3156f155ab1025eac7ff1231bb0f92a32f9ec4ecf882e4d9d3854d423b08'
		}
	],
	labels: {
		oosList: ['inventory-unavailable-error', 'rate limit exceeded']
	},
	cartUrl: 'https://store.nvidia.com/store?Action=DisplayPage&SiteID=nvidia&id=QuickBuyCartPage',
	name: 'nvidia'
};

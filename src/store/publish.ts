import {Link, Store} from './model';
import fetch, {Headers} from 'node-fetch';

/**
 * Publishes lookup result as a GQL feed entry.
 *
 * @param store Vendor of graphics cards.
 * @param link Link to item in store.
 * @param status Lookup result status.
 */
export async function publishFeedEntry(link: Link, store: Store, status: string) {
	const query = `
		mutation PublishFeedEntry(
			$brand: String!
      $series: String!
      $model: String!
      $url: String!
      $status: String!
      $storeName: String!
      $itemNumber: String
      $cartUrl: String
      $screenshot: String
		) {
			publishFeedEntry(
				brand: $brand
        series: $series
        model: $model
        url: $url
        status: $status
        storeName: $storeName
        itemNumber: $itemNumber
        cartUrl: $cartUrl
        screenshot: $screenshot
			) {
				status
			}
		}
  `;

	const url = process.env.GRAPHQL_API_URL ?? 'http://localhost:4000';
	const variables = {
		brand: link.brand,
		cartUrl: link.cartUrl,
		itemNumber: link.itemNumber,
		model: link.model,
		screenshot: link.screenshot,
		series: link.series,
		status,
		storeName: store.name,
		url: link.url
	};

	return fetch(url, {
		body: JSON.stringify({
			query,
			variables
		}),
		headers: new Headers({'Content-Type': 'application/json'}),
		method: 'POST'
	});
}

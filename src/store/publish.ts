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
	const rootUrl = 'http://localhost';
	const port = process.env.GRAPHQL_PORT;

	// Skip publishing if there is no API port specified
	if (!port) {
		return Promise.resolve();
	}

	const url = `${rootUrl}:${port}`;

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

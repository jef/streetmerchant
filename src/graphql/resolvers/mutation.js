const publishFeedEntry = (_, args, context) => {
	const feedEntry = {
		link: {
			brand: args.brand,
			cartUrl: args.cartUrl,
			itemNumber: args.itemNumber,
			model: args.model,
			screenshot: args.screenshot,
			series: args.series,
			url: args.url
		},
		status: args.status,
		store: {
			name: args.storeName
		}
	};

	context.pubsub.publish('FEED_ENTRY', feedEntry);
	return feedEntry;
};

const Mutation = {publishFeedEntry};

export default Mutation;

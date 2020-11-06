const publishFeedEntry = (_, args, context) => {
	const feedEntry = {
		productName: args.productName,
		productSlug: args.productSlug,
		status: args.status,
		url: args.url
	};

	context.pubsub.publish('FEED_ENTRY', feedEntry);
	return feedEntry;
};

module.exports = {publishFeedEntry};

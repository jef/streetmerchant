const feedEntrySubscribe = (_, __, context) => {
	return context.pubsub.asyncIterator('FEED_ENTRY');
};

const feedEntry = {
	resolve: payload => {
		return payload;
	},
	subscribe: feedEntrySubscribe
};

const Subscription = {feedEntry};

export default Subscription;

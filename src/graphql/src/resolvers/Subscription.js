const feedEntrySubscribe = (_, __, context) => {
	return context.pubsub.asyncIterator('FEED_ENTRY');
};

const feedEntry = {
	resolve: payload => {
		return payload;
	},
	subscribe: feedEntrySubscribe
};

module.exports = {feedEntry};

import {withFilter} from 'apollo-server';

const feedEntrySubscribe = (_, __, context) => {
	return context.pubsub.asyncIterator('FEED_ENTRY');
};

const feedEntry = {
	resolve: payload => {
		return payload;
	},
	subscribe: withFilter(
		feedEntrySubscribe,
		(payload, variables) => {
			if (variables.brand && variables.brand !== payload.link.brand) {
				return false;
			}

			if (variables.series && variables.series !== payload.link.series) {
				return false;
			}

			if (variables.model && variables.model !== payload.link.model) {
				return false;
			}

			if (variables.storeName && variables.storeName !== payload.store.name) {
				return false;
			}

			return true;
		}
	)
};

const Subscription = {feedEntry};

export default Subscription;

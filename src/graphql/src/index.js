const {GraphQLServer, PubSub} = require('graphql-yoga');
const FeedEntry = require('./resolvers/feed-entry');
const Mutation = require('./resolvers/mutation');
const Query = require('./resolvers/query');
const Subscription = require('./resolvers/subscription');

const pubsub = new PubSub();

const resolvers = {
	FeedEntry,
	Mutation,
	Query,
	Subscription
};

const server = new GraphQLServer({
	context: request => {
		return {
			...request,
			pubsub
		};
	},
	resolvers,
	typeDefs: './src/schema.graphql'
});

server.start(() => console.log('Server is running on http://localhost:4000'));

import {GraphQLServer, PubSub} from 'graphql-yoga';
import FeedEntry from './resolvers/feed-entry';
import Mutation from './resolvers/mutation';
import Subscription from './resolvers/subscription';
import {logger} from '../logger';

class GQLServer {
	pubsub: PubSub;
	server: GraphQLServer;
	port: string;

	constructor(port: string) {
		const resolvers = {
			FeedEntry,
			Mutation,
			Subscription
		};

		this.port = port;
		this.pubsub = new PubSub();
		this.server = new GraphQLServer({
			context: request => {
				return {
					...request,
					pubsub: this.pubsub
				};
			},
			resolvers,
			typeDefs: './src/graphql/schema.graphql'
		});
	}

	serve() {
		const options = {
			port: this.port
		};
		this.server.start(options, () => console.log(`GraphQL server is running on http://localhost:${this.port}`)).catch(logger.error);
	}
}

export default GQLServer;

import { ApolloClient, createHttpLink, from } from '@apollo/client';
import cache from './cache';
import { authLink } from './links/authLink';

const httpLink = createHttpLink({
	uri: 'http://192.168.0.183:2004/graphql',
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache,
});

export default client;

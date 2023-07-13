import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	ApolloLink,
	concat,
	split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {
	NextSSRInMemoryCache,
	NextSSRApolloClient,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

const httpLink = new HttpLink({
	// https://studio.apollographql.com/public/spacex-l4uc6p/
	uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
	// you can disable result caching here if you want to
	// (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
	// fetchOptions: { cache: "no-store" },
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = process.env.AUTH_TOKEN;
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			Authorization: token ? `Bearer ${token}` : '',
		},
	};
});

export const { getClient } = registerApolloClient(() => {
	return new NextSSRApolloClient({
		cache: new NextSSRInMemoryCache(),
		link: authLink.concat(httpLink),
	});
});

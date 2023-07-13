'use client';

import {
	ApolloClient,
	ApolloLink,
	HttpLink,
	SuspenseCache,
} from '@apollo/client';
import {
	ApolloNextAppProvider,
	NextSSRApolloClient,
	NextSSRInMemoryCache,
	SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';

const makeClient = () => {
	const httpLink = new HttpLink({
		uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
	});

	return new NextSSRApolloClient({
		cache: new NextSSRInMemoryCache(),
		link:
			typeof window === 'undefined'
				? ApolloLink.from([
						new SSRMultipartLink({
							stripDefer: true,
						}),
						httpLink,
				  ])
				: httpLink,
	});
};

const makeSuspenseCache = () => {
	return new SuspenseCache();
};

const ApolloWrapper = ({ children }: React.PropsWithChildren) => {
	return (
		<ApolloNextAppProvider
			makeClient={makeClient}
			makeSuspenseCache={makeSuspenseCache}
		>
			{children}
		</ApolloNextAppProvider>
	);
};

export { ApolloWrapper };

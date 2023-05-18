import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

// Used server and client side - can't use react hooks
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:3000/api/graphql',
  }),
  ssrMode: typeof window === 'undefined',
});

export default client;

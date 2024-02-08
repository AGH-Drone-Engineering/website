import { ApolloClient, InMemoryCache } from '@apollo/client';
import possibleTypes from '../possibleTypes.json';

export const client = new ApolloClient({
    uri: `${window.location.origin}/index.php?graphql`,
    cache: new InMemoryCache({
        possibleTypes,
        typePolicies: {
            RootQuery: {
                queryType: true,
            },
            RootMutation: {
                mutationType: true,
            },
        },
    }),
});

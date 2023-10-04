import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import possibleTypes from '~/possibleTypes.json';

export const getClient = () => (
    new ApolloClient({
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
        link: createHttpLink({
            uri: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/index.php?graphql`,
        }),
    })
);

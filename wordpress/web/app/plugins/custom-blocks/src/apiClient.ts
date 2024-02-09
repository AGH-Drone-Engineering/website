import { ApolloClient, InMemoryCache } from '@apollo/client';
import possibleTypes from '../possibleTypes.json';

const getUrl = () => {
    if (window.location.host === 'localhost') {
        return window.location.origin;
    }

    return `${window.location.origin}/${window.location.pathname
        .split('/')
        .slice(0, 2)
        .join('/')}`;
};

export const client = new ApolloClient({
    uri: `${getUrl()}/index.php?graphql`,
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

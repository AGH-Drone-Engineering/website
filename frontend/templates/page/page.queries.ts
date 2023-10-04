import { gql } from '~/models/graphql.generated';

export const getPageTitleByUri = gql(/* GraphQL */ `
    query GetPageTitleByUri($uri: ID!) {
        page(id: $uri, idType: URI) {
            title
        }
    }
`);

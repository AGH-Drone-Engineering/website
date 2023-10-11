import { gql, TypedDocumentNode } from '@apollo/client';
import {
    GetNodeAndWebsiteNameQuery,
    GetWebsiteNameQuery,
} from '~/models/graphql.generated';

export const getWebsiteNameQuery: TypedDocumentNode<GetWebsiteNameQuery> = gql`
    query GetWebsiteName {
        generalSettings {
            title
            description
        }
    }
`;

export const getNodeAndWebsiteNameQuery: TypedDocumentNode<GetNodeAndWebsiteNameQuery> = gql`
    query GetNodeAndWebsiteName($uri: ID!) {
        generalSettings {
            title
            description
        }
        contentNode(id: $uri, idType: URI) {
            ... on NodeWithTitle {
                title
            }
        }
    }
`;

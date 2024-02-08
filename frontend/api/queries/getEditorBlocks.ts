import { gql, TypedDocumentNode } from '@apollo/client';
import { coreParagraphFragment } from '~/blocks/core/Paragraph/Paragraph';
import { testBlockFragment } from '~/blocks/custom/TestBlock';
import { GetEditorBlocksByUriQuery } from '~/models/graphql.generated';

export const getEditorBlocksByUri: TypedDocumentNode<GetEditorBlocksByUriQuery> = gql`
    ${coreParagraphFragment}
    ${testBlockFragment}

    query GetEditorBlocksByUri($uri: String!) {
        nodeByUri(uri: $uri) {
            ... on NodeWithEditorBlocks {
                editorBlocks(flat: true) {
                    __typename
                    clientId
                    parentClientId
                    name
                    renderedHtml
                    ...CoreParagraph
                    ...TestBlock
                }
            }
        }
    }
`;

export type EditorBlock = Defined<
    Defined<
        Extract<
            Defined<GetEditorBlocksByUriQuery['nodeByUri']>,
            { __typename: 'Page' | 'Post' }
        >['editorBlocks']
    >[number]
>;

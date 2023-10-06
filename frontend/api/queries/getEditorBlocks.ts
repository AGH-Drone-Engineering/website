import { gql, TypedDocumentNode } from '@apollo/client';
import { coreParagraphFragment } from '~/blocks/core/Paragraph';
import { GetEditorBlocksByUriQuery } from '~/models/graphql.generated';

export const getEditorBlocksByUri: TypedDocumentNode<GetEditorBlocksByUriQuery> = gql`
    ${coreParagraphFragment}

    query GetEditorBlocksByUri($uri: ID!) {
        contentNode(id: $uri, idType: URI) {
            ... on NodeWithEditorBlocks {
                editorBlocks(flat: true) {
                    __typename
                    clientId
                    parentClientId
                    name
                    renderedHtml
                    ...CoreParagraph
                }
            }
        }
    }
`;

type EditorBlock = Defined<
    Defined<
        Exclude<
            Defined<GetEditorBlocksByUriQuery['contentNode']>,
            { __typename: 'MediaItem' }
        >['editorBlocks']
    >[number]
>;

export type EditorBlockTree = EditorBlock & { innerBlocks?: EditorBlock[] };

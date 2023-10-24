import { gql, TypedDocumentNode } from '@apollo/client';
import { CoreParagraphFragment } from '~/models/graphql.generated';
import { BlockComponent } from '../../types';

export const coreParagraphFragment: TypedDocumentNode<CoreParagraphFragment> = gql`
    fragment CoreParagraph on CoreParagraph {
        attributes {
            content
        }
    }
`;

export const ParagraphBlock: BlockComponent<'CoreParagraph'> = ({ block }) => (
    <p dangerouslySetInnerHTML={{ __html: block.attributes?.content ?? '' }} />
);

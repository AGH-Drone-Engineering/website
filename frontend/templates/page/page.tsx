import { flatListToHierarchical } from '@faustwp/core';
import invariant from 'tiny-invariant';
import { getClient } from '~/api/apolloClient';
import {
    EditorBlockTree,
    getEditorBlocksByUri,
} from '~/api/queries/getEditorBlocks';
import { WordPressBlockViewer } from '~/components/WordPressBlockViewer';
import { isTruthy } from '~/utils/isTruthy';
import { WordpressTemplate } from '../types';

export const Page: WordpressTemplate = async ({ uri }) => {
    const { data } = await getClient().query({
        query: getEditorBlocksByUri,
        variables: { uri },
    });

    invariant(data.contentNode?.__typename !== 'MediaItem');

    const hierarchical = flatListToHierarchical(
        data.contentNode?.editorBlocks?.filter(isTruthy) ?? [],
        {
            childrenKey: 'innerBlocks',
            idKey: 'clientId',
            parentKey: 'parentClientId',
        },
    ) as EditorBlockTree[];

    return <WordPressBlockViewer blocks={hierarchical} />;
};

import invariant from 'tiny-invariant';
import { getClient } from '~/api/apolloClient';
import { getEditorBlocksByUri } from '~/api/queries/getEditorBlocks';
import { WordPressBlockViewer } from '~/components/WordPressBlockViewer';
import { WordpressTemplate } from '../types';

export const Page: WordpressTemplate = async ({ uri }) => {
    const { data } = await getClient().query({
        query: getEditorBlocksByUri,
        variables: { uri },
    });

    invariant(data.contentNode?.__typename !== 'MediaItem');

    return (
        <WordPressBlockViewer blocks={data.contentNode?.editorBlocks ?? []} />
    );
};

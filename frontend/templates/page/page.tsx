import { getClient } from '~/api/apolloClient';
import { WordpressTemplate } from '../types';
import { getPageTitleByUri } from './page.queries';

export const Page: WordpressTemplate = async ({ uri }) => {
    const { data } = await getClient().query({
        query: getPageTitleByUri,
        variables: { uri },
    });

    return <div>{data.page?.title}</div>;
};

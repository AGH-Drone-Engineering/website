import { getClient } from '~/api/apolloClient';
import { WordpressTemplateViewer } from '~/components/WordpressTemplateViewer';
import { allNodeUrisQuery, seedQuery } from '../page.queries';

interface Params {
    uri: string[];
}

export const generateStaticParams = async (): Promise<Params[]> => {
    const { data } = await getClient().query({
        query: allNodeUrisQuery,
    });

    const result =
        data.contentNodes?.edges.map<Params>(({ node }) => ({
            uri: node.uri?.split('/').filter(str => !!str) ?? [],
        })) ?? [];

    return result;
};

export default async function NodeByUriPagePage({
    params: { uri },
}: {
    params: Params;
}) {
    const uriString = uri.join('/');

    const { data } = await getClient().query({
        query: seedQuery,
        variables: {
            uri: uriString,
        },
    });

    return (
        <WordpressTemplateViewer
            seedQuery={data}
            uri={uriString}
        />
    );
}
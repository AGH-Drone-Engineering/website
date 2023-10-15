import { Metadata } from 'next';
import { getClient } from '~/api/apolloClient';
import { getNodeAndWebsiteNameQuery } from '~/api/queries/getTitle';
import { seedQuery } from '~/api/queries/seedQuery';
import { WordpressTemplateViewer } from '~/components/WordpressTemplateViewer';
import { allNodeUrisQuery } from '../page.queries';

interface Params {
    uri: string[];
}

export async function generateMetadata({
    params: { uri },
}: {
    params: Params;
}): Promise<Metadata> {
    const { data } = await getClient().query({
        query: getNodeAndWebsiteNameQuery,
        variables: {
            uri: uri.join('/'),
        },
    });

    return {
        title: `${data.generalSettings?.title} - ${data.contentNode?.title}`,
        description: data.generalSettings?.description,
    };
}

export async function generateStaticParams(): Promise<Params[]> {
    const { data } = await getClient().query({
        query: allNodeUrisQuery,
    });

    const result =
        data.contentNodes?.edges
            .map<Params>(({ node }) => ({
                uri: node.uri?.split('/').filter(str => !!str) ?? [],
            }))
            .filter(({ uri }) => uri.length > 0) ?? [];

    console.log(JSON.stringify(result, null, 4));

    return result;
}

export default async function NodeByUriPagePage({
    params: { uri },
}: {
    params: Params;
}) {
    const uriString = '/' + uri.join('/');

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

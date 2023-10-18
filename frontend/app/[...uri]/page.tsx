import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getClient } from '~/api/apolloClient';
import { getNodeAndWebsiteNameQuery } from '~/api/queries/getTitle';
import { seedQuery } from '~/api/queries/seedQuery';
import { WordpressTemplateViewer } from '~/components/WordpressTemplateViewer';
import { allNodeUrisQuery } from '../page.queries';

interface Params {
    uri: string[];
}

const emptyResultUri = '84887ca1-2faa-5a16-8b42-2a1a740955da_empty_result';

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

    // Workaround for and issue with next, the build breaks when this function returns an empty array
    if (result.length === 0) {
        return [{ uri: [emptyResultUri] }];
    }

    return result;
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

    if (!data.contentNode) {
        return {};
    }

    return {
        title: `${data.generalSettings?.title} - ${data.contentNode?.title}`,
        description: data.generalSettings?.description,
    };
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

    if (!data.nodeByUri) {
        return notFound();
    }

    return (
        <WordpressTemplateViewer
            seedQuery={data}
            uri={uriString}
        />
    );
}

import { Metadata } from 'next';
import { getClient } from '~/api/apolloClient';
import { getWebsiteNameQuery } from '~/api/queries/getTitle';
import { seedQuery } from '~/api/queries/seedQuery';
import { WordpressTemplateViewer } from '~/components/WordpressTemplateViewer';

export async function generateMetadata(): Promise<Metadata> {
    const { data } = await getClient().query({
        query: getWebsiteNameQuery,
    });

    return {
        title: data.generalSettings?.title,
        description: data.generalSettings?.description,
    };
}

export default async function RootPage() {
    const { data } = await getClient().query({
        query: seedQuery,
    });

    return <WordpressTemplateViewer seedQuery={data} />;
}

import { getClient } from '~/api/apolloClient';
import { WordpressTemplateViewer } from '~/components/WordpressTemplateViewer';
import { seedQuery } from './page.queries';

export default async function RootPage() {
    const { data } = await getClient().query({
        query: seedQuery,
    });

    return <WordpressTemplateViewer seedQuery={data} />;
}

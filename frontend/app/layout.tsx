import { PropsWithChildren } from 'react';
import { gql, TypedDocumentNode } from '@apollo/client';
import { ColorSchemeScript } from '@mantine/core';
import { getClient } from '~/api/apolloClient';
import { Providers } from '~/context/Providers';
import { GetFaviconUriQuery } from '~/models/graphql.generated';
import '@mantine/core/styles.css';
import '~/styles/global.css';

export const faviconQuery: TypedDocumentNode<GetFaviconUriQuery> = gql`
    query GetFaviconUri {
        favicon {
            sourceUrl
        }
    }
`;

export default async function RootLayout({ children }: PropsWithChildren) {
    const { data } = await getClient().query({
        query: faviconQuery,
    });

    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
                {data.favicon?.sourceUrl && (
                    <link
                        rel="icon"
                        href={data.favicon?.sourceUrl}
                        sizes="any"
                    />
                )}
            </head>
            <body suppressHydrationWarning>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

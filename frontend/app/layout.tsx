import { PropsWithChildren } from 'react';
import { ColorSchemeScript } from '@mantine/core';
import { Providers } from '~/lib/Providers';
import '@mantine/core/styles.css';

export const dynamic = 'error';

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

import { PropsWithChildren } from 'react';
import { ColorSchemeScript } from '@mantine/core';
import { Providers } from '~/context/Providers';
import '@mantine/core/styles.css';

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

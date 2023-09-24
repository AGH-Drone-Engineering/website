import { PropsWithChildren } from 'react';
import { StyledComponentsRegistry } from '~/lib/StyledComponentsRegistry';
import { Providers } from './providers';

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>
                    <Providers>{children}</Providers>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}

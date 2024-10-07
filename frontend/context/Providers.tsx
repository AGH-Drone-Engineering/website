'use client';

import { PropsWithChildren } from 'react';
import { MantineProvider } from '@mantine/core';
import { BlockMappingProvider } from './BlockMapping';
// import { theme } from '~/styles/theme';

export const Providers: React.FC<PropsWithChildren> = ({ children }) => (
    // TODO: uncomment when theme is filled with values
    <MantineProvider /* theme={theme} */>
        <BlockMappingProvider>{children}</BlockMappingProvider>
    </MantineProvider>
);

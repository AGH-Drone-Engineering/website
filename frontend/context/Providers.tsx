'use client';

import { PropsWithChildren } from 'react';
import { MantineProvider } from '@mantine/core';
import { theme } from '~/styles/theme';
import { TemplateProvider } from './templatesContext';

export const Providers: React.FC<PropsWithChildren> = ({ children }) => (
    // TODO: uncomment when theme is filled with values
    <MantineProvider /* theme={theme} */>
        <TemplateProvider>{children}</TemplateProvider>
    </MantineProvider>
);

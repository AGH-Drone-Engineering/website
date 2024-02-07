import type { Preview } from '@storybook/react';
import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';

const preview: Preview = {
    decorators: [
        Story => (
            <>
                <ColorSchemeScript />
                <MantineProvider>
                    <Story/>
                </MantineProvider>
            </>
        )
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: '/',
            },
        },
    },
};

export default preview;

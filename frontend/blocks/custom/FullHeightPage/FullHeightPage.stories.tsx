import type { Meta, StoryObj } from '@storybook/react';
import { FullHeightPage as FullHeightPageComponent } from './FullHeightPage';

interface StoryArgs {
    allowScrollOnMobile: boolean;
}

const meta: Meta<StoryArgs> = {
    component: ({ allowScrollOnMobile }) => (
        <FullHeightPageComponent
            block={{
                __typename: 'CustomFullHeightPage',
                clientId: null,
                parentClientId: null,
                name: null,
                renderedHtml: null,
                attributes: {
                    __typename: 'CustomFullHeightPageAttributes',
                    allowScrollOnMobile,
                },
            }}
        />
    ),
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const FullHeightPage: Story = {
    args: {
        allowScrollOnMobile: false,
    },
};

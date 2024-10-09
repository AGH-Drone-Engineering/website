import type { Meta, StoryObj } from '@storybook/react';
import { FloatingLanguageSwitcher as FloatingLanguageSwitcherComponent } from './FloatingLanguageSwitcher';

interface StoryArgs {
    corner: string;
}

const meta: Meta<StoryArgs> = {
    component: ({ corner }) => (
        <FloatingLanguageSwitcherComponent
            block={{
                __typename: 'CustomFloatingLanguageSwitcher',
                clientId: null,
                parentClientId: null,
                name: null,
                renderedHtml: null,
                attributes: {
                    __typename: 'CustomFloatingLanguageSwitcherAttributes',
                    corner,
                },
            }}
        />
    ),
    argTypes: {
        corner: {
            control: 'select',
            options: ['top-left', 'top-right', 'bottom-right', 'bottom-left'],
        },
    },
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const FloatingLanguageSwitcher: Story = {
    args: {},
};

import type { Meta, StoryObj } from '@storybook/react';
import { ParagraphBlock as ParagraphBlockComponent } from './Paragraph';

interface StoryArgs {
    text: string;
}

const meta: Meta<StoryArgs> = {
    component: ({ text }) => (
        <ParagraphBlockComponent
            block={{
                __typename: 'CoreParagraph',
                clientId: null,
                parentClientId: null,
                name: null,
                renderedHtml: null,
                attributes: {
                    __typename: 'CoreParagraphAttributes',
                    content: text,
                },
            }}
        />
    ),
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const ParagraphBlock: Story = {
    args: {
        text: 'Lorem ipsum cośtam coś test',
    },
    parameters: {
        layout: 'centered',
    },
};

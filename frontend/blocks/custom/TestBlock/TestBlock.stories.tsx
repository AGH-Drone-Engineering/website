import type { Meta, StoryObj } from '@storybook/react';
import { TestBlock as TestBlockComponent } from './TestBlock';

interface StoryArgs {

}

const meta: Meta<StoryArgs> = {
    component: ({ }) => (
        <TestBlockComponent
            block={{
                __typename: 'CustomTest',
                clientId: null,
                parentClientId: null,
                name: null,
                renderedHtml: null,
                attributes: {
                    __typename: 'CustomTestAttributes',
                    linkTest: '',
                    numberTest: 3,
                    numberWithRangeTest: 23,
                    rangeTest: 21,
                    toggleTest: true,
                    test: '#696969'
                },
            }}
        />
    ),
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const TestBlock: Story = {
    args: {

    },
};

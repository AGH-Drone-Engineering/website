import type { Meta, StoryObj } from '@storybook/react';
import { OrganizationLogo as OrganizationLogoComponent } from './OrganizationLogo';

interface StoryArgs {}

const meta: Meta<StoryArgs> = {
    component: () => (
        <OrganizationLogoComponent
            block={{
                __typename: 'CustomOrganizationLogo',
                clientId: null,
                parentClientId: null,
                name: null,
                renderedHtml: null,
            }}
        />
    ),
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const OrganizationLogo: Story = {
    args: {},
};

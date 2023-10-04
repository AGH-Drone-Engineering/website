import { GetSeedNodeQuery } from '~/models/graphql.generated/graphql';

export interface TemplateProps {
    uri: string;
    seedQuery: GetSeedNodeQuery;
}

export type WordpressTemplate = React.ComponentType<TemplateProps>;

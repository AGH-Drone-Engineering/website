'use client';

import React from 'react';
import invariant from 'tiny-invariant';
import { useTemplateMapping } from '~/context/templatesContext';
import { getTemplate } from '~/lib/getTemplate';
import { GetSeedNodeQuery } from '~/models/graphql.generated/graphql';

interface WordpressTemplateViewerProps {
    seedQuery: GetSeedNodeQuery;
    uri?: string;
}

export const WordpressTemplateViewer: React.FC<
    WordpressTemplateViewerProps
> = ({ seedQuery, uri = '/' }) => {
    const templateMap = useTemplateMapping();

    const Template = getTemplate(seedQuery.nodeByUri, templateMap);

    invariant(!!Template, `Template for "${uri}" could not be determined`);

    return (
        <Template
            seedQuery={seedQuery}
            uri={uri}
        />
    );
};

import React from 'react';
import { BlockComponent } from './types';

export const Fallback: BlockComponent = ({ block }) => (
    <div dangerouslySetInnerHTML={{ __html: block?.renderedHtml ?? '' }} />
);

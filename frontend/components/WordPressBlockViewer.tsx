'use client';

import React from 'react';
import { EditorBlock } from '~/api/queries/getEditorBlocks';
import { Fallback } from '~/blocks/Fallback';
import { useBlockMapping } from '~/context/blocksContext';
import { getComponentForBlock } from '~/lib/getComponentForBlock';

interface WordPressBlockViewerProps {
    blocks: (EditorBlock | null)[];
}

export const WordPressBlockViewer: React.FC<WordPressBlockViewerProps> = ({
    blocks,
}) => {
    const blockMapping = useBlockMapping();

    const blockComponents = blocks.map(block => {
        if (!block) {
            return null;
        }

        const BlockComponent = getComponentForBlock(blockMapping, block);

        if (!BlockComponent) {
            console.warn(
                `Could not match a react component to block of type ${block.__typename}`,
            );
            return (
                <Fallback
                    key={block.clientId}
                    block={block}
                />
            );
        }

        return (
            <BlockComponent
                key={block.clientId}
                block={block}
            />
        );
    });

    return <>{blockComponents}</>;
};

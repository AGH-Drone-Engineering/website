import { useBlockProps } from '@wordpress/block-editor';
import { BlockSaveProps } from '@wordpress/blocks';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Save: React.FC<BlockSaveProps<any>> = () => {
    return <div {...useBlockProps()}>Test</div>;
};

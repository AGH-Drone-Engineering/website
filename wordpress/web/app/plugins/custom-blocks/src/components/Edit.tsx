import { useBlockProps } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';
import { EditorConfig, EditorFieldConfig, FieldType } from '../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const blockAttributeTypeToControlMap: Record<FieldType, EditorFieldConfig> = {
    string: {
        control: 'text',
        location: 'editor',
    },
    boolean: {
        control: 'toggle',
        location: 'editor',
    },
    number: {
        control: 'number',
        location: 'editor',
    },
    object: {
        control: 'textarea',
        initialLines: 10,
        location: 'editor',
    },
    array: {
        control: 'textarea',
        initialLines: 10,
        location: 'editor',
    },
};

export const Edit = <TAttributes extends Record<string, unknown>>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    config?: EditorConfig,
): React.FC<BlockEditProps<TAttributes>> => function CustomBlockEdit() {
        return <div {...useBlockProps()}>Test</div>;
    };

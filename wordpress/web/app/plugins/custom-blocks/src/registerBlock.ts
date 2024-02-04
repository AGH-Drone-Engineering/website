import { BlockConfiguration, registerBlockType } from '@wordpress/blocks';
import { Edit } from './components/Edit';
import { Save } from './components/Save';
import { EditorConfig } from './types';

type BlockAttrsWithOptionalEditSave<
    // eslint-disable-next-line @typescript-eslint/ban-types
    TAttributes extends Record<string, unknown> = {},
> = Omit<BlockConfiguration<TAttributes>, 'edit' | 'save'> &
    Partial<Pick<BlockConfiguration<TAttributes>, 'edit' | 'save'>>;

// eslint-disable-next-line @typescript-eslint/ban-types
export const registerBlock = <TAttributes extends Record<string, unknown> = {}>(
    meta: BlockAttrsWithOptionalEditSave<TAttributes>,
    config?: EditorConfig,
) => registerBlockType(meta.name ?? 'Unnamed block', {
        edit: Edit(config),
        save: Save,
        ...meta,
    });

import { BlockAttribute } from '@wordpress/blocks';

export type FieldType = Extract<
    BlockAttribute<unknown>,
    { type: string }
>['type'];

export interface EditorConfig {
    editorFields: Record<string, EditorFieldConfig>;
}

export type BlockAttributes = Record<string, BlockAttribute<unknown>>;

/**
 *  Should return true or undefined when the attr value is valid, and a string containing a validation error otherwise
 */
export type AttrValidator = (
    attrs: BlockAttributes,
) => true | undefined | string;

export type EditorFieldConfig = {
    location?: 'inspector' | 'editor';
    isValid?: AttrValidator;
} & (
    | {
          control: 'color';
          defaultValue?: string;
      }
    | {
          control: 'text';
          defaultValue?: string;
      }
    | {
          control: 'radio';
          options: { label?: string; value: string }[];
          defaultValue?: string;
      }
    | {
          control: 'richtext';
      }
    | {
          control: 'number';
          min?: number;
          max?: number;
          step?: number;
          defaultValue?: number;
      }
    | {
          control: 'range';
          min: number;
          max: number;
          defaultValue?: number;
          step?: number;
      }
    | {
          control: 'select';
          options: { label?: string; value: string }[];
          defaultValue?: string;
      }
    | {
          control: 'internal-link';
      }
    | {
          control: 'toggle';
          defaultValue?: boolean;
      }
    | {
          control: 'textarea';
          initialLines?: number;
      }
);

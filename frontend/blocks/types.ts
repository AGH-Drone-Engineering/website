import { EditorBlock } from '~/api/queries/getEditorBlocks';

export interface BlockComponentProps<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    T extends EditorBlock['__typename'] = any,
> {
    block: Extract<EditorBlock, { __typename: T }>;
}

export type BlockComponent<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    T extends EditorBlock['__typename'] = any,
> = React.FC<BlockComponentProps<T>>;

export type BlockMap = Partial<
    Record<EditorBlock['__typename'], BlockComponent>
>;

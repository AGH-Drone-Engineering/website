import { EditorBlockTree } from '~/api/queries/getEditorBlocks';
import { BlockMap } from '~/blocks/types';

export const getComponentForBlock = (
    blockMap: BlockMap,
    editorBlock: Pick<EditorBlockTree, '__typename'>,
) => blockMap[editorBlock.__typename];

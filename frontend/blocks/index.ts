import { ParagraphBlock } from './core/Paragraph/Paragraph';
import { TestBlock } from './custom/TestBlock';
import { BlockMap } from './types';

export const blockMapping: BlockMap = {
    CoreParagraph: ParagraphBlock,
    CustomTest: TestBlock,
};

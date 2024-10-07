import { ParagraphBlock } from './core/Paragraph/Paragraph';
import { AGHColorsBackground } from './custom/AGHColorsBackground';
import { TestBlock } from './custom/TestBlock';
import { BlockMap } from './types';

export const blockMapping: BlockMap = {
    CoreParagraph: ParagraphBlock,
    CustomTest: TestBlock,
    CustomAghColorsBackground: AGHColorsBackground,
};

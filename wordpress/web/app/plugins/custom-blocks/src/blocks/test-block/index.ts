import { registerBlock } from '~/src/registerBlock';
import metadata from './block.json';
import { editorConfig } from './editorConfig';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
registerBlock(metadata as any, editorConfig);

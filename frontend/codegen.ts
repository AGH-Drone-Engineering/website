import 'dotenv/config';
import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp/graphql`,
    documents: ['./**/*.tsx', './**/*.ts', '!./models/graphql.generated/**/*'],
    ignoreNoDocuments: true,
    generates: {
        './models/graphql.generated/': {
            preset: 'client',
            config: {
                avoidOptionals: true,
                skipTypename: true,
            },
            presetConfig: {
                gqlTagName: 'gql',
            },
        },
    },
};

export default config;

import { gql, TypedDocumentNode } from '@apollo/client';
import { Metadata } from 'next';
import { getClient } from '~/api/apolloClient';
import { GetSeoQuery, GetSeoQueryVariables } from '~/models/graphql.generated';
import { isTruthy } from './isTruthy';

export const getSeoQuery: TypedDocumentNode<
    GetSeoQuery,
    GetSeoQueryVariables
> = gql`
    query GetSeo($uri: String!) {
        nodeByUri(uri: $uri) {
            id
            ... on NodeWithTitle {
                seo {
                    canonical
                    metaDesc
                    metaRobotsNofollow
                    metaRobotsNoindex
                    opengraphDescription
                    title
                    opengraphUrl
                    opengraphType
                    opengraphTitle
                    opengraphSiteName
                    opengraphImage {
                        sourceUrl
                    }
                }
            }
            ... on Page {
                language {
                    locale
                }
                translations {
                    id
                    uri
                    language {
                        locale
                    }
                }
            }
            ... on Post {
                language {
                    locale
                }
                translations {
                    id
                    uri
                    language {
                        locale
                    }
                }
            }
        }
    }
`;

export const getSeoMetadata = async (uri: string): Promise<Metadata> => {
    const {
        data: { nodeByUri: data },
    } = await getClient().query({
        query: getSeoQuery,
        variables: {
            uri,
        },
    });

    if (!data || (data.__typename !== 'Post' && data.__typename !== 'Page')) {
        return {};
    }

    const { seo, language, translations } = data;

    const url =
        (seo?.canonical || seo?.opengraphUrl)?.replace(
            process.env.NEXT_PUBLIC_WORDPRESS_URL,
            process.env.NEXT_PUBLIC_SITE_URL,
        ) ?? undefined;

    return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
        title: seo?.title ?? undefined,
        description: (seo?.opengraphDescription || seo?.metaDesc) ?? undefined,
        robots: {
            follow: seo?.metaRobotsNofollow !== 'nofollow',
            index: seo?.metaRobotsNoindex !== 'noindex',
        },
        alternates: {
            canonical: url,
            languages: Object.fromEntries(
                translations
                    ?.filter(isTruthy)
                    .map(
                        ({
                            language: translationLanguage,
                            uri: translationUri,
                        }) => translationLanguage &&
                            translationLanguage.locale &&
                            translationUri &&
                            ([
                                translationLanguage.locale,
                                `${process.env.NEXT_PUBLIC_SITE_URL}${translationUri}`,
                            ] as const),
                    )
                    .filter(isTruthy) ?? [],
            ),
        },
        openGraph: {
            type: 'website',
            locale: language?.locale ?? undefined,
            url,
            title: seo?.opengraphTitle || undefined,
            description: seo?.opengraphDescription || undefined,
            siteName: seo?.opengraphSiteName || undefined,
            images: seo?.opengraphImage?.sourceUrl
                ? [
                      {
                          url: seo.opengraphImage.sourceUrl,
                      },
                  ]
                : undefined,
            alternateLocale:
                translations
                    ?.filter(isTruthy)
                    .map(
                        ({ language: translationLang }) => translationLang?.locale,
                    )
                    ?.filter(isTruthy) ?? [],
        },
    };
};

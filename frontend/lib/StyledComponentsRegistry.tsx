'use client';

import { PropsWithChildren, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { GlobalStyles } from '~/styles/global';

export const StyledComponentsRegistry = ({ children }: PropsWithChildren) => {
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return <>{styles}</>;
    });

    if (typeof window !== 'undefined') {
        return (
            <>
                <GlobalStyles />
                {children}
            </>
        );
    }

    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            {children}
        </StyleSheetManager>
    );
};

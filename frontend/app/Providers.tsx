'use client';

import { PropsWithChildren } from 'react';
import { GlobalStyles } from '~/styles/global';

export const Providers = ({ children }: PropsWithChildren) => (
    <>
        <GlobalStyles />
        {children}
    </>
);

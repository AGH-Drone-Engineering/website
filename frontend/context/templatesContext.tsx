'use client';

import React, { PropsWithChildren, useContext } from 'react';
import { templateMapping } from '~/templates';

const templateMappingContext =
    React.createContext<typeof templateMapping>(templateMapping);

export const TemplateProvider: React.FC<PropsWithChildren> = ({ children }) => (
    <templateMappingContext.Provider value={templateMapping}>
        {children}
    </templateMappingContext.Provider>
);

export const useTemplateMapping = () => useContext(templateMappingContext);

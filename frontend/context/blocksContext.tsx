'use client';

import React, { PropsWithChildren, useContext } from 'react';
import { blockMapping } from '~/blocks';

const blockMappingContext =
    React.createContext<typeof blockMapping>(blockMapping);

export const BlockProvider: React.FC<PropsWithChildren> = ({ children }) => (
    <blockMappingContext.Provider value={blockMapping}>
        {children}
    </blockMappingContext.Provider>
);

export const useBlockMapping = () => useContext(blockMappingContext);

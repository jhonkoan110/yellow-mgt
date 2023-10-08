import React, { createContext, useContext } from 'react';

const MobileContext = createContext(false);

interface MobileContextProviderProps {
    value: boolean;
    children: React.ReactNode;
}

export const MobileContextProvider = React.memo(({ value, children }: MobileContextProviderProps) => {
    return <MobileContext.Provider value={value}>{children}</MobileContext.Provider>;
});

export const useMobileContext = () => {
    const ctx = useContext(MobileContext);

    if (ctx === null) {
        throw new Error('need to use useMobileContext inside MobileContextProvider');
    }

    return ctx;
};

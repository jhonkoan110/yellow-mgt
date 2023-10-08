import React, { useMemo } from 'react';

import { Header } from 'components/header';
import { Divider } from 'components/divider';
import { Footer } from 'components/footer';
import { FlexContainer } from 'components/flex-container';
import { Block } from 'components/block';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from 'pages/main-page';
import { CasesPage } from 'pages/cases-page';
import { CasePage } from 'pages/case-page';
import { Anchors } from 'constants/anchors';
import { AppBackground } from 'components/app-background/app-background';
import { useWindowDimensions } from 'hooks/use-window-dimensions';
import { APP_MOBILE_WIDTH } from 'constants/dimensions';
import { MobileContextProvider } from 'contexts/mobile-context';

import styles from './App.module.scss';

export const App = () => {
    const { width } = useWindowDimensions();

    const isMobile = useMemo(() => width <= APP_MOBILE_WIDTH, [width]);

    return (
        <MobileContextProvider value={isMobile}>
            {useMemo(
                () => (
                    <>
                        <AppBackground />
                        <a id={Anchors.Logo} />
                        <FlexContainer className={styles.root} flexDirection="column" justifyContent="space-between">
                            <Block>
                                <Divider height={1} />
                                <Header />
                                <Divider height={1} />

                                <Routes>
                                    <Route path="/" element={<MainPage />} />
                                    <Route path="/cases" element={<CasesPage />} />
                                    <Route path="/cases/:id" element={<CasePage />} />
                                </Routes>
                            </Block>
                            <Block mt={isMobile ? 114 : 150}>
                                <Divider height={1} />
                                <Footer />
                            </Block>
                        </FlexContainer>
                    </>
                ),
                [isMobile],
            )}
        </MobileContextProvider>
    );
};

export default App;

import React from 'react';
import { Header } from 'components/header';
import { Divider } from 'components/divider';
import { Footer } from 'components/footer';
import { FlexContainer } from 'components/flex-container';
import { Block } from 'components/block';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from 'pages/main-page';
import { CasesPage } from 'pages/cases-page';
import { CasePage } from 'pages/case-page';

import styles from './App.module.scss';

export const App = () => {
    return (
        <FlexContainer className={styles.root} flexDirection="column" justifyContent="space-between">
            <Block>
                <Divider />
                <Header />
                <Divider />

                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/cases" element={<CasesPage />} />
                    <Route path="/cases/:id" element={<CasePage />} />
                </Routes>
            </Block>
            <Block mt={150}>
                <Divider />
                <Footer />
            </Block>
        </FlexContainer>
    );
};

export default App;

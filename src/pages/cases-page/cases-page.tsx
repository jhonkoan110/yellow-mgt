import React from 'react';

import { Container } from 'components/container';
import { FlexContainer } from 'components/flex-container';
import { CasePageItem } from './case-page-item';
import { Breadcrumbs } from 'components/breadcrumbs/breadcrumbs';
import { Outlet } from 'react-router-dom';
import { ALL_CASES_2 } from 'constants/main-data';

import styles from './cases-page.module.scss';

export const CasesPage = () => {
    return (
        <Container mt={50} className={styles.root}>
            <Breadcrumbs />
            <FlexContainer wrap="wrap">
                {ALL_CASES_2.map((caseItem) => (
                    <CasePageItem
                        key={caseItem.id}
                        id={caseItem.id}
                        companyName={caseItem.companyName}
                        title={caseItem.title}
                        description={caseItem.addition}
                        productLogo={caseItem.productLogo}
                    />
                ))}
                {/* {ALL_CASES?.map((caseItem) => (
                    <CasePageItem
                        key={caseItem.link}
                        id={caseItem.id}
                        companyName={caseItem.companyName}
                        title={caseItem.name}
                        description={caseItem.addition}
                    />
                ))} */}
            </FlexContainer>
            <Outlet />
        </Container>
    );
};

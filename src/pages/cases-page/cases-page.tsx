import React from 'react';

import { Container } from 'components/container';
import { FlexContainer } from 'components/flex-container';
import { CasePageItem } from './case-page-item';
import { ALL_CASES } from 'constants/companies';
import { Breadcrumbs } from 'components/breadcrumbs/breadcrumbs';
import { Outlet } from 'react-router-dom';

import styles from './cases-page.module.scss';
import { ALL_CASES_2 } from 'constants/main-data';

export const CasesPage = () => {
    return (
        <Container mt={50} className={styles.root}>
            <Breadcrumbs />
            <FlexContainer wrap="wrap">
                {ALL_CASES_2.map((caseItem) => (
                    <CasePageItem
                        key={caseItem.id}
                        id={caseItem.id}
                        // id={caseItem.title}
                        companyName={caseItem.companyName}
                        title={caseItem.title}
                        description={caseItem.addition}
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

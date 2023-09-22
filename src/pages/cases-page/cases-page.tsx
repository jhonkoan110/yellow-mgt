import React from 'react';

import { Container } from 'components/container';
import { FlexContainer } from 'components/flex-container';
import { CasePageItem } from './case-page-item';

import styles from './cases-page.module.scss';
import { ALL_CASES } from 'constants/companies';
import { Breadcrumbs } from 'components/breadcrumbs/breadcrumbs';
import { Outlet } from 'react-router-dom';

export const CasesPage = () => {
    return (
        <Container mt={50} className={styles.root}>
            <Breadcrumbs />
            <FlexContainer wrap="wrap">
                {ALL_CASES?.map((caseItem) => (
                    <CasePageItem
                        key={caseItem.link}
                        id={caseItem.id}
                        companyName={caseItem.name}
                        title={caseItem.caseLabel}
                        description={caseItem.addition}
                    />
                ))}
            </FlexContainer>
            <Outlet />
        </Container>
    );
};

import React from 'react';

import { Container } from 'components/container';
import { FlexContainer } from 'components/flex-container';
import { CasePageItem } from './case-page-item';

import styles from './cases-page.module.scss';

const cases = [
    {
        id: 1,
        companyName: 'IGG',
        title: 'Lords Mobile',
        description: '360° Campaign Development',
    },
    {
        id: 2,
        companyName: 'IGG',
        title: 'Time Princess',
        description: '360° Campaign Development',
    },
    {
        id: 3,
        companyName: 'IGG',
        title: 'Time Princess. Tik Tok',
        description: '360° Campaign Development',
    },
    {
        id: 4,
        companyName: 'IGG',
        title: 'Time Princess. Cosplay',
        description: '360° Campaign Development',
    },
    {
        id: 5,
        companyName: 'wildlife studios',
        title: 'Zooba & Tennis Clash',
        description: '360° Campaign Development',
    },
    {
        id: 6,
        companyName: 'Match Group',
        title: 'Ablo',
        description: '360° Campaign Development',
    },
];

export const CasesPage = () => {
    return (
        <Container mt={50} className={styles.root}>
            <FlexContainer wrap="wrap">
                {cases.map((caseItem) => (
                    <CasePageItem key={caseItem.id} {...caseItem} />
                ))}
            </FlexContainer>
        </Container>
    );
};

import React from 'react';

import { cases } from './constants/cases';
import { CaseItem } from './case-item/case-item';
import { Button } from 'components/button';
import { Block } from 'components/block';
import { Container } from 'components/container';
import { FlexContainer } from 'components/flex-container';

import styles from './cases.module.scss';

export const Cases = () => {
    return (
        <Block mt={50} className={styles.root}>
            {cases.map((caseItem) => (
                <CaseItem key={caseItem.id} {...caseItem} />
            ))}
            <Container mt={30}>
                <FlexContainer alignItems="center" justifyContent="center">
                    <Button className={styles.seeCasesBtn}>SEE ALL CASES</Button>
                </FlexContainer>
            </Container>
        </Block>
    );
};

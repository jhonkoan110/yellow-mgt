import React from 'react';

import { cases } from './constants/cases';
import { CaseItem } from './case-item/case-item';
import { Button } from 'components/button';
import { Block } from 'components/block';
import { Container } from 'components/container';
import { FlexContainer } from 'components/flex-container';

import styles from './cases.module.scss';
import { NavLink } from 'react-router-dom';
import { MAIN_DATA } from 'constants/main-data';
import { Companies } from 'types/company';
import { ALL_CASES } from 'constants/companies';

export const Cases = () => {
    const [first, second, third] = ALL_CASES!;

    return (
        <Block mt={50} className={styles.root}>
            {/* {Object.keys(MAIN_DATA).map((company) =>
                MAIN_DATA[company as Companies]?.map((c) =>
                    c.cases.map((caseItem) => <CaseItem key={caseItem.title} addition={c.addition} {...caseItem} />),
                ),
            )} */}

            {[first, second, third].map((caseItem) => (
                <CaseItem key={caseItem.link} {...caseItem} />
            ))}
            <Container mt={30}>
                <FlexContainer alignItems="center" justifyContent="center">
                    <NavLink to="/cases">
                        <Button className={styles.seeCasesBtn}>SEE ALL CASES</Button>
                    </NavLink>
                </FlexContainer>
            </Container>
        </Block>
    );
};

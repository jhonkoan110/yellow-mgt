import React from 'react';

import { cases } from './constants/cases';
import { CaseItem } from './case-item/case-item';
import { Button } from 'components/button';
import { Block } from 'components/block';
import { Container } from 'components/container';
import { FlexContainer } from 'components/flex-container';

import styles from './cases.module.scss';
import { NavLink } from 'react-router-dom';
import { ALL_CASES_2, MAIN_DATA } from 'constants/main-data';
import { Companies } from 'types/company';
import { ALL_CASES } from 'constants/companies';
import { useMobileContext } from 'contexts/mobile-context';
import { scrollToTop } from 'utils/scroll-to-top';

const [first, second, third] = ALL_CASES_2[1].cases;

console.log(ALL_CASES_2);

export const Cases = () => {
    const isMobile = useMobileContext();

    return (
        <Block mt={isMobile ? 40 : 50} className={styles.root}>
            {[first, second, third].map((caseItem) => (
                <CaseItem
                    key={caseItem.id}
                    title={caseItem.link}
                    id={caseItem.id}
                    addition={caseItem.link}
                    caseLabel=""
                    imageSrc={caseItem.imageSrc}
                    link=""
                />
            ))}
            <Container mt={isMobile ? 40 : 30}>
                <FlexContainer alignItems="center" justifyContent="center">
                    <NavLink to="/cases" onClick={scrollToTop}>
                        <Button className={styles.seeCasesBtn}>SEE ALL CASES</Button>
                    </NavLink>
                </FlexContainer>
            </Container>
        </Block>
    );
};

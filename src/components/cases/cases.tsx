import React from 'react';

import { CaseItem } from './case-item/case-item';
import { Button } from 'components/button';
import { Block } from 'components/block';
import { Container } from 'components/container';
import { FlexContainer } from 'components/flex-container';
import { NavLink } from 'react-router-dom';
import { ALL_CASES_2, jData } from 'constants/main-data';
import { useMobileContext } from 'contexts/mobile-context';

import { scrollToTop } from 'utils/scroll-to-top';
import styles from './cases.module.scss';

const { 1: case1, 10: case10, 7: case7 } = jData;

const cases = [case1, case10, case7];

export const Cases = () => {
    const isMobile = useMobileContext();

    return (
        <Block mt={isMobile ? 40 : 50} className={styles.root}>
            {cases.map((caseItem) => (
                <CaseItem
                    key={caseItem.id}
                    title={`${caseItem.title}`}
                    addition={caseItem.addition}
                    id={caseItem.id}
                    imageSrc={caseItem.cases[0].imageSrc}
                    caseLabel={caseItem.cases[0].link}
                    productLogo={caseItem.productLogo}
                    link={caseItem.cases[0].link}
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

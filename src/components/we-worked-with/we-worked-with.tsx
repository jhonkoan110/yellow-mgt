import React from 'react';
import { Container } from 'components/container';
import { FlexContainer } from 'components/flex-container';
import igg from '../../images/igg.png';
import masomo from '../../images/masomo.png';
import oasisGames from '../../images/oasis-games.png';
import tencentGames from '../../images/tencent-games.png';
import wildLife from '../../images/wild-life.png';
import nutaku from '../../images/nutaku.png';
import nintendo from '../../images/nintendo.png';

import styles from './we-worked-with.module.scss';
import { Block } from 'components/block';
import { MatchGroup } from 'components/icons/companies/match-group';
import { Nintendo } from 'components/icons/companies/nintendo';

export const WeWorkedWith = () => {
    return (
        <Container className={styles.root} mt={50}>
            <FlexContainer justifyContent="space-between" alignItems="center">
                <img src={igg} alt="i-got-games-logo" className={styles.image} />
                <Block className={styles.image}>
                    <img src={nintendo} alt="i-got-games-logo" className={styles.image} />
                </Block>
                <Block className={styles.image}>
                    <MatchGroup />
                </Block>
                <Block className={styles.image}>
                    <img src={masomo} alt="i-got-games-logo" className={styles.image} />
                </Block>
            </FlexContainer>
            <Block mt={20}>
                <FlexContainer justifyContent="space-between" alignItems="center">
                    <Block className={styles.image}>
                        <img src={oasisGames} alt="i-got-games-logo" className={styles.image} />
                    </Block>
                    <Block className={styles.image}>
                        <img src={tencentGames} alt="i-got-games-logo" className={styles.image} />
                    </Block>
                    <Block className={styles.image}>
                        <img src={wildLife} alt="i-got-games-logo" className={styles.image} />
                    </Block>
                    <Block className={styles.image}>
                        <img src={nutaku} alt="i-got-games-logo" className={styles.image} />
                    </Block>
                </FlexContainer>
            </Block>
            <Block mt={30} className={styles.seeAllBtn}>
                SEE ALL
            </Block>
        </Container>
    );
};

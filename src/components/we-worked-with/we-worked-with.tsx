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
import { useMobileContext } from 'contexts/mobile-context';
import { Link } from 'react-router-dom';

export const WeWorkedWith = () => {
    const isMobile = useMobileContext();

    return (
        <Container className={styles.root} mt={isMobile ? 40 : 50}>
            <FlexContainer
                justifyContent="space-between"
                alignItems="center"
                flexDirection={isMobile ? 'column' : 'row'}
                gap={isMobile ? 15 : 'auto'}>
                <Link to="https://www.igg.com/" target="_blank">
                    <img src={igg} alt="i-got-games-logo" className={styles.image} />
                </Link>
                <Link to="https://www.nintendo.com/us/" target="_blank">
                    <Block className={styles.image}>
                        <img src={nintendo} alt="i-got-games-logo" className={styles.image} />
                    </Block>
                </Link>
                <Link to="https://mtch.com/" target="_blank">
                    <Block className={styles.image}>
                        <MatchGroup />
                    </Block>
                </Link>
                <Link to="https://www.masomo.com/" target="_blank">
                    <Block className={styles.image}>
                        <img src={masomo} alt="i-got-games-logo" className={styles.image} />
                    </Block>
                </Link>
            </FlexContainer>
            <Block mt={20}>
                <FlexContainer
                    justifyContent="space-between"
                    alignItems="center"
                    flexDirection={isMobile ? 'column' : 'row'}
                    gap={isMobile ? 15 : 'auto'}>
                    <Link to="https://oasgames.com/wap/en/home.html" target="_blank">
                        <Block className={styles.image}>
                            <img src={oasisGames} alt="i-got-games-logo" className={styles.image} />
                        </Block>
                    </Link>
                    <Link to="https://www.tencentgames.com/" target="_blank">
                        <Block className={styles.image}>
                            <img src={tencentGames} alt="i-got-games-logo" className={styles.image} />
                        </Block>
                    </Link>
                    <Link to="https://wildlifestudios.com/games/" target="_blank">
                        <Block className={styles.image}>
                            <img src={wildLife} alt="i-got-games-logo" className={styles.image} />
                        </Block>
                    </Link>
                    <Link to="https://www.nutaku.net/" target="_blank">
                        <Block className={styles.image}>
                            <img src={nutaku} alt="i-got-games-logo" className={styles.image} />
                        </Block>
                    </Link>
                </FlexContainer>
            </Block>
            <Block mt={30} className={styles.seeAllBtn}>
                SEE ALL
            </Block>
        </Container>
    );
};

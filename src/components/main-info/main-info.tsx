import React from 'react';

import { Container } from 'components/container';
import { FlexContainer } from 'components/flex-container';
import { ImageIcon } from 'components/icons/image-icon/image-icon';
import { ImageReflectionIcon } from 'components/icons/image-reflection-icon';
import { MattersALotIcon } from 'components/icons/matters-a-lot-icon';
import { TheseDaysIcon } from 'components/icons/these-days-icon';
import { Button } from 'components/button';
import { ArrowIcon } from 'components/icons/arrow-icon';
import { HashLink } from 'react-router-hash-link';

import styles from './main-info.module.scss';

export const MainInfo = () => {
    return (
        <Container mt={90} className={styles.root}>
            <FlexContainer flexDirection="column" gap={14.2}>
                <FlexContainer gap={42}>
                    <ImageIcon />
                    <FlexContainer flexDirection="column" gap={10}>
                        <MattersALotIcon />
                        <TheseDaysIcon />
                    </FlexContainer>
                </FlexContainer>
                <FlexContainer justifyContent="space-between">
                    <ImageReflectionIcon />
                    <FlexContainer className={styles.info} flexDirection="column" gap={70} alignItems="flex-end">
                        <p>
                            We help our clients create and promote their image on social networks, blogs and other
                            online platforms. we provide professional assistance in developing a strategy that will help
                            you become a leader in your industry and reach more of your target audience. We guarantee
                            results and an individual approach to each client.
                        </p>
                        <HashLink to="/#cases">
                            <Button className={styles.casesButton}>
                                <FlexContainer justifyContent="space-between">
                                    CASES <ArrowIcon />
                                </FlexContainer>
                            </Button>
                        </HashLink>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </Container>
    );
};

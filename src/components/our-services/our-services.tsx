import React from 'react';

import { Block } from 'components/block';
import { Container } from 'components/container';
import { Divider } from 'components/divider';
import { DoneIcon } from './done-icon';
import { FlexContainer } from 'components/flex-container';
import { ListItem } from './list-item';
import { services } from './constants/services';
import { useMobileContext } from 'contexts/mobile-context';
import { MobileDoneIcon } from './mobile-done-icon';

import styles from './our-services.module.scss';

export const OurServices = () => {
    const isMobile = useMobileContext();

    return (
        <Container mt={isMobile ? 40 : 50}>
            <section>
                <FlexContainer className={styles.flexContainer} gap={40}>
                    <Block width={isMobile ? 358 : 620}>
                        {services.map((service) => (
                            <ListItem key={service.indexNumber} {...service} />
                        ))}
                    </Block>
                    <Block>{isMobile ? <MobileDoneIcon /> : <DoneIcon />}</Block>
                </FlexContainer>
            </section>
        </Container>
    );
};

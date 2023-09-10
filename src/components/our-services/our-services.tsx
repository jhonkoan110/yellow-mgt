import React from 'react';

import { Block } from 'components/block';
import { Container } from 'components/container';
import { Divider } from 'components/divider';
import { DoneIcon } from './done-icon';
import { FlexContainer } from 'components/flex-container';
import { ListItem } from './list-item';
import { services } from './constants/services';

export const OurServices = () => {
    return (
        <Container mt={50}>
            <section>
                <FlexContainer gap={40}>
                    <Block width={620}>
                        {services.map((service) => (
                            <ListItem key={service.indexNumber} {...service} />
                        ))}
                    </Block>
                    <Block>
                        <DoneIcon />
                    </Block>
                </FlexContainer>
            </section>
        </Container>
    );
};

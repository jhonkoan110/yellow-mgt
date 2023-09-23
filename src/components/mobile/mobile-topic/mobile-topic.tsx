import React from 'react';

import { Container } from 'components/container';
import { Divider } from 'components/divider';
import { FlexContainer } from 'components/flex-container';

import styles from './mobile-topic.module.scss';

interface MobileTopicProps {
    title: string;
    name?: string;
}

export const MobileTopic = ({ title, name }: MobileTopicProps) => {
    return (
        <FlexContainer className={styles.root} alignItems='center'>
            <Divider />
            {name && <a id={name} className={styles.anchor} />}
            <Container className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
            </Container>
            <Divider />
        </FlexContainer>
    );
};
